import React, { useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import Loader from 'img/burger.gif';
import NoRecipes from 'img/food_icon.gif';
import { tabletMediaQuery } from 'styles/css-variables';
import AddableRecipeCard from './AddableRecipeCard';
import MediaQuery from 'components/common/MediaQuery/MediaQuery';
import Collapse from 'components/common/Collapse';
import Checkbox from 'components/common/Checkbox';
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
} from './RecipesPageStyledComponents';

const difficulties = [
  { name: 'Easy', id: 1 },
  { name: 'Medium', id: 2 },
  { name: 'Hard', id: 3 }
];

const RecipesTab = ({
  searchTerm,
  recipeType,
  selectedRecipes,
  onSelectRecipes,
  recipes,
  categories,
  dishTypes,
  loading
}) => {
  const createInitialFilterList = group => {
    return group.reduce((acc, val) => {
      acc[val.id] = false;
      return acc;
    }, {});
  };

  const createFilters = () => ({
    category: createInitialFilterList(categories),
    dishType: createInitialFilterList(dishTypes),
    difficulty: createInitialFilterList(difficulties)
  });

  const [filteredRecipes, setFilteredRecipes] = useState([]);
  const [isMobile, setIsMobile] = useState(
    window.matchMedia('(' + tabletMediaQuery + ')').matches
  );

  const initialFilters = createFilters();

  const [filters, setFilters] = useState(initialFilters);

  const filtersCleared = useCallback(
    type => {
      //should return all results if all items are unchecked
      if (!filters[type]) return true;
      return Object.keys(filters[type]).every(x => !filters[type][x]);
    },
    [filters]
  );

  const filterByDishType = useCallback(
    recipe => {
      if (filtersCleared('dishType')) return true;
      return filters.dishType[recipe.dish_type.id];
    },
    [filters.dishType, filtersCleared]
  );

  const filterByCategory = useCallback(
    recipe => {
      if (filtersCleared('category')) return true;
      return filters.category[recipe.category.id];
    },
    [filters.category, filtersCleared]
  );

  const filterByDifficulty = useCallback(
    recipe => {
      if (filtersCleared('difficulty')) return true;
      return filters.difficulty[recipe.difficulty];
    },
    [filters.difficulty, filtersCleared]
  );

  const filterBySearchTerm = useCallback(
    recipe => {
      if (!searchTerm) return true;
      return recipe.title.toLowerCase().includes(searchTerm.toLowerCase());
    },
    [searchTerm]
  );

  const filterRecipes = useCallback(() => {
    const newFilteredRecipes = recipes.filter(recipe => {
      return (
        filterByDishType(recipe) &&
        filterByCategory(recipe) &&
        filterByDifficulty(recipe) &&
        filterBySearchTerm(recipe)
      );
    });

    setFilteredRecipes(newFilteredRecipes);
  }, [
    filterByCategory,
    filterByDifficulty,
    filterByDishType,
    filterBySearchTerm,
    recipes
  ]);

  useEffect(() => {
    filterRecipes();
  }, [filterRecipes]);

  const updateFilterList = (mapping, id) => {
    const newFilters = { ...filters };
    newFilters[mapping][id] = !filters[mapping][id];

    setFilters(newFilters);
    filterRecipes();
  };

  const renderRecipes = () => {
    return filteredRecipes.length ? (
      filteredRecipes.map(recipe => {
        return (
          <AddableRecipeCard
            key={`recipe|${recipe.id}`}
            data={recipe}
            isSelected={selectedRecipes[recipe.id]}
            onSelectRecipes={onSelectRecipes}
          />
        );
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
    return (
      Object.keys(filters).length &&
      dishTypes.map(type => {
        return (
          <FilterItemGroup key={`dishTypes|${type.id}`}>
            <FilterItem>{type.name}</FilterItem>
            <Checkbox
              checked={filters.dishType[type.id]}
              onChange={() => updateFilterList('dishType', type.id)}
            />
          </FilterItemGroup>
        );
      })
    );
  };

  const renderCategories = () => {
    return (
      Object.keys(filters).length &&
      categories.map(type => {
        return (
          <FilterItemGroup key={`category|${type.id}`}>
            <FilterItem>{type.name}</FilterItem>
            <Checkbox
              checked={filters.category[type.id]}
              onChange={() => updateFilterList('category', type.id)}
            />
          </FilterItemGroup>
        );
      })
    );
  };

  const renderDifficulties = () => {
    return (
      Object.keys(filters).length &&
      difficulties.map(type => {
        return (
          <FilterItemGroup key={`difficulty|${type.id}`}>
            <FilterItem>{type.name}</FilterItem>
            <Checkbox
              checked={filters.difficulty[type.id]}
              onChange={() => updateFilterList('difficulty', type.id)}
            />
          </FilterItemGroup>
        );
      })
    );
  };

  const clearFilters = () => {
    const newFilters = createFilters();
    setFilters(newFilters);
    setFilteredRecipes(recipes);
  };

  const renderFilters = () => {
    return (
      <FiltersContainer>
        <FilterGroup>
          <FilterTitle>Filter By:</FilterTitle>
          <ClearFilters onClick={() => clearFilters()}>
            Clear Filters
          </ClearFilters>
        </FilterGroup>
        <Collapse label="Dish Type" divider defaultOpen>
          <FilterOptions>{renderDishTypes()}</FilterOptions>
        </Collapse>
        <Collapse label="Category" divider>
          <FilterOptions>{renderCategories()}</FilterOptions>
        </Collapse>
        <Collapse label="Difficulty" divider>
          <FilterOptions>{renderDifficulties()}</FilterOptions>
        </Collapse>
      </FiltersContainer>
    );
  };

  return loading ? (
    <LoadContainer>
      <img alt="" src={Loader} style={{ height: '300px', width: '300px' }} />
    </LoadContainer>
  ) : (
    <RecipeContent>
      <MediaQuery
        query={tabletMediaQuery}
        onChange={({ matches }) => setIsMobile(matches)}
      />
      {!isMobile && renderFilters()}
      <RecipeList>{renderRecipes(recipes)}</RecipeList>
    </RecipeContent>
  );
};

RecipesTab.propTypes = {
  searchTerm: PropTypes.string
};

export default RecipesTab;
