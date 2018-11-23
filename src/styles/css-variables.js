import { css, keyframes } from "styled-components";
import cols from "./colors";
import TextLogo from '../img/hippo-text.svg';

// Fonts
export const sourceSans = "'Source Sans Pro', sans-serif";
export const varela = "'Varela Round', sans-serif";
export const rufina = "'Rufina', serif";
export const colors = cols;

// Responsive design
export const phoneMediaQuery = "max-width: 768px";

export const Logo = TextLogo;

export const media = {
  phone: (...args) => css`
    @media (${phoneMediaQuery}) {
      ${css(...args)};
    }
  `
};

export const spinAround = keyframes`
	from {
		-webkit-transform: rotate(0);
		transform: rotate(0)
	}

	to {
		-webkit-transform: rotate(359deg);
		transform: rotate(359deg)
	}

`;

export const slideInLeft = keyframes`
	100% { left: 0; }
`;

export const slideOutLeft = keyframes`

`;
