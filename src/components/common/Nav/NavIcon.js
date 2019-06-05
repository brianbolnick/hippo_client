import React, { useState } from 'react'
import styled, { css }  from 'styled-components';
import PropTypes from 'prop-types';
import { colors } from 'styles/css-variables';
import NavSubMenu from './NavSubMenu';

const IconContainer = styled.div`
	height: 32px;
	width: 32px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	cursor: pointer;
	padding: 4px;
	position: relative;
`
const line = css`
	height: 2px;
	width: 20px;
	background: transparent;
	transition: all 0.2s ease;
	background-color: ${colors.black};
`;

const LineTop = styled.div`
	${line}
	transform: ${({open}) => open ? 'rotate(45deg)' : 'none' };
	transform-origin: top left;
	margin-bottom: 5px;
`;

const LineMiddle = styled.div`
	${line}
	opacity: ${({open}) => open ? 0 : 1 };
	transform: ${({open}) => open ? 'translateX(-16px)' : 'none' };
`;

const LineBottom = styled.div`
	${line}
	transform: ${({open}) => open ? 'translateX(-1px) rotate(-45deg)' : 'none'};
	transform-origin: top left;
	margin-top: 5px;
`;

const MenuContainer = styled.div`
`;

const NavIcon = ({ onIconClick, auth }) => {
	const [open, setOpen] = useState(false);

	const handleClick = () =>{
		onIconClick && onIconClick(!open);
		setOpen(!open)
	}

	return (
		<MenuContainer>
			<IconContainer open={open} onClick={() => handleClick()}>
				<LineTop open={open}/>
				<LineMiddle open={open}/>
				<LineBottom open={open}/>
			</IconContainer>
				{open && <NavSubMenu auth={auth}/>}
	</MenuContainer>
	)
}

NavIcon.propTypes = {
	onIconClick: PropTypes.func.isRequired,
	auth: PropTypes.bool
}

NavIcon.defaultProps = {
	auth: false
}

export default NavIcon;
