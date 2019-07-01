import styled from "styled-components";
import { media } from "styles/css-variables";
import Tooltip from "components/common/Tooltip/Tooltip";
import {  avenir, fadeInDown, colors } from "styles/css-variables";

export const RecipeList = styled.div`
  display: flex;
  flex-flow: row;
  flex-wrap: wrap;
  justify-content: center;
`;

export const TabLink = styled.div`
  font-size: 1.2rem;
`;

export const TabsContainer = styled.div`
  display: flex;
  margin-right: 16px;
  ${media.phone`
		margin-right: 0;
		margin: 16px auto;
	`}
`;

export const FiltersContainer = styled.div`
	height: 100%;
	border: solid 1px black;
	width: 20%;
`;

export const NewButtonContainer = styled.div``;

export const OptionsContainer = styled.div`
  display: flex;
  align-items: center;
  ${media.phone`
    flex-flow: column;
	`}
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-bottom: 32px;
  ${media.phone`
    flex-flow: column;
	`}
`;

export const PageContent = styled.div`
	display: flex;
`;

export const ButtonContainer = styled.button`
  border-radius: 50%;
  box-sizing: border-box;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ background }) => background || colors.black};
  cursor: pointer;
  width: 48px;
  height: 48px;
  border: none;
  outline: none;
  * > &:hover {
    box-shadow: 0px 0px 6px 2px ${colors.offGray};
  }

  div {
    width: 100%;
    height: 100%;
    padding: 10px;
    margin: 0;
  }

  span {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const ActionButtonContainer = styled.div`
  animation-name: ${fadeInDown};
  animation-duration: 0.2s;
  animation-fill-mode: backwards;
  :nth-child(2) {
    animation-delay: 0.1s;
  }
  :nth-child(3) {
    animation-delay: 0.2s;
  }
`;


export const StyledTooltip = styled(Tooltip)``;

export const LoadContainer = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  justify-content: center;
  align-items: center;
  flex-flow: column;
`;

export const PlaceholderText = styled.div`
  font-size: 1.8rem;
  font-family: ${avenir};
  font-weight: 600;
  color: ${colors.black};
  position: relative;
  bottom: 132px;
  ${media.phone`
	bottom: auto;
	font-size: 1.6rem;
	text-align: center;
	`}
`;

export const NoRecipesImage = styled.img`
  ${media.phone`
		width: 100%;
	`}
`;


