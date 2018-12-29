import styled from "styled-components";
import { colors, varela, rufina, media } from "styles/css-variables";
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
  width: 275px;
  border-radius: 4px;
  box-shadow: 0px 0px 20px 1px #2121213d;
  background-color: white;
  margin: 10px 25px;
  position: relative;
  overflow: hidden;
  color: ${colors.black};
  font-family: ${varela};
  transition: 0.2s;

  ${media.phone`
		width: 100%;
	`};
  &:hover {
    box-shadow: 0px 0px 20px 5px #2121213d;
    transition: 0.2s;
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
`;

export const Title = styled.div`
  font-family: ${rufina};
  font-size: 1.8rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-bottom: 16px;
`;

export const MetaData = styled.div`
  color: ${colors.mutedGray};
  text-transform: uppercase;
  font-size: 0.9rem;
  font-weight: 600;
  letter-spacing: 1px;
`;

export const Footer = styled.div`
  width: 100%;
  background: ${colors.lightGray};
  height: 48px;
  padding: 8px;
  box-sizing: border-box;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  color: rgb(0, 0, 0, 0.2);
`;

export const Content = styled.div`
  padding: 24px;
  text-align: center;
`;
