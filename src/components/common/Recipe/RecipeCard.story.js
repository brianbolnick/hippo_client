import React from "react";
import RecipeCard from "./RecipeCard";
import { storiesOf } from "@storybook/react";
import { MemoryRouter } from "react-router";

const data = 
	{
		"user": { "name": "Brian Bolnick", "is_beta": false, "id": 1 },
		"type": "family",
		"title": "Pizza Margherita",
		"steps": [
			"Place a pizza stone or tiles on the middle rack of your oven and turn heat to its highest setting. Let it heat for at least an hour.",
			"Put the sauce in the center of the stretched dough and use the back of a spoon to spread it evenly across the surface, stopping approximately 1/2 inch from the edges.",
			"Drizzle a little olive oil over the pie. Break the cheese into large pieces and place these gently on the sauce. Scatter basil leaves over the top.",
			"Using a pizza peel, pick up the pie and slide it onto the heated stone or tiles in the oven. Bake until the crust is golden brown and the cheese is bubbling, approximately 4 to 8 minutes."
		],
		"servings": 4,
		"rating_count": 1,
		"rating": 4.5,
		"prep_time": "5 Minutes",
		"notes": "I love this recipe! It was handed down from my great, great, grandmother who lived in Palermo, Italy. Nothing brings me back to my roots like la pizza!",
		"is_public": false,
		"ingredients": [
			{
				"quantity": "1",
				"name": "12-inch round of pizza dough, stretched",
				"measurement": ""
			},
			{
				"quantity": "3",
				"name": "tablespoons tomato sauce",
				"measurement": "Tbsp"
			},
			{
				"quantity": "1",
				"name": "Extra-virgin olive oil",
				"measurement": "Tbsp"
			},
			{ "quantity": "2 3/4", "name": "fresh mozzarella", "measurement": "oz" },
			{ "quantity": "4", "name": "basil leaves, roughly torn", "measurement": "" }
		],
		"image_url": "https://hungryhippo-api.s3.amazonaws.com/hungryhippo-api-dev/9a5934e8e0ab4a11a33674e14d2f45e3-pizza.jpg",
		"id": 16,
		"family_id": 1,
		"family": { "is_beta": false, "id": 1, "display_name": "Bolnick Family" },
		"dish_type": { "name": "Main", "id": 4 },
		"cook_time": "1 Hrs",
		"category": { "name": "Italian", "id": 1 },
		"calories": "343"
	}

storiesOf("RecipeCard", module)
  .addDecorator(story => (
    <MemoryRouter initialEntries={["/"]}>{story()}</MemoryRouter>
  ))
  .add("Card", () => <RecipeCard data={data} />);
