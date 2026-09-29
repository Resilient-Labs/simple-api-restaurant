// Build a simple front-end app that displays data returned from an api that would be beneficial to someone working at or managing a restaurant.
// Goal is to enter food and be given nutrional facts 
// api key: sk_ZOphI7AvFngaJ0p38yPmV0la7ST2p4ew
// api base url:https://api.getdietly.com/search?q
// end point : q=&limit=&source=	
// `https://api.getdietly.com/search?q=${getNutrition}&limit=3`

// 

document.querySelector("button").addEventListener("click", getInfo)

async function getInfo() {
    const api = "sk_ZOphI7AvFngaJ0p38yPmV0la7ST2p4ew"

 const foodInput = document.getElementById("foodInput").value

    const getNutrition = document.querySelector("input").value
    console.log(getNutrition)

  


    console.log(foodInput)
  

        fetch(`https://api.getdietly.com/search?q=${getNutrition}&limit=3`)
        .then(res=> res.json())
        .then(data => {
            console.log(data)
            document.querySelector("#protein").innerText = data[0].protein_g
            document.querySelector("#calories").innerText = data[0].calories_kcal
            document.querySelector("h2").innerText = data[0].name
           document.querySelector("#carbs").innerText = data[0].carbs_g
           document.querySelector("#fat").innerText = data[0].fat_g
        })




}










