# 🥘 Meal App

A meal search app where you type in the name of a dish, and it shows you a picture of it, its category, what cuisine it's from, and the instructions for making it. It uses TheMealDB API to get the recipe data.

**Live Demo:** https://restaurant-api-project.netlify.app

[![Screenshot-2026-09-29-at-7-33-31-AM.png](https://i.postimg.cc/YChjZHCH/Screenshot-2026-09-29-at-7-33-31-AM.png)](https://postimg.cc/tsGXn86S)

## How It's Made:

**Tech used:**

![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23F7DF1E.svg?style=for-the-badge&logo=javascript&logoColor=black)

The page has one input where you type a dish and a search button. When you click search, I take what the user typed and add it to the end of TheMealDB search URL.

The API sends back a list of meals that match, and I use the first one in the list. From that meal I grab the name, category, cuisine, instructions, and picture, and put each one on the page.

## Optimizations

Things I want to improve:

- Show a message on the page when no meal is found. Right now, if you search for something that isn't in the database, nothing happens on the page and the error only shows up in the console.
- Show more than one result, since the API sends back every meal that matches, not just one.
- Let the user press Enter to search, not just click the button.

## Lessons Learned:

This project helped me get more comfortable working with arrays in API data. The meals come back inside an array called `meals`, so I learned I had to use `data.meals[0]` to get the first result before I could get to things like the meal name or the picture.
