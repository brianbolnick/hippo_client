import { css, keyframes } from "styled-components";
import cols from "./colors";
// Fonts
export const montserrat = "'Montserrat', sans-serif";
export const sourceSans = "'Source Sans Pro', sans-serif";
export const varela = "'Varela Round', sans-serif";
export const ptSerif = "'PT Serif', serif";
export const patua = "'Patua One', cursive";
export const maven = "'Maven Pro', sans-serif";
export const rufina = "'Rufina', serif";
export const colors = cols;
// Responsive design
export const phoneMediaQuery = "max-width: 768px";

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
