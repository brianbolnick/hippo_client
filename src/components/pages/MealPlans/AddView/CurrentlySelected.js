import React from 'react';
import styled from 'styled-components/macro';

const Drawer = styled.div`
  border-left: solid 1px;
  border-top: solid 1px;
  padding: 16px;
  width: 25%;
  background: white;
  height: 100vh;
  overflow-y: auto;
  position: fixed;
  z-index: 100;
  top: 102px;
  right: 0;
  box-sizing: border-box;
`;

const CurrentlySelected = ({ selectedRecipes, recipes }) => {
  return (
    <Drawer>
      {Object.keys(selectedRecipes).map(recipeId => {
        if (!selectedRecipes[recipeId]) return null;

        const recipe = recipes[recipeId];

        return (
          <pre key={`selectedMenu|${recipeId}`}>
            {recipe.title} ({recipe.type})
          </pre>
        );
      })}
    </Drawer>
  );
};

export default CurrentlySelected;
