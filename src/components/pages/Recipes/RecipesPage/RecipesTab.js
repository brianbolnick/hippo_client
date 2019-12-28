import React from "react";
import axios from "axios";
import PropTypes from "prop-types";
import { API_URL, token, familyId } from "utils";
import Loader from "img/burger.gif";
import NoRecipes from "img/food_icon.gif";
import { tabletMediaQuery } from "styles/css-variables";
import RecipeCard from "components/common/Recipe/RecipeCard";
import MediaQuery from "components/common/MediaQuery/MediaQuery";
import Collapse from "components/common/Collapse";
import Checkbox from "components/common/Checkbox";
import {
  RecipeContent,
  FiltersContainer,
  RecipeList,
  LoadContainer,
  PlaceholderText,
  NoRecipesImage,
  FilterGroup,
  ClearFilters,
  FilterTitle,
  FilterOptions,
  FilterItemGroup,
  FilterItem
} from "./RecipesPageStyledComponents";

const authToken = `Bearer ${token}`;

const difficulties = [
  { name: "Easy", id: 1 },
  { name: "Medium", id: 2 },
  { name: "Hard", id: 3 }
];

class RecipesTab extends React.Component {
  state = {
    recipes: [],
    categories: [],
    dishTypes: [],
    filteredRecipes: [],
    loading: true,
    isMobile: window.matchMedia("(" + tabletMediaQuery + ")").matches,
    filters: [],
    filtersSet: false
  };

  componentDidMount = () => {
    axios
      .all([this.getRecipes(), this.getCategories(), this.getDishTypes()])
      .then(
        axios.spread((recipeData, categoryData, dishTypeData) => {
          const recipes = recipeData.data.data;
          const categories = categoryData.data.data;
          const dishTypes = dishTypeData.data.data;

          this.setState(
            {
              loading: false,
              categories,
              dishTypes,
              recipes,
              filteredRecipes: recipes
            },
            () => {
              this.setState({
                filters: this.createFilters(),
                filtersSet: true
              });
            }
          );
        })
      )
      .catch(err => {
        console.log(err);
        this.setState({ loading: false }, () =>
          this.props.onError("Something went wrong, please try again.")
        );
      });
  };

  componentDidUpdate = (prevProps, prevState) => {
    if (
      JSON.stringify(prevState.filteredRecipes) !==
        JSON.stringify(this.state.filteredRecipes) ||
      prevProps.searchTerm !== this.props.searchTerm
    ) {
      this.filterRecipes();
    }
  };

  createInitialFilterList = group => {
    return group.reduce((acc, val) => {
      acc[val.id] = false;
      return acc;
    }, {});
  };

  updateFilterList = (mapping, id) => {
    const { filters } = this.state;

    const newFilters = { ...filters };
    newFilters[mapping][id] = !filters[mapping][id];

    this.setState({ filters: newFilters }, () => this.filterRecipes());
  };

  getCategories = () => {
    return axios.get(`${API_URL}/categories`, {
      headers: { Authorization: authToken }
    });
  };

  getDishTypes = () => {
    return axios.get(`${API_URL}/dish_types`, {
      headers: { Authorization: authToken }
    });
  };

  getRecipes = () => {
    return axios.get(`${API_URL}/family/${familyId}/${this.props.recipeType}`, {
      headers: { Authorization: authToken }
    });
  };

  createFilters = () => ({
    category: this.createInitialFilterList(this.state.categories),
    dishType: this.createInitialFilterList(this.state.dishTypes),
    difficulty: this.createInitialFilterList(difficulties)
  });

  filterRecipes = () => {
    const filteredRecipes = this.state.recipes.filter(recipe => {
      return (
        this.filterByDishType(recipe) &&
        this.filterByCategory(recipe) &&
        this.filterByDifficulty(recipe) &&
        this.filterBySearchTerm(recipe)
      );
    });

    this.setState({ filteredRecipes });
  };

