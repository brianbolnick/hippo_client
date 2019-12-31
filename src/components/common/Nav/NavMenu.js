import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { token } from "utils";
import { colors } from "styles/css-variables";
import { NavLink } from "./NavStyles";

const Container = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  background-color: white;
  top: 0;
  left: 100vw;
  padding: 8%;
  text-align: left;
  transition: all 0.3s ease;
  z-index: -1;
  box-sizing: border-box;
  display: flex;
  flex-flow: column;
  justify-content: space-evenly;
  border-bottom: 32px solid ${colors.red};

  ${({ menuOpen }) =>
    menuOpen &&
    `
	left: 0;
	`};

  ${({ recipe }) =>
    recipe &&
    `
	top: 72px;
	height: calc(101vh - 72px);
	`};
`;

const NavMenu = ({ menuOpen, recipe, auth }) => {
  return (
    <Container menuOpen={menuOpen} recipe={recipe}>
      {token && (
        <>
          <NavLink to="/">Recipes</NavLink>
          <NavLink to="/meal_plans">Meal Plans</NavLink>
          <NavLink to="/profile">Profile</NavLink>
        </>
      )}
      <NavLink to="/about">About</NavLink>

      {!token && <NavLink to="/sign_in">Sign In</NavLink>}
      {token && <NavLink to="/logout">Sign Out</NavLink>}
    </Container>
  );
};

NavMenu.propTypes = {
  menuOpen: PropTypes.bool
};

NavMenu.defaultProps = {
  menuOpen: false
};

export default NavMenu;
