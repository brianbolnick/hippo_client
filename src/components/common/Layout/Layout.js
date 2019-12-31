import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Nav from "components/common/Nav/Nav";
import { NewLogo } from "styles/css-variables";
import { colors, media } from "styles/css-variables";
import { Brand, BrandImage } from "components/common/Nav/NavStyles";

const Page = styled.div`
  display: flex;
  flex-flow: column;
`;

const Footer = styled.div`
  background: ${colors.lightGray};
  height: 100px;
  padding: 64px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 32px;
  clip-path: polygon(50% 16%, 100% 1%, 100% 100%, 0 100%, 0 0);
  ${media.phone`
		padding: 32px;
    padding: 64px;
    padding-bottom: 24px;
    height: 140px;
    flex-flow: column-reverse;
	`};
`;

const FooterLinks = styled.div`
  display: flex;
  flex-flow: column;
  a {
    color: ${colors.black};
    font-size: 1.6rem;
    transition: all 0.2s ease;
    margin: 10px 0;
    text-decoration: none;
    width: 100%;
    text-align: center;
    font-weight: 600;
    &:hover {
      color: ${colors.red};
      transition: all 0.2s ease;
    }

    ${media.phone`
		font-size: 1.4rem;	
	`};
  }
`;

const Content = styled.div`
  width: ${({ recipe, fullScreen }) => (recipe || fullScreen ? "100%" : "90%")};
  margin: 0 auto;
  height: 100%;
  box-sizing: border-box;
  padding-top: 112px;

  ${({ recipe }) =>
    recipe &&
    `
			overflow: hidden;
	    height: 100%;
	    position: relative;
			padding-top: 0;
	`};

  ${({ recipeMobile }) =>
    recipeMobile &&
    `
			padding-top: 82px;
	`};

  ${({ menuOpen }) =>
    menuOpen &&
    `
		overflow: hidden;
	`};

  ${({ auth }) =>
    auth &&
    `
		height: 100%;
		padding-top: 0;
	`};
`;

const Copyright = styled.div`
	text-transform: uppercase;
	color: ${colors.black}
	margin-bottom: 8px;
	text-align: center;

	a {
	color: ${colors.black}
		font-weight: 800;
		text-decoration: none;

		&:hover {
			color: ${colors.darkGray};
		}
	}
`;

const Layout = ({
  recipe,
  recipeMobile,
  auth,
  fullScreen,
  children,
  hideFooter
}) => {
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
    const isScrolling = newOffset > navHeight && newOffset > refOffset;
    setScrolling(isScrolling || false);
  };
  return (
    <Page>
      <Nav
        scrolling={scrolling}
        auth={auth}
        recipe={recipe}
        setMenuOpen={setMenuOpen}
        menuOpen={menuOpen}
      />
      <Content
        recipeMobile={recipeMobile}
        auth={auth}
        fullScreen={fullScreen}
        recipe={recipe}
        menuOpen={menuOpen}
      >
        {children}
      </Content>
      {!hideFooter && (
        <Footer>
          <Brand>
            <BrandImage src={NewLogo} alt="" />
          </Brand>
          <Copyright>
            Developed by
            <a
              href="//brianbolnick.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              Brian Bolnick
            </a>
          </Copyright>
          <FooterLinks>
            <a
              href="mailto:brianbolnick+web@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Contact
            </a>
          </FooterLinks>
        </Footer>
      )}
    </Page>
  );
};

Layout.propTypes = {
  children: PropTypes.any,
  recipe: PropTypes.bool,
  hideFooter: PropTypes.bool
};

export default Layout;
