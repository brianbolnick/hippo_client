import React from "react";
import Logo from "../../img/hippo-text.svg";
import { Navbar, Brand, BrandImage, NavLinks, NavLink } from "./NavStyles";

const Nav = () => {
  return (
    <Navbar>
      <Brand>
        <BrandImage src={Logo} alt="" />
      </Brand>
      <NavLinks>
        <NavLink to="/">About</NavLink>
        <NavLink to="/sign_in">Sign In</NavLink>
      </NavLinks>
    </Navbar>
  );
};

export default Nav;
