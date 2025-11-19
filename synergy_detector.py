# synergy_detector.py
"""
Broad mechanical synergy detector for Terraforming Mars.

Goals:
✔ High-signal, broad mechanical synergy detection (tags, production, VP engines, tiles)
✔ No duplicate pairings (A→B only, never B→A)
✔ Scores each synergy by "strength" (project–project > corp–project > prelude–project > corp–prelude)
✔ Per-group trimming: keep only the TOP 5 strongest synergies per group
✔ Friendly labels: NAME (#ID)
✔ Fully JSON-safe output

IMPORTANT:
- This file never infers rules. It only matches against card text/tags/points
  that are present in the simplified JSON produced by save_deck.
"""

from collections import defaultdict
from typing import List, Dict, Any

# ================================
# Normalization helpers
# ================================

def _norm_project(card: Dict[str, Any]) -> Dict[str, Any]:
    return {
        "kind": "project",
        "name": card.get("title", "") or "",
        "id": card.get("number", "") or "",
        "tags": [t.lower() for t in card.get("tags", [])],
        "requirements": [str(r).lower() for r in card.get("requirements", [])],
        "text": (card.get("description") or "").lower(),
        "raw": card,
    }


def _norm_corp(card: Dict[str, Any]) -> Dict[str, Any]:
    effect = card.get("effect", "") or ""
    return {
        "kind": "corp",
        "name": card.get("name", "") or "",
        "id": card.get("id", "") or "",
        "tags": [t.lower() for t in card.get("tags", [])],
        "requirements": [],
        "text": effect.lower(),
        "raw": card,
    }


def _norm_prelude(card: Dict[str, Any]) -> Dict[str, Any]:
    effects = card.get("effects", {}) or {}
    extras = []

    prod = effects.get("production", {}) or {}
    for res, val in prod.items():
        extras.append(f"production {res} {val}")

    res = effects.get("resources", {}) or {}
    for r, val in res.items():
        extras.append(f"gain {val} {r}")

    tiles = effects.get("tile", []) or []
    for t in tiles:
        extras.append(f"place {t} tile")

    extra_text = " ".join(str(x) for x in extras)

    return {
        "kind": "prelude",
        "name": card.get("name", "") or "",
        "id": card.get("id", "") or "",
        "tags": [t.lower() for t in card.get("tags", [])],
        "requirements": [],
        "text": ((card.get("description") or "") + " " + extra_text).lower(),
        "raw": card,
    }


def _card_label(c: Dict[str, Any]) -> str:
    """Format NAME (#ID) consistently."""
    n = c.get("name") or ""
    cid = c.get("id") or ""
    if n and cid:
        return f"{n} ({cid})"
    return n or cid or "Unknown"


# ================================
# Utility – strength scoring & safe synergy adding
# ================================

# We still keep a global build limit so we don't explode in huge decks,
# but each group will be trimmed to TOP_N_PER_GROUP at the end.
GLOBAL_BUILD_LIMIT = 400       # How many raw synergy entries we allow to accumulate
TOP_N_PER_GROUP = 5            # Final number of synergies per group we expose to GPT


def _pair_strength(a: Dict[str, Any], b: Dict[str, Any]) -> int:
    """
    Assign a strength score based on which kinds of cards are interacting.

    Highest → lowest:
      project–project > corp–project > prelude–project > corp–prelude > everything else
    """
    kind_a = a.get("kind")
    kind_b = b.get("kind")

    table = {
        ("project", "project"): 5,
        ("corp", "project"): 4,
        ("project", "corp"): 4,
        ("prelude", "project"): 3,
        ("project", "prelude"): 3,
        ("corp", "prelude"): 2,
        ("prelude", "corp"): 2,
    }
    return table.get((kind_a, kind_b), 1)


