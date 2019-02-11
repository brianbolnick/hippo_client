import styled from "styled-components";
import { colors } from "styles/css-variables";

export const IconSvg = styled.svg`
  width: 100%;
  height: 100%;
  max-height: 100%;
  max-width: 100%;
`;

export const WhitePath = styled.path`
  &&& {
    fill: white;
  }
`;
export const TransparentPath = styled.path`
  ${({ fill }) =>
    (fill === colors.white || fill === colors.offWhite) &&
    `
	&&& {
    fill-opacity: 0;
    stroke: white;
    stroke-width: 5px;
	}
	`}
`;
