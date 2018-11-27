import styled from "styled-components";
import React, { Component } from "react";
import PropTypes from "prop-types";
import { colors, varela, spinAround } from "../../styles/css-variables";
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
  background: linear-gradient(to right, #ff416c, #f9665e);
  color: ${colors.white};
  font-size: 14px;
  font-family: ${varela};
  text-transform: uppercase;
  letter-spacing: 1px;
  padding: 12px 16px;
  cursor: pointer;
  border: none;
  border-radius: 8px;
  max-width: 180px;
  font-weight: 700;

  &:hover {
    box-shadow: 0 3px 25px rgba(0, 0, 0, 0.15),
      0 8px 10px -6px rgba(0, 0, 0, 0.3);
  }

  ${({ secondary }) =>
    secondary &&
    `
		background:  transparent;
		border: solid 2px ${colors.red};
		color: ${colors.black};
		:hover { 
			background: white;
			border: solid 2px ${colors.red};
		}
	`};

  ${({ tertiary }) =>
    tertiary &&
    `
		background:  transparent;
		border:  solid 2px ${colors.white};
		color: ${colors.white};
		:hover { 
			border: solid 2px ${colors.white};
		}
	`};

  ${({ loading }) =>
    loading &&
    `
		color: transparent;
		line-height: 0;
		pointer-events: none;
	`};

  & > span::before {
    ${({ loading }) => loading && loadingStyles};
  }
`;

const ButtonAsLink = styled.button`
  color: ${colors.black};
  transition: all 0.2s ease;
  text-decoration: none;
  margin-left: 32px;
  font-weight: 600;
  &:hover {
    color: ${colors.red};
    transition: all 0.2s ease;
  }
  font-size: 16px;
  font-family: ${varela};
  border: none;

  cursor: pointer;
  &:hover {
    outline: none;
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
  secondary: PropTypes.bool,
  tertiary: PropTypes.bool
};

export default Button;
