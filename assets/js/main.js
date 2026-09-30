
document.querySelector("button").addEventListener("click", searchMenu)

function searchMenu(){
    const menuItem=document.querySelector(".menu").value.toLowerCase()

    const url=`https://www.themealdb.com/api/json/v1/1/search.php?s=${menuItem}`;

    fetch(url)
    .then(res => res.json())
    .then(data => {
        
        console.log(data)

        const meal=data.meals[0].strMeal
        const category=data.meals[0].strCategory
        const country=data.meals[0].strCountry
        const instructions=data.meals[0].strInstructions
        const image=data.meals[0].strMealThumb
            
        document.querySelector('h2').textContent=meal
        document.querySelector(".category").textContent="Category: "+category
        document.querySelector(".country").textContent="Cuisine: "+country
        document.querySelector(".instructions").textContent="Instructions: "+instructions
        document.querySelector("img").src=image
        
    })
        
    .catch(err => {
        console.log(`error ${err}`)
    })
}
