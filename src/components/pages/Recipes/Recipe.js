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
  Footer,
  IngredientsContainer,
  Ingredient,
  DirectionsContainer,
  Direction,
  SubTitle,
  Details,
  IconContainer,
  MetaDetails
} from "./styles";
import Icon from "components/Icon/Icon";
import { colors } from "styles/css-variables";
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
        return <Ingredient key={`ingredient|${index}`}>- {ing}</Ingredient>;
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
        return (
          <Direction key={`dir|${index}`}>
            {index + 1}. {step}
          </Direction>
        );
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
      <Layout recipe>
        <ShowContainer>
          <ImageBlock url={recipe.image_url} />
          <DetailsContainer>
            <Details>
              <Title>{recipe.title}</Title>
              <FamilyName>{this.renderFamilyName()}</FamilyName>
              <SubTitle>Directions</SubTitle>
              <DirectionsContainer>
                {this.renderDirections()}
              </DirectionsContainer>
            </Details>
            <IngredientsContainer>
              <SubTitle>Ingredients</SubTitle>
              {this.renderIngredients()}
            </IngredientsContainer>
            <Footer>
              <Meta>
                <IconContainer>
                  <Icon name="clock" color={colors.darkGray} />
                </IconContainer>
                <MetaDetails>
                  <div>{recipe.prep_time || "-"}</div>
                  <span>Prep Time</span>
                </MetaDetails>
              </Meta>
              <Meta>
                <IconContainer>
                  <Icon name="clockAlarm" color={colors.darkGray} />
                </IconContainer>
                <MetaDetails>
                  <div>{recipe.cook_time || "-"}</div>
                  <span>Cook Time</span>
                </MetaDetails>
              </Meta>

              <Meta>
                <IconContainer>
                  <Icon name="utensils" color={colors.darkGray} />
                </IconContainer>
                <MetaDetails>
                  <div>{recipe.servings || "-"}</div>
                  <span>Servings</span>
                </MetaDetails>
              </Meta>
              <Meta>
                <IconContainer>
                  <Icon name="heartbeat" color={colors.darkGray} />
                </IconContainer>
                <MetaDetails>
                  <div>{recipe.calories || "-"}</div>
                  <span>Calories</span>
                </MetaDetails>
              </Meta>
            </Footer>
          </DetailsContainer>
        </ShowContainer>
      </Layout>
    );
  }
}

export default Recipe;
