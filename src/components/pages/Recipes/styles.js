import styled from "styled-components";
import { colors } from "styles/css-variables";
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
			height: 100%;
			width: 45%;
			background-size: cover !important;
			background-position: center !important;
			background-image: url(${url});
			background-repeat: no-repeat;
	`};
`;

export const Title = styled.div`
  font-size: 2rem;
  letter-spacing: 1px;
  margin-bottom: 5px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`;

export const FamilyName = styled.div`
  color: #969595;
  text-transform: uppercase;
  font-size: 0.9rem;
  letter-spacing: 1px;
  font-weight: 700;
  margin-bottom: 10px;
`;

export const Footer = styled.div`
  display: flex;
  flex-flow: row;
  margin-top: 16px;
  font-size: 0.85rem;
  height: 64px;
  background: ${colors.mutedGray};
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
  background-image: linear-gradient(to top right, #d44b92, #f0617d, #f3874a);
  height: calc(100% - 64px);
  padding: 32px;
  padding-top: calc(32px + 101px);
  box-sizing: border-box;
`;

export const Ingredient = styled.div`
  width: 50%;
`;

export const Details = styled.div`
  position: absolute;
  width: calc(100% - 340px);
  height: calc(100% - 64px);
  padding: 32px;
  box-sizing: border-box;
`;

export const DirectionsContainer = styled.div``;
export const Direction = styled.div``;
export const SubTitle = styled.div`
  font-size: 1.25rem;
  letter-spacing: 1px;
  margin: 8px 0;
  font-weight: 600;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`;

export const Meta = styled.div`
  display: flex;
  align-items: center;
`;
export const IconContainer = styled.div`
  margin-right: 8px;
`;

export const MetaDetails = styled.div`
  color: ${colors.darkGray};
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
