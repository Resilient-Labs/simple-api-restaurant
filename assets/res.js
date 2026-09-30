
document.querySelector('button').addEventListener('click', foodFact)

function foodFact(){

    const foodInput = document.querySelector('input').value;

    const apiKey = 'sk_6GZjDCGC5IFaaolt4qwDE2XPzavzX0p0';

    fetch(`https://api.getdietly.com/search?q=${foodInput}&limit=5`,
    { headers: { Authorization: `Bearer ${apiKey}` } })
    .then(res => res.json())
    .then(data => {
        console.log(data);

        const foodList = document.querySelector('ul');
        foodList.innerHTML = '';    // Add for list to refresh when new item is entered

        if (data.length === 0){
            list.innerHTML = `<li>No results were found</li>`
        }

        const nutrition = data[0];

        const nutritionFacts = [
            {label: 'Serving Size', value: nutrition.serving_size_g, unit: 'g'}, // USe label instead of name
            {label: 'Calories', value: nutrition.calories_kcal, unit: 'cal'},
            {label: 'Protein', value: nutrition.protein_g, unit: 'g'},
            {label: 'Carbs', value: nutrition.carbs_g, unit: 'g'},
            {label: 'Fiber', value: nutrition.fiber_g, unit: 'g'},
            {label: 'Sugar', value: nutrition.sugar_g, unit: 'g'},
            {label: 'Fat', value: nutrition.fat_g, unit: 'g'},
            {label: 'Saturated Fat', value: nutrition.saturated_fat_g, unit: 'g'},
            {label: 'Cholesterol', value: nutrition.cholesterol_mg, unit: 'mg'},
            {label: 'Sodium', value: nutrition.sodium_mg, unit: 'mg'}
        ]
        
        nutritionFacts.map(nutritionFact => {
            const nutritionList = document.createElement('li')
            nutritionList.innerText = `${nutritionFact.label}: ${nutritionFact.value}${nutritionFact.unit}`
            foodList.appendChild(nutritionList)
        })

    })
    .catch(err => {
        console.log(`error ${err}`)
    })
}

