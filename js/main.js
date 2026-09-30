// Goal: Build a simple front-end app that displays data returned from an api that would be beneficial to someone working at or managing a restaurant.

document.querySelector('#searchMeals').addEventListener('click', getMeals)

function getMeals(){
    const ingredient = document.querySelector('#ingredient').value

    const url = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`

    fetch(url)
        .then(res => res.json())
        .then(data => {
            console.log(data)

            const results = document.querySelector('#results')

            results.innerText = ''

            if(data.meals === null){
                results.innerText = 'No meal ideas found for that ingredient'
                return
            }

            data.meals.forEach(meal => {
                const mealCard = document.createElement('section')
                mealCard.classList.add('mealCard')

                const image = document.createElement('img')
                image.src = meal.strMealThumb
                image.alt = meal.strMeal 

                const name = document.createElement('h2')
                name.innerText = meal.strMeal

                mealCard.appendChild(name)
                mealCard.appendChild(image)

                results.appendChild(mealCard)
            })
        })
        .catch(err => {
            console.log(`error ${err}`)
        })
}