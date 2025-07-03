from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.by import By
from collections import defaultdict
from selenium.common.exceptions import NoSuchElementException, ElementClickInterceptedException
import time
import json
import re

# Setup headless Chrome
options = Options()
options.add_argument("--headless")
driver = webdriver.Chrome(options=options)

RESOURCE_IMAGE_MAP = {
    "background-image":         "https://ssimeonoff.github.io/images/mars.png",
    "resource ocean-resource":  "https://ssimeonoff.github.io/images/tiles/ocean.png",
    "resource science":         "https://ssimeonoff.github.io/images/resources/science.png",
    "tag-jovian resource-tag":  "https://ssimeonoff.github.io/images/tags/jovian.png",
    "resource microbe":         "https://ssimeonoff.github.io/images/resources/microbe.png",
    "animal resource":          "https://ssimeonoff.github.io/images/resources/animal.png",
    "resource fighter":         "https://ssimeonoff.github.io/images/resources/fighter.png",
    "requirements":             "https://ssimeonoff.github.io/images/requisites/min_big.png",
    "requirements-max":         "https://ssimeonoff.github.io/images/requisites/max_big.png",
    "production-box":           "https://ssimeonoff.github.io/images/misc/production.png",
    "minus":                    "https://ssimeonoff.github.io/images/misc/minus.png",
    "plus":                     "https://ssimeonoff.github.io/images/misc/plus.png",
    "energy":                   "https://ssimeonoff.github.io/images/resources/power.png",
    "money":                    "https://ssimeonoff.github.io/images/megacredits/megacredit.png",
    "titanium":                 "https://ssimeonoff.github.io/images/resources/titanium.png",
    "plant":                    "https://ssimeonoff.github.io/images/resources/plant.png",
    "heat":                     "https://ssimeonoff.github.io/images/resources/heat.png",
    "steel":                    "https://ssimeonoff.github.io/images/resources/steel.png",
    "temperature-tile":         "https://ssimeonoff.github.io/images/global-parameters/temperature.png",
    "ocean-tile":               "https://ssimeonoff.github.io/images/tiles/ocean.png",
    "city-tile":                "https://ssimeonoff.github.io/images/tiles/city.png",
    "oxygen-tile":              "https://ssimeonoff.github.io/images/global-parameters/oxygen.png",
    "rating":                   "https://ssimeonoff.github.io/images/resources/TR.png",
    "special-tile":             "https://ssimeonoff.github.io/images/tiles/special.png",
    "city-tile-small":          "https://ssimeonoff.github.io/images/tiles/city.png",
    "red-arrow":                "https://ssimeonoff.github.io/images/misc/arrow.png",
    "tag-microbe":              "https://ssimeonoff.github.io/images/tags/microbe.png",
    "science":                  "https://ssimeonoff.github.io/images/resources/science.png",
    "card":                     "https://ssimeonoff.github.io/images/resources/card.png",
    "animal":                   "https://ssimeonoff.github.io/images/resources/animal.png",
    "tag-space":                "https://ssimeonoff.github.io/images/tags/space.png",
    "plant":                    "https://ssimeonoff.github.io/images/resources/plant.png",
    "fighter":                  "https://ssimeonoff.github.io/images/resources/fighter.png",
    "tag-event":                "https://ssimeonoff.github.io/images/tags/event.png",
    "microbe":                  "https://ssimeonoff.github.io/images/resources/microbe.png",
    "tag-plant":                "https://ssimeonoff.github.io/images/tags/plant.png"
    
}               

URL = "https://ssimeonoff.github.io/cards-list"
driver.get(URL)

while True:
    try:
        load_more_button = driver.find_element(By.ID, "button-load-more")
        if load_more_button.is_displayed():
            load_more_button.click()
            time.sleep(2)  # wait for new cards to load
        else:
            break  # button hidden, no more cards to load
    except NoSuchElementException:
        break  # button gone, all cards loaded
    except ElementClickInterceptedException:
        time.sleep(1)  # wait and retry

# Get all card elements
cards = driver.find_elements(By.CSS_SELECTOR, "li.filterDiv")

data = []

# Function to safely find text in an element ("hei")
def safe_find_text(element, selector):
    try:
        return element.find_element(By.CSS_SELECTOR, selector).text
    except:
        return ""

# Function to safely find an attribute in an element (class names)
def safe_find_attribute(element, selector, attribute):
    try:
        return element.find_element(By.CSS_SELECTOR, selector).get_attribute(attribute)
    except:
        return ""

def has_certain_class_inside(inside_this_class):
    try:
        inside_this_class.find_element(By.CSS_SELECTOR, "div.production-box")
        return True
    except:
        return False


