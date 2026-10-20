let meals = []
let currentMeal = 0

document.getElementById('find').addEventListener('click', getFood)
document.getElementById('switch').addEventListener('click', switchMeal)

function getFood() {
    const calories = document.querySelector('#calInput').value

    fetch(`https://api.spoonacular.com/recipes/findByNutrients?maxCalories=${calories}&number=10`, {
        headers: {
            "x-api-key": "41c529ebb0fb443b9e8b534189a4a2a2"
        }
    })
    .then(response => response.json())
    .then(data => {
        console.log(data)

        meals = data
        currentMeal = 0

        displayMeal()
    })
}

function displayMeal() {
    const meal = meals[currentMeal]

    document.getElementById('title').innerText = meal.title
    document.getElementById('fat').innerText = meal.fat 
    document.getElementById('carb').innerText = meal.carbs 
    document.getElementById('protein').innerText = meal.protein 
    document.getElementById('image').src = meal.image
}

function switchMeal() {
    currentMeal++

    if (currentMeal >= meals.length) {
        currentMeal = 0
    }

    displayMeal()
}