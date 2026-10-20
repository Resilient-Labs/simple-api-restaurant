document.querySelector('button').addEventListener('click', measurements)

function measurements() {
    const inputVal = document.querySelector('input').value

    const url = `https://recipeapi.io/api/v1/recipes/random?lang=en&search=${inputVal}`

    //document.querySelector('h2').innerText
    fetch(url, {
        method: 'GET',
        headers: {
            'X-API-Key': 'sk_live_jsuiPyK03LAMTD0p1jBhYhBoaRX3PDsf3svfcLBQb4ccf980'
        } 
    })
        .then(res => res.json())
        .then((data) => {
            console.log(data)
            document.querySelector('#name').innerHTML = `${data.data.name} `
            document.querySelector('#description').innerHTML = `${data.data.description} `
            document.querySelector('#prep').innerText = `${data.data.prep_time} Prep Time`
            document.querySelector('#serving').innerText = `${data.data.servings} Servings`
            document.querySelector('#calories').innerText = `${data.data.calories_per_serving} Calories`
            document.querySelector('#protein').innerText = `${data.data.protein} Protein`

            // vvvv Had to seperate the first letter[0] to make it capital && slice[1] the string to keep the rest lowercase 
            const cuisine = data.data.cuisine
            document.querySelector('#cuisine').innerText = `${cuisine.charAt(0).toUpperCase() + cuisine.slice(1)} Cuisine`;
            const difficulty = data.data.difficulty
            document.querySelector('#diff').innerText = `${difficulty.charAt(0).toUpperCase()+ difficulty.slice(1)} Difficulty Level`;
            const diet = data.data.dietary_tags
            document.querySelector('#dietary').innerText = `${diet.join(', ').replaceAll("_", " ")}`;

        })
        .catch(err => {
            console.log(`error ${err}`)
        })

}
//`${data.current.temp_f} Fahrenheit`