import React from "react";
import { Navbar, Brand, BrandImage, NavLinks, NavLink } from "./NavStyles";
import { Link } from "react-router-dom";
import { Logo, LogoWhite } from "styles/css-variables.js";
import { token, signOut } from "utils";
import Button from "components/Button/Button";

const Nav = props => {
  return (
    <Navbar recipe={props.recipe} auth={props.auth}>
      <Brand recipe={props.recipe}>
        <Link to="/">
          <BrandImage src={props.recipe ? LogoWhite : Logo} alt="" />
        </Link>
      </Brand>
      <NavLinks>
        {!token ? (
          <NavLink auth={props.auth} to="/about">
            About
          </NavLink>
        ) : (
          <NavLink auth={props.auth} to="/">
            Recipes
          </NavLink>
        )}
        {!token && (
          <NavLink auth={props.auth} to="/sign_in">
            Sign In
          </NavLink>
        )}
        {token && (
          <>
            <NavLink auth={props.auth} to="/family">
              Family
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
