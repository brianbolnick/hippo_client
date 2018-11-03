import { css } from 'styled-components'
import cols from './colors';
// Fonts
export const montserrat = "'Montserrat', sans-serif";
export const lato = "'Lato', sans-serif";
export const colors = cols;
// Responsive design
export const phoneMediaQuery = 'max-width: 768px';

export const media = {
	phone: (...args) => css`
		@media (${phoneMediaQuery}) {
			${css(...args)};
		}
	`,
}
