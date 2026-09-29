README for Simple API 2 Practice

Goal: Build a simple front-end app that displays data returned from an api that would be beneficial to someone working at or managing a restaurant.

Idea: user can input the ingredients they have in their kitchen or fridge and they will receive a random dish that they can make complete with cooking instructions

- Turned into a complex API because results were used from one API to query another an receive the cooking instructions

API's Used

Spoonacular (used twice)
https://api.spoonacular.com/recipes/findByIngredients?ingredients=${formatted_ingredients}&number=5&apiKey=${spoonacular_api_key}

- used to get the name of a dish the user can create (food id)

https://api.spoonacular.com/recipes/${food_id}/analyzedInstructions?apiKey=${spoonacular_api_key}

- used to find the instructions for the dish previously given
