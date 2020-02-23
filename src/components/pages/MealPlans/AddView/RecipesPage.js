import React, { useState } from 'react';
//import Button from 'components/common/Button';
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

const Recipes = ({ history }) => {
  const [error, setError] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

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
                onError={err => setError(err)}
                searchTerm={searchTerm}
              />
            </TabPane>
            <TabPane name="shared" asyncRender>
              <RecipesTab
                title="Shared Recipes"
                recipeType="shared_recipes"
                onError={err => setError(err)}
              />
            </TabPane>
          </Tabs>
        </RecipesContainer>
        <CurrentlySelected />
      </Container>
    </Layout>
  );
};

export default Recipes;
