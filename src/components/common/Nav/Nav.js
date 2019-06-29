import React from "react";
import {
  Navbar,
  Brand,
  BrandImage,
} from "./NavStyles";
import { Link } from "react-router-dom";
import { NewLogo } from "styles/css-variables.js";
import NavIcon from './NavIcon';
import NavMenu from './NavMenu';

const Nav = ({menuOpen, setMenuOpen, recipe, auth}) => {
  return (
    <Navbar menuOpen={menuOpen} recipe={recipe} auth={auth}>
      <Brand recipe={recipe}>
        <Link to="/">
					{!recipe && <BrandImage src={NewLogo} alt="" />} 
        </Link>
      </Brand>
			<NavIcon open={menuOpen} onClick={() => setMenuOpen(!menuOpen)}/>
			<NavMenu menuOpen={menuOpen} recipe={recipe} auth={auth}/>
    </Navbar>
  );
};

export default Nav;
