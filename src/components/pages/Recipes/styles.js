import styled from "styled-components";
import { colors, rufina } from "styles/css-variables";
import Button from "components/Button/Button";
export const ShowContainer = styled.div`
  height: 100%;
  width: 100%;
  margin: 0 auto;
  padding: 0;
  display: flex;
  flex-flow: row;
  position: absolute;
`;

export const DetailsContainer = styled.div`
  height: 100%;
  width: 55%;
  position: relative;
  box-sizing: border-box;
`;

export const ImageBlock = styled.div`
  ${({ url }) =>
    url &&
    `
		position: relative;
			height: 100%;
			width: 45%;
			background-size: cover !important;
			background-position: center !important;
			background: 
			linear-gradient(
				to bottom,
				rgba(0, 0, 0, 0.1),
				rgba(0, 0, 0, 0.6)
			),
			url(${url});
			background-repeat: no-repeat;
	`};
`;

export const Title = styled.div`
  font-size: 5.5rem;
  letter-spacing: 1px;
  color: ${colors.white};
  position: absolute;
  bottom: 175px;
  left: 0;
  width: 100%;
  text-align: left;
  font-family: ${rufina};
  padding: 0 80px;
  box-sizing: border-box;
`;

export const FamilyName = styled.div`
  color: ${colors.white};
  text-transform: uppercase;
  font-size: 0.9rem;
  letter-spacing: 1px;
  font-weight: 700;
  position: absolute;
  bottom: 102px;
  left: 0;
  width: 100%;
  text-align: left;
  padding: 0 80px;
  box-sizing: border-box;
`;

export const Footer = styled.div`
  display: flex;
  flex-flow: row;
  margin-top: 16px;
  font-size: 0.85rem;
  height: 64px;
  background: ${colors.mutedGray};
  background: ${colors.red};
  width: 100%;
  position: absolute;
  bottom: 0;
  justify-content: space-around;
  align-items: center;
`;

export const IngredientsContainer = styled.div`
  position: absolute;
  right: 0;
  width: 340px;
  //background-image: linear-gradient(to top right, #d44b92, #f0617d, #f3874a);
  background: ${colors.whiteSmoke};
  height: calc(100% - 64px);
  padding: 32px;
  padding-top: calc(8px + 101px);
  box-sizing: border-box;
  overflow-y: scroll;
`;

export const Ingredient = styled.div`
  color: ${colors.offGray};
  margin: 24px 0;
`;

export const Details = styled.div`
  position: absolute;
  width: calc(100% - 340px);
  height: calc(100% - 64px);
  padding: 32px 64px;
  box-sizing: border-box;

  overflow-y: scroll;
`;

export const DirectionsContainer = styled.div``;
export const HeaderGroup = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;
export const Direction = styled.div`
  margin: 32px 0;
  span {
    font-weight: 600;
  }
`;
export const SubTitle = styled.div`
  font-size: 1.5rem;
  letter-spacing: 1px;
  margin: 32px 0;
  font-weight: 600;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  color: ${colors.darkGray};
`;

export const Meta = styled.div`
  display: flex;
  align-items: center;
`;
export const IconContainer = styled.div`
  margin-right: 8px;
`;

export const MetaDetails = styled.div`
  color: ${colors.white};
  display: flex;
  flex-flow: column;
  font-size: 1.25rem;
  font-weight: 800;
  span {
    font-weight: 100;
    font-size: 0.85rem;
  }
`;

export const RecipeList = styled.div`
  display: flex;
  flex-flow: row;
`;

export const RecipeHeader = styled.div`
  display: flex;
  align-items: center;
  margin: 32px 0;
`;

export const CategoryContainer = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;
`;
export const Date = styled.div`
  color: ${colors.offGray};
`;

export const Category = styled.div``;

export const Divider = styled.div`
  padding: 0 80px;
  position: absolute;
  bottom: 124px;
  box-sizing: border-box;
  width: 100%;

  hr {
    background: white;
    background-image: linear-gradient(to right, #ece9e6, #ffffff, #ece9eg);
    border: 0;
    height: 1px;
  }
`;

export const RatingContainer = styled.div``;

export const RatingCount = styled.div`
  color: ${colors.offGray};
`;

export const ShareIcon = styled(Button)`
  border-radius: 50%;
  box-sizing: border-box;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${colors.darkGreen};

  position: absolute;
  left: -28px;
  top: 58px;
  width: 56px;
  height: 56px;

  * > &:hover {
    box-shadow: 0px 0px 6px 2px ${colors.offGray};
  }

  div {
    width: 100%;
    height: 100%;
    padding: 12px;
    margin: 0;
  }

  span {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
