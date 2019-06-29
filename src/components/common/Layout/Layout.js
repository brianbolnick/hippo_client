import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { media } from "styles/css-variables";
import Nav from "components/common/Nav/Nav";

const Content = styled.div`
  width: ${({ recipe, fullScreen }) => (recipe || fullScreen ? "100%" : "90%")};
  margin: 0 auto;
  height: calc(100% - 111px);
	box-sizing: border-box;
	padding-top: 112px;

  ${({ recipe }) =>
    recipe && `
			overflow: hidden;
	    height: 100%;
	    position: relative;
			padding-top: 0;
	`};

  ${media.phone`
		margin-top: 72px;
    overflow: auto;
	`};

	${({menuOpen}) => menuOpen && `
		overflow: hidden;
	`};

	${({auth}) => auth && `
		height: 100%;
		padding-top: 0;
	`};

`;

const Layout = ({recipe, auth, fullScreen, children}) => { 
	const [menuOpen, setMenuOpen] = useState(false);

	return (
		<>
			<Nav auth={auth} recipe={recipe} setMenuOpen={setMenuOpen} menuOpen={menuOpen}/>
			<Content auth={auth} fullScreen={fullScreen} recipe={recipe} menuOpen={menuOpen}>
					{children}
			</Content>
		</>
	);
}

Layout.propTypes = {
  children: PropTypes.any,
  recipe: PropTypes.bool
};

export default Layout;
