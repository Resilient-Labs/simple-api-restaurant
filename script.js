document.querySelector('button').addEventListener('click', getRecipes)

/*function getRecipes() {

    const url = "https://www.themealdb.com/api/json/v1/"
    let mainIngredient = document.querySelector('input').value
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${mainIngredient}`)
        .then(res => res.json()) // parse response as JSON
        .then(data => {
            console.log(data)
            document.querySelector('h2').innerText = data.meals[0].strMeal
            document.querySelector('img').src = data.meals[0].strMealThumb
            let recipeAndInstructions = data.meals[0].idMeal


        })
        .catch(err => {
            console.log(`error ${err}`)
        });

    function recipeInstructions(idMeal) {

        fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${recipeAndInstructions}`)
            .then(res => res.json()) // parse response as JSON
            .then(data => {
                console.log(data)
                document.querySelector('p').innerText = data.meals[0].idMeal
            })
            .catch(err => {
                console.log(`error ${err}`)
            });



    }*/



function getRecipes() {

    const url = "https://www.themealdb.com/api/json/v1/"
    let nameOfFood = document.querySelector('input').value
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${nameOfFood}&limit=10`)
        .then(res => res.json()) // parse response as JSON
        .then(data => {
 
            console.log(data)
            document.querySelector('.option1 h2').innerText = data.meals[0].strMeal
            document.querySelector('.option2 h2').innerText = data.meals[1].strMeal
            document.querySelector('.option3 h2').innerText = data.meals[2].strMeal
            document.querySelector('.option4 h2').innerText = data.meals[3].strMeal
            document.querySelector('.option5 h2').innerText = data.meals[4].strMeal
            document.querySelector('.option1 img').src = data.meals[0].strMealThumb
            document.querySelector('.option2 img').src = data.meals[1].strMealThumb
            document.querySelector('.option3 img').src = data.meals[2].strMealThumb
            document.querySelector('.option4 img').src = data.meals[3].strMealThumb
            document.querySelector('.option5 img').src = data.meals[4].strMealThumb
            document.querySelector('.option1 p').innerText = data.meals[0].strInstructions
            document.querySelector('.option2 p').innerText = data.meals[1].strInstructions
            document.querySelector('.option3 p').innerText = data.meals[2].strInstructions
            document.querySelector('.option4 p').innerText = data.meals[3].strInstructions
            document.querySelector('.option5 p').innerText = data.meals[4].strInstructions

        })
        .catch(err => {
            console.log(`error ${err}`)
        });
}