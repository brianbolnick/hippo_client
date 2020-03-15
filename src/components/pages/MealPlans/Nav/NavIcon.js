import React from 'react';
import styled, { css } from 'styled-components/macro';
import { colors } from 'styles/css-variables';

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
`;
const line = css`
  height: 2px;
  width: 20px;
  background: transparent;
  transition: all 0.2s ease;
  background-color: ${colors.black};
`;

const LineTop = styled.div`
	${line}
	transform: ${({ open }) => (open ? 'rotate(45deg)' : 'none')};
	transform-origin: top left;
	margin-bottom: 5px;
`;

const LineMiddle = styled.div`
	${line}
	opacity: ${({ open }) => (open ? 0 : 1)};
	transform: ${({ open }) => (open ? 'translateX(-16px)' : 'none')};
`;

const LineBottom = styled.div`
	${line}
	transform: ${({ open }) => (open ? 'translateX(-1px) rotate(-45deg)' : 'none')};
	transform-origin: top left;
	margin-top: 5px;
`;

const MenuContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const NavIcon = ({ onClick, open }) => {
  return (
    <MenuContainer>
      <IconContainer open={open} onClick={onClick}>
        <LineTop open={open} />
        <LineMiddle open={open} />
        <LineBottom open={open} />
      </IconContainer>
    </MenuContainer>
  );
};

export default NavIcon;
