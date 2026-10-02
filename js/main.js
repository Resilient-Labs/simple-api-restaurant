//Goal: Build a simple front-end app that displays data returned from an api that would be beneficial to someone working at or managing a restaurant.

const url = "https://www.themealdb.com/api/json/v1/1/";
const api = "search.php?s=";


class RestaurantApp {

    constructor() {

        this.searchForm = document.querySelector("#searchForm");
        this.searchInput = document.querySelector("#searchInput");
        this.mealGrid = document.querySelector("#mealGrid");

        this.searchForm.addEventListener("submit", (event) => {

            event.preventDefault();

            this.getMeals();

        });

    }


    getMeals() {

        const search = this.searchInput.value.trim();

        if (search === "") {
            return;
        }

        this.mealGrid.innerHTML = "<p>Loading...</p>";


        fetch(url + api + search)

            .then(response => response.json())

            .then(data => {

                this.displayMeals(data.meals);

            })

            .catch(error => {

                console.log("Error:", error);

                this.mealGrid.innerHTML = `
                    <p>Something went wrong. Please try again.</p>
                `;

            });

    }


    displayMeals(meals) {

        this.mealGrid.innerHTML = "";


        if (!meals) {

            this.mealGrid.innerHTML = `
                <p>No meals found. Try another search.</p>
            `;

            return;

        }


        meals.forEach(meal => {

            const mealCard = document.createElement("article");

            mealCard.classList.add("meal-card");


            mealCard.innerHTML = `

                <div class="meal-image-container">

                    <img
                        class="meal-image"
                        src="${meal.strMealThumb}"
                        alt="${meal.strMeal}"
                    >

                </div>


                <div class="meal-info">

                    <p class="meal-category">
                        ${meal.strCategory}
                    </p>

                    <h3 class="meal-name">
                        ${meal.strMeal}
                    </h3>

                    <p class="meal-area">
                        🌎 ${meal.strArea}
                    </p>

                    <button class="view-button">
                        View Recipe
                    </button>

                </div>

            `;


            mealCard
                .querySelector(".view-button")
                .addEventListener("click", () => {

                    this.showMeal(meal);

                });


            this.mealGrid.appendChild(mealCard);

        });

    }


    showMeal(meal) {

        const modal = document.querySelector("#mealModal");
        const modalContent = document.querySelector("#modalContent");


        let ingredients = "";


        for (let i = 1; i <= 20; i++) {

            const ingredient = meal[`strIngredient${i}`];
            const measurement = meal[`strMeasure${i}`];


            if (ingredient && ingredient.trim() !== "") {

                ingredients += `
                    <li>
                        ${measurement} ${ingredient}
                    </li>
                `;

            }

        }


        modalContent.innerHTML = `

            <div class="modal-top">

                <img
                    class="modal-image"
                    src="${meal.strMealThumb}"
                    alt="${meal.strMeal}"
                >


                <div class="modal-info">

                    <p class="meal-category">
                        ${meal.strCategory}
                    </p>

                    <h2>${meal.strMeal}</h2>

                    <p class="modal-area">
                        🌎 ${meal.strArea}
                    </p>


                    <div class="ingredients">

                        <h3>Ingredients</h3>

                        <ul class="ingredient-list">
                            ${ingredients}
                        </ul>

                    </div>

                </div>

            </div>


            <div class="instructions">

                <h3>Instructions</h3>

                <p>
                    ${meal.strInstructions}
                </p>

            </div>

        `;


        modal.classList.remove("hidden");

        document.body.style.overflow = "hidden";

    }


    closeModal() {

        const modal = document.querySelector("#mealModal");

        modal.classList.add("hidden");

        document.body.style.overflow = "";

    }

}


const app = new RestaurantApp();


document.querySelector("#closeModal").addEventListener("click", () => {

    app.closeModal();

});


document.querySelector(".modal-overlay").addEventListener("click", () => {

    app.closeModal();

});
