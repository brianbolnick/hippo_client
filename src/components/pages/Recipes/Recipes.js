import React from "react";
import Layout from "components/common/Layout/Layout";
import RecipeCard from "components/common/Recipe/RecipeCard";
import Divider from "components/common/Divider/Divider";
import { API_URL, token, familyId } from "utils";
import axios from "axios";
import { RecipeList } from "./styles";
import Loader from "img/loader.gif";
import styled from "styled-components";
import Button from "components/common/Button/Button";
import { Link } from "react-router-dom";
import { rufina } from "styles/css-variables";
const authToken = `Bearer ${token}`;

const LoadContainer = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

const Heading = styled.div`
  font-family: ${rufina};
  font-size: 1.8rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-bottom: 16px;
`;

const getFamilyRecipes = () => {
  return axios.get(`${API_URL}/family/${familyId}/recipes`, {
    headers: { Authorization: authToken }
  });
};

const getSharedFamilyRecipes = () => {
  return axios.get(`${API_URL}/family/${familyId}/shared_recipes`, {
    headers: { Authorization: authToken }
  });
};

class Recipe extends React.Component {
  state = { recipes: [], sharedRecipes: [], loading: true };

  componentDidMount = () => {
    axios
      .all([getFamilyRecipes(), getSharedFamilyRecipes()])
      .then(
        axios.spread((recipeData, sharedRecipeData) => {
          //debugger;
          const recipes = recipeData.data.data;
          const sharedRecipes = sharedRecipeData.data.data;
          //const recipes = recipeData.data.data.concat(
          //sharedRecipeData.data.data
          //);
          this.setState({ recipes, sharedRecipes }, () =>
            setTimeout(() => this.setState({ loading: false }), 2000)
          );
        })
      )
      .catch(err => {
        console.log(err);
      });
  };

  renderRecipes = recipes => {
    return recipes.length ? (
      recipes.map(recipe => {
        return <RecipeCard key={recipe.id} data={recipe} />;
      })
    ) : (
      <div>Nothing here yet!</div>
    );
  };

  render() {
    return (
      <Layout>
        {this.state.loading ? (
          <LoadContainer>
            <img
              alt=""
              src={Loader}
              style={{ height: "300px", width: "300px" }}
            />
          </LoadContainer>
        ) : (
          <>
            <Heading>My Family Recipes</Heading>
            <RecipeList>{this.renderRecipes(this.state.recipes)}</RecipeList>
            {/*
            <Heading>Recipes Shared With Me</Heading>
            <RecipeList>
              {this.renderRecipes(this.state.sharedRecipes)}
						</RecipeList>
						*/}
          </>
        )}
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
