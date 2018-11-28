import React from "react";
import { Navbar, Brand, BrandImage, NavLinks, NavLink } from "./NavStyles";
import { Link } from "react-router-dom";
import { Logo } from "styles/css-variables.js";
import { token, signOut } from "utils";
import Button from "components/Button/Button";

const Nav = props => {
  return (
    <Navbar auth={props.auth}>
      <Brand>
        <Link to="/">
          <BrandImage src={Logo} alt="" />
        </Link>
      </Brand>
      <NavLinks>
        <NavLink auth={props.auth} to="/about">
          About
        </NavLink>
        {!token && (
          <NavLink auth={props.auth} to="/sign_in">
            Sign In
          </NavLink>
        )}
        {token && (
          <>
            <NavLink auth={props.auth} to="/recipes">
              Recipes
            </NavLink>
            <NavLink auth={props.auth} to="/family">
              Family
            </NavLink>
            <Button asLink onClick={signOut}>
              Sign Out
            </Button>
          </>
        )}
      </NavLinks>
    </Navbar>
  );
};

export default Nav;
