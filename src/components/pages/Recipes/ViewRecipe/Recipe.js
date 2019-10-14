import React, { useState, useEffect } from "react";
import axios from "axios";
import { fraction, multiply } from "mathjs";
import { API_URL, token, timeShortener } from "utils";
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
import ServingsForm from "./ServingsForm";

const authToken = `Bearer ${token}`;

const Recipe = ({ match }) => {
  const [recipe, setRecipe] = useState({});
  const [ingredientsList, setIngredientsList] = useState([]);
  const [showShareModal, setShowShareModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [showMobile, setShowMobile] = useState(
    window.matchMedia("(" + tabletMediaQuery + ")").matches
  );

  useEffect(() => {
    if (!Object.keys(recipe).length) {
      const id = match.params.id;
      axios
        .get(`${API_URL}/recipes/${id}`, {
          headers: { Authorization: authToken }
        })
        .then(({ data, status }) => {
          if (status === 401) {
            window.location.replace("/401");
          }
          setRecipe(data.data);
          setIngredientsList(data.data.ingredients);
          setLoading(false);
        })
        .catch(err => {
          console.log(err);
          if (err.request.status === 401) {
            window.location.replace("/401");
          }

          setError("Something went wrong. Please refresh and try again.");
        });
    }
  }, []);

  const handleMediaQueryChange = ({ matches }) => {
    setShowMobile(matches);
  };

  const renderIngredients = () => {
    return (
      ingredientsList &&
      ingredientsList.map((ing, index) => {
        const quantity = parseInt(ing.quantity) === 0 ? "" : ing.quantity;
        return (
          <Ingredient key={`ingredient|${index}`}>
            <Quantity>{`${quantity} ${ing.measurement} `}</Quantity>
            {ing.name}
          </Ingredient>
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
            <span>Step {index + 1}</span> {step}
          </Step>
        );
      })
    );
  };

  const renderFamilyName = () => {
    const { family } = recipe;
    return family && family.display_name;
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

  const getQuantityType = quantity => {
    if (fraction(quantity).d === 1) return "number";
    return "fraction";
  };

  const calculateQuantity = (quantity, serving, type) => {
    if (type === "fraction") {
      const frac = fraction(quantity);
      const value = multiply(frac, serving);
      return convertImproperFraction(value);
    }

    const num = quantity * serving;
    return Math.round(num * 2) / 2;
  };

  const updateIngredients = (ingredients, newServings) => {
    return ingredients.map(ing => {
      const type = getQuantityType(ing.quantity);
      const quantity = calculateQuantity(ing.quantity, newServings, type);
      return {
        ...ing,
        quantity
      };
    });
  };

  const convertImproperFraction = fraction => {
    const numerator = fraction.n;
    const denominator = fraction.d;

    if (numerator % denominator === 0) {
      return numerator / denominator;
    }

    const mix = Math.floor(numerator / denominator);
    const newNumerator = numerator % denominator;
    return `${displayMix(mix)}${newNumerator}/${denominator}`;
  };

  const displayMix = mix => {
    if (mix) return `${mix} `;
    return "";
  };

  const handleServingsChange = newServings => {
    const newIngredientsList = updateIngredients(
      [...recipe.ingredients],
      newServings
    );
    setIngredientsList(newIngredientsList);
  };

  return loading ? (
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
        <ImageContainer url={recipe.image_url || ImagePlaceholder}>
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
              <DishType>{recipe.dish_type.name || "Dish Type"}</DishType>
            </CategoryMeta>
          </CategoryContainer>
          <TimeContainer>
            <TimeGroup>
              <Time>{formatTime(recipe.prep_time)}</Time>
              <TimeLabel>Prep</TimeLabel>
            </TimeGroup>
            <TimeGroup>
              <Time>{formatTime(recipe.cook_time)}</Time>
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
            <ActionIcon
              onClick={() =>
                window.location.replace(`/recipes/${recipe.id}/edit`)
              }
              color={colors.black}
              name="edit"
              size="24px"
            />
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
            currentServings={recipe.servings}
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
