import styled from 'styled-components';
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { colors,  montserrat, phoneMediaQuery } from '../../styles/css-variables';

const StyledButton = styled.button`
	background: ${colors.white};
	color: ${colors.blue};
	font-weight: 400;
	height: 40px;
	font-size: 14px;
	font-family: ${montserrat};
	color: #FFF;
	text-transform: uppercase;
	text-align: center;
	line-height: 1px;
	letter-spacing: 2px;
	padding: 10px 20px;
	border-radius: 3px;
	cursor: pointer;
	border: solid 1px ${colors.blue};
	border-radius: 5px;
	& > span {
		color: ${colors.blue};
		font-weight: 400;
		font-size: 1rem;
	}
	&:hover {
		border: solid 1px ${colors.blue};
		background: ${colors.blue};
	}
	&:hover > span {
		color: ${colors.white};
	}
	@media ${`(${phoneMediaQuery})`} {
		width: 100%;
	}
`;

const ButtonAsLink = styled.button`
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

const Children = styled.span`
text-decoration: none;
		padding: 0;
		margin: 0;
`

class Button extends Component {
	render() {
		const { children,  asLink } = this.props;

		return asLink ? <ButtonAsLink {...this.props}>{children}</ButtonAsLink> : (
			<StyledButton {...this.props}>
				<Children>
					{children}
				</Children>
			</StyledButton>
		)
	}
}

Button.propTypes = {
	onClick: PropTypes.func,
	children: PropTypes.any,
	asLink: PropTypes.bool
}

export default Button;
