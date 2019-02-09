import React, { useState, useEffect } from "react";
import RecipeCard from "components/common/Recipe/RecipeCard";
import { API_URL, token, familyId } from "utils";
import axios from "axios";
import { avenir, colors, media } from "styles/css-variables";
import { RecipeList } from "./styles";
import Loader from "img/loader.gif";
import styled from "styled-components";
import NoRecipes from "img/food_icon.gif";
const authToken = `Bearer ${token}`;

const LoadContainer = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  justify-content: center;
  align-items: center;
  flex-flow: column;
`;

const PlaceholderText = styled.div`
  font-size: 1.8rem;
  font-family: ${avenir};
  font-weight: 600;
  color: ${colors.black};
  position: relative;
  bottom: 132px;
  ${media.phone`
	bottom: auto;
	font-size: 1.6rem;
	text-align: center;
	`}
`;

const NoRecipesImage = styled.img`
  ${media.phone`
		width: 100%;
	`}
`;

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
