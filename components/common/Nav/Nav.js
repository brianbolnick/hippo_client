import React from "react";
import {
  Navbar,
  Brand,
  BrandImage,
} from "./NavStyles";
import { Link } from "react-router-dom";
import { NewLogo, WhiteLogo, BlackLogo } from "styles/css-variables.js";
import NavIcon from './NavIcon';
import NavMenu from './NavMenu';

const Nav = ({scrolling, menuOpen, setMenuOpen, recipe, auth}) => {
	const renderLogo = () => {
		if (recipe && menuOpen) return BlackLogo;
		if (recipe) return WhiteLogo;
		return NewLogo;
	}

  return (
    <Navbar menuOpen={menuOpen} recipe={recipe} auth={auth} scrolling={scrolling}>
      <Brand recipe={recipe}>
        <Link to="/">
					<BrandImage src={renderLogo()} alt="" small={menuOpen || recipe}/>
        </Link>
      </Brand>
			<NavIcon open={menuOpen} onClick={() => setMenuOpen(!menuOpen)}/>
			<NavMenu menuOpen={menuOpen} recipe={recipe} auth={auth}/>
    </Navbar>
  );
};

export default Nav;
