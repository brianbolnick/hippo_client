import React from "react";
import {
  Card,
  RecipeImage,
  Title,
  MetaData,
  Footer,
  Content,
  RatingCount
} from "./Styles";

const RecipeCard = ({ data }) => {
  const renderRecipeAddedIcon = () => {
    return <RatingCount>{data.rating || "-"}</RatingCount>;
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
