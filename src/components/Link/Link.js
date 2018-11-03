import styled from 'styled-components';
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { colors, montserrat } from '../../styles/css-variables';
import { Link as RouterLink } from 'react-router-dom';

const StyledLink  = styled(RouterLink)`
	font-size: 16px;
	color: ${colors.blue};
	font-family: ${montserrat};
	border: none;
	font-weight: 900;

	cursor: pointer;
	&:hover {
		outline: none;
		text-decoration: underline;
	}
	&:focus {
		outline: none;
	}
`
class Link extends Component {
	render() {
		const { children, to } = this.props;
		return  <StyledLink to={to} {...this.props}>{children}</StyledLink>
	}
}

Link.propTypes = {
	children: PropTypes.any,
	to: PropTypes.string.isRequired
}

export default Link;
