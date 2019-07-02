import React, { useState, useEffect } from "react";
import axios from "axios";
import { API_URL, token, familyId } from "utils";
import Loader from "img/burger.gif";
import NoRecipes from "img/food_icon.gif";
import { tabletMediaQuery } from "styles/css-variables";
import RecipeCard from "components/common/Recipe/RecipeCard";
import MediaQuery from "components/common/MediaQuery/MediaQuery";
import Collapse from 'components/common/Collapse';
import Checkbox from 'components/common/Checkbox';
import {
	RecipeContent, 
	FiltersContainer, 
	RecipeList, 
	LoadContainer, 
	PlaceholderText, 
	NoRecipesImage ,
	FilterGroup,
	ClearFilters,
	FilterTitle,
	FilterOptions,
	FilterItemGroup,
	FilterItem
} from "./RecipesPageStyledComponents";

const authToken = `Bearer ${token}`;

const RecipesTab = ({ recipeType, onError }) => {
  const [recipes, setRecipes] = useState([]);
  const [categories, setCategories] = useState([]);
  const [dishTypes, setDishTypes] = useState([]);
  const [filteredRecipes, setFilteredRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [recipesLoaded, setRecipesLoaded] = useState(false);
  const [isMobile, setIsMobile] = useState(window.matchMedia("(" + tabletMediaQuery + ")").matches);

  const getCategories = () => {
    return axios.get(`${API_URL}/categories`, {
      headers: { Authorization: authToken }
    });
  };

  const getDishTypes = () => {
    return axios.get(`${API_URL}/dish_types`, {
      headers: { Authorization: authToken }
    });
  };

	const getRecipes = () => {
    return axios.get(`${API_URL}/family/${familyId}/${recipeType}`, {
      headers: { Authorization: authToken }
    });
	}

	useEffect(() => {
		if (!recipesLoaded) {
			axios
				.all([getRecipes(), getCategories(), getDishTypes()])
				.then(
					axios.spread((recipeData, categoryData, dishTypeData) => {
						const recipes = recipeData.data.data;
						const categories = categoryData.data.data;
						const dishTypes = dishTypeData.data.data;
						setLoading(false);
						setRecipesLoaded(true);
						setCategories(categories);
						setDishTypes(dishTypes);
						setRecipes(recipes);
						setFilteredRecipes(recipes);
					})
				)
				.catch(err => {
					console.log(err);
					setRecipesLoaded(true);
					onError("Something went wrong, please try again.");
				});
		}
	});

  const renderRecipes = () => {
    return filteredRecipes.length ? (
      filteredRecipes.map(recipe => {
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

	const renderDishTypes = () => {
		return dishTypes.map(type => {
			return (
				<FilterItemGroup>
				<FilterItem>{type.name}</FilterItem>
					<Checkbox onChange={() => console.log("change", type)} />
			</FilterItemGroup>
		)
		})
	}

	const renderCategories = () => {
		return categories.map(type => {
			return (
				<FilterItemGroup>
				<FilterItem>{type.name}</FilterItem>
					<Checkbox onChange={() => console.log("change", type)} />
			</FilterItemGroup>
		)
		})
	}

	const renderDifficulties = () => {
		const difficulties = [
			{name: "Easy", value: 1},
			{name: "Medium", value: 2},
			{name: "Hard", value: 3},
		]
		return difficulties.map(type => {
			return (
				<FilterItemGroup>
				<FilterItem>{type.name}</FilterItem>
					<Checkbox onChange={() => console.log("change", type)} />
			</FilterItemGroup>
		)
		})
	}

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
					<FilterOptions>{renderDishTypes()}</FilterOptions>
				</Collapse>
				<Collapse label="Category">
					<FilterOptions>{renderCategories()}</FilterOptions>
				</Collapse>
				<Collapse label="Difficulty">
					<FilterOptions>{renderDifficulties()}</FilterOptions>
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
