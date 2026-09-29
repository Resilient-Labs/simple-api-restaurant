import { spoonacular_api_key } from "./config.js"

let step_list = document.getElementById('cooking_steps')
// let ingredients = document.querySelector('input').value

document.querySelector('button').addEventListener('click', find_recipes)

function find_recipes() {
    let ingredients = document.querySelector('input').value
    //replace any spaces or commas in the input with a ',+' to satisfy the param format
    let formatted_ingredients = ingredients.replace(/,\s*/g, ",+")
    console.log(formatted_ingredients)

    fetch(`https://api.spoonacular.com/recipes/findByIngredients?ingredients=${formatted_ingredients}&number=5&apiKey=${spoonacular_api_key}`)
        .then(res => res.json())
        .then(recipes => {
            console.log(recipes)
            //get a random recipe from the 5 that generated
            let random_num = Math.floor(Math.random() * 5)
            //find the food id to query for the recipe
            let food_id = recipes[random_num].id 
            // find the food name so it can be displayed
            let food_name = recipes[random_num].title
            console.log(food_name, food_id)
            

            fetch(`https://api.spoonacular.com/recipes/${food_id}/analyzedInstructions?apiKey=${spoonacular_api_key}`)
                .then(res => res.json())
                .then(new_recipe => {
                    console.log(new_recipe)
                    console.log(new_recipe[0].steps)
                    
                    let i = 0
                    //Clear the screen of any previous steps
                    step_list.innerHTML = ''

                    new_recipe[0].steps.forEach(step => {
                        
                        //create a space for the new step
                        let li = document.createElement('li')
                        //move the step into the li
                        li.append(new_recipe[0].steps[i].step)
                        console.log(new_recipe[0].steps[i].step)
                        step_list.appendChild(li)
                        i++
                    });

                })
    })
}