  filtersCleared = type => {
    const { filters } = this.state;

    //should return all results if all items are unchecked
    if (!filters[type]) return true;
    return Object.keys(filters[type]).every(x => !filters[type][x]);
  };

  filterByDishType = recipe => {
    if (this.filtersCleared("dishType")) return true;
    return this.state.filters.dishType[recipe.dish_type.id];
  };

  filterByCategory = recipe => {
    if (this.filtersCleared("category")) return true;
    return this.state.filters.category[recipe.category.id];
  };

  filterByDifficulty = recipe => {
    if (this.filtersCleared("difficulty")) return true;
    return this.state.filters.difficulty[recipe.difficulty];
  };

  filterBySearchTerm = recipe => {
    const { searchTerm } = this.props;

    if (!searchTerm) return true;
    return recipe.title.toLowerCase().includes(searchTerm.toLowerCase());
  };

  renderRecipes = () => {
    const { filteredRecipes } = this.state;

    return filteredRecipes.length ? (
      filteredRecipes.map(recipe => {
        return <RecipeCard key={`recipe|${recipe.id}`} data={recipe} />;
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

  renderDishTypes = () => {
    const { filtersSet, dishTypes, filters } = this.state;

    return (
      filtersSet &&
      dishTypes.map(type => {
        return (
          <FilterItemGroup key={`dishTypes|${type.id}`}>
            <FilterItem>{type.name}</FilterItem>
            <Checkbox
              checked={filters.dishType[type.id]}
              onChange={() => this.updateFilterList("dishType", type.id)}
            />
          </FilterItemGroup>
        );
      })
    );
  };

  renderCategories = () => {
    const { filtersSet, categories, filters } = this.state;

    return (
      filtersSet &&
      categories.map(type => {
        return (
          <FilterItemGroup key={`category|${type.id}`}>
            <FilterItem>{type.name}</FilterItem>
            <Checkbox
              checked={filters.category[type.id]}
              onChange={() => this.updateFilterList("category", type.id)}
            />
          </FilterItemGroup>
        );
      })
    );
  };

  renderDifficulties = () => {
    const { filtersSet, filters } = this.state;

    return (
      filtersSet &&
      difficulties.map(type => {
        return (
          <FilterItemGroup key={`difficulty|${type.id}`}>
            <FilterItem>{type.name}</FilterItem>
            <Checkbox
              checked={filters.difficulty[type.id]}
              onChange={() => this.updateFilterList("difficulty", type.id)}
            />
          </FilterItemGroup>
        );
      })
    );
  };

  clearFilters = () => {
    const filters = this.createFilters();
    this.setState({ filters, filteredRecipes: this.state.recipes });
  };

  renderFilters = () => {
    return (
      <FiltersContainer>
        <FilterGroup>
          <FilterTitle>Filter By:</FilterTitle>
          <ClearFilters onClick={() => this.clearFilters()}>
            Clear Filters
          </ClearFilters>
        </FilterGroup>
        <Collapse label="Dish Type" divider defaultOpen>
          <FilterOptions>{this.renderDishTypes()}</FilterOptions>
        </Collapse>
        <Collapse label="Category" divider>
          <FilterOptions>{this.renderCategories()}</FilterOptions>
        </Collapse>
        <Collapse label="Difficulty" divider>
          <FilterOptions>{this.renderDifficulties()}</FilterOptions>
        </Collapse>
      </FiltersContainer>
    );
  };

  render() {
    const { loading } = this.props;
    const { recipes, isMobile } = this.state;

    return loading ? (
      <LoadContainer>
        <img alt="" src={Loader} style={{ height: "300px", width: "300px" }} />
      </LoadContainer>
    ) : (
      <RecipeContent>
        <MediaQuery
          query={tabletMediaQuery}
          onChange={({ matches }) => this.setState({ isMobile: matches })}
        />
        {!isMobile && this.renderFilters()}
        <RecipeList>{this.renderRecipes(recipes)}</RecipeList>
      </RecipeContent>
    );
  }
}

RecipesTab.propTypes = {
  searchTerm: PropTypes.string
};
export default RecipesTab;
