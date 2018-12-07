import React from "react";
import Layout from "components/Layout/Layout";
import { API_URL, token } from "utils";
import axios from "axios";
import {
  DetailsContainer,
  ShowContainer,
  ImageBlock,
  Title,
  FamilyName,
  Meta,
  MetaContainer,
  IngredientsContainer,
  Ingredient,
  DirectionsContainer,
  Direction,
  SubTitle
} from "./styles";
class Recipe extends React.Component {
  state = { recipe: {} };

  componentDidMount = () => {
    const authToken = `Bearer ${token}`;

    const id = this.props.match.params.id;
    axios
      .get(`${API_URL}/recipes/${id}`, {
        headers: { Authorization: authToken }
      })
      .then(({ data }) => {
        this.setState({ recipe: data.data });
      })
      .catch(err => {
        console.log(err);
      });
  };

  renderIngredients = () => {
    const {
      recipe: { ingredients }
    } = this.state;

    return (
      ingredients &&
      ingredients.map((ing, index) => {
        return <Ingredient key={`ingredient|${index}`}>{ing}</Ingredient>;
      })
    );
  };

  renderDirections = () => {
    const {
      recipe: { steps }
    } = this.state;

    return (
      steps &&
      steps.map((step, index) => {
        return <Direction key={`dir|${index}`}>{step}</Direction>;
      })
    );
  };

  renderFamilyName = () => {
    const {
      recipe: { family }
    } = this.state;
    return family && family.display_name;
  };

  render() {
    const { recipe } = this.state;
    console.log(recipe);
    return (
      <Layout>
        <ShowContainer>
          <ImageBlock url={recipe.image_url} />
          <DetailsContainer>
            <Title>{recipe.title}</Title>
            <FamilyName>{this.renderFamilyName()}</FamilyName>
            <MetaContainer>
              <Meta>
                <span>Prep Time:</span> {recipe.prep_time}
              </Meta>
              <Meta>
                <span>Servings:</span> {recipe.servings}
              </Meta>
              <Meta>
                <span>Cook Time:</span> {recipe.cook_time}
              </Meta>
              <Meta>
                <span>Calories:</span> {recipe.calories}
              </Meta>
            </MetaContainer>
            <SubTitle>Ingredients</SubTitle>
            <IngredientsContainer>
              {this.renderIngredients()}
            </IngredientsContainer>
            <SubTitle>Directions</SubTitle>
            <DirectionsContainer>{this.renderDirections()}</DirectionsContainer>
          </DetailsContainer>
        </ShowContainer>
      </Layout>
    );
  }
}

export default Recipe;
