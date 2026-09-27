
//const config={apiKey:`${weather.env.WEATHER_API_KEY}`}

document.getElementById("search").onclick=getRecipe;
document.querySelector('.view-recipe').addEventListener('click',getRecipeInformation(716429))
function getRecipe()
{
    let getIngredient1 = document.getElementById('ingredient1').value
    let getIngredient2 = document.getElementById('ingredient2').value
    console.log(getIngredient1)
   
   
    const url = `https://api.spoonacular.com/recipes/findByIngredients?ingredients=${getIngredient1},${getIngredient2}&apiKey=5dd842cc34c540dd9547f5b5a7fbb493`
    fetch(url)
        .then((res) => res.json()) // parse response as JSON
         //object
        .then((data) => {
            console.log(data)
           
            if(getIngredient1!=='')
            {
                let html='';
                data.forEach(element => {
                    html+=`<section class="card">
                                <img src="${element.image}" alt="recipe image">
                                <h3 id="permite-type">${element.title}</h3>
                                <buttom type="button" name="button" recipe-id=${element.id} class="view-recipe">FOLLOW RECIPE</buttom> 
                            </section>`
            document.querySelector('.container-recipes').innerHTML=html;
                });
               
            
            }else{
                    alert('At least add 1 ingredient')
            }
              
            return data.id;   
    })
    .catch(err => {
        console.log(`error ${err}`)
    });
}

function getRecipeInformation(idRecipe)
{
    const url = `https://api.spoonacular.com/recipes/${idRecipe}/information&apiKey=5dd842cc34c540dd9547f5b5a7fbb493`
    fetch(url)
        .then((res) => res.json()) // parse response as JSON
         //object
        .then((data) => {
            console.log(data)
           
              
            return data.id;   
    })
    .catch(err => {
        console.log(`error ${err}`)
    });

}