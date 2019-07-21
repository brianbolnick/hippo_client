import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "components/common/Button/Button";
import FlashMessage from "components/common/FlashMessage/FlashMessage";
import Layout from "components/common/Layout/Layout";
import Tab from "components/common/Tabs/Tab";
import Search from "components/common/Search";
import TabPane from "components/common/Tabs/TabPane";
import Tabs from "components/common/Tabs/Tabs";
import RecipesTab from "./RecipesTab";
import { SearchWrapper, TabLink, TabsContainer,  NewButtonContainer, OptionsContainer, Header } from './RecipesPageStyledComponents'; 

const Recipes = () => {
  const [error, setError] = useState("");

  return (
    <Layout>
      <FlashMessage visible={!!error} error onClose={() => setError("")}>
        {error}
      </FlashMessage>
      <Tabs
        defaultActiveTab="family"
        asyncRender
      >
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
							<Search onChange={val => console.log(val)} />
						</SearchWrapper>
            <NewButtonContainer>
              <Link to="/recipes/new">
                <Button icon="plus" />
              </Link>
            </NewButtonContainer>
          </OptionsContainer>
        </Header>
					<TabPane name="family" asyncRender>
						<RecipesTab
							title="Family Recipes"
							recipeType="recipes"
							onError={err => setError(err)}
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
    </Layout>
  );
};

export default Recipes;
