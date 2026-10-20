# Vegan Dish Generator

A simple web application that fetches recipe ideas based on user input and displays a random recipe suggestion using the Spoonacular API.

---

## Features

- **Recipe Search:** Searches for recipes based on the user's selected cuisine or keyword.
- **Random Selection:** Randomly shuffles matching results and picks one featured recipe to display.
- **Visual Presentation:** Displays the recipe title along with its official thumbnail image.

---

## API Used

- **Spoonacular Recipe API:** `https://api.spoonacular.com/recipes/complexSearch`

---

## How It Works

1. The user selects an option from the menu and clicks the search button.
2. The application sends a query to the Spoonacular `complexSearch` endpoint using the selected value.
3. The returned array of recipes is shuffled at random.
4. One recipe is selected from the list, and its image and title are rendered dynamically inside the `.placeHere` container.

---

<img width="2846" height="1556" alt="image" src="https://github.com/user-attachments/assets/72d8ba32-37ff-433e-893c-71e46377f64a" />
