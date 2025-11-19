from flask import Flask, render_template, jsonify, request
from openai import OpenAI
import json, os, base64
from collections import Counter
from synergy_detector import detect_synergies

app = Flask(__name__)

EXPORT_PROGRESS = {
    "current": 0,
    "total": 1,
    "running": False
}


client = OpenAI(api_key=os.getenv("OPENAI_API_KEY"))

# --- Check if OpenAI API key is loaded ---
api_key = os.getenv("OPENAI_API_KEY")
if api_key:
    print(f"✅ OpenAI API key loaded successfully (starts with: {api_key[:7]}...)")
else:
    print("⚠️  OPENAI_API_KEY not found. Please set it before running the app.")

USE_MOCK_AI = False  # Set to False to use real OpenAI API

def localize(url):
    if not url:
        return url

    filename = url.split("/")[-1]

    # Preserve whether this was a TAG vs RESOURCE icon
    if "/tags/" in url:
        filename = f"round-{filename}"        # e.g. tag-science.png
    elif "/resources/" in url:
        filename = f"square-{filename}"        # e.g. res-science.png
    elif "/megacredits/" in url:
        filename = f"mc-{filename}"         # optional, if you like
    # you can add more folders if needed

    return f"/static/icons/{filename}"


# Load system prompt once at startup
with open("tm_system_prompt.txt", "r", encoding="utf-8") as f:
    TM_SYSTEM_PROMPT = f.read()

# --- Load cards once at startup ---
with open("cards_data.json", "r", encoding="utf-8") as f:
    cards = json.load(f)

    for card in cards:

        card["image"] = localize(card["image"])

        if card.get("price"):
            card["price"]["image_url"] = localize(card["price"]["image_url"])

        for tag in card.get("tags", []):
            tag["image_url"] = localize(tag["image_url"])

        for req in card.get("requirements", []):
            req["requirements_image"] = localize(req["requirements_image"])

        for pbox in card.get("production", []):
            pbox["production_box_image"] = localize(pbox["production_box_image"])

            for group_name in ["grouped_minus", "grouped_plus", "grouped_none"]:
                for prod_list in pbox.get(group_name, {}).values():
                    for prod in prod_list:
                        prod["type_image_url"] = localize(prod.get("type_image_url"))
                        prod["prefix_image_url"] = localize(prod.get("prefix_image_url"))

        for res in card.get("ordered_resources", []):
            res["resource_image_url"] = localize(res.get("resource_image_url"))

        for tile in card.get("tile_data", []):
            tile["tile_image_url"] = localize(tile.get("tile_image_url"))

        for pr in card.get("points_resource", []):
            pr["image_url"] = localize(pr.get("image_url"))


# make sure this directory exists
PNG_OUTPUT_DIR = os.path.join("static", "cards_png")
os.makedirs(PNG_OUTPUT_DIR, exist_ok=True)



def _filter_synergy_groups_by_ids(synergy_groups, allowed_ids):
    """
    Given synergy_groups like:
      { "Earth tag engine": ["CARTEL (#137) + LUNAR EXPORTS (#C21) → ...", ...] }

    and a set of allowed_ids like {"#137", "#C21", "#CORP05", "#P01"},
    return a new dict where each line is kept only if it mentions at least
    TWO distinct allowed IDs.
    """
    allowed_ids = set(allowed_ids)
    filtered = {}

    for group_name, lines in synergy_groups.items():
        kept = []
        for line in lines:
            ids_in_line = []
            start = 0
            while True:
                open_paren = line.find("(", start)
                if open_paren == -1:
                    break
                close_paren = line.find(")", open_paren)
                if close_paren == -1:
                    break
                inside = line[open_paren + 1:close_paren].strip()
                if inside.startswith("#"):
                    ids_in_line.append(inside)
                start = close_paren + 1

            distinct_allowed = {cid for cid in ids_in_line if cid in allowed_ids}
            if len(distinct_allowed) >= 2:
                kept.append(line)

        if kept:
            filtered[group_name] = kept

    return filtered


def _apply_synergy_filter_to_setup(setup, deck):
    """
    Mutates 'setup' in-place:
      - Reads setup["corporation"], setup["preludes"], setup["kept_projects"]
      - Maps those names back to card IDs in 'deck'
      - Filters setup["synergy_report"]["synergy_groups"] accordingly
    """
    if not isinstance(setup, dict):
        return

    synergy = setup.get("synergy_report")
    if not synergy or "synergy_groups" not in synergy:
        return

    allowed_ids = set()

    # 1) Corporation
    corp_name = setup.get("corporation")
    if corp_name:
        for corp in deck.get("corporations", []):
            if corp.get("name") == corp_name:
                allowed_ids.add(corp.get("id"))

    # 2) Preludes
    for prel_name in setup.get("preludes", []) or []:
        for prel in deck.get("preludes", []):
            if prel.get("name") == prel_name:
                allowed_ids.add(prel.get("id"))

    # 3) Kept projects
    for proj_title in setup.get("kept_projects", []) or []:
        for proj in deck.get("projects", []):
            if proj.get("title") == proj_title:
                allowed_ids.add(proj.get("number"))

    if len(allowed_ids) < 2:
        # Not enough info to form a pair; just leave as-is
        return

    original_groups = synergy.get("synergy_groups", {})
    synergy["synergy_groups"] = _filter_synergy_groups_by_ids(original_groups, allowed_ids)


