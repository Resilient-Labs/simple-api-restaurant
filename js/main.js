document.querySelector('button').addEventListener('click', lookUp)
function lookUp(){
    
    const cityName = document.querySelector('input').value 
    //const url = `https://api.fda.gov/food/enforcement.json?search=distribution_pattern:%22${cityName}%22&limit=5`
    
    const url = `https://api.fda.gov/food/enforcement.json?search=city:${cityName}&limit=5`
    fetch(url)
        .then ( res => res.json())
        .then ( data => {
            console.log(data.results[0].reason_for_recall)
            console.log(data)  
            document.querySelector('.status').textContent = data.results[0].status
            document.querySelector('.reason_recall').textContent = data.results[0].reason_for_recall
            document.querySelector('.product_description').textContent = data.results[0].product_description
        })
    .catch( err => {
        console.log( `error ${err}`)
    });

}