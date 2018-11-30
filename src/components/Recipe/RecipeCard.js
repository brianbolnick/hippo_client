import React from "react";
import {
  Card,
  RecipeImage,
  Title,
  MetaData,
  Footer,
  Content,
  AddIcon
} from "./Styles";
import Icon from "../Icon/Icon";

const RecipeCard = ({ data }) => {
  const renderRecipeAddedIcon = () => {
    return (
      <AddIcon onClick={() => console.log("clicked", data.id)}>
        <Icon name="addRecipe" />
      </AddIcon>
    );
  };

  return (
    <Card>
      <RecipeImage url={data.image_url}>{renderRecipeAddedIcon()}</RecipeImage>
      <Content>
        <Title>{data.title}</Title>
        <MetaData>{data.category.name}</MetaData>
      </Content>
      <Footer>{data.user.name}</Footer>
    </Card>
  );
};

export default RecipeCard;
