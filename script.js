const API_URL = "https://www.themealdb.com/api/json/v1/1";

const searchForm = document.getElementById("search-form");
const searchInput = document.getElementById("search-input");
const randomButton = document.getElementById("random-button");
const messageEl = document.getElementById("message");
const resultsEl = document.getElementById("results");

// ---------- user input ----------
searchForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const searchValue = searchInput.value.trim();
  console.log("Search value:", searchValue);

  if (searchValue === "") {
    showMessage("Please enter a meal name to search for.", true);
    resultsEl.innerHTML = "";
    return;
  }

  const url = `${API_URL}/search.php?s=${encodeURIComponent(searchValue)}`;
  getMeals(url, `No meals found for "${searchValue}". Try something like chicken or pasta.`);
});

randomButton.addEventListener("click", function () {
  getMeals(`${API_URL}/random.php`, "The API didn't send back a random meal. Try again.");
});

// ---------- fetch ----------
// search and random both send back { meals: [...] }, so one function covers both
async function getMeals(url, noResultsText) {
  console.log("Request URL:", url);

  showMessage("Loading...", false);
  resultsEl.innerHTML = "";

  let data;
  try {
    const response = await fetch(url);
    console.log("HTTP status:", response.status);

    if (!response.ok) {
      throw new Error(`API request failed with status ${response.status}`);
    }

    data = await response.json();
    console.log("Response data:", data);
  } catch (error) {
    // ---------- errors ----------
    console.error("Fetch failed:", error);
    showMessage(`Couldn't reach the recipe API: ${error.message}`, true);
    return;
  }

  // ---------- processing the response ----------
  // no matches comes back as { meals: null }, not an empty array
  if (!data || !Array.isArray(data.meals) || data.meals.length === 0) {
    console.log("No meals in response");
    showMessage(noResultsText, false);
    return;
  }

  // kept this separate from the fetch try so a render bug doesn't look like an API problem
  try {
    renderMeals(data.meals);
    showMessage(`Showing ${data.meals.length} meal(s).`, false);
  } catch (error) {
    console.error("Rendering failed:", error, data.meals);
    showMessage(`Got the data but couldn't display it: ${error.message}`, true);
  }
}

// ---------- rendering ----------
function renderMeals(meals) {
  meals.forEach(function (meal) {
    const card = document.createElement("div");
    card.className = "meal";

    const title = document.createElement("h2");
    title.textContent = meal.strMeal;
    card.appendChild(title);

    if (meal.strMealThumb) {
      const img = document.createElement("img");
      img.src = meal.strMealThumb;
      img.alt = meal.strMeal;
      card.appendChild(img);
    }

    addLine(card, "Category", meal.strCategory);
    addLine(card, "Cuisine", meal.strArea);

    const ingredientsHeading = document.createElement("h3");
    ingredientsHeading.textContent = "Ingredients";
    card.appendChild(ingredientsHeading);

    const list = document.createElement("ul");
    getIngredients(meal).forEach(function (item) {
      const li = document.createElement("li");
      li.textContent = item;
      list.appendChild(li);
    });
    card.appendChild(list);

    const instructionsHeading = document.createElement("h3");
    instructionsHeading.textContent = "Instructions";
    card.appendChild(instructionsHeading);

    const instructions = document.createElement("p");
    instructions.className = "instructions";
    instructions.textContent = meal.strInstructions || "No instructions listed.";
    card.appendChild(instructions);

    resultsEl.appendChild(card);
  });
}

// the API doesn't give an ingredients array, it's strIngredient1-20 + strMeasure1-20
// and the unused ones are "" or null, so skip those
function getIngredients(meal) {
  const ingredients = [];
  for (let i = 1; i <= 20; i++) {
    const ingredient = meal[`strIngredient${i}`];
    const measure = meal[`strMeasure${i}`];

    if (ingredient && ingredient.trim() !== "") {
      if (measure && measure.trim() !== "") {
        ingredients.push(`${measure.trim()} ${ingredient.trim()}`);
      } else {
        ingredients.push(ingredient.trim());
      }
    }
  }
  return ingredients;
}

// swaps null/empty for "Not listed" so the page never says null
function addLine(parentDiv, label, value) {
  const line = document.createElement("p");
  const labelEl = document.createElement("strong");
  labelEl.textContent = `${label}: `;
  line.appendChild(labelEl);
  // textContent instead of innerHTML since this text comes from the API
  line.append(value ? value : "Not listed");
  parentDiv.appendChild(line);
}

function showMessage(text, isError) {
  messageEl.textContent = text;
  messageEl.className = isError ? "error" : "";
}