@app.route("/export_png_puppeteer", methods=["POST"])
def export_png_puppeteer():
    data = request.get_json()
    card_id = data.get("card_id")

    if not card_id:
        return {"success": False, "error": "card_id missing"}, 400

    card_id_stripped = card_id.lstrip("#")
    output_filename = f"#{card_id_stripped}.png"
    output_path = os.path.join(PNG_OUTPUT_DIR, output_filename)

    # Run puppeteer_export.js
    import subprocess
    result = subprocess.run(
        ["node", "puppeteer_export.js", card_id_stripped, output_path],
        stdout=subprocess.PIPE,
        stderr=subprocess.PIPE
    )
    
    success = (result.returncode == 0)

    return {
        "success": result.returncode == 0,
        "stdout": result.stdout.decode("utf-8", errors="ignore"),
        "stderr": result.stderr.decode("utf-8", errors="ignore"),
        "path": output_path if result.returncode == 0 else None
    }



@app.route("/render_single_card/<card_id>")
def render_single_card(card_id):
    # Lookup the card
    search = f"#{card_id}"  # add # back
    card = next((c for c in cards if c.get("number") == search), None)


    if not card:
        return "Card not found", 404

    return render_template("single_card_export.html", card=card)


@app.route("/export_all_cards", methods=["POST"])
def export_all_cards():
    import subprocess
    import json
    import os
    global EXPORT_PROGRESS   # ⭐ IMPORTANT

    cards_path = os.path.join(os.path.dirname(__file__), "cards_data.json")

    # Load all cards
    with open(cards_path, "r", encoding="utf-8") as f:
        cards = json.load(f)

    # ⭐ Initialize progress
    EXPORT_PROGRESS["current"] = 0
    EXPORT_PROGRESS["total"] = len(cards)
    EXPORT_PROGRESS["running"] = True

    output_log = []
    success = True

    for card in cards:
        card_id = card["number"].lstrip("#")
        filename = f"#{card_id}.png"
        output_path = os.path.join(PNG_OUTPUT_DIR, filename)

        # Skip existing PNGs
        if os.path.exists(output_path):
            output_log.append(f"{filename}: SKIPPED (already exists)")
            
            # ⭐ Still count progress
            EXPORT_PROGRESS["current"] += 1
            continue

        # Run Puppeteer exporter
        result = subprocess.run(
            ["node", "puppeteer_export.js", card_id, output_path],
            stdout=subprocess.PIPE,
            stderr=subprocess.PIPE
        )

        if result.returncode != 0:
            success = False

        output_log.append(f"{filename}: return_code={result.returncode}")

        # ⭐ Update progress here
        EXPORT_PROGRESS["current"] += 1

    # ⭐ Mark as finished
    EXPORT_PROGRESS["running"] = False

    return {
        "success": success,
        "output": output_log
    }


@app.route("/export_progress")
def export_progress():
    return EXPORT_PROGRESS




@app.route("/card_editor")
def card_editor():
    with open("corporations.json", "r", encoding="utf-8") as f:
        corporations = json.load(f)
    with open("preludes.json", "r", encoding="utf-8") as f:
        preludes = json.load(f)
    return render_template("card_editor.html", cards=cards, corporations=corporations, preludes=preludes, editor_mode=True)

@app.route("/cards_png")
def cards_png():
    return render_template("cards_png.html", cards=cards)


@app.route("/")
def home():
    with open("corporations.json", "r", encoding="utf-8") as f:
        corporations = json.load(f)
    with open("preludes.json", "r", encoding="utf-8") as f:
        preludes = json.load(f)
    return render_template("index.html", cards=cards, corporations=corporations, preludes=preludes, editor_mode=False)

@app.route("/upload_card_png", methods=["POST"])
def upload_card_png():
    try:
        data = request.json
        card_id = data["card_id"]
        image_data = data["image_data"]

        # Remove the "data:image/png;base64," prefix
        header, encoded = image_data.split(",", 1)
        img_bytes = base64.b64decode(encoded)

        # Ensure folder exists
        folder = os.path.join("static", "cards_png")
        os.makedirs(folder, exist_ok=True)

        # Construct path like: static/cards_png/#002.png
        file_path = os.path.join(folder, f"{card_id}.png")

        # Save image
        with open(file_path, "wb") as f:
            f.write(img_bytes)

        return jsonify({"success": True, "path": file_path})

    except Exception as e:
        return jsonify({"success": False, "error": str(e)})

