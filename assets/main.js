//We will run a weekly fda food safety report 
/*we will input the following parameters: 
    -search=city:"FOO+BAR" //records where either FOO or BAR appear anywhere in this field.
    -search=report_date:[20040101+TO+20131231]
    -limit=1
*/
/*We will recieve:
    "country": "United States",
    "city": "Pompano Beach",
    "address_1": "2300 NW 19th St",
    "reason_for_recall": "FreshPoint South Florida is recalling sliced fresh yellow
    "recalling_firm": "FreshPoint South Florida",
    "product_type": "Food"
    "classification": "Class I"
    "recall_initiation_date": "20120727"
*/
/*
-If classification I: 'Involves dangerous or defective products that can cause serious health harm or death (e.g., severe bacterial contamination like Salmonella or critical medical device failures'
    -Make text red and include decription (Severe health hazard. Take immediate action. Here are some resources for food safety guidelines:)
-If classification II: Involves products that may cause temporary or medically reversible adverse health effects, or where the risk of serious harm is remote.
    -make text orange and include decription (Mild health hazard. May cause business-related issues. Procedd with caution.)
-If classification III: Involves products that violate regulations but are not likely to cause adverse health consequences (such as minor labeling or manufacturing technicalities).
    -make text yellow and include description (Minor health issue. Likely a labeling issue. Inspect products and double check inventory)
If NO food recalls come back, include text in green (No food recall issues during this time period.)
*/
/*
FOR SEARCH PARAMS
- city will be any city
- date will be concatinated as per search param syntax
- limit restricted to 10
*/
/*
FOR RESULTS
- If recalls ocurred within the last year, show their data:
    -recall initiation date
    -classification
    -recalling_firm
    -Reason for recall
    -city
    -country
    -address 
*/

//DATA WORKS. NOW WHAT DO I WANT TO DO WITH IT?


document.querySelector('button').addEventListener('click', runReport)

function runReport(){

    const city = document.querySelector('#city').value
    const date1 = document.querySelector('#date1').value
    const date2 = document.querySelector('#date2').value
    

    const newDate1= date1.split("-").join("")
    const newDate2= date2.split("-").join("")

    const foodUrl = `https://api.fda.gov/food/enforcement.json?search=report_date:[${newDate1}+TO+${newDate2}]+AND+city:${city}+AND+country:United+States&limit=10`

    fetch (foodUrl)
        .then (res => res.json())
        .then (data=> {
            console.log(data)
            document.querySelector('.resultContainer').style.display = 'block';
            if (data.results[0].classification === 'Class I'){
                document.querySelector('h2').innerText= data.results[0].classification
                document.querySelector('h3').innerText = 'Take IMMEDIATE action. There is a high probability that eating the food will cause serious adverse health consequences or death. (e.g. E.coli or salmonella in food)'
                document.querySelector('.productDescription').innerText = `Product description: ${data.results[0].product_description}`
                document.querySelector('.reasonForRecall').innerText = `Reason for recall: ${data.results[0].reason_for_recall}`
                document.querySelector('.recallDate').innerText = `Recall Initiation Date: ${data.results[0].recall_initiation_date}`
            }else if(data.results.classification === 'Class II'){
                document.querySelector('h2').innerText= data.results[0].classification
                document.querySelector('h3').innerText = 'Action is VOLUNTARY. This classification constitutes a health hazard situation where there is a temporary, non-life-threatening, or medically reversible probability of developing health problems from the food. (e.g undeclared allergens, foreign objects found in food).'
                document.querySelector('.productDescription').innerText = data.results[0].product_description
                document.querySelector('.reasonForRecall').innerText = data.results[0].reason_for_recall
                document.querySelector('.recallDate').innerText = data.results[0].recall_initiation_date 
            }else{
                document.querySelector('h2').innerText= data.results[0].classification
                document.querySelector('h3').innerText = 'Action is VOLUNTARY. This classification constitutes a situation where eating the food will NOT cause adverse health consequences. (e.g minor labeling mistakes, deffective lid seal ).'
                document.querySelector('.productDecription').innerText = `Product description = ${data.results[0].product_description}`
                document.querySelector('.reasonForRecall').innerText = `Reason for recall = ${data.results[0].reason_for_recall}`
                document.querySelector('.recallDate').innerText = `Recall Initiation Date = ${data.results[0].recall_initiation_date}`
            }
        })
        .catch(err => {
                console.log(`error ${err}`)
                document.querySelector('h2').innerText= 'No food recalls found within dates provided. Try an earlier starting date.'
            });
}
