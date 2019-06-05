import React from 'react'
//import Button from "components/common/Button/Button";
import { token, signOut } from "utils";
import styled from 'styled-components';
import { colors } from 'styles/css-variables';
import {
	NavLink,
	NavLinkButton
} from "./NavStyles";

const Container = styled.div`
	position: absolute;
	max-height: 320px;
	background: ${colors.white};
	border: solid 1px ${colors.mutedGray};
	border-top: none;
	border-radius: 2px;
	right: 0;
	overflow-y: scroll;
	transition: 1s ease-in-out;
	display: flex;
	flex-flow: column;
	box-sizing: border-box;
	width: 100%;
	padding: 0 36px;
	transition: all 0.5s ease;
`;

const MenuItem = styled.div`
	padding: 16px;

	:not(:last-child) { 
		border-bottom: solid 1px ${colors.offWhite};
	}
`

const NavSubMenu = props => {

	return (
		<Container>
			<MenuItem>
			<NavLink auth={props.auth} to="/about">
				About
			</NavLink>

		</MenuItem>
			{!token && (

			<MenuItem>
				<NavLink auth={props.auth} to="/sign_in">
					Sign In
				</NavLink>

				</MenuItem>
			)}

			{token &&  (
				<>

			<MenuItem>
					<NavLink auth={props.auth} to="/">
						Recipes
					</NavLink>

				</MenuItem>

			<MenuItem>
					<NavLink auth={props.auth} to="/meal_plans">
						Meal Plans
					</NavLink>

				</MenuItem>

			<MenuItem>
					<NavLinkButton asLink onClick={signOut} transparentBackground>
						Sign Out
					</NavLinkButton>

				</MenuItem>


				</>
			)} 
		</Container>
	)
}

export default NavSubMenu;
