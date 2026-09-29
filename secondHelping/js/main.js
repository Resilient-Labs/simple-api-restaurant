



const apiUrl = "https://feedam.org/api/resources/search";


const form = document.getElementById("donation-form");
const resultsBox = document.getElementById("results");


const typeLabels = {
	food_bank: "Food Bank",
	food_pantry: "Food Pantry",
	soup_kitchen: "Soup Kitchen",
	mobile_pantry: "Mobile Food Pantry",
	community_fridge: "Community Fridge"
};


form.addEventListener("submit", function (event) {

	event.preventDefault();

	const zip = document.getElementById("zip").value;
	const radius = document.getElementById("radius").value;

	findDonationSites(zip, radius);
});

function findDonationSites(zip, radius) {

	const params = new URLSearchParams({
		zip: zip,
		radius: radius,
		mode: "free",
		limit: 10
	});

	const url = apiUrl + "?" + params;
	fetch(url)

		.then(function (response) {
			return response.json();
		})

		.then(function (data) {
			if (data.success === false || data.error) {
				showError(data.error || "Something went wrong with that search.");
				return;
			}

			showResults(data);
		})

		.catch(function (error) {
			showError("Couldn't reach the Feed America directory. Please try again in a bit.");
			console.error(error);
		});
}


function showError(message) {
	resultsBox.innerHTML = `<p class="error"> ${message}</p>`;
}

function showResults(data) {

	const sites = data.resources;

	if (sites.length === 0) {
		resultsBox.innerHTML = `
			<p class="no-results">
				No donation sites found within. Try a bigger search radius.
			</p>
		`;
		return;
	}

	const siteList = sites.map(function (site) {

		const phone = site.phone || "Phone not listed";
		const typeLabel = typeLabels[site.resource_type] || "Food Resource";

		const websiteLink = site.website
			? `<a href="${site.website}" target="_blank" rel="noopener">Visit website</a>`
			: "";

		return `
			<h2>${site.name}</h2>
			<p class="site-type">${typeLabel} &middot; ${site.distance} mi away</p>
			<p>${site.address}, ${site.city}, ${site.state} ${site.zip}</p>
			<p>${phone}</p>
			${websiteLink}
			<hr>
		`;
	});

	resultsBox.innerHTML = `
		<div class="results-list">
			<p class="results-summary">
				Found ${data.count} of ${data.total_available} donation sites within ${data.search_radius_mi} miles.
			</p>
			${siteList.join("")}
		</div>
	`;
}
