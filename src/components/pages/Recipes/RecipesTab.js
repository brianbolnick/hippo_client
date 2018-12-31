import React from "react";
import RecipeCard from "components/common/Recipe/RecipeCard";
import { API_URL, token, familyId } from "utils";
import axios from "axios";
import { RecipeList } from "./styles";
import Loader from "img/loader.gif";
import styled from "styled-components";
const authToken = `Bearer ${token}`;

const LoadContainer = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

class RecipesTab extends React.Component {
  state = { recipes: [], sharedRecipes: [], loading: true };

  componentDidMount = () => {
    const { recipeType } = this.props;
    axios
      .get(`${API_URL}/family/${familyId}/${recipeType}`, {
        headers: { Authorization: authToken }
      })
      .then(({ data }) => {
        const recipes = data.data;
        this.setState({ recipes }, () =>
          setTimeout(() => this.setState({ loading: false }), 2000)
        );
      })
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
    return this.state.loading ? (
      <LoadContainer>
        <img alt="" src={Loader} style={{ height: "300px", width: "300px" }} />
      </LoadContainer>
    ) : (
      <RecipeList>{this.renderRecipes(this.state.recipes)}</RecipeList>
    );
  }
}

export default RecipesTab;