def _add_synergy(
    groups: Dict[str, List[Dict[str, Any]]],
    group_name: str,
    text: str,
    global_count: List[int],
    card_a: Dict[str, Any] | None,
    card_b: Dict[str, Any] | None,
) -> None:
    # --- Global cap on raw entries ---
    if global_count[0] >= GLOBAL_BUILD_LIMIT:
        return

    # --- Allow grouped entries that pass None (Titanium grouping) ---
    if card_a is None or card_b is None:
        card_a = {"name": "", "text": "", "kind": "project"}
        card_b = {"name": "", "text": "", "kind": "project"}

    """
    Add synergy safely with:
      - global build cap
      - duplicate avoidance
      - simple false-positive filter (card name embedded in rules text)
      - strength scoring
    We do NOT trim here; trimming happens at the end.
    """

    # --- Prevent false synergies caused by card names inside rule text ---
    a_name = (card_a.get("name") or "").lower()
    b_name = (card_b.get("name") or "").lower()
    text_a = card_a.get("text", "") or ""
    text_b = card_b.get("text", "") or ""

    if a_name and a_name in text_b:
        return
    if b_name and b_name in text_a:
        return

    bucket = groups[group_name]

    # --- Avoid duplicates by text ---
    for entry in bucket:
        if entry["text"] == text:
            return

    # --- Compute strength & tie-break key ---
    strength = _pair_strength(card_a, card_b)
    key = (_card_label(card_a), _card_label(card_b))

    bucket.append(
        {
            "text": text,
            "strength": strength,
            "key": key,
        }
    )
    global_count[0] += 1

# ================================
# Helpers
# ================================

def _has_tag(c: Dict[str, Any], tag: str) -> bool:
    return tag.lower() in c["tags"]


def _text_contains_any(c: Dict[str, Any], needles) -> bool:
    txt = c["text"]
    return any(n in txt for n in needles)


def _text_contains_all(c: Dict[str, Any], needles) -> bool:
    txt = c["text"]
    return all(n in txt for n in needles)


def _req_contains_any(c: Dict[str, Any], needles) -> bool:
    return any(n in r for r in c["requirements"] for n in needles)


def _has_points(c: Dict[str, Any]) -> bool:
    """Detects if a card has any VP icon / printed VP in the simplified JSON."""
    pts = c.get("raw", {}).get("points", None)
    return pts is not None


# ================================
# Main detector
# ================================

