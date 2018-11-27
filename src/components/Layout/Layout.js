import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import {  phoneMediaQuery, media } from "styles/css-variables";
import Nav from 'components/Nav/Nav';
import MobileNav from 'components/Nav/MobileNav';
import MediaQuery from 'components/MediaQuery/MediaQuery';

const Content = styled.div`
	width: 90%;
	margin: 0 auto;
	margin-top: 10px;
	${media.phone`
	margin-top: 100px;
	`};
`;

class Layout extends React.Component {
	state = {
		showMobile: window.matchMedia("(" + phoneMediaQuery + ")").matches
	};

	handleMediaQueryChange = ({ matches }) => {
		this.setState({ showMobile: matches });
	};

	render () {
		const { showMobile } = this.state;
		return (
			<>
			<MediaQuery
				query={phoneMediaQuery}
				onChange={this.handleMediaQueryChange}
			/>
			{ showMobile ? <MobileNav /> : <Nav /> }
			<Content>{this.props.children}</Content>
			</>
		);
	}
}

Layout.propTypes = {
	children: PropTypes.any
};

export default Layout;
