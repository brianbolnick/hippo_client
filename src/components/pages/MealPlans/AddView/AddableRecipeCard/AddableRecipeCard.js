import React from 'react';
import {
  Card,
  RecipeImage,
  Title,
  MetaData,
  Content,
  DishTypeName,
  ImageContainer,
  SelectedIndicator
} from './AddableRecipeCardStyles';
import PlaceholderImage from 'img/recipe-placeholder.png';

const RecipeCard = ({ data, isSelected }) => {
  const image = data.image_url || data.imageUrl || PlaceholderImage;
  const dishType = data.dish_type || data.dishType;
  return (
    <Card onClick={() => console.log('click', data)}>
      <SelectedIndicator isSelected={isSelected} />
      <ImageContainer isSelected={isSelected}>
        <RecipeImage url={image}>
          <DishTypeName>{dishType.name}</DishTypeName>
        </RecipeImage>
      </ImageContainer>
      <Content>
        <Title>{data.title}</Title>
        <MetaData>
          <div>{data.category.name}</div>
        </MetaData>
      </Content>
    </Card>
  );
};

export default RecipeCard;
