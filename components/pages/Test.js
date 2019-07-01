import React from "react";
import PropTypes from "prop-types";
import Layout from "components/common/Layout/Layout";
import { API_URL, token, userId } from "utils";
import axios from "axios";
import moment from "moment";
import Loader from "img/loader.gif";
import Icon from "components/common/Icon/Icon";
import Tooltip from "components/common/Tooltip/Tooltip";
import Button from "components/common/Button/Button";
import FlashMessage from "components/common/FlashMessage/FlashMessage";
import Rating from "components/common/Rating/Rating";
import { colors } from "styles/css-variables";
import MediaQuery from "components/common/MediaQuery/MediaQuery";
import { phoneMediaQuery } from "styles/css-variables";
import ImagePlaceholder from "img/recipe-placeholder.png";
import {
  LoadContainer,
  PageContainer,
  ImageView,
  RecipeTitle,
  RecipeDetails,
  MetaContainer,
  FamilyName,
  Divider,
  Title,
  ActionIcon,
  ActionContainer,
  Header,
  Footer,
  CategoryContainer,
  CategoryMeta,
  Category,
  DishType,
  HeaderDetails,
  RatingContainer,
  RatingCount,
  Meta,
  IconContainer,
  MetaDetails,
  SubContainer,
  IngredientsContainer,
  DirectionsContainer,
  Ingredient,
  Step,
  SectionTitle,
  IngredientList,
  StepsList,
  Notes,
  ButtonContainer
} from "./TestStyledComponents";
import ShareModal from "./Recipes/ShareModal";
import DeleteModal from "./Recipes/DeleteModal";

const authToken = `Bearer ${token}`;

class Recipe extends React.Component {
  state = {
    recipe: {},
    showShareModal: false,
    showDeleteModal: false,
    showActions: false,
    showMobile: window.matchMedia("(" + phoneMediaQuery + ")").matches,
    loading: true
  };

  handleMediaQueryChange = ({ matches }) => {
    this.setState({ showMobile: matches });
  };

  componentDidMount = () => {
    const id = this.props.match.params.id;
    //const id = 1;
    axios
      .get(`${API_URL}/recipes/${id}`, {
        headers: { Authorization: authToken }
      })
      .then(({ data, status }) => {
        if (status === 401) {
          window.location.replace("/401");
        }
        this.setState({ recipe: data.data, loading: false });
      })
      .catch(err => {
        console.log(err);
        if (err.request.status === 401) {
          window.location.replace("/401");
        }

        this.setState({
          error: "Something went wrong. Please refresh and try again."
        });
      });
  };

