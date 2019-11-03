import React from "react";
import Icon from "components/common/Icon/Icon";
import { colors } from "styles/css-variables";
import ImagePlaceholder from "img/recipe-placeholder.png";
import {
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

const Recipe = ({ recipe }) => {
  const renderIngredients = () => {
    return recipe.ingredients.map((ing, index) => {
      const quantity = parseInt(ing.quantity) === 0 ? "" : ing.quantity;
      return (
        <Ingredient key={`ingredient|${index}`}>
          <Quantity>{`${quantity} ${ing.measurement} `}</Quantity>
          {ing.name}
        </Ingredient>
      );
    });
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
    return family && family.display_name;
  };

  return (
    <Container>
      <ImageContainer
        url={recipe.image_url || recipe.imageUrl || ImagePlaceholder}
      >
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
            <Category>
              {(recipe.category && recipe.category.name) || "Category"}
            </Category>
            <DishType>
              {(recipe.dish_type && recipe.dish_type.name) || "Dish Type"}
            </DishType>
          </CategoryMeta>
        </CategoryContainer>
        <TimeContainer>
          <TimeGroup>
            <Time>{recipe.prep_time}</Time>
            <TimeLabel>Prep</TimeLabel>
          </TimeGroup>
          <TimeGroup>
            <Time>{recipe.cook_time}</Time>
            <TimeLabel>Cook</TimeLabel>
          </TimeGroup>
        </TimeContainer>
      </MetaData>

      {recipe.notes && (
        <NotesContainer>
          <SubTitle>Notes</SubTitle>
          <Notes>{recipe.notes}</Notes>
        </NotesContainer>
      )}

      <IngredientsContainer>
        <SubTitle>Ingredients</SubTitle>
        <IngredientsWrapper>{renderIngredients()}</IngredientsWrapper>
      </IngredientsContainer>

      <StepsContainer>
        <SubTitle>Directions</SubTitle>
        {renderSteps()}
      </StepsContainer>
    </Container>
  );
};

export default Recipe;
