import React from "react";
import { Navbar, Brand, BrandImage, NavLinks, NavLink } from "./NavStyles";
import { Link } from "react-router-dom";
import { Logo } from "styles/css-variables.js";
import { token, signOut } from "utils";
import Button from "components/Button/Button";

const Nav = props => {
  return (
    <Navbar recipe={props.recipe} auth={props.auth}>
      <Brand>
        <Link to="/">
          <BrandImage src={Logo} alt="" />
        </Link>
      </Brand>
      <NavLinks>
        <NavLink auth={props.auth} recipe={props.recipe} to="/about">
          About
        </NavLink>
        {!token && (
          <NavLink auth={props.auth} recipe={props.recipe} to="/sign_in">
            Sign In
          </NavLink>
        )}
        {token && (
          <>
            <NavLink auth={props.auth} recipe={props.recipe} to="/recipes">
              Recipes
            </NavLink>
            <Button asLink onClick={signOut} transparentBackground>
              Sign Out
            </Button>
          </>
        )}
      </NavLinks>
    </Navbar>
  );
};

export default Nav;
