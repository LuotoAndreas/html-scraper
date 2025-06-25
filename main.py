from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.by import By
import json
import re

# Setup headless Chrome
options = Options()
options.add_argument("--headless")
driver = webdriver.Chrome(options=options)

URL = "https://ssimeonoff.github.io/cards-list"
driver.get(URL)

# Get all card elements
cards = driver.find_elements(By.CSS_SELECTOR, "li.filterDiv")

data = []

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

def safe_find_text(element, selector):
    try:
        return element.find_element(By.CSS_SELECTOR, selector).text
    except:
        return "N/A"

for card in cards[:20]:  # limit to first 10 cards
    title = safe_find_text(card, "div.title")
    price_data = extract_price_data(driver, card)
    number = safe_find_text(card, "div.number")
    money = safe_find_text(card, "span.money.resource")
    points = safe_find_text(card, "div.points.points_big")
    descriptions = " ".join([d.text for d in card.find_elements(By.CSS_SELECTOR, "div.description")]) or "N/A"
    tag_data = extract_tag_data(driver, card)

    # Get card background image
    script = """
    var elem = arguments[0];
    var style = window.getComputedStyle(elem, '::before');
    return style.getPropertyValue('background-image');
    """
    bg_image = driver.execute_script(script, card)
    match = re.search(r'url\(["\']?(.*?)["\']?\)', bg_image)
    image_url = match.group(1) if match else "N/A"

    data.append({
        "title": title,
        "price": price_data,
        "tags": tag_data,  # Now contains both names and image URLs
        "number": number,
        "money": money,
        "descriptions": descriptions,
        "points": points,
        "image": image_url
    })

driver.quit()

# Save data
with open("cards_data.json", "w", encoding="utf-8") as f:
    json.dump(data, f, indent=4, ensure_ascii=False)

print("Scraped data saved to cards_data.json")