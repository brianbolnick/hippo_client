import React, { useState } from "react";
import {
  Navbar,
  Brand,
  BrandImage,
  NavLinks,
} from "./NavStyles";
import { Link } from "react-router-dom";
import { Logo, LogoWhite } from "styles/css-variables.js";
import NavIcon from './NavIcon';

const Nav = props => {
	const [ menuOpen, setMenuOpen] = useState(false)
  return (
    <Navbar recipe={props.recipe} auth={props.auth} menuOpen={menuOpen}>
      <Brand recipe={props.recipe} menuOpen={menuOpen}>
        <Link to="/">
          <BrandImage src={(props.recipe && !menuOpen) ? LogoWhite : Logo} alt="" />
        </Link>
      </Brand>
      <NavLinks>
		<NavIcon auth={props.auth} onIconClick={() => setMenuOpen(!menuOpen)}/>
			</NavLinks>
    </Navbar>
  );
};
        
export default Nav;
