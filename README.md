# Meal Finder

Enter a calorie limit, get up to ten recipes that fit, each with fat, carbs, protein, and a photo. Don't like the first one? Hit "Something else" and cycle through the rest.

![Meal Finder screenshot](screenshot.jpg)

## How the code works

`getFood()` sends your calorie cap to Spoonacular's nutrient search and asks for ten results. They land in a module-level `meals` array, the `currentMeal` index resets to zero, and `displayMeal()` renders the first one: title, macros, and image.

The "Something else" button calls `switchMeal()`, which bumps the index and wraps back to zero at the end of the list, then re-renders. It's a tiny carousel pattern, and I like how little machinery it needs: one shared array, one index, one render function. No framework, no state library, just an integer and a wraparound check. The discipline that makes it work is the reset: every new search zeroes the index before rendering, so you can never end up pointing past the end of a fresh, shorter list. That's the entire class of carousel bugs, prevented by one line.

The hardest part was that index lifecycle. It has to reset on every new search and wrap cleanly at the end of the list, or you get blank cards and off-by-one meals.

Spoonacular API, plain JavaScript. My code is on the `answer` branch.
