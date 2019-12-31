import React, { useState, useEffect } from "react";
import axios from "axios";
import get from "lodash/get";
import { API_URL, token, timeShortener } from "utils";
import { useQuery } from "@apollo/react-hooks";
import FlashMessage from "components/common/FlashMessage/FlashMessage";
import Icon from "components/common/Icon/Icon";
import Layout from "components/common/Layout/Layout";
import MediaQuery from "components/common/MediaQuery/MediaQuery";
import { colors } from "styles/css-variables";
import { tabletMediaQuery } from "styles/css-variables";
import ImagePlaceholder from "img/recipe-placeholder.png";
import Loader from "img/burger.gif";
import ShareModal from "../Modals/ShareModal";
import DeleteModal from "../Modals/DeleteModal";
import { createParsedIngredients } from "./helpers";
import {
  ActionContainer,
  ActionIcon,
  Category,
  CategoryContainer,
  CategoryMeta,
  Container,
  DishType,
  FamilyName,
  ImageContainer,
  Ingredient,
  IngredientsContainer,
  IngredientsWrapper,
  LoadContainer,
  MetaData,
  Notes,
  NotesContainer,
  SubTitle,
  StepsContainer,
  Step,
  Time,
  TimeContainer,
  TimeGroup,
  TimeLabel,
  Title,
  Quantity
} from "./RecipeStyledComponents";
import GET_RECIPE_QUERY from "./getRecipeQuery";
import ServingsForm from "./ServingsForm";

const authToken = `Bearer ${token}`;

const Recipe = ({ match }) => {
  //TODO: handle errors
  const recipeId = parseInt(match.params.id);
  const { data, networkStatus } = useQuery(GET_RECIPE_QUERY, {
    variables: { recipeId }
  });

  const recipe = get(data, "recipeQuery", {});
  const ingredients = get(recipe, "rawIngredients", []);
  const servings = get(recipe, "servings", 1);

  const [parsedIngredients, setParsedIngredients] = useState({});
  const [showShareModal, setShowShareModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [showMobile, setShowMobile] = useState(
    window.matchMedia("(" + tabletMediaQuery + ")").matches
  );

  useEffect(() => {
    const parsedIngs = createParsedIngredients(ingredients);
    console.log(parsedIngs);
    setParsedIngredients(parsedIngs);
  }, [recipe]);

  const handleMediaQueryChange = ({ matches }) => {
    setShowMobile(matches);
  };

  const renderIngredients = () => {
    return (
      ingredients &&
      ingredients.map((ing, index) => {
        const parsedIng = parsedIngredients[ing];
        return (
          parsedIng && (
            <Ingredient key={`ingredient|${index}`}>
              <Quantity>{`${parsedIng.quantity} ${parsedIng.unit} `}</Quantity>
              {parsedIng.ingredient}
            </Ingredient>
          )
        );
      })
    );
  };

  const renderSteps = () => {
    const { steps } = recipe;

    return (
      steps &&
      steps.map((step, index) => {
        return (
          <Step key={`dir|${index}`}>
            <span>{index + 1}</span> {step}
          </Step>
        );
      })
    );
  };

  const renderFamilyName = () => {
    const { family } = recipe;
    return family && family.displayName;
  };

  const handleDeleteRecipe = () => {
    const id = match.params.id;
    setShowDeleteModal(false);
    axios
      .delete(`${API_URL}/recipes/${id}`, {
        headers: { Authorization: authToken }
      })
      .then(resp => {
        if (resp.status !== 200) {
          setError("Something went wrong. Please refresh and try again.");
        } else {
          window.location.replace("/");
        }
      })
      .catch(err => {
        console.log(err);
        setError("Something went wrong. Please refresh and try again.");
      });
  };

  const handleShareSuccess = () => {
    setSuccess("Your recipe has been shared successfully.");
    setShowShareModal(false);
  };

  const handleShareFailure = () => {
    setError("Something went wrong sharing this recipe. Please try again.");
    setShowShareModal(false);
  };

  const formatTime = time => {
    const tempTimeArr = time.split(" ");
    const formattedDuration = timeShortener(tempTimeArr[1]);
    return `${tempTimeArr[0]} ${formattedDuration}`;
  };

  const handleServingsChange = newServingFactor => {
    const newParsedIngredients = createParsedIngredients(
      ingredients,
      newServingFactor
    );

    setParsedIngredients(newParsedIngredients);
  };

  return networkStatus !== 7 ? (
    <LoadContainer>
      <img alt="" src={Loader} style={{ height: "300px", width: "300px" }} />
    </LoadContainer>
  ) : (
    <Layout recipeMobile={showMobile}>
      <MediaQuery query={tabletMediaQuery} onChange={handleMediaQueryChange} />
      <FlashMessage visible={!!error} error onClose={() => setError("")}>
        {error}
      </FlashMessage>
      <FlashMessage visible={!!success} success onClose={() => setSuccess("")}>
        {success}
      </FlashMessage>

      {showShareModal && (
        <ShareModal
          onCancelClick={() => setShowShareModal(false)}
          onSuccess={handleShareSuccess}
          onFailure={handleShareFailure}
          recipeId={recipe.id}
        />
      )}
      {showDeleteModal && (
        <DeleteModal
          onDeleteClick={handleDeleteRecipe}
          onCancelClick={() => setShowDeleteModal(false)}
        />
      )}
      <Container>
        <ImageContainer url={recipe.imageUrl || ImagePlaceholder}>
          <Title>{recipe.title}</Title>
          <FamilyName>{renderFamilyName()}</FamilyName>
        </ImageContainer>

        <MetaData>
          <CategoryContainer>
            <Icon
              style={{ marginRight: "16px" }}
              name="tags"
              color={colors.black}
            />
            <CategoryMeta>
              <Category>{recipe.category.name || "Category"}</Category>
              <DishType>{recipe.dishType.name || "Dish Type"}</DishType>
            </CategoryMeta>
          </CategoryContainer>
          <TimeContainer>
            <TimeGroup>
              <Time>{formatTime(recipe.prepTime)}</Time>
              <TimeLabel>Prep</TimeLabel>
            </TimeGroup>
            <TimeGroup>
              <Time>{formatTime(recipe.cookTime)}</Time>
              <TimeLabel>Cook</TimeLabel>
            </TimeGroup>
          </TimeContainer>
          <ActionContainer>
            <ActionIcon
              name="share"
              onClick={() => setShowShareModal(true)}
              color={colors.black}
              size="24px"
            />
            {/*
            <ActionIcon
              onClick={() =>
                window.location.replace(`/recipes/${recipe.id}/edit`)
              }
              color={colors.black}
              name="edit"
              size="24px"
            />
						*/}
            <ActionIcon
              onClick={() => setShowDeleteModal(true)}
              color={colors.black}
              name="trash"
              size="24px"
            />
          </ActionContainer>
        </MetaData>

        {recipe.notes && (
          <NotesContainer>
            <SubTitle>Notes</SubTitle>
            <Notes>{recipe.notes}</Notes>
          </NotesContainer>
        )}

        <IngredientsContainer>
          <SubTitle>Ingredients</SubTitle>
          <ServingsForm
            onChange={handleServingsChange}
            currentServings={parseInt(servings)}
          />
          <IngredientsWrapper>{renderIngredients()}</IngredientsWrapper>
        </IngredientsContainer>

        <StepsContainer>
          <SubTitle>Directions</SubTitle>
          {renderSteps()}
        </StepsContainer>
      </Container>
    </Layout>
  );
};

export default Recipe;
