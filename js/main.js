



document.querySelector('#btn-pairings').addEventListener('click',getPairings)

function getPairings(){
let key = '1b363db2d4c94e36a4dec41fca5075a3'
let wineName = document.querySelector('#wineName').value
let url = `https://api.spoonacular.com/food/wine/dishes?wine=${wineName}&apiKey=${key}`
fetch(url)
.then(res => res.json())
.then(data =>{
document.querySelector('#description').innerText = data.text
})
}





