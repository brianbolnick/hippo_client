import { Link } from "react-router-dom";
import styled from "styled-components";
import { colors, varela, media, raleway } from "styles/css-variables";
import Icon from "components/common/Icon/Icon";
import Button from "components/common/Button/Button";
import Anchor from "components/common/Anchor/Anchor";

export const Navbar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-family: ${varela};
  font-size: 1rem;
  z-index: 9500;
  transition: 0.2s ease;
  padding: 16px 5%;
  box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px;
	position: fixed;
	width: 100%;
	box-sizing: border-box;
	background: white;
	top: 0;

  ${({ recipe }) =>
    recipe && `
			padding-right: 32px;
			background: transparent;
	`};

  ${({ auth }) => auth && `
			background: transparent;
	`};

	${({menuOpen}) => menuOpen && `
		background: white;
	`};
`;	

export const Brand = styled.div`
  ${({ recipe }) =>
	recipe && `    
		position: relative;
		top: 16px;
`};
`;

export const NavAnchor = styled(Anchor)`
  color: ${colors.black};
  transition: all 0.2s ease;
  text-decoration: none;
  margin-left: 32px;
  font-weight: 600;
  &:hover {
    color: ${colors.red};
    ${({ auth }) => auth && `color: ${colors.white} `};
    transition: all 0.2s ease;
  }
`;

export const NavLinkButton = styled(Button)`
  color: ${colors.black};
  font-size: 1.4rem;
  transition: all 0.2s ease;
  margin: 10px 0;
  text-decoration: none;
  width: 100%;
  text-align: center;
  font-weight: 600;
  font-size: 40px;

  &:hover {
    color: ${colors.red};
    ${({ auth }) => auth && `color: ${colors.white} `};
    transition: all 0.2s ease;
  }
`;

export const NavLink = styled(Link)`
  color: ${colors.black};
  transition: all 0.2s ease;
  text-decoration: none;
  margin-left: 32px;
  font-weight: 600;
  font-size: 40px;
	font-family: ${raleway};

  &:hover {
    color: ${colors.red};
    transition: all 0.1s ease;
  }
`;

export const BrandImage = styled.img`
  height: 64px;

  ${media.phone` height: 48px; `};
`;

export const StyledIcon = styled(Icon)`
  &:hover {
    cursor: pointer;
    opacity: 0.6;
  }
`;
