import React from "react";
import { colors } from "styles/css-variables";
import { DISH_TYPE_ICON_MAP } from 'utils';
import {
  Card,
  RecipeImage,
  Title,
  MetaData,
  Footer,
  Content,
	LinkWrapper,
	DishType,
	DishTypeName,
} from "./Styles";
import Icon from "components/common/Icon/Icon";
import Difficulty from "components/common/Difficulty";
import PlaceholderImage from "img/recipe-placeholder.png";

const RecipeCard = ({ data }) => {
  return (
    <Card>
      <LinkWrapper to={`/recipes/${data.id}`}>
        <RecipeImage url={data.image_url || PlaceholderImage}>
        </RecipeImage>
        <Content>
          <Title>{data.title}</Title>
					<MetaData>
						<div>{data.category.name}</div>
					</MetaData>
        </Content>
				<Footer>
						<Difficulty value={data.difficulty} />
					<DishType>
						<Icon 
							name={DISH_TYPE_ICON_MAP[data.dish_type.name.toLowerCase()]} 
							color={colors.mutedGray} 
							size="24px"
						/>
						<DishTypeName>{data.dish_type.name}</DishTypeName>
					</DishType>

		</Footer>
      </LinkWrapper>
    </Card>
  );
};

export default RecipeCard;
