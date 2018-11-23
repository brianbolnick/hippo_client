import React from "react";
import Logo from "../../img/hippo-text.svg";
import { Navbar, Brand, BrandImage, NavLinks, NavLink } from "./NavStyles";
import { Link } from "react-router-dom";

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
