import React, { useState } from "react";
import Layout from "components/common/Layout/Layout";
import styled from "styled-components";
import RecipesTab from "./RecipesTab";
import Button from "components/common/Button/Button";
import Tab from "components/common/Tabs/Tab";
import Tabs from "components/common/Tabs/Tabs";
import TabPane from "components/common/Tabs/TabPane";
import { Link } from "react-router-dom";
import { rufina, media } from "styles/css-variables";
import FlashMessage from "components/common/FlashMessage/FlashMessage";

const TabLink = styled.div`
  font-size: 1.2rem;
`;

const TabsContainer = styled.div`
  display: flex;
  margin-right: 16px;
  ${media.phone`
	margin-right: 0;
	margin: 16px auto;
`}
`;

const NewButtonContainer = styled.div``;
const OptionsContainer = styled.div`
  display: flex;
  align-items: center;
  ${media.phone`
    flex-flow: column;
`}
`;

const Heading = styled.div`
  font-family: ${rufina};
  font-size: 1.8rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-bottom: 32px;
  ${media.phone`
    flex-flow: column;
`}
`;

const Recipes = () => {
  const [activeTab, setActiveTab] = useState("family");
  const [error, setError] = useState("");

  return (
    <Layout>
      <FlashMessage visible={!!error} error onClose={() => setError("")}>
        {error}
      </FlashMessage>

      <Tabs
        defaultActiveTab="family"
        asyncRender
        onTabChange={tab => setActiveTab(tab)}
      >
        <Header>
          <Heading>
            {activeTab === "family" ? "Family Recipes" : "Shared Recipes"}
          </Heading>
          <OptionsContainer>
            <TabsContainer>
              <Tab name="family">
                <TabLink>Family</TabLink>
              </Tab>
              <Tab name="shared">
                <TabLink>Shared</TabLink>
              </Tab>
            </TabsContainer>
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
