import React, { useCallback, useState } from 'react';
import groupBy from 'lodash/groupBy';
import moment from 'moment';
import { NavMenu, NavIcon } from '../../Nav';
import Button from 'components/common/Button/Button';
import PlaceholderImage from 'img/recipe-placeholder.png';
import {
  Drawer,
  Title,
  Date,
  DishTypeContainer,
  DishType,
  RecipeContainer,
  RecipeImage,
  RecipeData,
  RecipeTitle,
  RecipeType,
  StyledIcon,
  OptionsContainer,
  Content
} from './CurrentlySelectedStyles';

const CurrentlySelected = ({
  selectedRecipes,
  recipes,
  menuOpen,
  setMenuOpen,
  onDelete,
  onSave,
  loading
}) => {
  //TODO: memoize list stuff here, as well as each recipe card
  //shouldnt rerender whole list when one card updates
  const [loadingMutation, setLoadingMutation] = useState(false);
  const today = moment().format('MMMM Do, YYYY');

  const handleSave = () => {
    setLoadingMutation(true);
    onSave();
  };

  const renderRecipes = useCallback(() => {
    const filteredRecipes = Object.keys(selectedRecipes).reduce(
      (acc, recipeId) => {
        if (selectedRecipes[recipeId]) return [...acc, recipes[recipeId]];
        return acc;
      },
      []
    );

    const groupedRecipes = groupBy(
      filteredRecipes,
      rec => rec && rec.dish_type.name
    );

    return Object.keys(groupedRecipes).map(dishType => {
      if (!dishType) return null;
      return (
        <DishTypeContainer key={`selections|${dishType}`}>
          <DishType>{dishType}</DishType>
          {groupedRecipes[dishType].map(recipe => {
            if (!recipe) return null;

            const image =
              recipe.image_url || recipe.imageUrl || PlaceholderImage;
            return (
              <RecipeContainer key={`selectedMenu|${recipe.id}`}>
                <RecipeImage url={image} />
                <RecipeData>
                  <RecipeTitle>{recipe.title}</RecipeTitle>
                  <RecipeType>{recipe.type}</RecipeType>
                </RecipeData>
                <StyledIcon
                  name="close"
                  size="20px"
                  onClick={() => onDelete(recipe.id)}
                />
              </RecipeContainer>
            );
          })}
        </DishTypeContainer>
      );
    });
  }, [selectedRecipes, recipes, onDelete]);

  if (loading || !recipes) return <div>loading</div>;

  return (
    <Drawer>
      <NavIcon open={menuOpen} onClick={() => setMenuOpen(!menuOpen)} />
      <NavMenu menuOpen={menuOpen} />

      <Content>
        <Title>Selections</Title>
        <Date>{today}</Date>
        {renderRecipes()}
      </Content>
      <OptionsContainer>
        <Button loading={loadingMutation} onClick={handleSave}>
          Save Meal Plan
        </Button>
      </OptionsContainer>
    </Drawer>
  );
};

export default CurrentlySelected;
