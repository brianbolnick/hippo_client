import React from "react";
import Layout from "components/Layout/Layout";
import RecipeCard from "components/Recipe/RecipeCard";
import { API_URL, token, familyId } from "utils";
import axios from "axios";
import { RecipeList } from "./styles";
import Loader from 'img/loader.gif';
import styled from 'styled-components';

const LoadContainer = styled.div`
	display: flex;
	height: 100%;
	width: 100%;
	justify-content: center;
	align-items: center;
`

class Recipe extends React.Component {
	state = { recipes: [], loading: true };

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
    const { recipes} = this.state;

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
				{this.state.loading ? 
						<LoadContainer><img src={Loader} style={{height: '300px', width: '300px'}}/></LoadContainer>
				:
        <RecipeList>{this.renderRecipes()}</RecipeList>
				}
      </Layout>
    );
  }
}

export default Recipe;
