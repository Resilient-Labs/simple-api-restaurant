# 🍽️ Restaurant Ingredient Checker
 
A quick lookup tool for restaurant staff. Enter the barcode from a packaged ingredient to see its brand, ingredient list, allergens, and nutrition facts.

> Built a simple front-end app that displays data returned from an API that would be beneficial to someone working at or managing a restaurant.
 
🔗 **Live Demo:** [kareemahb.github.io/api-restaurant](https://kareemahb.github.io/api-restaurant/)
 
![Restaurant Ingredient Checker showing a barcode search and a product card](image.png)
 

 
## ✨ Features
 
- **Barcode search** for packaged ingredients
- **Product card** with:
  - Product photo
  - Name and brand
  - Ingredient list
  - Allergens, so staff can answer guest questions
  - Nutrition per 100 g: calories, fat, sugar, and protein
- **Fallbacks**: missing fields show "Unknown," "Not available," or "N/A" instead of breaking the page
- **Status messages** while searching, and errors for a blank input or an unknown barcode

 
## 🔍 How It Works
 
```
Barcode ──▶ Open Food Facts API ──▶ product JSON ──▶ product card
```
 
1. The `FoodApi` class builds the request to the [Open Food Facts API](https://openfoodfacts.github.io/openfoodfacts-server/api/), asking only for the fields the app needs
2. Clicking **Search** reads the barcode and calls `foodApi.getProduct()`
3. `displayProduct()` builds the product card from the response
Open Food Facts is free and needs no API key.
 
### Barcodes to try
 
Use the number printed under the barcode on a package (UPC or EAN), or browse [world.openfoodfacts.org](https://world.openfoodfacts.org/) to find one. For example, `3017624010701` is Nutella.
 

 
## 🛠️ Tech Stack
 
- HTML5
- CSS3
- JavaScript (ES6 classes, `async`/`await`, Fetch API, template literals)
- [Open Food Facts API](https://openfoodfacts.github.io/openfoodfacts-server/api/)
No frameworks, dependencies, or build tools.
 

 
## 📁 Project Structure
 
```
api-restaurant/
├── index.html   # Header, barcode search, and result area
├── main.css     # Styling
├── main.js      # FoodApi class and product display
└── image.png    # README screenshot
```
 

 
## 🚀 Getting Started
 
Try it live on **[GitHub Pages](https://kareemahb.github.io/api-restaurant/)**, or run it locally:
 
```bash
git clone https://github.com/kareemahb/api-restaurant.git
cd api-restaurant
```
 
Open `index.html` in your browser, or use the **Live Server** extension in VS Code.
 

 
## 💡 What I Learned
 
- Wrapping API calls in a class to keep request logic separate from the page
- Requesting only the fields I need to keep responses small
- Building HTML from API data with template literals
- Handling missing data with fallbacks, optional chaining (`?.`), and nullish coalescing (`??`)

 
## ⚠️ Disclaimer
 
Product data comes from Open Food Facts, a community-edited database, and may be incomplete or out of date. Always check the product label for allergens.
 

 
## 👩‍💻 Created By
 
**Kareemah Bahaadur**
[GitHub](https://github.com/kareemahb)
 
