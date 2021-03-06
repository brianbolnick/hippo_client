import styled from 'styled-components/macro';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { colors, avenir, spinAround } from 'styles/css-variables';
import { css } from 'styled-components/macro';
import Icon from 'components/common/Icon/Icon';

const loadingStyles = css`
  animation: ${spinAround} 0.5s infinite linear;
  border: 2px solid ${colors.white};
  border-radius: 290486px;
  border-right-color: transparent;
  border-top-color: transparent;
  content: '';
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
  font-family: ${avenir};
  text-transform: uppercase;
  letter-spacing: 1px;
  cursor: pointer;
  border: none;
  border-radius: 4px;
  padding: 12px 14px;
  font-weight: 500;
  text-align: center;
  background: ${colors.primaryGradient};
  text-shadow: 0 1px 0 rgba(0, 0, 0, 0.3);
  margin-bottom: 1em;

  &:hover {
    background: ${colors.darkPrimaryGradient};
  }

  ${({ icon }) =>
    icon &&
    `
padding-left: 10px 14px;
	font-size: 12px;
	`};

  ${({ secondary_DEPRECATED }) =>
    secondary_DEPRECATED &&
    `
		background:  transparent;
		text-shadow: none;
		border: solid 2px ${colors.black};
		color: ${colors.black};
		font-weight: 600;
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
		&&& { 
			background: ${colors.white};
			text-shadow: none;
			border: solid 2px ${colors.mutedGray};
			color: ${colors.mutedGray};
			cursor: not-allowed;
			font-weight: 600;
			padding: 10px 12px;
			box-shadow: none;
			:hover { 
				transform: none;
			background: ${colors.white};
			}
		}
	`};

  ${({ secondary }) =>
    secondary &&
    `
		background: ${colors.whiteSmoke};
		text-shadow: none;
		color: ${colors.black};
		font-weight: 600;
		padding: 12px 14px;
		box-shadow: none;
		:hover { 
			transform: none;
			box-shadow: none;
			background: ${colors.lightGray};
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

  ${({ small, icon }) =>
    small &&
    `
padding: 10px 14px;
	font-size: 12px;
	${icon &&
    `
		padding-left: 5px;
	`}
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
  font-family: ${avenir};
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
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const FixedButton = styled.button`
  min-width: 250px;
  margin-left: -125px;
  background-color: ${colors.blue};
  color: ${colors.white};
  font-family: ${avenir};
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
    const { children, asLink, fixed, icon, small, secondary } = this.props;

    return asLink ? (
      <ButtonAsLink {...this.props}>{children}</ButtonAsLink>
    ) : fixed ? (
      <FixedButton {...this.props}>
        <Children>{children}</Children>
        <ActionIcon name={icon} />
      </FixedButton>
    ) : (
      <StyledButton {...this.props}>
        <Children>
          {icon && (
            <Icon
              name={icon}
              color={secondary ? colors.black : colors.white}
              size={small ? '16px' : '24px'}
            />
          )}
          {children}
        </Children>
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
