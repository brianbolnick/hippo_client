import { css } from 'styled-components'

//Yellows
export const yellow = '#efd928';

//Blues
export const blue = '#387780';
export const darkBlue = '#223843';

// Whites
export const white = '#ffffff';

// Grays
export const mutedGray = 'rgba(0,0,0,.15)';
export const lightGray = '#f5f5f5';
export const darkGray = '#ABADAB;';

// Blacks
export const black = '#212121';

// Fonts
export const montserrat = "'Montserrat', sans-serif";
export const lato = "'Lato', sans-serif";

// Responsive design
export const phoneMediaQuery = 'max-width: 768px';

export const media = {
	phone: (...args) => css`
		@media (${phoneMediaQuery}) {
			${css(...args)};
		}
	`,
}
