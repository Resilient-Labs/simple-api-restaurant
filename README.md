# Wine Festival Finder

A simple frontend web application that helps users discover wine festivals by selecting a country.

## Goal

The goal of this project is to take information from an external API and turn it into a simple, useful tool that a real user could interact with.

The project was created with restaurant managers and wine-focused businesses in mind, making it easier to find wine festivals and events that could potentially provide opportunities for promotions, partnerships, or special events.

<img width="767" height="398" alt="Screenshot 2026-10-08 at 9 10 27 AM" src="https://github.com/user-attachments/assets/4428e86d-d0a4-4b7a-867e-dcea9457e947" />

## Features

- Select a country from a dropdown menu
- Find wine festivals based on the selected country
- Display the festival's location
- Display festival dates
- Display festival descriptions
- Clear previous results when searching for a different country
- View additional festival information through the festival's page

## Technologies Used

- HTML
- CSS
- JavaScript
- REST API
- JSON

## How It Works

The application retrieves wine festival information from an external API.

When a user selects a country and clicks the button:

1. The selected country is retrieved from the dropdown.
2. The application filters the festival data.
3. Previous results are cleared.
4. Festivals matching the selected country are displayed.
5. Each festival displays information such as its name, city, dates, and description.

## Example

A user can select:

France

The application then displays wine festivals located in France.

The user can select another country, such as:

Italy

and press the button again. The previous France results are cleared and the Italian festivals are displayed.

## Project Structure

wine-festival-finder/
│
├── index.html
├── css/
│   ├── normalize.css
│   └── style.css
└── js/
    └── main.js

## API Data

The application uses wine festival data provided by Cork & Curve.

The API provides information such as:

- Festival name
- Country
- City
- Start date
- End date
- Description
- Festival webpage
- Other festival information

## Future Improvements

Some features I would like to add in the future include:

- Filter festivals by month
- Filter festivals by city
- Add festival cards
- Add links to festival websites
- Improve the mobile design
- Add more countries
- Add sorting by festival date
- Highlight festivals that may be useful for restaurant businesses

## What I Learned

Through this project, I practiced:

- Working with APIs
- Working with JSON data
- Using JavaScript to access API information
- Using `forEach()` to loop through data
- Using `.value` with a `<select>` element
- Filtering data based on user input
- Updating HTML using JavaScript
- Using `innerHTML`
- Connecting HTML, CSS, and JavaScript
- Clearing and updating displayed results
