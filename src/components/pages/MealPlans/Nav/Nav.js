import React from 'react';
import { Link } from 'react-router-dom';
import Search from 'components/common/Search';
import { NewTextLogo } from 'styles/css-variables.js';
import { Navbar, Brand, BrandImage, SearchWrapper } from './NavStyles';

const Nav = ({ menuOpen, setSearchTerm }) => {
  return (
    <Navbar menuOpen={menuOpen}>
      <Brand>
        <Link to="/">
          <BrandImage src={NewTextLogo} alt="" />
        </Link>
      </Brand>
      <SearchWrapper>
        <Search onChange={val => setSearchTerm(val)} />
      </SearchWrapper>
    </Navbar>
  );
};

export default Nav;
