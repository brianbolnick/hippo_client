import React from "react";
import { Navbar, Brand, BrandImage, NavLinks, NavLink } from "./NavStyles";
import { Link } from "react-router-dom";
import { Logo } from 'styles/css-variables.js';
import { token, signOut } from 'utils';
import Button from 'components/Button/Button';

const Nav = () => {
	return (
		<Navbar>
			<Brand>
				<Link to="/">
					<BrandImage src={Logo} alt="" />
				</Link>
			</Brand>
			<NavLinks>
				<NavLink to="/">About</NavLink>
				{!token && <NavLink to="/sign_in">Sign In</NavLink>}
				{token && 
						<>
					<NavLink to="/recipes">Recipes</NavLink>
					<NavLink to="/family">Family</NavLink>
					<Button asLink onClick={signOut}>Sign Out</Button>
						</>
				}
			</NavLinks>
		</Navbar>
	);
};

export default Nav;
