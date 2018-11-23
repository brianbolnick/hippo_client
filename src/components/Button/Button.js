import styled from "styled-components";
import React, { Component } from "react";
import PropTypes from "prop-types";
import { colors, montserrat, spinAround } from "../../styles/css-variables";
import { css } from "styled-components";

const loadingStyles = css`
  animation: ${spinAround} 0.5s infinite linear;
  border: 2px solid ${colors.white};
  border-radius: 290486px;
  border-right-color: transparent;
  border-top-color: transparent;
  content: "";
  display: block;
  height: 1em;
  position: relative;
  width: 1em;
  position: relative;
  left: calc(50% - (1em / 2));
  top: calc(50% - (1em / 2));
  position: relative;
`;

const StyledButton = styled.button`
	background: ${({ secondary }) =>
    secondary ? "transparent" : "linear-gradient(to right, #ff416c, #F9665E)"};
	color: ${({ secondary }) => (secondary ? colors.black : colors.white)};
	font-size: 14px;
	font-family: ${montserrat};
	text-transform: uppercase;
	letter-spacing: 1px;
	padding: 12px 16px;
	cursor: pointer;
	box-shadow: ${({ secondary }) =>
    secondary ? `inset 0 0 0 2px ${colors.red}` : "none"};
	border: none;
	border-radius: 8px;
	max-width: 180px;
	font-weight: 700;

	${({ loading }) =>
    loading &&
    `
	color: transparent;
	line-height: 0;
	pointer-events: none;
	`};

	&:hover {
		${({ secondary }) =>
      secondary
        ? `
		background: white;
		`
        : `
		box-shadow: 0 3px 25px rgba(0,0,0,0.15), 0 8px 10px -6px rgba(0,0,0,0.3); 
		`};
	}

	& > span::before {
		${({ loading }) => loading && loadingStyles}
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
`;

const Children = styled.span`
  text-decoration: none;
  padding: 0;
  margin: 0;
`;

class Button extends Component {
  render() {
    const { children, asLink } = this.props;

    return asLink ? (
      <ButtonAsLink {...this.props}>{children}</ButtonAsLink>
    ) : (
      <StyledButton {...this.props}>
        <Children>{children}</Children>
      </StyledButton>
    );
  }
}

Button.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.any,
  asLink: PropTypes.bool,
  secondary: PropTypes.bool
};

export default Button;