  renderIngredients = () => {
    const {
      recipe: { ingredients }
    } = this.state;

    return (
      ingredients &&
      ingredients.map((ing, index) => {
        return (
          <Ingredient key={`ingredient|${index}`}>{`${ing.quantity} ${
            ing.measurement
          } ${ing.name}`}</Ingredient>
        );
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
          <Step key={`dir|${index}`}>
            <span>Step {index + 1}</span> {step}
          </Step>
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

  handleDeleteRecipe = () => {
    const id = this.props.match.params.id;
    console.log("delete");
    this.setState({ showDeleteModal: false });
    axios
      .delete(`${API_URL}/recipes/${id}`, {
        headers: { Authorization: authToken }
      })
      .then(resp => {
        if (resp.status !== 200) {
          this.setState({
            error: "Something went wrong. Please refresh and try again."
          });
        } else {
          window.location.replace("/");
        }
      })
      .catch(err => {
        console.log(err);
        this.setState({
          error: "Something went wrong. Please refresh and try again."
        });
      });
  };

  handleShareSuccess = () => {
    this.setState({
      success: "Your recipe has been shared successfully.",
      showShareModal: false
    });
  };

  handleShareFailure = () => {
    this.setState({
      error: "Something went wrong sharing this recipe. Please try again.",
      showShareModal: false
    });
  };

  handleRatingSubmit = rating => {
    console.log(rating);

    const data = {
      rating: {
        user_id: userId,
        value: rating,
        recipe_id: this.state.recipe.id
      }
    };

    axios
      .post(`${API_URL}/ratings`, data, {
        headers: { Authorization: authToken }
      })
      .then(resp => {
        console.log(resp);
        this.setState({
          success: "Rating Saved Successfully!",
          recipe: { ...this.state.recipe, rating }
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    const {
      recipe,
      showShareModal,
      showDeleteModal,
      loading,
      success,
      error
    } = this.state;
    return loading ? (
      <LoadContainer>
        <img alt="" src={Loader} style={{ height: "300px", width: "300px" }} />
      </LoadContainer>
    ) : (
      <Layout recipe>
        <MediaQuery
          query={phoneMediaQuery}
          onChange={this.handleMediaQueryChange}
        />
        <FlashMessage
          visible={!!error}
          error
          onClose={() => this.setState({ error: "" })}
        >
          {error}
        </FlashMessage>
        <FlashMessage
          visible={!!success}
          success
          onClose={() => this.setState({ success: "" })}
        >
          {success}
        </FlashMessage>
        {showShareModal && (
          <ShareModal
            onCancelClick={() => this.setState({ showShareModal: false })}
            onSuccess={this.handleShareSuccess}
            onFailure={this.handleShareFailure}
            recipeId={recipe.id}
          />
        )}
        {showDeleteModal && (
          <DeleteModal
            onDeleteClick={this.handleDeleteRecipe}
            onCancelClick={() => this.setState({ showDeleteModal: false })}
          />
        )}

        <PageContainer>
          <ImageView url={recipe.image_url || ImagePlaceholder}>
            <MetaContainer>
              <RecipeTitle>
                <Title>{recipe.title || ""}</Title>
                <Divider>
                  <hr />
                </Divider>
                <FamilyName>{recipe.family.display_name || ""}</FamilyName>
              </RecipeTitle>
              <ActionContainer>
                <Tooltip type="arrow" position="top" tip="Share Recipe">
                  <ActionIcon
                    name="share"
                    onClick={() => this.setState({ showShareModal: true })}
                    color={colors.white}
                    size="32px"
                  />
                </Tooltip>
                <Tooltip type="arrow" position="top" tip="Edit Recipe">
                  <ActionIcon
                    name="edit"
                    onClick={() =>
                      window.location.replace(`/recipes/${recipe.id}/edit`)
                    }
                    color={colors.white}
                    size="32px"
                  />
                </Tooltip>
                <Tooltip type="arrow" position="top" tip="Delete Recipe">
                  <ActionIcon
                    name="trash"
                    onClick={() => this.setState({ showDeleteModal: true })}
                    color={colors.white}
                    size="32px"
                  />
                </Tooltip>
              </ActionContainer>
            </MetaContainer>
          </ImageView>
          <RecipeDetails>
            <Header>
              <CategoryContainer>
                <Icon
                  style={{ marginRight: "16px" }}
                  name="tags"
                  color={colors.black}
                />
                <CategoryMeta>
                  <Category>{recipe.category.name || "category"}</Category>
                  <DishType>{recipe.dish_type.name || "dish type"}</DishType>
                </CategoryMeta>
              </CategoryContainer>
              <HeaderDetails>
                <Meta>
                  <IconContainer>
                    <Icon name="clock" color={colors.offGray} />
                  </IconContainer>
                  <MetaDetails>
                    <div>{recipe.prep_time || "-"}</div>
                    <span>Prep Time</span>
                  </MetaDetails>
                </Meta>
                <Meta>
                  <IconContainer>
                    <Icon name="clockAlarm" color={colors.offGray} />
                  </IconContainer>
                  <MetaDetails>
                    <div>{recipe.cook_time || "-"}</div>
                    <span>Cook Time</span>
                  </MetaDetails>
                </Meta>

                <Meta>
                  <IconContainer>
                    <Icon name="utensils" color={colors.offGray} />
                  </IconContainer>
                  <MetaDetails>
                    <div>{recipe.servings || "-"}</div>
                    <span>Servings</span>
                  </MetaDetails>
                </Meta>
                <Meta>
                  <IconContainer>
                    <Icon name="heartbeat" color={colors.offGray} />
                  </IconContainer>
                  <MetaDetails>
                    <div>{recipe.calories || "-"}</div>
                    <span>Calories</span>
                  </MetaDetails>
                </Meta>

                <RatingContainer>
                  <Rating
                    value={recipe.rating}
                    rateable
                    onSubmit={this.handleRatingSubmit}
                  />
                  <RatingCount>{recipe.rating_count || 0} Reviews</RatingCount>
                </RatingContainer>
              </HeaderDetails>
            </Header>
            <SubContainer>
              <IngredientsContainer>
                <SectionTitle>Ingredients</SectionTitle>
                <IngredientList>{this.renderIngredients()}</IngredientList>

                <ButtonContainer>
                  <Tooltip
                    type="arrow"
                    position="top"
                    tip="This feature is coming soon."
                  >
                    <Button disabled onClick={() => console.log("clicked")}>
                      Add to Shopping List
                    </Button>
                  </Tooltip>
                </ButtonContainer>
              </IngredientsContainer>
              <DirectionsContainer>
                <SectionTitle>Directions</SectionTitle>
                <StepsList>{this.renderDirections()}</StepsList>
                <SectionTitle>Recipe Notes</SectionTitle>
                <Notes>{recipe.notes || ""}</Notes>
              </DirectionsContainer>
            </SubContainer>
          </RecipeDetails>
          <Footer />
        </PageContainer>
      </Layout>
    );
  }
}

Recipe.propTypes = {
  recipe: PropTypes.array
};

Recipe.defaultProps = {
  recipe: []
};

export default Recipe;
