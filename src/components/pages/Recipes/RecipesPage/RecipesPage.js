import React, { useState } from "react";
import { Link } from "react-router-dom";
import { tabletMediaQuery } from "styles/css-variables";
import Button from "components/common/Button/Button";
import FlashMessage from "components/common/FlashMessage/FlashMessage";
import Layout from "components/common/Layout/Layout";
import MediaQuery from "components/common/MediaQuery/MediaQuery";
import Tab from "components/common/Tabs/Tab";
import TabPane from "components/common/Tabs/TabPane";
import Tabs from "components/common/Tabs/Tabs";
import RecipesTab from "./RecipesTab";
import { TabLink, TabsContainer, FiltersContainer, NewButtonContainer, OptionsContainer, Header, PageContent } from './RecipesPageStyledComponents'; 

const Recipes = () => {
  const [error, setError] = useState("");
  const [isMobile, setIsMobile] = useState(window.matchMedia("(" + tabletMediaQuery + ")").matches);

  return (
    <Layout>
      <FlashMessage visible={!!error} error onClose={() => setError("")}>
        {error}
      </FlashMessage>
			<MediaQuery
				query={tabletMediaQuery}
				onChange={({matches}) => setIsMobile(matches)}
			/>

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
            <NewButtonContainer>
              <Link to="/recipes/new">
                <Button icon="plus" />
              </Link>
            </NewButtonContainer>
          </OptionsContainer>
        </Header>
				<PageContent>
					<FiltersContainer/>
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
				</PageContent>
      </Tabs>
    </Layout>
  );
};

export default Recipes;
