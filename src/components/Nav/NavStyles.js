import { Link } from "react-router-dom";
import styled from "styled-components";
import { sourceSans, media } from "../../styles/css-variables";
import Icon from "../Icon/Icon";

export const Navbar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: transparent;
  font-family: ${sourceSans};
  font-size: 1rem;
  z-index: 9500;
  transition: 0.2s ease;
  padding: 24px;
  box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px;
`;

export const Brand = styled.div`
  color: #414141;
  font-weight: 400;
  font-size: 1.2rem;
  text-transform: uppercase;
`;

export const NavLinks = styled.div`
  display: flex;
  width: 25%;
  justify-content: space-around;
`;

export const NavLinkMobile = styled(Link)`
  color: #414141;
  font-size: 1.2rem;
  transition: all 0.2s ease;
  margin: 10px 0;

  &:hover {
    opacity: 0.5;
    transition: all 0.2s ease;
  }
`;

export const NavLink = styled(Link)`
  color: #414141;
  transition: all 0.2s ease;
  text-decoration: none;
  &:hover {
    opacity: 0.5;
    transition: all 0.2s ease;
  }
`;

export const BrandImage = styled.img`
  height: 64px;

  ${media.phone`
	`};
`;

export const MobileNavLinks = styled.div`
  flex-flow: column;
  align-items: flex-start;
  width: 100%;
  position: absolute;
  top: 100px;
  left: 0;
  display: flex;
  box-sizing: border-box;
  padding: 10px;
  background: white;
  box-shadow: 0px 2px 6px 1px #3d3c3ca1;
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
`;

export const StyledIcon = styled(Icon)`
  &:hover {
    cursor: pointer;
    opacity: 0.6;
  }
`;
