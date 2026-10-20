let apiKey ='c51f4083384c4d098a97b38b05ff44a3'
let apiKey2 = '473fea58f4e04a54929a89481391dc8a'
document.querySelector('button').addEventListener('click',findFood)
function findFood(){
  let recipes = document.querySelector('option').value
fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=473fea58f4e04a54929a89481391dc8a&query=${recipes}`)
.then(res=>res.json())
.then(data => {
console.log(data)

let vegan = data.results
let recipeSec = document.querySelector('.placeHere')

vegan.sort(()=> Math.random() - 1)

let foodRandom = vegan[Math.floor(Math.random() * vegan.length)]

let recipeTitle = foodRandom.title
let recipeImage = foodRandom.image
// .map(recipe => {
//   return ` <section id = 'recipeInfo'>
//   <img src='${recipe.image}' alt=''>
//   <p> ${recipe.title} </p>
//   `
// })
// let recipeDisplay = vegan.slice(0,1).map((recipe) =>{
// return ` <section id = 'recipeInfo'>
//   <img src='${recipe.image}' alt=''>
// <p> ${recipe.title} </p> `

// })

console.log(foodRandom)

 
recipeSec.innerHTML = `<img src =${recipeImage} alt=''>
<span>${recipeTitle}</span>`

  




// document.querySelector('#placeHere').innerText=data.results[0].title
// document.querySelector('#img1').src=data.results[0].image
// document.querySelector('#placeHere2').innerText=data.results[1].title
// document.querySelector('#img2').src=data.results[1].image
// document.querySelector('#placeHere3').innerText=data.results[2].title
// document.querySelector('#img3').src=data.results[2].image
})

}