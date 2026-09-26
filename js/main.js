

document.getElementById('generate').addEventListener('click', findRecipe)

function findRecipe() {
    const API = '52d0f4a60e6f406791580f75a31bd6cc'
    const cuisine = document.querySelector('#cuisine-input').value
    const diet = document.querySelector('#diet-type').value
    const url = `https://api.spoonacular.com/recipes/complexSearch?cuisine=${cuisine}&diet=${diet}&fillIngredients=true&addRecipeInformation=true&addRecipeInstructions=true&apiKey=${API}`

    fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data)

            const returnedArray = data.results
            const random = Math.floor(Math.random() * returnedArray.length)
            
            let cookingMinutes = data.results[random].cookingMinutes
            let prepMinutes = data.results[random].preparationMinutes

            document.querySelector('#image').src = data.results[random].image
            document.querySelector('#recipe-title').innerText = data.results[random].title
            document.querySelector('#cook-time').innerText = cookingMinutes + ' minutes' ?? ''
            document.querySelector('#prep-time').innerText = prepMinutes + ' minutes' ?? ''
            document.querySelector('#servings').innerText = "Makes " + data.results[random].servings + " servings"
            document.querySelector('#instructions').innerHTML = data.results[random].summary
        })
        .catch(error => {
            console.error(error)
            document.querySelector('#recipe-title').innerText = 'Something went wrong'
            document.querySelector('#instructions').innerHTML = '<p>Check your API key and try again.</p>'
        })
}