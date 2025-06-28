from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.by import By
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
}               

URL = "https://ssimeonoff.github.io/cards-list"
driver.get(URL)

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
            prefix_image_url = None
            type_image_url = None
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
                
                # Collect production items with prefix, or with no prefix (set prefix to 'none')
                if "production" in classes:
                    # Assign prefix 'none' if none was set previously
                    prefix_to_use = current_prefix if current_prefix else "none"
                    
                    production_type = next((ptype for ptype in classes if ptype in ["money", "heat", "energy", "titanium", "plant", "steel"]), "None")
                    if production_type:
                        type_image_url = RESOURCE_IMAGE_MAP.get(production_type, "")
                        is_special = "red-outline" in classes
                        productions.append({
                            "type": production_type,
                            "prefix": prefix_to_use,                            
                            "type_image_url": type_image_url,
                            "prefix_image_url": prefix_image_url,
                            "special": is_special
                        })
                else:
                    # Reset prefix on unrelated elements (like <br>)
                    if "production-prefix" not in classes and "production" not in classes:
                        current_prefix = None
             # After parsing productions:
            minus_productions = [p for p in productions if p['prefix'] == 'minus']
            plus_productions = [p for p in productions if p['prefix'] == 'plus']
            none_productions = [p for p in productions if p['prefix'] not in ['minus', 'plus']]
            
            background_image = RESOURCE_IMAGE_MAP.get("production-box", "") if productions else ""

            production_data.append({
                'production_box_size': next((cls for cls in resource_called.split() if cls.startswith("production-box-size")), None),
                'production_box_image': background_image,
                'minus_productions': minus_productions,
                'plus_productions': plus_productions,
                'none_productions': none_productions
            })
    except Exception as e:
        print(f"Error extracting production data: {e}")
    return production_data



for card in cards[:48]:  # limit to first 48 cards
    title = safe_find_text(card, "div.title")
    price_data = extract_price_data(driver, card)
    number = safe_find_text(card, "div.number")
    money = safe_find_text(card, "span.money.resource")
    points_resource = extract_points_data(card)  # Extract points data
    descriptions = " ".join([d.text for d in card.find_elements(By.CSS_SELECTOR, "div.description")]) or "N/A"
    tag_data = extract_tag_data(driver, card)
    requirements = extract_requirements_data(card, "requirements")
    production = extract_production_data(card)


    data.append({
        "title": title,        
        "number": number,
        "price": price_data,
        "tags": tag_data,  # Now contains both names and image URLs
        "money": money,
        "descriptions": descriptions,
        "points_resource": points_resource,
        "requirements": requirements,
        "production": production,
        "image": RESOURCE_IMAGE_MAP.get("background-image", "")
    })

driver.quit()

# Save data
with open("cards_data.json", "w", encoding="utf-8") as f:
    json.dump(data, f, indent=4, ensure_ascii=False)

print("Scraped data saved to cards_data.json")