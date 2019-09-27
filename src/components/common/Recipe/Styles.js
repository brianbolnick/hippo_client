import styled from "styled-components";
import { colors, avenir, media } from "styles/css-variables";
import { Link } from "react-router-dom";

export const LinkWrapper = styled(Link)`
  text-decoration: none;
  color: initial;
`;

export const RatingCount = styled.div`
  position: absolute;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  height: 52px;
  width: 52px;
  padding: 5px;
  box-sizing: border-box;
  background-color: white;
  box-shadow: 0 2px 9px 0px rgba(0, 0, 0, 0.24);
  right: 8px;
  bottom: -18px;
  flex-flow: column;
`;

export const Card = styled.div`
  width: calc(20% - 32px);
  margin: 10px 16px;
  position: relative;
  overflow: hidden;
  color: ${colors.black};
  transition: 0.2s;
  max-height: 340px;
  cursor: pointer;

  ${media.smallDesktop`
		width: calc(25% - 32px);
	`};

  ${media.tablet`
		width: calc(50% - 32px);
	`};

  &:hover {
    //box-shadow: 0px 0px 10px 5px #2121213d;
    //transition: 0.2s;

    ${RecipeImage} {
      transform: scale(1.01);
    }
  }
`;

export const Rating = styled.span`
  font-size: 14px;
  font-weight: 700;
`;

export const RecipeImage = styled.div`
  background-image: ${props => `url(${props.url})`};
  height: 185px;
  background-size: cover;
  background-position: center;
  position: relative;
  border-radius: 8px;
`;

export const LevelContainer = styled.div`
  display: flex;
`;

export const LevelLabel = styled.div`
  color: ${colors.mutedGray};
`;
export const Title = styled.div`
  font-family: ${avenir};
  font-size: 1.1rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-weight: 600;
`;

export const MetaData = styled.div`
  color: ${colors.mutedGray};
  text-transform: uppercase;
  font-size: 0.9rem;
  font-weight: 600;
  letter-spacing: 1px;
  display: flex;
  align-items: center;
`;

export const Footer = styled.div`
  width: 100%;
  border-top: solid 1px ${colors.lightGray};
  height: 48px;
  padding: 8px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: rgb(0, 0, 0, 0.2);
`;

export const DishType = styled.div`
  display: flex;
  align-items: center;
`;

export const DishTypeName = styled.div`
  margin-left: 4px;
`;

export const Content = styled.div`
  padding: 16px 0px;
  text-align: left;
`;
