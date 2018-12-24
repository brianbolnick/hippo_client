import React from "react";
import RecipeCard from "./RecipeCard";
import { storiesOf } from "@storybook/react";
import { MemoryRouter } from "react-router";

const data = {
  user: {
    name: "Brian Bolnick",
    id: 1
  },
  title: "Pizza Margherita",
  steps: ["Cook Food", "Eat Food"],
  servings: 4,
  prep_time: "5 Mins",
  original_family_id: 1,
  notes: "So good!",
  is_public: false,
  ingredients: ["Salt", "Pepper"],
  image_url:
    "https://cdn.jamieoliver.com/home/wp-content/uploads/2016/06/2.jpg",
  id: 1,
  family: {
    id: 1,
    display_name: "Brian Bolnick Family"
  },
  cook_time: "1 Hour",
  category: {
    name: "Italian",
    id: 1
  },
  calories: "343",
  rating: 3.4
};

storiesOf("RecipeCard", module)
  .addDecorator(story => (
    <MemoryRouter initialEntries={["/"]}>{story()}</MemoryRouter>
  ))
  .add("Card", () => <RecipeCard data={data} />);
