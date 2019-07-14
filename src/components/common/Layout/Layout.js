import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Nav from "components/common/Nav/Nav";

const Content = styled.div`
  width: ${({ recipe, fullScreen }) => (recipe || fullScreen ? "100%" : "90%")};
  margin: 0 auto;
  height: 100%;
	box-sizing: border-box;
	padding-top: 112px;

  ${({ recipe }) =>
    recipe && `
			overflow: hidden;
	    height: 100%;
	    position: relative;
			padding-top: 0;
	`};

	${({ recipeMobile }) => recipeMobile && `
			margin: 0;
			padding-top: 82px;
	`};


	${({menuOpen}) => menuOpen && `
		overflow: hidden;
	`};

	${({auth}) => auth && `
		height: 100%;
		padding-top: 0;
	`};

`;

const Layout = ({recipe, recipeMobile, auth, fullScreen, children}) => { 
	const [menuOpen, setMenuOpen] = useState(false);
	const [scrolling, setScrolling] = useState(false);

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	});

	const handleScroll = event => {
		const navHeight = 20;
		var refOffset = 0;
		const newOffset = window.scrollY || window.pageYOffset;
		const isScrolling = (newOffset > navHeight) && (newOffset > refOffset) 
		setScrolling(isScrolling || false)
	};
	return (
		<>
			<Nav scrolling={scrolling} auth={auth} recipe={recipe} setMenuOpen={setMenuOpen} menuOpen={menuOpen}/>
			<Content recipeMobile={recipeMobile} auth={auth} fullScreen={fullScreen} recipe={recipe} menuOpen={menuOpen}>
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
