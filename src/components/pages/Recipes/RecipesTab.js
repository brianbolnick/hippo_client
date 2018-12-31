import React, { useState, useEffect } from "react";
import RecipeCard from "components/common/Recipe/RecipeCard";
import { API_URL, token, familyId } from "utils";
import axios from "axios";
import { RecipeList } from "./styles";
import Loader from "img/loader.gif";
import styled from "styled-components";
const authToken = `Bearer ${token}`;

const LoadContainer = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

const RecipesTab = ({ recipeType, onError }) => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!recipes.length) {
      axios
        .get(`${API_URL}/family/${familyId}/${recipeType}`, {
          headers: { Authorization: authToken }
        })
        .then(({ data }) => {
          const recipes = data.data;
          setLoading(false);
          setRecipes(recipes);
        })
        .catch(err => {
          console.log(err);
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
      <div>Nothing here yet!</div>
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
