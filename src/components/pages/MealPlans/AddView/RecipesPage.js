import React, { useState, useCallback } from 'react';
import FlashMessage from 'components/common/FlashMessage/FlashMessage';
import Layout from 'components/common/Layout/Layout';
import RecipesTab from './RecipesTab';
import Search from 'components/common/Search';
import Tab from 'components/common/Tabs/Tab';
import TabPane from 'components/common/Tabs/TabPane';
import Tabs from 'components/common/Tabs/Tabs';
import {
  SearchWrapper,
  TabLink,
  TabsContainer,
  OptionsContainer,
  Header,
  Container,
  RecipesContainer
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

  //TODO: load selected recipes from current meal plan
  const [selectedRecipes, setSelectedRecipes] = useState({});

  const handleSelectRecipe = (recipeId, isSelected) => {
    setSelectedRecipes({ ...selectedRecipes, [recipeId]: isSelected });
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
    <Layout fullScreen hideFooter fixed>
      <FlashMessage visible={!!error} error onClose={() => setError('')}>
        {error}
      </FlashMessage>
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
              <OptionsContainer>
                <SearchWrapper>
                  <Search onChange={val => setSearchTerm(val)} />
                </SearchWrapper>
              </OptionsContainer>
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
        <CurrentlySelected
          selectedRecipes={selectedRecipes}
          recipes={groupedRecipes}
        />
      </Container>
    </Layout>
  );
};

export default Recipes;