def group_productions_by_type(productions):
    grouped = defaultdict(list)
    for prod in productions:
        # Determine key: if type is dict (money), get the nested type, else just type string
        t = prod['type']['type'] if isinstance(prod['type'], dict) else prod['type']
        grouped[t].append(prod)
    return grouped

def merge_if_single_items(grouped_productions):
    # Count distinct types and how many items per type
    types = list(grouped_productions.keys())
    counts = [len(items) for items in grouped_productions.values()]

    # Condition: exactly two different types, and each has exactly one item
    if len(types) == 2 and all(count == 1 for count in counts):
        # Flatten all items into one list (treat as one group)
        merged_list = []
        for items in grouped_productions.values():
            merged_list.extend(items)
        return {"merged": merged_list}  # Use a special key to indicate merging
    else:
        return grouped_productions

    
# Function to extract price text and megacredits image URL
def extract_price_data(driver, card):
    """Extract price text and megacredits image URL"""
    price_data = {
        'text': 'N/A',
        'image_url': None,
        'is_megacredit': False
    }
    
    try:
        price_element = card.find_element(By.CSS_SELECTOR, "div.price")
        price_data['text'] = price_element.text
        
        # Check if this is a megacredit price
        if "megacredits" in price_element.get_attribute("class"):
            price_data['image_url'] = "https://ssimeonoff.github.io/images/megacredits/megacredit.png"
            price_data['is_megacredit'] = True
        
        # Alternative method to check for background image
        script = """
        var elem = arguments[0];
        var style = window.getComputedStyle(elem);
        return style.getPropertyValue('background-image');
        """
        bg_image = driver.execute_script(script, price_element)
        if "megacredit.png" in bg_image:
            price_data['image_url'] = "https://ssimeonoff.github.io/images/megacredits/megacredit.png"
            price_data['is_megacredit'] = True
        
    except Exception as e:
        print(f"Error extracting price data: {e}")
    
    return price_data

# Function to extract tag names and images
def extract_tag_data(driver, card):
    """Extract both tag names and images from a card element"""
    tag_data = []
    tags = card.find_elements(By.CSS_SELECTOR, "div.tag")
    for tag in tags:
        try:
            # Get tag name
            tag_classes = tag.get_attribute("class").split()
            tag_name = next((c.replace("tag-", "") for c in tag_classes if c.startswith("tag-")), "unknown").capitalize()
            
            # Get tag image
            script = """
            var elem = arguments[0];
            var style = window.getComputedStyle(elem);
            return style.getPropertyValue('background-image');
            """
            bg_image = driver.execute_script(script, tag)
            match = re.search(r'url\(["\']?(.*?)["\']?\)', bg_image)
            image_url = match.group(1) if match else None
            
            tag_data.append({
                'name': tag_name,
                'image_url': image_url,
                'class': " ".join(tag_classes)  # Preserve all original classes
            })
        except Exception as e:
            print(f"Error extracting tag data: {e}")
    return tag_data

def extract_points_and_resource_from_children(children):
    # Assumes children length > 1
    first = children[0]
    second = children[1]

    # Get points text from first child
    points_value = first.text.strip() if first.text else ""

    # Get resource name from second child's class attribute
    resource_class = second.get_attribute("class") or ""
    resource_name = " ".join(resource_class.split())

    return points_value, resource_name

def extract_points_data(card):
    point_data = []
    points = card.find_elements(By.CSS_SELECTOR, "div.points")
    for point in points:
        try:            
            # Check if multiple children inside the points div
            children = point.find_elements(By.CSS_SELECTOR, "span, div")

            if len(children) > 1:
                # Use helper to handle multiple children case
                points_value, resource_name = extract_points_and_resource_from_children(children)

            else:                        
                # Get the text value for points
                points_value = point.text.strip() if point.text else ""

                # Find the resource element (either span or div inside the points)
                resource = None
                try:
                    resource = point.find_element(By.CSS_SELECTOR, "span, div")
                except Exception:
                    pass  # No secondary element found

                # Extract resource class if present
                resource_name = ""
                if resource:
                    resource_name = " ".join(resource.get_attribute("class").split())            
            
            image_url = RESOURCE_IMAGE_MAP.get(resource_name, "")
            
            # Append data to the list
            point_data.append({
                'points': points_value,
                'resource': resource_name,
                'image_url': image_url,
            })
        except Exception as e:
            print(f"Error extracting points data: {e}")
    return point_data

