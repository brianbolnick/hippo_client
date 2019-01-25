import React from "react";
import { colors } from "styles/css-variables";
import {
  Card,
  RecipeImage,
  Title,
  MetaData,
  Footer,
  Content,
  RatingCount,
  LinkWrapper,
  Rating
} from "./Styles";
import Icon from "components/common/Icon/Icon";
import PlaceholderImage from "img/recipe-placeholder.png";

const RecipeCard = ({ data }) => {
  const renderRecipeAddedIcon = () => {
    return (
      <RatingCount>
        <Icon name="star" color={colors.yellow} />
        <Rating>{(data.rating && data.rating.toFixed(1)) || "-"}</Rating>
      </RatingCount>
    );
  };

  return (
    <Card>
      <LinkWrapper to={`/recipes/${data.id}`}>
        <RecipeImage url={data.image_url || PlaceholderImage}>
          {renderRecipeAddedIcon()}
        </RecipeImage>
        <Content>
          <Title>{data.title}</Title>
          <MetaData>{data.category.name}</MetaData>
        </Content>
        <Footer>{data.user.name}</Footer>
      </LinkWrapper>
    </Card>
  );
};

export default RecipeCard;
