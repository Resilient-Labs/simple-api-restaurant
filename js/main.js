// FDA - Food: https://api.fda.gov/food/enforcement.json

const getFDA_API_URL = 'https://api.fda.gov/';

document.querySelector('button').addEventListener('click', getFoodEnforcementReport);

function getFoodEnforcementReport() {

    // const dateFrom = document.querySelector('#dateFrom').value;
    // console.log(dateFrom);
    // const formatDateFrom = dateFrom.replaceAll('-', '');
    // console.log(formatDateFrom);

    // const dateTo = document.querySelector('#dateTo').value;
    // console.log(dateTo);
    // const formatDateTo = dateTo.replaceAll('-', '');
    // console.log(formatDateTo);

    const cityName = document.querySelector('#cityName').value;
    console.log(cityName);
    const formatCityName = cityName.replaceAll(' ', '+');
    console.log(formatCityName);

    const stateName = document.querySelector('#stateName').value;
    console.log(stateName);

    // if (formatDateFrom > formatDateTo) {
    //     return alert('Please have "From" date before "To" date.')
    // }

    if (cityName === '' || stateName === '') {
        return alert('Please enter a city and state.')
    }

    const dateToday = new Date();
    console.log(dateToday);

    let formatDateToday = dateToday.toISOString().split('T')[0];
    console.log(formatDateToday);
    formatDateToday = formatDateToday.replaceAll('-', '');
    console.log(formatDateToday);

    dateToday.setFullYear(dateToday.getFullYear() - 10);
    console.log(dateToday);

    let formatDateBefore = dateToday.toISOString().split('T')[0];
    console.log(formatDateBefore);
    formatDateBefore = formatDateBefore.replaceAll('-', '');
    console.log(formatDateBefore);

    const getFoodEnforcementURL = getFDA_API_URL + `/food/enforcement.json?search=city:${formatCityName}+AND+state:${stateName}+AND+report_date:[${formatDateBefore}+TO+${formatDateToday}]&sort=report_date:desc&limit=5`
    console.log(getFoodEnforcementURL);

    buildFoodEnforcementReports(getFoodEnforcementURL);
}

function buildFoodEnforcementReports(foodEnforcementURL) {

    console.log(foodEnforcementURL);

    fetch(foodEnforcementURL)

        .then(function (response) {
            console.log(response);
            return response.json();
        })

        .then(function (data) {
            console.log(data);

            const reportsFoodEnforcement = data.results;
            console.log(reportsFoodEnforcement);

            document.querySelector('#reportsFoodEnforcement').replaceChildren();

            let reportNumber = 0;
            reportsFoodEnforcement.forEach(function (reportFoodEnforcement) {

                console.log(reportFoodEnforcement);

                reportNumber += 1;

                let sectionFoodEnforcement = document.createElement('section')
                console.log(sectionFoodEnforcement);

                let headingFoodEnforcement = document.createElement('h3');
                console.log(headingFoodEnforcement);
                headingFoodEnforcement.innerText = 'Food Enforcement ' + (reportNumber);
                sectionFoodEnforcement.appendChild(headingFoodEnforcement);

                document.querySelector('#reportsFoodEnforcement').appendChild(sectionFoodEnforcement);

                let keysReport = Object.keys(reportFoodEnforcement);
                console.log(keysReport);

                let valuesReport = Object.values(reportFoodEnforcement);
                console.log(valuesReport);

                for (let i = 0; i < keysReport.length; i++) {

                    let divFoodEnforcement = document.createElement('div');
                    console.log(divFoodEnforcement);

                    console.log(keysReport[i])
                    let nameFoodEnfocement = document.createElement('span');
                    console.log(nameFoodEnfocement);
                    nameFoodEnfocement.innerText = keysReport[i].replaceAll('_', ' ').toUpperCase() + ': ';
                    divFoodEnforcement.appendChild(nameFoodEnfocement);

                    console.log(valuesReport[i])
                    let valueFoodEnforcement = document.createElement('span');
                    console.log(valueFoodEnforcement);
                    valueFoodEnforcement.innerText = valuesReport[i];
                    divFoodEnforcement.appendChild(valueFoodEnforcement);

                    sectionFoodEnforcement.appendChild(divFoodEnforcement);
                }

            })
            return data;
        });
};