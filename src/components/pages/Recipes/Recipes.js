import React from "react";
import Layout from "components/common/Layout/Layout";
import styled from "styled-components";
import RecipesTab from "./RecipesTab";
import Button from "components/common/Button/Button";
import Tab from "components/common/Tabs/Tab";
import Tabs from "components/common/Tabs/Tabs";
import TabPane from "components/common/Tabs/TabPane";
import { Link } from "react-router-dom";
import { rufina } from "styles/css-variables";

const TabLink = styled.div``;

const TabsContainer = styled.div`
  display: flex;
  margin-bottom: 32px;
`;

const Heading = styled.div`
  font-family: ${rufina};
  font-size: 1.8rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-bottom: 16px;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
`;
class Recipe extends React.Component {
  state = { activeTab: "family" };
  render() {
    const { activeTab } = this.state;
    return (
      <Layout>
        <Tabs
          defaultActiveTab="family"
          asyncRender
          onTabChange={tab => this.setState({ activeTab: tab })}
        >
          <Header>
            <Heading>
              {activeTab === "family" ? "Family Recipes" : "Shared Recipes"}
            </Heading>
            <TabsContainer>
              <Tab name="family">
                <TabLink>Family</TabLink>
              </Tab>
              <Tab name="shared">
                <TabLink>Shared</TabLink>
              </Tab>
            </TabsContainer>
          </Header>
          <TabPane name="family" asyncRender>
            <RecipesTab title="Family Recipes" recipeType="recipes" />
          </TabPane>
          <TabPane name="shared" asyncRender>
            <RecipesTab title="Shared Recipes" recipeType="shared_recipes" />
          </TabPane>
        </Tabs>
        <Link to="/recipes/new">
          <Button fixed icon="addRecipe">
            Add New Recipe
          </Button>
        </Link>
      </Layout>
    );
  }
}

export default Recipe;
