import React from "react";
//import { colors } from "styles/css-variables";
import {
  Card,
  RecipeImage,
  Title,
  MetaData,
  Footer,
  Content,
  //RatingCount,
  LinkWrapper,
  //Rating
} from "./Styles";
//import Icon from "components/common/Icon/Icon";
import Rating from "components/common/Rating/Rating";
import PlaceholderImage from "img/recipe-placeholder.png";

const RecipeCard = ({ data }) => {
  //const renderRecipeAddedIcon = () => {
    //return (
      //<RatingCount>
        //<Icon name="star" color={colors.yellow} />
        //<Rating>{(data.rating && data.rating.toFixed(1)) || "-"}</Rating>
      //</RatingCount>
    //);
  //};

  return (
    <Card>
      <LinkWrapper to={`/recipes/${data.id}`}>
        <RecipeImage url={data.image_url || PlaceholderImage}>
        </RecipeImage>
        <Content>
          <Title>{data.title}</Title>
          <MetaData>{data.dish_type.name}</MetaData>
        </Content>
				<Footer>
					<Rating small value={data.rating} />
					<div>	{data.category.name}</div>
		</Footer>
      </LinkWrapper>
    </Card>
  );
};

export default RecipeCard;
