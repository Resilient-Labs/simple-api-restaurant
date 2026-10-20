document.querySelector('button').addEventListener('click', getFestivals)




function getFestivals(){
    let country = document.querySelector('#Country').value

    document.querySelector("#list").innerHTML = ""; 
    
    const url = `https://corkandcurve.com/api/v1/festivals?country=${country}&limit=5`

    fetch(url)

        
        .then(res =>res.json())
        .then(data =>{
            console.log(data)
            data.forEach(function(festival){
              document.querySelector('#list').innerHTML += festival.name + '-' + festival.city + "<br>" + festival.description + "<br><br>";  

            //   document.querySelector('#list').textContent = festival.city; 
        
             });
    })


}