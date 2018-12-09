import React from "react";
import Layout from "components/Layout/Layout";
import { API_URL, token } from "utils";
import axios from "axios";
import moment from "moment";
import ShareModal from "./ShareModal";
import {
  CategoryContainer,
  RecipeHeader,
  ShareIcon,
  Category,
  Date,
  Details,
  DetailsContainer,
  Direction,
  Divider,
  DirectionsContainer,
  FamilyName,
  Footer,
  IconContainer,
  ImageBlock,
  Ingredient,
  IngredientsContainer,
  Meta,
  MetaDetails,
  ShowContainer,
  SubTitle,
  Title,
  HeaderGroup,
  RatingContainer,
  RatingCount
} from "./styles";
import Icon from "components/Icon/Icon";
import Rating from "components/Rating/Rating";
import { colors } from "styles/css-variables";
import MediaQuery from "components/MediaQuery/MediaQuery";
import { phoneMediaQuery } from "styles/css-variables";

class Recipe extends React.Component {
  state = {
    recipe: {},
    showShareModal: false,
    showMobile: window.matchMedia("(" + phoneMediaQuery + ")").matches
  };

  handleMediaQueryChange = ({ matches }) => {
    this.setState({ showMobile: matches });
  };

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
            <span>{index + 1}.</span> {step}
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

  renderCategoryName = () => {
    const {
      recipe: { category }
    } = this.state;
    return category && category.name;
  };

  renderDate = () => {
    const {
      recipe: { created_at }
    } = this.state;
    return created_at && moment(created_at).format("MMM Do, YYYY");
  };

  render() {
    const { recipe, showShareModal, showMobile } = this.state;
    console.log(recipe);
    return (
      <Layout recipe>
        <MediaQuery
          query={phoneMediaQuery}
          onChange={this.handleMediaQueryChange}
        />
        {showShareModal && (
          <ShareModal
            onCloseRequest={() => this.setState({ showShareModal: false })}
          />
        )}
        <ShowContainer>
          <ImageBlock url={recipe.image_url}>
            <Title>{recipe.title}</Title>
            <Divider>
              <hr />
            </Divider>
            <FamilyName>{this.renderFamilyName()}</FamilyName>
          </ImageBlock>
          <DetailsContainer>
            <Details>
              {!showMobile && (
                <RecipeHeader>
                  <IconContainer>
                    <Icon name="tags" color={colors.black} />
                  </IconContainer>
                  <HeaderGroup>
                    <CategoryContainer>
                      <Category>{this.renderCategoryName()}</Category>
                      <Date>{this.renderDate()}</Date>
                    </CategoryContainer>
                    <RatingContainer>
                      <Rating value={recipe.rating} />
                      <RatingCount>
                        {recipe.rating_count || 0} Reviews
                      </RatingCount>
                    </RatingContainer>
                  </HeaderGroup>
                </RecipeHeader>
              )}
              <SubTitle>Notes</SubTitle>
              <DirectionsContainer>{recipe.notes}</DirectionsContainer>
              <SubTitle>Directions</SubTitle>
              <DirectionsContainer>
                {this.renderDirections()}
              </DirectionsContainer>
            </Details>
            <IngredientsContainer>
              {showMobile && (
                <RecipeHeader>
                  <IconContainer>
                    <Icon name="tags" color={colors.black} />
                  </IconContainer>
                  <HeaderGroup>
                    <CategoryContainer>
                      <Category>{this.renderCategoryName()}</Category>
                      <Date>{this.renderDate()}</Date>
                    </CategoryContainer>
                    <RatingContainer>
                      <Rating value={recipe.rating} />
                      <RatingCount>
                        {recipe.rating_count || 0} Reviews
                      </RatingCount>
                    </RatingContainer>
                  </HeaderGroup>
                </RecipeHeader>
              )}

              <SubTitle>Ingredients</SubTitle>
              {this.renderIngredients()}
            </IngredientsContainer>
            <ShareIcon onClick={() => this.setState({ showShareModal: true })}>
              <Icon name="share" />
            </ShareIcon>
            {!showMobile && (
              <Footer>
                <Meta>
                  <IconContainer>
                    <Icon name="clock" color={colors.white} />
                  </IconContainer>
                  <MetaDetails>
                    <div>{recipe.prep_time || "-"}</div>
                    <span>Prep Time</span>
                  </MetaDetails>
                </Meta>
                <Meta>
                  <IconContainer>
                    <Icon name="clockAlarm" color={colors.white} />
                  </IconContainer>
                  <MetaDetails>
                    <div>{recipe.cook_time || "-"}</div>
                    <span>Cook Time</span>
                  </MetaDetails>
                </Meta>

                <Meta>
                  <IconContainer>
                    <Icon name="utensils" color={colors.white} />
                  </IconContainer>
                  <MetaDetails>
                    <div>{recipe.servings || "-"}</div>
                    <span>Servings</span>
                  </MetaDetails>
                </Meta>
                <Meta>
                  <IconContainer>
                    <Icon name="heartbeat" color={colors.white} />
                  </IconContainer>
                  <MetaDetails>
                    <div>{recipe.calories || "-"}</div>
                    <span>Calories</span>
                  </MetaDetails>
                </Meta>
              </Footer>
            )}
          </DetailsContainer>
        </ShowContainer>
      </Layout>
    );
  }
}

export default Recipe;
