console.log('Hello World')
/* Goal is to use the API that sources local food banks so that the restaurant can find a place to donate extra meals/food easily at the end of the day. */
// 
// Will need a place to input the city/location
// Will need a place to show the results - pull all for the relevant query

document.querySelector('button').addEventListener('click', findFoodBank )
 function findFoodBank() {

    let inputInfo = document.querySelector('input').value

    fetch(`https://www.givefood.org.uk/api/2/foodbanks/search/?address=${inputInfo}`)
        .then(res => res.json())
        .then(data => {
        console.log(data)
        data.forEach(food =>{
            console.log(food.name)
        })

    let foodBankList = ""

    data.forEach(food =>{
        // foodBankList += `<p id="foodBanks">${food.name}${food.address}${food.needs.needs}</p>`
    
    const column = document.createElement("tr")
    column.innerHTML=`<td>${food.name}</td><td>${food.address}</td><td>${food.needs.needs}</td>`
    document.querySelector('table').appendChild(column)



    })
    

    })  
}