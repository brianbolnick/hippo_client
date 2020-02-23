import styled, { css } from 'styled-components/macro';
import { colors, avenir } from 'styles/css-variables';

export const positions = {
  topLeft: 'top-left',
  top: 'top',
  topRight: 'top-right',
  right: 'right',
  bottomRight: 'bottom-right',
  bottom: 'bottom',
  bottomLeft: 'bottom-left',
  left: 'left'
};

export const types = {
  default: '',
  arrow: 'arrow'
};

const carrotStyles = `
  content: '';
  position: absolute;
  width: 0;
  height: 0;
  border-width: 10px;
  border-style: solid;
`;

const positionStyles = {
  [positions.topLeft]: {
    default: css`
      top: 0;
      transform: translate(0, -100%);
      left: 0;
      margin-left: -8px;
    `,
    arrow: css`
      top: -10px;
      &:after {
        ${carrotStyles} top: 100%;
        left: 14px;
        border-color: ${({ color }) => color || colors.black} transparent
          transparent transparent;
      }
    `
  },
  [positions.top]: {
    default: css`
      top: 0;
      transform: translate(-50%, -100%);
      left: 50%;
    `,
    arrow: css`
      top: -10px;
      &:after {
        ${carrotStyles} margin-left: -10px;
        top: 100%;
        left: 50%;
        border-color: ${({ color }) => color || colors.black} transparent
          transparent transparent;
      }
    `
  },
  [positions.topRight]: {
    default: css`
      top: 0;
      transform: translate(0, -100%);
      right: 0;
      margin-right: -8px;
    `,
    arrow: css`
      top: -10px;
      &:after {
        ${carrotStyles} top: 100%;
        right: 14px;
        border-color: ${({ color }) => color || colors.black} transparent
          transparent transparent;
      }
    `
  },
  [positions.right]: {
    default: css`
      bottom: 50%;
      transform: translate(100%, 50%);
      right: 0;
    `,
    arrow: css`
      right: -10px;
      &:after {
        ${carrotStyles} transform: translate(0, -50%);
        right: 100%;
        top: 50%;
        border-color: ${({ color }) => color || colors.black} transparent
          transparent transparent;
      }
    `
  },
  [positions.bottomRight]: {
    default: css`
      bottom: 0;
      transform: translate(0, 100%);
      right: 0;
      margin-right: -8px;
    `,
    hover: css`
      bottom: 0px;
    `,
    arrow: css`
      bottom: -10px;
      &:after {
        ${carrotStyles} bottom: 100%;
        right: 14px;
        border-color: ${({ color }) => color || colors.black} transparent
          transparent transparent;
      }
    `
  },
  [positions.bottom]: {
    default: css`
      bottom: 0;
      transform: translate(-50%, 100%);
      left: 50%;
    `,
    arrow: css`
      bottom: -10px;
      &:after {
        ${carrotStyles} margin-left: -10px;
        bottom: 100%;
        left: 50%;
        border-color: ${({ color }) => color || colors.black} transparent
          transparent transparent;
      }
    `
  },
  [positions.bottomLeft]: {
    default: css`
      bottom: 0;
      transform: translate(0, 100%);
      left: 0;
      margin-left: -8px;
    `,
    arrow: css`
      bottom: -10px;
      &:after {
        ${carrotStyles} bottom: 100%;
        left: 14px;
        border-color: ${({ color }) => color || colors.black} transparent
          transparent transparent;
      }
    `
  },
  [positions.left]: {
    default: css`
      bottom: 50%;
      left: 0;
      transform: translate(-100%, 50%);
    `,
    arrow: css`
      left: -10px;
      &:after {
        ${carrotStyles} transform: translate(0, -50%);
        right: -20px;
        top: 50%;
        border-color: ${({ color }) => color || colors.black} transparent
          transparent transparent;
      }
    `
  }
};

export const MoreInfo = styled.div`
  *:hover {
    visibility: visible;
  }
  position: relative;
  display: inline-block;
`;

export const ToolTipStyled = styled.div`
  position: absolute;
	background: ${({ color }) => color || colors.black};
  border-radius: 3px;
  padding: 12px 24px;
  text-align: center;
  font-weight: normal;
		font-family: ${avenir};
  box-shadow: 0 3px 12px rgba(0, 0, 0, 0.24);
  z-index: 9999;
  visibility: hidden;
  font-size: 14px;
  line-height: 1.4;
  color: #fff;
	white-space: nowrap;
  ${({ position, type }) => css`
    ${positionStyles[position].default} ${type === types.arrow &&
      positionStyles[position].arrow};
  `}
  ${({ forceShowToolTip }) =>
    forceShowToolTip &&
    css`
      position: absolute;
      visibility: visible;
    `}
  ${({ hoverEnabled }) =>
    hoverEnabled &&
    css`${MoreInfo}:hover & {
    position: absolute;
    visibility: visible;
  `}
`;
