// Build a simple front-end app that displays data returned from an api that would be beneficial to someone working at or managing a restaurant.

document.querySelector('#getingredients').addEventListener('click', function() {
    // API call logic here

    const inputVal = document.querySelector('input').value.toLowerCase()
const url = 'https://www.themealdb.com/api/json/v1/1/';

const apl = `list.php?i=list=${inputVal}`;

    // const url = `https://api.spoonacular.com/recipes/complexSearch?query=pizza&apiKey=dc026aada8df483db40c80800882a351=${inputVal}`
    // const url =`https://api.spoonacular.com/food/ingredients/search?query=${inputVal}&apiKey=dc026aada8df483db40c80800882a351`
    console.log(inputVal)

    fetch(url)
    .then(res => res.json())
    .then((data) => {
        console.log(data)
        document.querySelector('h1').textContent = data.name
        document.querySelector('img').src = data.image
        document.querySelector('.welcome').textContent = data.aisle
        document.querySelector('input').textContent = data.description
    });
});