def extract_requirements_data(card, resource_name):
    requirements_data = []
    try:
        resource_called = safe_find_attribute(card, "div.requirements", "class")        
        requirements_text = safe_find_text(card, "div.requirements")

        if resource_called and requirements_text: 
            if "requirements-max" in resource_called:  
                requirements_image = RESOURCE_IMAGE_MAP.get("requirements-max", "")     
            else:
                requirements_image = RESOURCE_IMAGE_MAP.get(resource_name, "")   

            requirements_data.append({
                'requirements': requirements_text,
                'resource_name': resource_called,
                'requirements_image': requirements_image,
            })        
    except Exception as e:
        print(f"Error extracting requirements data: {e}")
    return requirements_data


def extract_production_data(card):
    production_data = []
    try:
        content_divs = card.find_elements(By.CSS_SELECTOR, "div.content")
        if not content_divs:
            return production_data

        content_div = content_divs[0]
        resource_called = safe_find_attribute(card, "div.production-box", "class")
        production_boxes = content_div.find_elements(By.CSS_SELECTOR, "div.production-box")

        for production_box in production_boxes:
            children = production_box.find_elements(By.XPATH, "./*")
            current_prefix = None
            prefix_image_url = ""
            productions = []

            for child in children:
                classes = child.get_attribute("class").split()

                # Detect prefix
                if "production-prefix" in classes:
                    if child.find_elements(By.CSS_SELECTOR, "div.minus"):
                        current_prefix = "minus"
                        prefix_image_url = RESOURCE_IMAGE_MAP.get("minus", "")
                    elif child.find_elements(By.CSS_SELECTOR, "div.plus"):
                        current_prefix = "plus"
                        prefix_image_url = RESOURCE_IMAGE_MAP.get("plus", "")
                    else:
                        current_prefix = None
                    continue

                # Handle standard production resource
                if "production" in classes:
                    prefix_to_use = current_prefix if current_prefix else "none"

                    production_type = next(
                        (ptype for ptype in classes if ptype in [
                            "money", "heat", "energy", "titanium", "plant", "steel"
                        ]),
                        None
                    )

                    if production_type:
                        if production_type == "money":
                            money_amount = safe_find_text(card, "div.money")
                            type_value = {
                                "type": "money",
                                "money_amount": money_amount
                            }
                        else:
                            type_value = production_type

                        type_image_url = RESOURCE_IMAGE_MAP.get(production_type, "")
                        is_special = "red-outline" in classes

                        productions.append({
                            "type": type_value,
                            "prefix": prefix_to_use,
                            "type_image_url": type_image_url,
                            "prefix_image_url": prefix_image_url,
                            "special": is_special
                        })

                # Handle special tag-based production like <div class="tag-plant resource-tag"></div>
                elif "tag-plant" in classes:
                    prefix_to_use = current_prefix if current_prefix else "none"
                    type_image_url = RESOURCE_IMAGE_MAP.get("tag-plant", "")
                    is_special = "red-outline" in classes

                    productions.append({
                        "type": "tag-plant",
                        "prefix": prefix_to_use,
                        "type_image_url": type_image_url,
                        "prefix_image_url": prefix_image_url,
                        "special": is_special
                    })

                # Reset prefix for unrelated elements like <br>
                elif "production-prefix" not in classes:
                    current_prefix = None

            # After parsing productions:
            minus_productions = [p for p in productions if p['prefix'] == 'minus']
            plus_productions = [p for p in productions if p['prefix'] == 'plus']
            none_productions = [p for p in productions if p['prefix'] not in ['minus', 'plus']]

            # Group each list
            grouped_minus = merge_if_single_items(group_productions_by_type(minus_productions))
            grouped_plus = merge_if_single_items(group_productions_by_type(plus_productions))
            grouped_none = merge_if_single_items(group_productions_by_type(none_productions))

            background_image = RESOURCE_IMAGE_MAP.get("production-box", "") if productions else ""

            production_data.append({
                'production_box_size': next((cls for cls in resource_called.split() if cls.startswith("production-box-size")), "default-box"),
                'production_box_image': background_image,
                'grouped_minus': grouped_minus,
                'grouped_plus': grouped_plus,
                'grouped_none': grouped_none
            })

    except Exception as e:
        print(f"Error extracting production data: {e}")

    return production_data


def extract_tile_data(card):
    tile_data = []
    try: 
        content_divs = card.find_elements(By.CSS_SELECTOR, "div.content")
        if not content_divs:
            return tile_data
        
        content_div = content_divs[0]
        tiles = content_div.find_elements(By.CSS_SELECTOR, "div.tile")
        for tile in tiles:

            tile_class = tile.get_attribute("class")
            tile_parts = tile_class.split()

            special = ""
            if "red-outline" in tile_parts:
                special = "red-outline"
                tile_parts.remove("red-outline")

            tile_name = " ".join(part for part in tile_parts if part != "tile").strip()

            background_image = RESOURCE_IMAGE_MAP.get(tile_name, "")

            tile_data.append({
                'tile_name': tile_name,
                'tile_image_url': background_image,
                'special': special
            })

           
    except Exception as e:
        print(f"Error extracting tile data: {e}")
    return tile_data


