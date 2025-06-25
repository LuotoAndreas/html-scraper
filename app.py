from flask import Flask, render_template, jsonify
import json

app = Flask(__name__)

# Load JSON data
with open("cards_data.json", "r", encoding="utf-8") as f:
    cards = json.load(f)

@app.route("/")
def home():
    return render_template("index.html", cards=cards)

@app.route("/api/cards")
def api_cards():
    return jsonify(cards)

if __name__ == "__main__":
    app.run(debug=True)
