import { Link } from "react-router-dom";
import styled from "styled-components";
import { colors, varela, media } from "styles/css-variables";
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

  ${({ recipe }) =>
    recipe &&
    `
			position: absolute;
			width: 100%;
			box-sizing: border-box;
			padding: 0 5%;
			padding-right: 32px;
	`};

  ${({ auth }) =>
    auth &&
    `
	    padding: 16px 0%;
	    box-shadow: rgba(0,0,0,0) 0px 0px 0px;
	    position: absolute;
	    top: 0;
	    width: 80%;
	`};
`;

export const Brand = styled.div`
  ${({ recipe }) =>
	recipe && `    
		position: relative;
		top: 16px;
`};
`;

export const NavLinks = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const NavLinkMobile = styled(Link)`
  color: ${colors.black};
  font-size: 1.4rem;
  transition: all 0.2s ease;
  margin: 10px 0;
  text-decoration: none;
  width: 100%;
  text-align: center;
  font-weight: 600;
  &:hover {
    color: ${colors.red};
    ${({ auth }) => auth && `color: ${colors.white} `};
    transition: all 0.2s ease;
  }
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
  &:hover {
    color: ${colors.red};
    ${({ auth }) => auth && `color: ${colors.white} `};
    transition: all 0.2s ease;
  }
`;

export const BrandImage = styled.img`
  height: 64px;

  ${media.phone`

  height: 48px;
	`};
`;

export const MobileNavLinks = styled.div`
  width: 100%;
  position: fixed;
  height: 300px;
  background-color: white;
  box-shadow: rgba(61, 60, 60, 0.58) 0px 7px 11px -5px;
  top: 72px;
  left: 0;
  transition: transform 0.3s cubic-bezier(0, 0.52, 0, 1);
  overflow: scroll;
  z-index: 1000;
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: space-evenly;
  ${({ visible }) =>
    visible
      ? `
  transform: translate3d(0vw, 0, 0);
	overflow: hidden;
	`
      : `
	transform: translate3d(-100vw, 0, 0);
	`};
`;

export const NavMobile = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: transparent;
  font-size: 1rem;
  z-index: 9500;
  transition: 0.2s ease;
  box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px;
  flex-flow: row wrap;
  padding: 10px 5%;
  position: fixed;
  top: 0;
  width: 90%;
  background: white;

  ${({ auth }) =>
    auth &&
    `
		background: transparent;
	    padding: 16px 0%;
	    box-shadow: rgba(0,0,0,0) 0px 0px 0px;
	    position: absolute;
	    top: 0;
	`};
`;

export const StyledIcon = styled(Icon)`
  &:hover {
    cursor: pointer;
    opacity: 0.6;
  }
`;
