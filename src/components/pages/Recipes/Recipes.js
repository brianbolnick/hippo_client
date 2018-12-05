import React from "react";
import Layout from "components/Layout/Layout";
import RecipeCard from "components/Recipe/RecipeCard";
import { API_URL, token, familyId } from "utils";
import axios from "axios";
import { RecipeList } from "./styles";

class Recipe extends React.Component {
  state = { recipes: [] };

  componentDidMount = () => {
    const authToken = `Bearer ${token}`;
    axios
      .get(`${API_URL}/family/${familyId}/recipes`, {
        headers: { Authorization: authToken }
      })
      .then(({ data }) => {
        this.setState({ recipes: data.data });
      })
      .catch(err => {
        console.log(err);
      });
  };

  renderRecipes = () => {
    const { recipes } = this.state;

    return (
      recipes.length &&
      recipes.map(recipe => {
        return <RecipeCard key={recipe.id} data={recipe} />;
      })
    );
  };

  render() {
    return (
      <Layout>
        <RecipeList>{this.renderRecipes()}</RecipeList>
      </Layout>
    );
  }
}

export default Recipe;
