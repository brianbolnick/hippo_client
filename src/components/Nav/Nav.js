import React from "react";
import { Navbar, Brand, BrandImage, NavLinks, NavLink } from "./NavStyles";
import { Link } from "react-router-dom";
import { Logo } from 'styles/css-variables.js';

const Nav = () => {
  return (
    <Navbar>
      <Brand>
        <Link to="/">
          <BrandImage src={Logo} alt="" />
        </Link>
      </Brand>
      <NavLinks>
        <NavLink to="/">About</NavLink>
        <NavLink to="/sign_in">Sign In</NavLink>
      </NavLinks>
    </Navbar>
  );
};

export default Nav;
