class FoodApi {
  constructor() {
    this.baseUrl = "https://world.openfoodfacts.org/api/v3/product";
  }

  async getProduct(barcode) {
    const fields = [
      "product_name",
      "brands",
      "ingredients_text",
      "allergens_tags",
      "nutrients",
      "image_front_small_url",
    ].join(",");

    const url = `${this.baseUrl}/${barcode}?fields=${fields}`;

    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("Product could not be found.");
    }

    const data = await response.json();
    return data.product;
  }
}

const foodApi = new FoodApi();

const barcodeInput = document.querySelector("#barcodeInput");

const searchButton = document.querySelector("#searchButton");

const productResult = document.querySelector("#productResult");

const message = document.querySelector("#message");

searchButton.addEventListener("click", async () => {
  const barcode = barcodeInput.value.trim();

  if (!barcode) {
    message.textContent = "Please enter a barcode.";

    return;
  }

  message.textContent = "Looking...";

  productResult.innerHTML = "";

  try {
    const product = await foodApi.getProduct(barcode);

    displayProduct(product);

    message.textContent = "";
  } catch (error) {
    message.textContent = error.message;
  }
});

function displayProduct(product) {
  if (!product) {
    message.textContent = "Product not found.";

    return;
  }

  const name = product.product_name || "Unknown Product";

  const brand = product.brands || "Unknown Brand";

  const ingredients = product.ingredients_text || "Ingredients not available";

  const image = product.image_front_small_url || "";

  const allergens = product.allergens_tags || [];

  const calories = product.nutrients?.["energy-kcal_100g"] ?? "N/A";

  const fat = product.nutrients?.fat_100g ?? "N/A";

  const sugar = product.nutrients?.sugars_100g ?? "N/A";

  const protein = product.nutrients?.proteins_100g ?? "N/A";

  productResult.innerHTML = `
    <article class="product-card">
    ${image ? `<img src="${image}" alt="${name}">` : ""}
    
    <h2>${name}</h2>

    <p>
    <strong>Brand:</strong>
    ${brand}
    </p>

      <h3>Ingredients</h3>

    <p>
    ${ingredients}
    </p>
    

     <h3>Allergens</h3>

    <p>
    ${
      allergens.length
        ? allergens.join(", ")
        : "No allergen information available."
    }
    </p>

    <h3>Nutrition per 100g</h3>

    <ul>
    <li>Calories: ${calories} kcal
    </li>

    <li>Fat: ${fat} g
    </li>

    <li>Sugar: ${sugar} g
    </li>

    <li>Protein: ${protein} g
    </li>

    </ul>
    </article>
    `;
}
