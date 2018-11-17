import { css, keyframes } from "styled-components";
import cols from "./colors";
// Fonts
export const montserrat = "'Montserrat', sans-serif";
export const sourceSans = "'Source Sans Pro', sans-serif";
export const lato = "'Lato', sans-serif";
export const tienne = "'Tienne', serif";
export const oswald = "'Oswald', sans-serif";
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