@app.route("/corporations")
def show_corporations():
    with open("corporations.json", "r", encoding="utf-8") as f:
        corporations = json.load(f)
    return render_template("corporations.html", corporations=corporations)


@app.route("/save_deck", methods=["POST"])
def save_deck():
    """Save selected deck and generate a clean, GPT-friendly JSON summary."""
    data = request.get_json(force=True)

    card_ids = data.get("card_ids", [])
    corp_ids = data.get("corp_ids", [])
    prelude_ids = data.get("prelude_ids", [])

    # --- Load data sources ---
    def load_json(path):
        with open(path, "r", encoding="utf-8") as f:
            return json.load(f)

    all_cards = load_json("cards_data.json")
    all_corps = load_json("corporations.json")
    all_preludes = load_json("preludes.json")

    # --- Helpers ---
    def find_card(number):
        return next((c for c in all_cards if c.get("number") == number), None)

    def find_corp(corp_id):
        return next((c for c in all_corps if c.get("id") == corp_id), None)

    def find_prelude(prelude_id):
        return next((p for p in all_preludes if p.get("id") == prelude_id), None)

    def extract_points(points_list):
        """Extract first numeric point value, or None."""
        for p in points_list:
            val = str(p.get("points", "")).strip()
            if val:
                digits = "".join(filter(str.isdigit, val))
                return int(digits) if digits else 0
        return None

    # --- Simplifiers ---
    def simplify_card(card):
        return {
            "number": card.get("number", ""),
            "title": card.get("title", {}).get("title_text", ""),
            "type": card.get("title", {})
                        .get("title_card_type", "")
                        .replace("background-color-", "")
                        .rstrip("s")
                        .capitalize(),
            "cost": int(card.get("price", {}).get("text", 0) or 0),
            "tags": [t.get("name") for t in card.get("tags", []) if t.get("name")],
            "requirements": [
                r.get("requirements")
                for r in card.get("requirements", [])
                if r.get("requirements")
            ],
            "description": " ".join(
                d.get("description", "").strip("()")
                for d in card.get("descriptions", [])
                if d.get("description")
            ).strip(),
            "points": extract_points(card.get("points_resource", []))
        }

    def simplify_corporation(corp):
        return {
            "id": corp.get("id", ""),
            "name": corp.get("name", ""),
            "tags": corp.get("tags", []),
            "effect": corp.get("effect", {}).get("description", ""),
            "starting_money": corp.get("starting_resources", {}).get("money", 0),
            "starting_production": corp.get("starting_resources", {}).get("production", {}),
        }

    def simplify_prelude(prelude):
        return {
            "id": prelude.get("id", ""),
            "name": prelude.get("name", ""),
            "tags": prelude.get("tags", []),
            "effects": prelude.get("effects", {}),
            "description": prelude.get("description", "")
        }

    # --- Match selected IDs ---
    selected_cards = [find_card(cid) for cid in card_ids if find_card(cid)]
    selected_corps = [find_corp(cid) for cid in corp_ids if find_corp(cid)]
    selected_preludes = [find_prelude(pid) for pid in prelude_ids if find_prelude(pid)]

    simplified = {
        "projects": [simplify_card(c) for c in selected_cards],
        "corporations": [simplify_corporation(c) for c in selected_corps],
        "preludes": [simplify_prelude(p) for p in selected_preludes],
    }

    # --- Deck info (for GPT context) ---
    cards = simplified["projects"]
    total_cost = sum(c.get("cost", 0) for c in cards)
    avg_cost = round(total_cost / len(cards), 2) if cards else 0
    total_points = sum(c.get("points") or 0 for c in cards)
    # Combine all tags from projects, preludes, and corporations
    project_tags = [tag for c in simplified["projects"] for tag in c.get("tags", [])]
    prelude_tags = [tag for p in simplified["preludes"] for tag in p.get("tags", [])]
    corp_tags = [tag for c in simplified["corporations"] for tag in c.get("tags", [])]

    all_tags = project_tags + prelude_tags + corp_tags
    tag_distribution = dict(Counter(all_tags))
    dominant_tags = [tag for tag, _ in Counter(all_tags).most_common(3)]


    simplified["deck_info"] = {
        "total_cost": total_cost,
        "avg_cost": avg_cost,
        "total_points": total_points,
        "tag_distribution": tag_distribution,
        "dominant_tags": dominant_tags
    }

    # --- Save JSON ---
    with open("selected_deck.json", "w", encoding="utf-8") as f:
        json.dump(simplified, f, indent=2, ensure_ascii=False)

    return jsonify({
        "message": "Deck saved successfully",
        "cards_count": len(simplified["projects"]),
        "corporations_count": len(simplified["corporations"]),
        "preludes_count": len(simplified["preludes"]),
        "deck_info": simplified["deck_info"]
    }), 200



