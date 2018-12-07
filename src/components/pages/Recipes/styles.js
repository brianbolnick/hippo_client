import styled from "styled-components";

export const ShowContainer = styled.div`
  height: 35rem;
  background: #f5f5f5;
  width: 80%;
  margin: 0 auto;
  padding: 0;
  margin-top: 5%;
  display: flex;
  flex-flow: row;
  border-radius: 5px;
  box-shadow: 0px 0px 25px 0px #21212161;
`;

export const DetailsContainer = styled.div`
  height: 100%;
  width: 50%;
  padding: 2rem 5rem;
`;

export const ImageBlock = styled.div`
  ${({ url }) =>
    url &&
    `
			height: 100%;
			width: 50%;
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

export const MetaContainer = styled.div``;
export const IngredientsContainer = styled.div``;
export const Ingredient = styled.div``;
export const DirectionsContainer = styled.div``;
export const Direction = styled.div``;
export const SubTitle = styled.div``;

export const Meta = styled.div``;

export const RecipeList = styled.div`
  display: flex;
  flex-flow: row;
`;
