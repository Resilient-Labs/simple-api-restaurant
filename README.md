# FDA Food Enforcement Search

A simple JavaScript project that searches FDA food enforcement reports by city and state.

## About

This project allows a user to enter a city and state and retrieve recent food enforcement reports from the FDA API.

The project automatically creates a date range covering the previous ten years and requests up to five recent enforcement records.

The returned information is processed and displayed dynamically on the page.

## Features

- Enter a city and state
- Create a ten-year search range automatically
- Search FDA food enforcement records
- Sort results by report date
- Return up to five reports
- Display available report information dynamically
- Link to FDA enforcement report definitions

## Topics Practiced

### APIs

- Using `fetch()`
- Building API query URLs
- Reading JSON responses
- Working with search parameters

### Dates

- Creating JavaScript dates
- Formatting dates for an API
- Changing years with `setFullYear()`
- Converting dates into strings

### Objects and Arrays

- Accessing arrays of API results
- Using `Object.keys()`
- Using `Object.values()`
- Working with object properties

### Loops

- Using `for` loops
- Using `forEach()`
- Iterating through multiple reports

### Strings

- Replacing spaces
- Formatting city names for API requests
- Replacing underscores
- Converting labels to uppercase

### DOM Manipulation

- Creating sections
- Creating headings
- Creating result fields
- Appending elements
- Clearing previous search results

## Technologies

- HTML5
- CSS3
- JavaScript
- openFDA Food Enforcement API

## FDA Disclaimer

FDA DISCLAIMER: "Do not rely on openFDA to make decisions regarding medical care. While we make every effort to ensure that data is accurate, you should assume all results are unvalidated. We may limit or otherwise restrict your access to the API in line with our Terms of Service."

Frequency of API updates: Weekly.

## Running the Project

1. Clone or download the repository.
2. Open `index.html`.
3. Enter a city and two-character state abbreviation.
4. Select the search button.
5. Review the returned food enforcement reports.
6. Use the FDA information link for enforcement report definitions when needed.
7. Open the browser developer tools and select the Console to view logged data.

## Purpose

This project was created while practicing JavaScript APIs, dates, objects, loops, string formatting, and dynamic DOM manipulation.

The focus is on building API queries from user input and displaying multiple records returned from an external data source.