@app.route("/analyze_deck", methods=["POST"])
def analyze_deck():
    print("💡 GPT analysis requested (mock mode =", USE_MOCK_AI, ")")

    # Load deck
    try:
        with open("selected_deck.json", "r", encoding="utf-8") as f:
            deck = json.load(f)
    except FileNotFoundError:
        return jsonify({"error": "No deck data found."}), 400

    synergy_report = detect_synergies(
        deck.get("projects", []),
        deck.get("corporations", []),
        deck.get("preludes", [])
    )

    if USE_MOCK_AI:
        return jsonify({
            "analysis": {
                "recommended_setup": {
                    "corporation": "TEST_CORP",
                    "preludes": ["P1", "P2"],
                    "kept_projects": ["CARD A", "CARD B"],
                    "synergies": synergy_report,
                    "rating": 7
                },
                "alternatives": []
            }
        }), 200

    payload = {
        "projects": deck.get("projects", []),
        "corporations": deck.get("corporations", []),
        "preludes": deck.get("preludes", []),
        "deck_info": deck.get("deck_info", {}),
        "synergy_report": synergy_report
    }

    # 🚨 IMPORTANT: wrap JSON as text
    user_message = (
        "Analyze the following Terraforming Mars starting hand "
        "and follow ALL system prompt rules exactly.\n\n"
        + json.dumps(payload, ensure_ascii=False)
    )

    try:
        response = client.chat.completions.create(
            model="gpt-4o",
            response_format={"type": "json_object"},
            messages=[
                {"role": "system", "content": TM_SYSTEM_PROMPT},
                {"role": "user", "content": user_message}
            ],
            temperature=0.2,
            max_tokens=1200
        )

        # Debug print
        print("===== RAW GPT RESPONSE =====")
        print(response.choices[0].message.content)
        print("===== END RAW RESPONSE =====")

        # Token logging
        try:
            usage = response.usage
            print("📊 TOKEN USAGE:")
            print("  Prompt tokens:     ", usage.prompt_tokens)
            print("  Completion tokens: ", usage.completion_tokens)
            print("  Total tokens:      ", usage.total_tokens)

            input_cost = usage.prompt_tokens * 0.0000005
            output_cost = usage.completion_tokens * 0.0000015
            print(f"  Estimated cost: ${input_cost + output_cost:.6f}")

        except Exception as log_err:
            print("⚠️ Token usage unavailable:", log_err)

        raw = response.choices[0].message.content
        parsed = json.loads(raw)

        # ============================================
        # 🔥 FILTER SYNERGY GROUPS BASED ON SELECTED CARDS
        # ============================================

        from re import compile

        analysis = parsed["recommended_setup"]
        kept_cards = set(analysis["kept_projects"] +
                         analysis["preludes"] +
                         [analysis["corporation"]])

        original_groups = analysis["synergy_report"]["synergy_groups"]
        filtered_groups = {}

        id_pattern = compile(r"\(#([A-Za-z0-9]+)\)")

        # Build ID → name lookup
        id_to_name = {}
        for proj in deck.get("projects", []):
            id_to_name[str(proj["number"]).lstrip("#")] = proj["title"]

        for corp in deck.get("corporations", []):
            id_to_name[str(corp["id"]).lstrip("#")] = corp["name"]

        for prel in deck.get("preludes", []):
            id_to_name[str(prel["id"]).lstrip("#")] = prel["name"]

        # Check if synergy line involves only kept cards
        def line_mentions_only_kept_cards(line: str) -> bool:
            ids = id_pattern.findall(line)
            if not ids:
                return False
            for cid in ids:
                cname = id_to_name.get(cid)
                if cname is None:
                    return False
                if cname not in kept_cards:
                    return False
            return True

        # Apply filtering
        for group_name, lines in original_groups.items():
            kept_lines = [
                ln for ln in lines if line_mentions_only_kept_cards(ln)
            ]
            if kept_lines:
                filtered_groups[group_name] = kept_lines

        # Replace synergy groups with filtered results
        parsed["recommended_setup"]["synergy_report"]["synergy_groups"] = filtered_groups

        # ============================================
        # END FILTER
        # ============================================

        return jsonify({"analysis": parsed}), 200

    except Exception as e:
        print("❌ GPT error:", e)
        return jsonify({"error": str(e)}), 500



@app.route("/api/cards")
def api_cards():
    return jsonify(cards)



if __name__ == "__main__":
    app.run(debug=True)
