import React, { useState, useEffect } from "react";
import axios from "axios";
import { API_URL, token, familyId } from "utils";
import Loader from "img/burger.gif";
import NoRecipes from "img/food_icon.gif";
import RecipeCard from "components/common/Recipe/RecipeCard";
import { RecipeList, LoadContainer, PlaceholderText, NoRecipesImage } from "./RecipesPageStyledComponents";

const authToken = `Bearer ${token}`;

const RecipesTab = ({ recipeType, onError }) => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [recipesLoaded, setRecipesLoaded] = useState(false);

  useEffect(() => {
    if (!recipesLoaded) {
      axios
        .get(`${API_URL}/family/${familyId}/${recipeType}`, {
          headers: { Authorization: authToken }
        })
        .then(({ data }) => {
          const recipes = data.data;
          setLoading(false);
          setRecipesLoaded(true);
          setRecipes(recipes);
        })
        .catch(err => {
          console.log(err);
          setRecipesLoaded(true);
          onError("Something went wrong, please try again.");
        });
    }
  });

  const renderRecipes = recipes => {
    return recipes.length ? (
      recipes.map(recipe => {
        return <RecipeCard key={recipe.id} data={recipe} />;
      })
    ) : (
      <LoadContainer>
        <NoRecipesImage src={NoRecipes} />
        <PlaceholderText>
          You have no recipes here yet. Create one now!
        </PlaceholderText>
      </LoadContainer>
    );
  };

  return loading ? (
    <LoadContainer>
      <img alt="" src={Loader} style={{ height: "300px", width: "300px" }} />
    </LoadContainer>
  ) : (
    <RecipeList>{renderRecipes(recipes)}</RecipeList>
  );
};

export default RecipesTab;
