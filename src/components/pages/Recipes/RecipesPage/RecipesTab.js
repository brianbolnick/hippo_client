import React, { useState, useEffect } from "react";
import axios from "axios";
import { API_URL, token, familyId } from "utils";
import Loader from "img/burger.gif";
import NoRecipes from "img/food_icon.gif";
import { tabletMediaQuery } from "styles/css-variables";
import RecipeCard from "components/common/Recipe/RecipeCard";
import MediaQuery from "components/common/MediaQuery/MediaQuery";
import Collapse from 'components/common/Collapse';
import {
	RecipeContent, 
	FiltersContainer, 
	RecipeList, 
	LoadContainer, 
	PlaceholderText, 
	NoRecipesImage ,
	FilterGroup,
	ClearFilters,
	FilterTitle
} from "./RecipesPageStyledComponents";

const authToken = `Bearer ${token}`;

const RecipesTab = ({ recipeType, onError }) => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [recipesLoaded, setRecipesLoaded] = useState(false);
  const [isMobile, setIsMobile] = useState(window.matchMedia("(" + tabletMediaQuery + ")").matches);

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

  const renderRecipes = () => {
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

	const renderFilters = () => {

		return (
			<FiltersContainer>
				<FilterGroup>
					<FilterTitle>Filter By:</FilterTitle>
					<ClearFilters onClick={() => console.log("click")}>
						Clear Filters
					</ClearFilters>
				</FilterGroup>
				<Collapse label="Dish Type">
					<div>hey</div>
				</Collapse>
				<Collapse label="Category">
					<div>hey</div>
				</Collapse>
				<Collapse label="Difficulty">
					<div>hey</div>
				</Collapse>


			</FiltersContainer>
		)

	}

  return loading ? (
    <LoadContainer>
      <img alt="" src={Loader} style={{ height: "300px", width: "300px" }} />
    </LoadContainer>
	) : (
		<RecipeContent>
			<MediaQuery
				query={tabletMediaQuery}
				onChange={({matches}) => setIsMobile(matches)}
			/>
			{!isMobile && renderFilters()}
			<RecipeList>{renderRecipes(recipes)}</RecipeList>
		</RecipeContent>
	);
};

export default RecipesTab;
