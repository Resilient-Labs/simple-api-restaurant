const input = document.getElementById("category");
const mealName = document.getElementById("mealName");
const button = document.getElementById("searchButton");

button.onclick = search;

function search() {

    const category = input.value;

    fetch("https://www.themealdb.com/api/json/v1/1/filter.php?c=" + category)

        .then(function(response) {
            return response.json();
        })

        .then(function(data) {

            mealName.innerText = "";

            data.meals.forEach(function(meal) {
                mealName.innerText += meal.strMeal + "\n";
            });

        });
}

search();
