
//Kroger stuff
// curl -X POST \
//   'https://api.kroger.com/v1/connect/oauth2/token' \
//   -H 'Content-Type: application/x-www-form-urlencoded' \
//   -H 'Authorization: Basic c2ltcGxlcmVzdGF1cmFudGFwcC1iYmNoNHRqazp4ek14YXIzX2pEZENlMUJGaVdBM3RFZ09FU25RMGxjSUpPTGhQM0hQ' \
//   -d 'grant_type=client_credentials'



//const krogerURL = 'https://api.kroger.com/v1/connect/oauth2/token'
// fetch(krogerURL, {
//   method: "POST",
//   headers: {
//     Authorization: `Basic c2ltcGxlcmVzdGF1cmFudGFwcC1iYmNoNHRqazp4ek14YXIzX2pEZENlMUJGaVdBM3RFZ09FU25RMGxjSUpPTGhQM0hQ`,
//     "Content-Type": "application/x-www-form-urlencoded",
//   },
//   body: new URLSearchParams({
//     grant_type: "client_credentials",
//     scope: "product.compact",
//   }),
// })


document.querySelector('button').addEventListener('click', getMealsByIng)

function getMealsByIng() {
    const ingredient = document.querySelector('input').value
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`)
        .then(result => result.json())
        .then(data => {
        console.log(data)
            console.log(data.meals)
             //0-1
           console.log(data.meals.length)
           console.log(Math.floor(data.meals.length*Math.random()))
           const randomI = Math.floor(data.meals.length*Math.random())

           //span, image, div
           document.querySelector('#recipe-name').innerText = data.meals[randomI].strMeal
           document.querySelector('img').src = data.meals[randomI].strMealThumb
           document.querySelector('#country').innerText = data.meals[randomI].strCountry
            // for (const meal of data.meals) {
            //     // console.log(meal)
            //     console.log(meal.strMeal)
            //     const newLi = document.createElement('li')
            //     newLi.innerText = meal.strMeal
            //     document.querySelector('ol').appendChild(newLi)

            // }
        })
        .catch(err => {
            console.log(`Error: ${err}`)
        })
}

// function displayMeals() {
//     //get array of meals
//     const arrMealsByIng = getMealsByIng()
//     for (const meal of arrMealsByIng) {
//         console.log(meal)
//         console.log(meal.strMeal)
//         document.createElement('div').innerText = meal.strMeal

//     }
// arrMealsByIng.map((element) => {
//     console.log(element)
// });

//}

// function displayRecipeFromId() {
// }

// function run() {
//     displayMeals()
// }