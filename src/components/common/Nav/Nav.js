import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { NewLogo, WhiteLogo, BlackLogo } from "styles/css-variables.js";
import { Navbar, Brand, BrandImage } from "./NavStyles";
import NavIcon from "./NavIcon";
import NavMenu from "./NavMenu";

const Nav = ({ scrolling, menuOpen, setMenuOpen, recipe, auth }) => {
  const renderLogo = () => {
    if (recipe && menuOpen) return BlackLogo;
    if (recipe) return WhiteLogo;
    return NewLogo;
  };

  return (
    <Navbar
      menuOpen={menuOpen}
      recipe={recipe}
      auth={auth}
      scrolling={scrolling || undefined}
    >
      <Brand recipe={recipe}>
        <Link to="/">
          <BrandImage src={renderLogo()} alt="" small={recipe} />
        </Link>
      </Brand>
      <NavIcon open={menuOpen} onClick={() => setMenuOpen(!menuOpen)} />
      <NavMenu menuOpen={menuOpen} recipe={recipe} auth={auth} />
    </Navbar>
  );
};

Nav.propTypes = {
  scrolling: PropTypes.bool
};

Nav.defaultProps = {
  scrolling: false
};

export default Nav;
