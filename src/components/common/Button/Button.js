import styled from "styled-components";
import React, { Component } from "react";
import PropTypes from "prop-types";
import { colors, varela, spinAround } from "styles/css-variables";
import { css } from "styled-components";
import Icon from "components/common/Icon/Icon";

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
  color: ${colors.white};
  font-size: 14px;
  font-family: ${varela};
  text-transform: uppercase;
  letter-spacing: 1px;
  cursor: pointer;
  border: none;
  max-width: 180px;
  border-radius: 4px;
  box-shadow: 0 2px 0 rgba(0, 0, 0, 0.2);
  padding: 14px 16px;
  font-weight: 500;
  text-align: center;
  background: ${colors.primaryGradient};
  text-shadow: 0 1px 0 rgba(0, 0, 0, 0.3);
  margin-bottom: 1em;

  &:hover {
    background: ${colors.darkPrimaryGradient};
  }

  ${({ secondary }) =>
    secondary &&
    `
		background:  transparent;
		text-shadow: none;
		border: solid 2px ${colors.black};
		color: ${colors.black};
		font-weight: 700;
		padding: 12px 14px;
		box-shadow: none;
		:hover { 
			background: ${colors.whiteSmoke};
			border: solid 2px ${colors.black};
			transform: none;
			box-shadow: none;
		}
	`};

  ${({ disabled }) =>
    disabled &&
    `

    background: ${colors.disabledGradient};
		text-shadow: none;
		color: ${colors.black};
		cursor: not-allowed;
		:hover { 
			transform: none;
			background: ${colors.disabledGradient};
		}
	`};

  ${({ tertiary }) =>
    tertiary &&
    `
		background:  transparent;
		text-shadow: none;
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
		text-shadow: none;
		line-height: 0;
		pointer-events: none;
	`};

  & > span::before {
    ${({ loading }) => loading && loadingStyles};
  }
`;

const ActionIcon = styled(Icon)`
  position: absolute;
  right: 16px;
  padding: 5px;
  width: 24px;
  height: 24px;
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
  ${({ transparentBackground }) =>
    transparentBackground &&
    `
		background: transparent
	`};

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

const FixedButton = styled.button`
  min-width: 250px;
  margin-left: -125px;
  background-color: ${colors.blue};
  color: ${colors.white};
  font-family: ${varela};
  text-align: center;
  border-radius: 8px 8px 0 0;
  padding: 16px;
  position: fixed;
  z-index: 1;
  left: 50%;
  bottom: 0;
  font-size: 1.1rem;
  display: flex;
  align-items: center;
  transition: transform 0.3s cubic-bezier(0, 0.52, 0, 1);
  transform: translate3d(0, 0vh, 0);
  overflow: hidden;
  cursor: pointer;

  &:hover {
    box-shadow: 0 0 14px 2px ${colors.mutedGray};
  }
`;

class Button extends Component {
  render() {
    const { children, asLink, fixed, icon } = this.props;

    return asLink ? (
      <ButtonAsLink {...this.props}>{children}</ButtonAsLink>
    ) : fixed ? (
      <FixedButton {...this.props}>
        <Children>{children}</Children>
        <ActionIcon name={icon} />
      </FixedButton>
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
  tertiary: PropTypes.bool,
  fixed: PropTypes.bool
};

export default Button;
