import { css, keyframes } from 'styled-components/macro';
import cols from './colors';
import TextLogo from '../img/hippo-text.svg';
import WhiteLogo from '../img/hippo-text-white.svg';
//export { default as NewLogo } from "../img/new-logo.svg";
export { default as NewLogo } from '../img/new-logo.png';
export { default as BlackLogo } from '../img/new-logo-black.png';
export { default as WhiteLogo } from '../img/new-logo-white.png';

// Fonts
export const sourceSans = "'Source Sans Pro', sans-serif";
export const workSans = "'Work Sans', sans-serif";

export const varela = "'Varela Round', sans-serif";
export const lato = "'Lato', sans-serif";
export const rufina = "'Rufina', serif";
export const raleway = "'Raleway', sans-serif";
export const avenir = "'Avenir Next', sans-serif";
export const colors = cols;

// Responsive design
export const phoneMediaQuery = 'max-width: 768px';
export const tabletMediaQuery = 'max-width: 957px';
export const smallDesktopMediaQuery = 'max-width: 1200px';
export const desktopMediaQuery = 'min-width: 1200px';

export const Logo = TextLogo;
export const LogoWhite = WhiteLogo;

export const media = {
  phone: (...args) => css`
    @media (${phoneMediaQuery}) {
      ${css(...args)};
    }
  `,
  tablet: (...args) => css`
    @media (${tabletMediaQuery}) {
      ${css(...args)};
    }
  `,
  smallDesktop: (...args) => css`
    @media (${smallDesktopMediaQuery}) {
      ${css(...args)};
    }
  `,
  desktop: (...args) => css`
    @media (${desktopMediaQuery}) {
      ${css(...args)};
    }
  `
};
export const show = keyframes`
    0% {
        display: none;
        opacity: 0;
    }
    1% {
        display: flex;
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
`;

export const fadeIn = keyframes`
    0% {
    background: rgba(0,0,0,.0);
    }
    100% {
    background: rgba(0,0,0,.7);
    }
`;

export const fadeInDown = keyframes`
	from {
			opacity: 0;
			transform: translateY(24px);
		}
		to {
			opacity: 1;
			transform: translate(0px);
		}
`;

export const scaleUp = keyframes`
    0% {
        transform: scale(.8) translateY(1000px);
        opacity: 0;
    }
    100% {
        transform: scale(1) translateY(0px);
        opacity: 1;
    }
`;

export const scaleBack = keyframes`
    0% {
        transform: scale(1);
    }
    100% {
        transform: scale(.85);
    }
`;

export const quickScaleDown = keyframes`
    0% {
        transform:scale(1);
    }
    99.9% {
        transform:scale(1);
    }
    100% {
        transform:scale(0);
    }
`;

export const fadeOut = keyframes`
    0% {
        background: rgba(0,0,0,.7);
    }
    100% {
        background: rgba(0,0,0,.0);
    }
`;

export const scaleDown = keyframes`
    0% {
        transform: scale(1) translateY(0px);
        opacity: 1;
    }
    100% {
        transform: scale(.8) translateY(1000px);
        opacity: 0;
    }
`;

export const scaleForward = keyframes`
    0% {
        transform: scale(.85);
    }
    100% {
        transform: scale(1);
    }
`;
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
