# Boston Fast Food Finder

A web application that searches for fast-food restaurants by name
within 20 kilometers of central Boston using the Geoapify Places API.

<img width="600" height="247" alt="Boston Fast Food API" src="https://github.com/user-attachments/assets/dc0e6d0d-e191-4653-b441-88ecde2f1282" />

## Features

- Searches for fast-food restaurants by name.
- Displays up to five matching locations.
- Shows each restaurant’s name and address.
- Prompts users to enter a name when the input is empty.
- Clears previous results when a search response arrives.

## Built With

- HTML
- CSS
- JavaScript
- Fetch API
- Geoapify Places API

## How to Run

1. Download or clone this repository.
2. Get a Geoapify API key.
3. Replace the apiKey value in JS/restaurant.js with your key.
4. Open index.html in your browser.
5. Enter a restaurant name, such as Burger King.
6. Click the search button to view matching locations.

An internet connection is required. No Node.js server is needed.

## How It Works

JavaScript reads the restaurant name and sends a request to the
Geoapify Places API. The request filters for fast-food locations
within a 20-kilometer radius of central Boston and limits results
to five locations.

The app reads the JSON response and adds each restaurant’s name
and formatted address to the page.

## Project Files

- index.html — search interface and results container
- CSS/restaurant.css — page styling
- JS/restaurant.js — API requests and results display
- README.md — project documentation

## Current Limitations

- Searches are limited to fast-food restaurants near Boston.
- Results depend on the information available through Geoapify.
- No message is displayed when a search returns no results.
- Request errors are logged in the browser console.
- The API key is visible in the browser-side JavaScript.

## What I Practiced

- Fetching data from an API.
- Working with promises and JSON.
- Encoding user input for request URLs.
- Creating and adding HTML elements with JavaScript.
- Validating empty input.

## Author

Sushana Thomas