def detect_synergies(projects, corporations, preludes):
    norm_projects = [_norm_project(p) for p in projects]
    norm_corps = [_norm_corp(c) for c in corporations]
    norm_preludes = [_norm_prelude(p) for p in preludes]

    all_cards = norm_projects + norm_corps + norm_preludes

    # Internal structure: group_name -> list of {"text", "strength", "key"}
    synergy_groups_raw: Dict[str, List[Dict[str, Any]]] = defaultdict(list)
    global_count = [0]  # mutable counter

    # ================================
    # A→B pairing rule (no duplicates)
    # ================================
    def pairwise(a_list, b_list, group_name, make_text):
        for a in a_list:
            for b in b_list:
                if a is b:
                    continue
                if id(a) < id(b):
                    text = make_text(a, b)

                    # --- FIX: ignore None (invalid pair) ---
                    if text is None:
                        continue

                    _add_synergy(synergy_groups_raw, group_name, text, global_count, a, b)


    # =========================================
    # 1) Temperature requirements & heat engine
    # =========================================
    temp_req = [
        c for c in all_cards
        if _req_contains_any(c, [" c", "°c", "temp", "temperature"]) or "max " in c["text"]
    ]
    temp_up = [
        c for c in all_cards
        if _text_contains_any(c, ["raise temperature", "temperature 1 step", "temperature 2 steps"])
    ]
    heat_prod = [
        c for c in all_cards
        if _text_contains_any(c, ["heat production", "increase your heat production"])
        or _text_contains_all(c, ["production", "heat"])
    ]
    heat_spenders = [
        c for c in all_cards
        if _text_contains_any(c, ["spend", "pay"]) and "heat" in c["text"]
    ]

    pairwise(
        temp_up,
        temp_req,
        "Temperature requirements",
        lambda a, b: f"{_card_label(a)} + {_card_label(b)} → {_card_label(a)} raises temperature, and {_card_label(b)} has a temperature requirement.",
    )

    pairwise(
        heat_prod,
        temp_up + heat_spenders,
        "Heat production & Temperature",
        lambda a, b: f"{_card_label(a)} + {_card_label(b)} → {_card_label(a)} increases heat production, and {_card_label(b)} converts heat into temperature or spends it.",
    )

    # ================================
    # 2) Oxygen requirements & plant/O2 engine
    # ================================
    o2_req = [
        c for c in all_cards
        if _req_contains_any(c, ["% o2", "oxygen"])
        or ("requires" in c["text"] and "oxygen" in c["text"])
    ]
    o2_up = [
        c for c in all_cards
        if _text_contains_any(c, ["raise oxygen", "oxygen 1 step", "oxygen 2 steps"])
    ]

    plant_prod = [
        c for c in all_cards
        if _text_contains_any(c, ["plant production", "increase your plant production"])
        or _text_contains_all(c, ["production", "plant"])
    ]

    pairwise(
        o2_up,
        o2_req,
        "Oxygen requirements",
        lambda a, b: f"{_card_label(a)} + {_card_label(b)} → {_card_label(a)} raises oxygen, and {_card_label(b)} has an oxygen requirement.",
    )

    pairwise(
        plant_prod,
        o2_up,
        "Plant production & Oxygen",
        lambda a, b: f"{_card_label(a)} + {_card_label(b)} → {_card_label(a)} boosts plant production that fuels greenery, and {_card_label(b)} raises oxygen.",
    )

    # ================================
    # 3) Venus requirements & Venus track
    # ================================
    venus_req = [
        c for c in all_cards
        if "requires venus" in c["text"]
        or _req_contains_any(c, ["venus"])
    ]
    venus_up = [
        c for c in all_cards
        if _text_contains_any(c, ["raise venus", "venus 1 step", "venus 2 steps", "increase the venus"])
    ]

    pairwise(
        venus_up,
        venus_req,
        "Venus track",
        lambda a, b: f"{_card_label(a)} + {_card_label(b)} → {_card_label(a)} raises Venus, and {_card_label(b)} has a Venus requirement.",
    )

    # ================================
    # 4) Oceans & ocean-reactive cards
    # ================================
    ocean_place = [
        c for c in all_cards
        if _text_contains_any(
            c,
            [
                "place an ocean",
                "place 1 ocean",
                "place 2 ocean",
                "place 3 ocean",
                "place an ocean tile",
                "place 1 ocean tile",
                "place 2 ocean tiles",
                "place ocean tiles",
            ],
        )
    ]
    ocean_react = [
        c for c in all_cards
        if _text_contains_any(
            c,
            [
                "when anyone places an ocean",
                "when a player places an ocean",
                "for each ocean",
                "for every ocean",
                "per ocean tile",
                "for each ocean tile",
            ],
        )
    ]

    pairwise(
        ocean_place,
        ocean_react,
        "Oceans & ocean-reactive cards",
        lambda a, b: f"{_card_label(a)} + {_card_label(b)} → {_card_label(a)} places oceans, and {_card_label(b)} benefits from oceans being in play or placed.",
    )
    
    # ================================
    # Floater synergy detector
    # ================================

    def _floater_provider_targets(c):
        txt = " ".join(c["text"].split())  # normalize spaces

        if "to a venus card" in txt:
            return ["venus"]
        if "to a jovian card" in txt:
            return ["jovian"]
        if "to this card" in txt:
            return ["self"]
        if "to any card" in txt:
            return ["any"]
        if "to a card" in txt and "floater" in txt:
            return ["any"]

        return None


    def _floater_provider(c):
        txt = c["text"]
        if "floater" not in txt:
            return False

        idx = txt.find("floater")
        window = txt[max(0, idx - 30): idx + 30]
        verbs = ["add", "gain", "place", "put"]
        return any(v in window for v in verbs)


    def _valid_floater_pair(a, b):
        targets = _floater_provider_targets(a)
        if targets is None:
            return True  # no restrictions

        if "any" in targets:
            return True  # can target anything

        # normalize tags to lowercase
        b_tags = [t.lower() for t in b["tags"]]

        # provider must match spender’s tag
        return any(t in b_tags for t in targets)


    floater_providers = [c for c in all_cards if _floater_provider(c)]
    floater_spenders = [
        c for c in all_cards
        if "floater" in c["text"]
        and _text_contains_any(c, ["spend", "pay", "remove"])
    ]

    floater_vp = [
        c for c in all_cards
        if "floater" in c["text"]
        and _text_contains_any(c, ["1 vp per", "vp for each", "vp for every"])
    ]

    floater_removers = [
        c for c in all_cards
        if "remove" in c["text"] and "floater" in c["text"]
    ]

    floater_global = [
        c for c in all_cards
        if "floater" in c["text"]
        and _text_contains_any(
            c,
            [
                "raise venus", "venus 1 step", "venus 2 steps",
                "raise temperature", "temperature 1 step", "temperature 2 steps",
                "increase your tr", "raise your tr", "gain 1 tr",
            ]
        )
    ]

    venus_spenders = [
        c for c in floater_spenders
        if "venus" in c["text"] and "%" in c["text"]
    ]


    # Synergy calls
    pairwise(
        floater_providers,
        floater_spenders,
        "Floater engine",
        lambda a, b: (
            f"{_card_label(a)} provides floaters that {_card_label(b)} requires or spends."
            if _valid_floater_pair(a, b) else None
        )
    )

    pairwise(
        floater_providers,
        floater_vp,
        "Floater scoring",
        lambda a, b: (
            f"{_card_label(a)} provides floaters that {_card_label(b)} converts into VP."
            if _valid_floater_pair(a, b) else None
        )
    )

    venustags = [c for c in all_cards if _has_tag(c, "venus")]
    pairwise(
        venustags,
        floater_providers + floater_spenders,
        "Venus & Floater synergy",
        lambda a, b: f"{_card_label(a)} provides Venus support for floater cards like {_card_label(b)}."
    )

    jovians = [c for c in all_cards if _has_tag(c, "jovian")]
    pairwise(
        jovians,
        floater_providers,
        "Jovian & Floater synergy",
        lambda a, b: f"{_card_label(a)} provides Jovian tags that scale floater production on {_card_label(b)}."
    )

    pairwise(
        floater_providers,
        floater_removers,
        "Floater removal synergy",
        lambda a, b: f"{_card_label(a)} generates floaters that {_card_label(b)} removes for benefits."
    )

    pairwise(
        floater_providers,
        floater_global,
        "Floater → Global parameter",
        lambda a, b: f"{_card_label(a)} generates floaters that {_card_label(b)} spends to raise global parameters."
    )

    pairwise(
        venus_up,
        venus_spenders,
        "Venus % & Floater synergy",
        lambda a, b: f"{_card_label(a)} raises Venus, helping meet {_card_label(b)}'s Venus requirement before it spends floaters."
    )


    # ================================
    # 6) Energy production & energy spenders / converters (FULL UPGRADE)
    # ================================

    # --- Categorize energy production changes ---
    # --- Categorize energy production changes (STRICT, non-fuzzy) ---
    energy_increase = [
        c for c in all_cards
        if "increase your energy production" in c["text"]
    ]

    energy_decrease = [
        c for c in all_cards
        if "decrease your energy production" in c["text"]
    ]

    # Cards that touch/modulate energy production but do not clearly specify + or –
    energy_modify = [
        c for c in all_cards
        if "energy production" in c["text"]
        and c not in energy_increase
        and c not in energy_decrease
    ]

    # --- Cards that spend / convert / use energy ---
    energy_use = [
        c for c in all_cards
        if "energy" in c["text"]
        and _text_contains_any(c, ["spend", "pay", "convert", "use"])
    ]

    # --- Cards that convert energy → heat ---
    energy_to_heat = [
        c for c in all_cards
        if "energy" in c["text"]
        and "heat" in c["text"]
        and _text_contains_any(c, ["convert", "instead", "into"])
    ]

    # --- Helper: wording for energy changes ---
    def _energy_change_phrase(card):
        if card in energy_increase:
            return f"{_card_label(card)} increases energy production"
        if card in energy_decrease:
            return f"{_card_label(card)} decreases energy production"
        if card in energy_modify:
            return f"{_card_label(card)} modifies energy production"
        return f"{_card_label(card)} interacts with energy"

    # Increase energy + spend energy (TRUE synergy)
    pairwise(
        energy_increase,
        energy_use,
        "Energy production & spenders",
        lambda a, b: f"{_card_label(a)} increases energy production, and {_card_label(b)} spends or converts energy.",
    )

    # Increase energy + decrease energy (order-dependent synergy)
    pairwise(
        energy_increase,
        energy_decrease,
        "Energy balancing synergies",
        lambda a, b: f"{_card_label(a)} increases energy production, and {_card_label(b)} decreases it — allowing you to play the -energy card after ramping up.",
    )

    # --- Synergies: energy → heat ---
    pairwise(
        energy_increase,
        energy_to_heat,
        "Energy-to-Heat conversion",
        lambda a, b: f"{_card_label(a)} produces energy that {_card_label(b)} can convert into heat.",
    )

    # ================================
    # 7) Science tag engine
    # ================================
    sci = [c for c in all_cards if _has_tag(c, "science")]
    sci_scalers = [
        c for c in all_cards
        if "science" in c["text"]
        and _text_contains_any(c, ["for each", "for every", "per"])
    ]


    pairwise(
        sci_scalers,
        sci,
        "Science tag engine",
        lambda a, b: f"{_card_label(a)} + {_card_label(b)} → {_card_label(a)} scales with Science tags, and {_card_label(b)} provides a Science tag.",
    )

    # ================================
    # 8) Jovian tag engine
    # ================================
    jovian_cards = [c for c in all_cards if _has_tag(c, "jovian")]
    jovian_scalers = [
        c
        for c in all_cards
        if "jovian tag" in c["text"]
        and _text_contains_any(c, ["for each", "for every", "per", "1 vp per"])
    ]

    pairwise(
        jovian_scalers,
        jovian_cards,
        "Jovian tag engine",
        lambda a, b: f"{_card_label(a)} + {_card_label(b)} → {_card_label(a)} scores or scales from Jovian tags, and {_card_label(b)} provides a Jovian tag.",
    )

    # ================================
    # 9) Earth tag engine
    # ================================
    earth_cards = [c for c in all_cards if _has_tag(c, "earth")]
    earth_scalers = [
        c
        for c in all_cards
        if "earth tag" in c["text"]
        and _text_contains_any(c, ["when you play", "for each", "for every", "per"])
    ]

    pairwise(
        earth_scalers,
        earth_cards,
        "Earth tag engine",
        lambda a, b: f"{_card_label(a)} + {_card_label(b)} → {_card_label(a)} benefits from Earth tags, and {_card_label(b)} provides an Earth tag.",
    )

    # ================================
    # 10) Venus tag engine (tags, not track)
    # ================================
    venus_tag_cards = [c for c in all_cards if _has_tag(c, "venus")]
    venus_tag_scalers = [
        c
        for c in all_cards
        if "venus tag" in c["text"]
        and _text_contains_any(c, ["for each", "for every", "per"])
    ]

    pairwise(
        venus_tag_scalers,
        venus_tag_cards,
        "Venus tag engine",
        lambda a, b: f"{_card_label(a)} + {_card_label(b)} → {_card_label(a)} scales with Venus tags, and {_card_label(b)} provides a Venus tag.",
    )

    # ================================
    # 11) Microbe & Animal engines
    # ================================
    micro_cards = [c for c in all_cards if _has_tag(c, "microbe")]
    animal_cards = [c for c in all_cards if _has_tag(c, "animal")]

    micro_sources = [
        c for c in all_cards if "add" in c["text"] and "microbe" in c["text"]
    ]
    animal_sources = [
        c for c in all_cards if "add" in c["text"] and "animal" in c["text"]
    ]

    micro_scalers = [
        c
        for c in all_cards
        if "microbe" in c["text"]
        and _text_contains_any(c, ["for each", "for every", "per"])
    ]
    animal_scalers = [
        c
        for c in all_cards
        if "animal" in c["text"]
        and _text_contains_any(c, ["for each", "for every", "per"])
    ]

    pairwise(
        micro_sources,
        micro_cards,
        "Microbe engine",
        lambda a, b: f"{_card_label(a)} + {_card_label(b)} → {_card_label(a)} adds Microbes, and {_card_label(b)} stores or uses Microbe resources.",
    )
    pairwise(
        micro_scalers,
        micro_cards,
        "Microbe engine",
        lambda a, b: f"{_card_label(a)} + {_card_label(b)} → {_card_label(a)} scales with Microbes, and {_card_label(b)} holds Microbe resources.",
    )

    pairwise(
        animal_sources,
        animal_cards,
        "Animal engine",
        lambda a, b: f"{_card_label(a)} + {_card_label(b)} → {_card_label(a)} adds Animals, and {_card_label(b)} stores or uses Animal resources.",
    )
    pairwise(
        animal_scalers,
        animal_cards,
        "Animal engine",
        lambda a, b: f"{_card_label(a)} + {_card_label(b)} → {_card_label(a)} scales with Animals, and {_card_label(b)} holds Animal resources.",
    )

    # ================================
    # 12) Titanium & Space engines (grouped)
    # ================================

    def group_titanium_synergies(raw_list):
        """
        Turns many repeated lines like:
            A + B → A provides titanium...
            A + C → A provides titanium...
        Into:
            A provides titanium that pays for Space-tagged cards like B and C.
        """

        grouped = {}

        for entry in raw_list:
            # entry format: "A + B → A provides titanium ..."
            try:
                left_side = entry.split(" → ")[0]
                provider, card = [x.strip() for x in left_side.split(" + ")]
            except:
                continue

            grouped.setdefault(provider, []).append(card)

        combined = []
        for provider, cards in grouped.items():
            if len(cards) == 1:
                combined.append(
                    f"{provider} provides titanium that pays for Space-tagged cards like {cards[0]}."
                )
            else:
                # "A, B, and C"
                if len(cards) == 2:
                    card_text = " and ".join(cards)
                else:
                    card_text = ", ".join(cards[:-1]) + ", and " + cards[-1]

                combined.append(
                    f"{provider} provides titanium that pays for Space-tagged cards like {card_text}."
                )

        return combined


    # --- Detect titanium producers ---
    titanium_src = [
        c
        for c in all_cards
        if _text_contains_any(c, ["titanium production", "increase your titanium production"])
        or ("titanium" in c["text"] and _text_contains_any(c, ["gain", "get"]))
        or _text_contains_all(c, ["production", "titanium"])
    ]

    space_cards = [c for c in all_cards if _has_tag(c, "space")]

    # --- Collect raw synergies instead of adding directly ---
    titanium_raw = []


    def _collect_titanium(a, b):
        titanium_raw.append(
            f"{_card_label(a)} + {_card_label(b)} → {_card_label(a)} provides titanium that pays for Space-tagged cards like {_card_label(b)}."
        )


    # Use pairwise() but collect into titanium_raw
    pairwise(titanium_src, space_cards, None, _collect_titanium)

    # Now compress duplicates
    titanium_grouped = group_titanium_synergies(titanium_raw)

    # Add grouped synergies back into the real synergy output
    for line in titanium_grouped:
        _add_synergy(
            synergy_groups_raw,
            "Titanium & Space cards",
            line,
            global_count,
            None,
            None,            
        )

    # --- PHOBOLOG special synergies (not grouped) ---
    phobos_corps = [
        c for c in norm_corps if "titanium resources are each worth" in c["text"]
    ]

    if phobos_corps:
        p = phobos_corps[0]

        for src in titanium_src:
            _add_synergy(
                synergy_groups_raw,
                "Titanium & Space (PHOBOLOG)",
                f"{_card_label(p)} + {_card_label(src)} → {_card_label(src)} increases titanium, and {_card_label(p)} boosts titanium value.",
                global_count,
                p,
                src,
            )

        for sp in space_cards:
            _add_synergy(
                synergy_groups_raw,
                "Titanium & Space (PHOBOLOG)",
                f"{_card_label(p)} + {_card_label(sp)} → {_card_label(p)} makes titanium pay Space cards like {_card_label(sp)} more efficiently.",
                global_count,
                p,
                sp,
            )

    # ================================
    # 13) Space card discounts (Shuttles / events)
    # ================================
    disc = [
        c
        for c in all_cards
        if _text_contains_any(
            c,
            [
                "when you play a space card",
                "pay 2 mc less for space cards",
                "space cards cost 2 mc less",
                "space cards cost 3 mc less",
                "pay less for space cards",
            ],
        )
    ]
    space_proj = [
        c for c in norm_projects 
        if _has_tag(c, "space") and c["raw"].get("type") != "Event"
    ][:20]


    pairwise(
        disc,
        space_proj,
        "Space card discounts",
        lambda a, b: f"{_card_label(a)} + {_card_label(b)} → {_card_label(a)} discounts Space cards such as {_card_label(b)}.",
    )

    # ================================
    # 14) City tiles & City effects (VP / triggers)
    # ================================
    city_place = [
        c
        for c in all_cards
        if _has_tag(c, "city") and "place" in c["text"]
        or _text_contains_any(
            c,
            [
                "place a city",
                "place a city tile",
                "place 1 city tile",
                "place 2 city tiles",
            ],
        )
    ]
    city_effects = [
        c
        for c in all_cards
        if _text_contains_any(
            c,
            [
                "for each city",
                "for every city",
                "per city",
                "per city tile",
                "for each city tile",
                "when any city tile is placed",
                "when a city tile is placed",
                "when any city is placed",
                "when a city is placed",
            ],
        )
    ]

    pairwise(
        city_place,
        city_effects,
        "City tiles & City effects",
        lambda a, b: f"{_card_label(a)} + {_card_label(b)} → {_card_label(a)} adds city tiles, and {_card_label(b)} gains benefits or VP from city tiles being in play or placed.",
    )

    # ================================
    # 15) VP icon / VP-per-X engines
    # ================================
    vp_cards = [c for c in all_cards if _has_points(c)]

    # Corp that cares about VP icons (e.g., AWARD FUNDERS INC.)
    vp_icon_corps = [c for c in norm_corps if "vp icon" in c["text"]]

    for corp in vp_icon_corps:
        for vpc in vp_cards:
            if corp is vpc:
                continue
            _add_synergy(
                synergy_groups_raw,
                "VP icon economy",
                f"{_card_label(corp)} + {_card_label(vpc)} → {_card_label(corp)} rewards cards with VP icons, such as {_card_label(vpc)}.",
                global_count,
                corp,
                vpc,
            )

    # Generic "1 VP per X" engines
    vp_per_scalers = [
        c
        for c in all_cards
        if _text_contains_any(
            c,
            [
                "1 vp per",
                "2 vp per",
                "vp for each",
                "vp for every",
                "1 vp for every",
                "1 vp for each",
            ],
        )
    ]

    # Link VP-per-X with relevant tags if obvious in text
    # Jovian
    pairwise(
        [c for c in vp_per_scalers if "jovian tag" in c["text"]],
        jovian_cards,
        "VP per Jovian tags",
        lambda a, b: f"{_card_label(a)} + {_card_label(b)} → {_card_label(a)} grants VP per Jovian tag, and {_card_label(b)} provides a Jovian tag.",
    )

    # City
    pairwise(
        [c for c in vp_per_scalers if "city" in c["text"]],
        city_place + city_effects,
        "VP per City tiles",
        lambda a, b: f"{_card_label(a)} + {_card_label(b)} → {_card_label(a)} grants VP based on cities, and {_card_label(b)} provides or interacts with city tiles.",
    )

    # Animals
    pairwise(
        [c for c in vp_per_scalers if "animal" in c["text"]],
        animal_cards + animal_sources,
        "VP per Animals",
        lambda a, b: f"{_card_label(a)} + {_card_label(b)} → {_card_label(a)} grants VP per Animal, and {_card_label(b)} provides or holds Animals.",
    )

    # Microbes
    pairwise(
        [c for c in vp_per_scalers if "microbe" in c["text"]],
        micro_cards + micro_sources,
        "VP per Microbes",
        lambda a, b: f"{_card_label(a)} + {_card_label(b)} → {_card_label(a)} grants VP per Microbe, and {_card_label(b)} provides or holds Microbes.",
    )

    # ================================
    # 16) Generic production boosters
    # ================================
    mc_prod = [
        c
        for c in all_cards
        if _text_contains_any(c, ["increase your mc production", "increase your m€ production"])
        or _text_contains_all(c, ["production", "mc"])
        or _text_contains_all(c, ["production", "money"])
    ]
    high_cost_synergy = [
        c
        for c in all_cards
        if _text_contains_any(
            c,
            ["when you play a card that costs", "when you play a card with cost"],
        )
    ]

    pairwise(
        mc_prod,
        high_cost_synergy,
        "MC production & expensive cards",
        lambda a, b: f"{_card_label(a)} + {_card_label(b)} → {_card_label(a)} boosts MC production, and {_card_label(b)} rewards playing expensive cards.",
    )

    # ================================
    # Final trimming: TOP N per group
    # ================================
    final_groups: Dict[str, List[str]] = {}
    for group_name, entries in synergy_groups_raw.items():
        # sort by: strength DESC, then lexicographically by key (labelA, labelB)
        sorted_entries = sorted(
            entries,
            key=lambda e: (-e["strength"], e["key"]),
        )
        top_entries = sorted_entries[:TOP_N_PER_GROUP]
        final_groups[group_name] = [e["text"] for e in top_entries]

    return {"synergy_groups": final_groups}
