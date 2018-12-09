import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { phoneMediaQuery, media } from "styles/css-variables";
import Nav from "components/Nav/Nav";
import MobileNav from "components/Nav/MobileNav";
import MediaQuery from "components/MediaQuery/MediaQuery";

const Content = styled.div`
  width: ${({ recipe }) => (recipe ? "100%" : "90%")};
  margin: 0 auto;
  margin-top: ${({ recipe }) => (recipe ? "0" : "10px")};

  ${({ recipe }) =>
    recipe &&
    `
			overflow: hidden;
	    height: 100%;
	    position: relative;
	`};

  ${media.phone`
	margin-top: 100px;
    overflow: auto;
	`};
`;

class Layout extends React.Component {
  state = {
    showMobile: window.matchMedia("(" + phoneMediaQuery + ")").matches
  };

  handleMediaQueryChange = ({ matches }) => {
    this.setState({ showMobile: matches });
  };

  render() {
    const { showMobile } = this.state;
    const { recipe } = this.props;
    return (
      <>
        <MediaQuery
          query={phoneMediaQuery}
          onChange={this.handleMediaQueryChange}
        />
        {showMobile ? <MobileNav /> : <Nav recipe={recipe} />}
        <Content recipe={recipe}>{this.props.children}</Content>
      </>
    );
  }
}

Layout.propTypes = {
  children: PropTypes.any,
  recipe: PropTypes.bool
};

export default Layout;
