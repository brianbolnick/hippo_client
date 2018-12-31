import React from "react";
import Layout from "components/common/Layout/Layout";
import { API_URL, token } from "utils";
import axios from "axios";
import moment from "moment";
import Loader from "img/loader.gif";
import ShareModal from "./ShareModal";
import DeleteModal from "./DeleteModal";
import {
  CategoryContainer,
  RecipeHeader,
  SettingsButton,
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
  RatingCount,
  FloatingActionButtons,
  FabContainer,
  LoadContainer
} from "./styles";
import Icon from "components/common/Icon/Icon";
import FlashMessage from "components/common/FlashMessage/FlashMessage";
import Rating from "components/common/Rating/Rating";
import ActionButton from "./ActionButton";
import { colors } from "styles/css-variables";
import MediaQuery from "components/common/MediaQuery/MediaQuery";
import { phoneMediaQuery } from "styles/css-variables";

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
    axios
      .get(`${API_URL}/recipes/${id}`, {
        headers: { Authorization: authToken }
      })
      .then(({ data }) => {
        this.setState({ recipe: data.data, loading: false });
      })
      .catch(err => {
        console.log(err);
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
            <span>{index + 1}</span> {step}
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
  render() {
    const {
      recipe,
      showActions,
      showShareModal,
      showDeleteModal,
      showMobile,
      loading,
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
        <FlashMessage visible={!!error} error>
          {error}
        </FlashMessage>

        {showShareModal && (
          <ShareModal
            onCloseRequest={() => this.setState({ showShareModal: false })}
          />
        )}
        {showDeleteModal && (
          <DeleteModal
            onDeleteClick={this.handleDeleteRecipe}
            onCancelClick={() => this.setState({ showDeleteModal: false })}
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
            <FabContainer>
              <SettingsButton
                onClick={() =>
                  this.setState({ showActions: !this.state.showActions })
                }
              >
                <Icon name="cog" />
              </SettingsButton>
              {showActions && (
                <FloatingActionButtons>
                  <ActionButton
                    icon="share"
                    onClick={() => this.setState({ showShareModal: true })}
                    color={colors.green}
                    tooltip="Share Recipe"
                    tipPosition={showMobile ? "top" : "left"}
                  />
                  <ActionButton
                    icon="edit"
                    to={`/recipes/${recipe.id}/edit`}
                    color={colors.yellow}
                    tooltip="Edit Recipe"
                    tipPosition={showMobile ? "top" : "left"}
                  />
                  <ActionButton
                    icon="closeOpenCircle"
                    onClick={() => this.setState({ showDeleteModal: true })}
                    color={colors.red}
                    tooltip="Delete Recipe"
                    tipPosition={showMobile ? "top" : "left"}
                  />
                </FloatingActionButtons>
              )}
            </FabContainer>
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
