import React, { useState, useCallback } from 'react';
import FlashMessage from 'components/common/FlashMessage/FlashMessage';
import Nav from '../Nav';
import RecipesTab from './RecipesTab';
import Tab from 'components/common/Tabs/Tab';
import TabPane from 'components/common/Tabs/TabPane';
import Tabs from 'components/common/Tabs/Tabs';
import {
  TabLink,
  TabsContainer,
  OptionsContainer,
  Header,
  Container,
  RecipesContainer,
  Page
} from './RecipesPageStyledComponents';
import CurrentlySelected from './CurrentlySelected';
import useRecipesPageQueries from '../hooks/useRecipesPageQueries';

const Recipes = ({ history }) => {
  const {
    recipes: familyRecipes,
    categories,
    dishTypes,
    loading: loadingRecipes,
    error: recipeError
  } = useRecipesPageQueries('recipes');

  const {
    recipes: sharedRecipes,
    loading: loadingSharedRecipes,
    error: sharedError
  } = useRecipesPageQueries('shared_recipes');

  const [error, setError] = useState(recipeError || sharedError || '');
  const [searchTerm, setSearchTerm] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);

  //TODO: load selected recipes from current meal plan
  const [selectedRecipes, setSelectedRecipes] = useState({});

  const handleSelectRecipe = (recipeId, isSelected) => {
    setSelectedRecipes({ ...selectedRecipes, [recipeId]: isSelected });
  };

  const handleDeleteRecipe = recipeId => {
    setSelectedRecipes({ ...selectedRecipes, [recipeId]: false });
  };

  const handleSave = () => {
    const savedRecipes = Object.keys(selectedRecipes).reduce(
      (acc, recipeId) => {
        if (selectedRecipes[recipeId]) {
          return [...acc, recipeId];
        }
        return acc;
      },
      []
    );
    console.log('save', savedRecipes);
  };

  const groupRecipes = useCallback(() => {
    const combinedRecipes = familyRecipes.concat(sharedRecipes);
    return combinedRecipes.reduce((acc, recipe) => {
      acc[recipe.id] = recipe;
      return acc;
    }, {});
  }, [sharedRecipes, familyRecipes]);

  const groupedRecipes = groupRecipes();

  return (
    <Page>
      <FlashMessage visible={!!error} error onClose={() => setError('')}>
        {error}
      </FlashMessage>

      <Nav setSearchTerm={setSearchTerm} />
      <CurrentlySelected
        selectedRecipes={selectedRecipes}
        recipes={groupedRecipes}
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        onDelete={handleDeleteRecipe}
        onSave={handleSave}
      />
      <Container>
        <RecipesContainer>
          <Tabs defaultActiveTab="family" asyncRender>
            <Header>
              <TabsContainer>
                <Tab name="family">
                  <TabLink>Family</TabLink>
                </Tab>
                <Tab name="shared">
                  <TabLink>Shared</TabLink>
                </Tab>
              </TabsContainer>
              <OptionsContainer></OptionsContainer>
            </Header>
            <TabPane name="family" asyncRender>
              <RecipesTab
                title="Family Recipes"
                recipeType="recipes"
                searchTerm={searchTerm}
                onSelectRecipes={handleSelectRecipe}
                selectedRecipes={selectedRecipes}
                recipes={familyRecipes}
                categories={categories}
                dishTypes={dishTypes}
                loading={loadingRecipes}
              />
            </TabPane>
            <TabPane name="shared" asyncRender>
              <RecipesTab
                title="Shared Recipes"
                recipeType="shared_recipes"
                onSelectRecipes={handleSelectRecipe}
                selectedRecipes={selectedRecipes}
                recipes={sharedRecipes}
                categories={categories}
                dishTypes={dishTypes}
                loading={loadingSharedRecipes}
              />
            </TabPane>
          </Tabs>
        </RecipesContainer>
      </Container>
    </Page>
  );
};

export default Recipes;
