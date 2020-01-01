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
  Title
} from "./RecipeStyledComponents";

const Recipe = ({ recipe }) => {
  const renderIngredients = () => {
    return (
      recipe.rawIngredients &&
      recipe.rawIngredients.map((ing, index) => {
        return <Ingredient key={`ingredient|${index}`}>{ing}</Ingredient>;
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
    return family && family.display_name;
  };

  return (
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
            <Category>
              {(recipe.category && recipe.category.name) || "Category"}
            </Category>
            <DishType>
              {(recipe.dishType && recipe.dishType.name) || "Dish Type"}
            </DishType>
          </CategoryMeta>
        </CategoryContainer>
        <TimeContainer>
          <TimeGroup>
            <Time>{recipe.prepTime}</Time>
            <TimeLabel>Prep</TimeLabel>
          </TimeGroup>
          <TimeGroup>
            <Time>{recipe.cookTime}</Time>
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
