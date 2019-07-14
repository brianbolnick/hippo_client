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

const difficulties = [
	{name: "Easy", id: 1},
	{name: "Medium", id: 2},
	{name: "Hard", id: 3},
]

const RecipesTab = ({ recipeType, onError }) => {
  const [recipes, setRecipes] = useState([]);
  const [categories, setCategories] = useState([]);
  const [dishTypes, setDishTypes] = useState([]);
  const [filteredRecipes, setFilteredRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [recipesLoaded, setRecipesLoaded] = useState(false);
  const [isMobile, setIsMobile] = useState(window.matchMedia("(" + tabletMediaQuery + ")").matches);
	const [filters, setFilters] = useState({})
	const [filtersSet, setFiltersSet] = useState(false)

	const createFilters = () => ({
		category: createInitialFilterList(categories),
		dishType: createInitialFilterList(dishTypes),
		difficulty: createInitialFilterList(difficulties)
	})

	const createInitialFilterList = group => {
		return group.reduce((acc, val) => {
			acc[val.id] = false
			return acc
		}, {})
	}

	const updateFilterList = (mapping, id) => {
		const newFilters = {...filters};
		newFilters[mapping][id] = !filters[mapping][id]
		setFilters(newFilters)
	}
		

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
		if (recipesLoaded && !filtersSet) {
			setFilters(createFilters())
			setFiltersSet(true)
		} else {
			filterRecipes()
		}

		if (!recipesLoaded) {
			axios
				.all([getRecipes(), getCategories(), getDishTypes()])
				.then(
					axios.spread((recipeData, categoryData, dishTypeData) => {
						const recipes = recipeData.data.data;
						const categories = categoryData.data.data;
						const dishTypes = dishTypeData.data.data;
						setLoading(false);
						setCategories(categories);
						setDishTypes(dishTypes);
						setRecipes(recipes);
						setFilteredRecipes(recipes);
						setRecipesLoaded(true);
					})
				)
				.catch(err => {
					console.log(err);
					setRecipesLoaded(true);
					onError("Something went wrong, please try again.");
				});
		}
	}, [categories, dishTypes, recipes, filters]);

	const filterRecipes = () => {
		console.log("here");
		const filtered = filteredRecipes.filter(recipe => {
			return filterByDishType(recipe) && filterByCategory(recipe) && filterByDifficulty(recipe);
		});
		setFilteredRecipes(filtered)
	}

	const filterByDishType = recipe => {
		const anySelected = Object.keys(filters.dishType).some(x => filters.dishType[x] === true );
		if (!anySelected) return true;
		return filters.dishType[recipe.dish_type.id];
	}

	const filterByCategory = recipe => {
		const anySelected = Object.keys(filters.category).some(x => filters.category[x] === true );
		if (!anySelected) return true;

		return filters.category[recipe.category.id];
	}

	const filterByDifficulty = recipe => {
const anySelected = Object.keys(filters.difficulty).some(x => filters.difficulty[x] === true );
		if (!anySelected) return true;


		return filters.difficulty[recipe.difficulty];
	}

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
		return filtersSet && dishTypes.map(type => {
			return (
				<FilterItemGroup>
				<FilterItem>{type.name}</FilterItem>
				<Checkbox checked={filters.dishType[type.id]} onChange={() => updateFilterList("dishType", type.id) }/>
			</FilterItemGroup>
		)
		})
	}

	const renderCategories = () => {
		return filtersSet && categories.map(type => {
			return (
				<FilterItemGroup>
				<FilterItem>{type.name}</FilterItem>
				<Checkbox checked={filters.category[type.id]} onChange={() => updateFilterList("category", type.id)} />
			</FilterItemGroup>
		)
		})
	}

	const renderDifficulties = () => {
		return filtersSet && difficulties.map(type => {
			return (
				<FilterItemGroup>
				<FilterItem>{type.name}</FilterItem>
				<Checkbox checked={filters.difficulty[type.id]} onChange={() => updateFilterList("difficulty", type.id)} />
			</FilterItemGroup>
		)
		})
	}

	const renderFilters = () => {
		return (
			<FiltersContainer>
				<FilterGroup>
					<FilterTitle>Filter By:</FilterTitle>
					<ClearFilters onClick={() => setFilters(createFilters)}>
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
