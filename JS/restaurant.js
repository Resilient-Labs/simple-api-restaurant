//My Api-Key. 
const apiKey = '93a4aa09f3d5420daf676dae210a70fc'

//Telling JS-file, to find the container where my results will appear. 
const results = document.querySelector('#results');
//Telling my js file, find the container for my searchButton.
const searchButton = document.querySelector('#searchButton');
//Upon a click, run the restaurantFinder function.
searchButton.addEventListener('click', restaurantFinder);

//In this function. Search for fast-foods in Downtown-Boston area.
function restaurantFinder() {

    console.log('This function works!');

    //Read the input element, and remove any spaces from the beginning and end. 
    const restaurantInput = document.querySelector('input').value.trim();

    //If the input is empty, display a message tp stop the function. 
    if (restaurantInput === '') {
        results.innerText = 'Please enter a name here';
        return;
    }

    //The API link with the apiKey (already defined); only provide up to 5 results. 
    // Also return the results with restaurant names that has a space in-bewteen(such as Burger King). 
    const url = `https://api.geoapify.com/v2/places?categories=catering.fast_food&name=${encodeURIComponent(restaurantInput)}&filter=circle:-71.0589,42.3601,20000&limit=5&apiKey=${apiKey}`;

    //Request the information from the API(pr Url).
    fetch(url)
        //Return the information in JSON-format. But convert it into data that JavaScript can use. 
        .then(response => response.json())
        .then(data => {
            console.log(data); //display the information in our console.

            results.innerText = ''; //clear previous results. 

            //Adding a forEach-Loop for my information, and repeat the steps provided for each restaurant results.  
            data.features.forEach(restaurant => {

                //Creating a new heading, and give it a name for the restaurant. 
                const name = document.createElement('h2');
                name.innerText = restaurant.properties.name;

                //Creating a new paragraph and give it a address for the restaurant. 
                const address = document.createElement('p');
                address.innerText = restaurant.properties.formatted;

                //Append(add) the name & address of the restaurant to the results container. 
                results.appendChild(name);
                results.appendChild(address);

            });
        })
        //Display(show) me any errors caught in the console.
        .catch(err => {
            console.log(`error & ${err}`);
        });
}
