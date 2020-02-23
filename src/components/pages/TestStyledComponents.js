import styled from 'styled-components/macro';
import { colors, rufina, avenir } from 'styles/css-variables';
import Icon from 'components/common/Icon/Icon';

//export const ActionIcon = styled(Icon)`
//height: 40px;
//width: 40px;
//margin: 0 16px;
//cursor: pointer;

//&:hover {
//path {
//fill: ${colors.white};
//}
//}
//`;
export const ActionIcon = styled(Icon)`
  cursor: pointer;

  &:hover {
    path {
      fill: ${colors.white};
    }
  }
`;

export const ActionContainer = styled.div`
  display: flex;
  flex-basis: 50%;
  justify-content: flex-end;
  padding-top: 32px;
  box-sizing: border-box;

  * > {
    margin: 0 40px;
  }
`;

export const LoadContainer = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

export const PageContainer = styled.div`
  height: 100%;
  background: #20272a;
  overflow-y: scroll;
`;
export const ImageView = styled.div`
	height: 75vh;
	width: 100%
	position: relative;
	background-size: cover !important;
	background-position: center !important;
	background-repeat: no-repeat;
	display: flex;
	align-items: flex-end;
	padding-bottom: 60px;

  ${({ url }) =>
    url &&
    `
			background: 
			linear-gradient(
				to bottom,
				rgba(0, 0, 0, 0.1),
				rgba(0, 0, 0, 0.6)
			),
			url(${url});
	`};
`;

export const Title = styled.div`
  font-size: 4.5rem;
  letter-spacing: 1px;
  color: ${colors.white};
  text-align: left;
  font-family: ${rufina};
  box-sizing: border-box;
`;

export const FamilyName = styled.div`
  color: ${colors.white};
  text-transform: uppercase;
  font-size: 0.9rem;
  letter-spacing: 1px;
  font-weight: 600;
  text-align: left;
  box-sizing: border-box;
  font-family: ${avenir};
`;

export const RecipeDetails = styled.div`
  width: 80%;
  position: relative;
  bottom: 80px;
  height: auto;
  background: white;
  margin: 0 auto;
  border-radius: 6px;
`;

export const MetaContainer = styled.div`
  display: flex;
  width: 80%;
  margin: 0 auto;
`;

export const Divider = styled.div`
  box-sizing: border-box;
  width: 100%;

  hr {
    background: white;
    background-image: linear-gradient(to right, #ece9e6, #ffffff, #ece9eg);
    border: 0;
    height: 1px;
  }
`;

export const RecipeTitle = styled.div`
  display: flex;
  flex-flow: column;
  margin-bottom: 80px;
  flex-basis: 50%;
`;

export const Header = styled.div`
  border-bottom: solid 1px ${colors.mutedGray};
  width: 100%;
  display: flex;
  flex-flow: row;
`;

export const Footer = styled.div`
  margin: 60px auto;
`;

export const CategoryContainer = styled.div`
  flex: 1;
  padding: 16px 32px;
  display: flex;
  align-items: center;
  border-right: solid 1px ${colors.mutedGray};
  box-sizing: border-box;
`;
export const CategoryMeta = styled.div``;
export const Category = styled.div`
  font-family: ${avenir};
  font-size: 1.4rem;
  font-weight: 600;
  color: ${colors.black};
`;
export const DishType = styled.div`
  font-family: ${avenir};
  font-size: 1rem;
  font-weight: 400;
  color: ${colors.darkGray};
`;

export const HeaderDetails = styled.div`
  flex: 5;
  display: flex;
  justify-content: space-between;
  padding: 16px 32px;
  align-items: center;
`;

export const RatingContainer = styled.div``;

export const RatingCount = styled.div`
  color: ${colors.black};
  font-family: ${avenir};
  text-align: right;
  font-weight: 400;
  font-size: 0.85rem;
`;

export const Meta = styled.div`
  display: flex;
  align-items: center;
`;
export const IconContainer = styled.div`
  margin-right: 8px;
`;

export const MetaDetails = styled.div`
  color: ${colors.black};
  font-family: ${avenir};
  display: flex;
  flex-flow: column;
  font-size: 1.25rem;
  font-weight: 600;
  span {
    font-weight: 400;
    font-size: 0.85rem;
  }
`;

export const SubContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;

export const IngredientsContainer = styled.div`
  flex: 1;
  border-right: solid 1px ${colors.mutedGray};
  padding: 16px 32px;
  box-sizing: border-box;
`;
export const DirectionsContainer = styled.div`
  flex: 3;
  padding: 16px 32px;
  overflow: scroll;
`;

export const Ingredient = styled.div`
  margin: 16px 0;
  font-family: ${avenir};
  border-bottom: solid 1px ${colors.mutedGray};
  color: ${colors.black};
  padding-bottom: 8px;
`;

export const Step = styled.div`
  margin: 32px 0;
  font-family: ${avenir};
  color: ${colors.black};
  font-weight: 500;
  font-size: 1.2rem;
  text-align: justify;

  span {
    font-weight: 600;
    display: block;
    margin-bottom: 16px;
    color: ${colors.offGray};
    font-size: 1.1rem;
  }
`;
export const SectionTitle = styled.div`
  letter-spacing: 1px;
  margin: 16px 0;
  color: ${colors.blue};
  font-size: 1rem;
  font-weight: 700;
  text-transform: uppercase;
  font-family: ${avenir};
`;
export const IngredientList = styled.div``;
export const StepsList = styled.div`
  padding-right: 8em;
`;
export const Notes = styled.div`
  margin-bottom: 32px;
`;
export const ButtonContainer = styled.div`
  margin: 32px auto;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
