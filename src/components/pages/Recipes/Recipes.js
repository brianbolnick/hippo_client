import React from "react";
import Layout from "components/common/Layout/Layout";
import RecipeCard from "components/common/Recipe/RecipeCard";
import { API_URL, token, familyId } from "utils";
import axios from "axios";
import { RecipeList } from "./styles";
import Loader from "img/loader.gif";
import styled from "styled-components";
import Button from "components/common/Button/Button";
import { Link } from "react-router-dom";

const authToken = `Bearer ${token}`;

const LoadContainer = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  justify-content: center;
  align-items: center;
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
          let recipes = recipeData.data.data;
          //const recipes = recipeData.data.data.concat(
          //sharedRecipeData.data.data
          //);
          this.setState({ recipes }, () =>
            setTimeout(() => this.setState({ loading: false }), 3000)
          );
        })
      )
      .catch(err => {
        console.log(err);
      });
  };

  renderRecipes = () => {
    const { recipes } = this.state;

    return recipes.length ? (
      recipes.map(recipe => {
        return <RecipeCard key={recipe.id} data={recipe} />;
      })
    ) : (
      <div>Nothing here yet! Create something new!</div>
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
          <RecipeList>{this.renderRecipes()}</RecipeList>
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
