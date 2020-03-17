import React, { useCallback } from 'react';
import groupBy from 'lodash/groupBy';
import moment from 'moment';
import styled from 'styled-components/macro';
import { NavMenu, NavIcon } from '../Nav';
import { colors } from 'styles/css-variables';
import Icon from 'components/common/Icon/Icon';
import Button from 'components/common/Button/Button';
import PlaceholderImage from 'img/recipe-placeholder.png';

const Drawer = styled.div`
  padding: 16px;
  width: 25%;
  background: white;
  height: 100vh;
  overflow-y: auto;
  position: fixed;
  z-index: 100;
  top: 0;
  right: 0;
  box-sizing: border-box;
  border-radius: 2px;
  //background: ${colors.whiteSmoke};
    background: #FDFDFB;
    border-left: solid 1px #F4F4F4;
`;

const Title = styled.div`
  font-weight: 600;
  font-size: 1.5em;
`;

const Date = styled.div`
  color: ${colors.darkGray};
  margin-bottom: 48px;
`;

const DishTypeContainer = styled.div`
  border-bottom: solid 2px #f4f4f4;
  padding: 16px 0;
`;

const DishType = styled.div`
  text-transform: uppercase;
  font-weight: 500;
  color: ${colors.darkGray};
`;

const RecipeContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 8px;
`;

const RecipeImage = styled.div`
  height: 50px;
  min-width: 75px;
  margin-right: 16px;
  background-image: ${({ url }) => `
		linear-gradient(
			to bottom,
			rgba(0, 0, 0, 0.01),
			rgba(0, 0, 0, 0.3)
		),
		url(${url});
	`};
  background-size: cover;
  background-position: center;
  border-radius: 8px;
`;

const RecipeData = styled.div`
  display: flex;
  flex-flow: column;
  align-items: flex-start;
`;

const RecipeTitle = styled.div``;

const RecipeType = styled.div`
  font-size: 12px;
  color: ${colors.darkGray};
  text-transform: capitalize;
`;

const StyledIcon = styled(Icon)`
  margin-left: auto;
  cursor: pointer;

  &:hover {
    opacity: 0.6;
  }
`;

const OptionsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: calc(25% - 32px);
  position: fixed;
  background: white;
  bottom: 0;
  padding-top: 16px;
  border-top: solid 1px #f4f4f4;
`;

const Content = styled.div`
  margin-bottom: 74px;
`;

const CurrentlySelected = ({
  selectedRecipes,
  recipes,
  menuOpen,
  setMenuOpen,
  onDelete,
  onSave
}) => {
  //TODO: memoize list stuff here, as well as each recipe card
  //shouldnt rerender whole list when one card updates
  const today = moment().format('MMMM Do, YYYY');
  const renderRecipes = useCallback(() => {
    const filteredRecipes = Object.keys(selectedRecipes).reduce(
      (acc, recipeId) => {
        if (selectedRecipes[recipeId]) return [...acc, recipes[recipeId]];
        return acc;
      },
      []
    );

    const groupedRecipes = groupBy(filteredRecipes, rec => rec.dish_type.name);

    return Object.keys(groupedRecipes).map(dishType => {
      return (
        <DishTypeContainer key={`selections|${dishType}`}>
          <DishType>{dishType}</DishType>
          {groupedRecipes[dishType].map(recipe => {
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
        <Button onClick={onSave}>Save Meal Plan</Button>
      </OptionsContainer>
    </Drawer>
  );
};

export default CurrentlySelected;