def extract_title_data(card):
    title_data = []
    try: 
        title_text = safe_find_text(card, "div.title")
        title_classes = safe_find_attribute(card, "div.title", "class")

        title_parts = title_classes.replace("title", "").strip()

        title_data = ({
            'title_text': title_text,
            'title_card_type': title_parts 
        })
    except Exception as e:
        print(f"Error extracting title data: {e}")
    return title_data


def clean_class_name(class_attribute):
    # Split class string and remove "resource" and "resource-tag"
    classes = class_attribute.split()
    filtered_classes = [c for c in classes if c not in ("resource", "resource-tag")]
    return " ".join(filtered_classes)

def extract_filtered_content_with_class(card_content):
    result = []
    ignored_classes = {"points", "requirements", "description", "production-box", "tile"}

    def has_ignored_parent(element):
        parent = element.find_element(By.XPATH, "..")
        while parent:
            parent_classes = (parent.get_attribute("class") or "").split()
            if set(parent_classes) & ignored_classes:
                return True
            if parent.tag_name == 'html':  # reached top, stop
                break
            parent = parent.find_element(By.XPATH, "..")
        return False

    try:
        content_div = card_content.find_element(By.CLASS_NAME, "content")
        children = content_div.find_elements(By.XPATH, ".//*")

        for child in children:
            if child.tag_name.lower() == "br":
                continue
            
            # Skip if element or any parent has ignored class
            class_attribute = child.get_attribute("class") or ""
            class_list = set(class_attribute.split())
            if class_list & ignored_classes or has_ignored_parent(child):
                continue

            text = child.text.strip() if hasattr(child, "text") else ""

            # Check if element has child elements
            if child.find_elements(By.XPATH, "./*"):
                text = ""

            # Process class list
            special_classes = {"red-outline"}  # Add more special classes here if needed
            clean_classes = set(class_list) - special_classes
            special_class = (class_list & special_classes).pop() if class_list & special_classes else ""


            # Clean class string by removing "resource" and "resource-tag"
            clean_class = clean_class_name(" ".join(clean_classes))

            # Append elements based on class or text
            if class_list or text:
                result.append({
                    "class": clean_class,
                    "text": text,
                    "special": special_class,
                    "resource_image_url": RESOURCE_IMAGE_MAP.get(clean_class, "")
                })

    except Exception as e:
        print(f"Error extracting filtered content: {e}")

    return result


def extract_description_data(card):
    description_data = []
    try:
        for d in card.find_elements(By.CSS_SELECTOR, "div.description"):
            raw_text = d.text.strip()

            # Find all "(...)" blocks using regex
            parts = re.findall(r'\([^)]+\)', raw_text)            

            if parts:
                for part in parts:
                    # Split each parentheses block by newline and add separately
                    lines = part.split('\n')
                    for line in lines:
                        line = line.strip()
                        if line:
                            description_data.append({"description": line})
            else:
                # No parentheses, split whole text by newline
                lines = raw_text.split('\n')
                for line in lines:
                    line = line.strip()
                    if line:
                        description_data.append({"description": line})

    except Exception as e:
        print(f"Error extracting description data: {e}")

    return description_data




for card in cards[:261]:  # limit to first 48 cards
    title = extract_title_data(card)
    price_data = extract_price_data(driver, card)
    number = safe_find_text(card, "div.number")
    money = safe_find_text(card, "span.money.resource")
    points_resource = extract_points_data(card)  # Extract points data
    description_data = extract_description_data(card)
    tag_data = extract_tag_data(driver, card)
    requirements = extract_requirements_data(card, "requirements")
    production = extract_production_data(card)
    tile_data = extract_tile_data(card)
    ordered_resources = extract_filtered_content_with_class(card)


    data.append({
        "title": title,        
        "number": number,
        "price": price_data,
        "tags": tag_data,  # Now contains both names and image URLs
        "money": money,
        "descriptions": description_data,
        "points_resource": points_resource,
        "requirements": requirements,
        "production": production,
        "tile_data": tile_data,
        "ordered_resources": ordered_resources,
        "image": RESOURCE_IMAGE_MAP.get("background-image", "")
    })

driver.quit()

# Save data
with open("cards_data.json", "w", encoding="utf-8") as f:
    json.dump(data, f, indent=4, ensure_ascii=False)

print("Scraped data saved to cards_data.json")