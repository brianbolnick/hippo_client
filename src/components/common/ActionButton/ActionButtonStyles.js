import styled from 'styled-components/macro';
import Icon from 'components/common/Icon/Icon';
import { colors, avenir } from 'styles/css-variables';

export const ActionButtonContainer = styled.div`
  user-select: none;
  position: relative;
  width: 128px;
`;

export const Container = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-flow: column;
  box-sizing: border-box;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 14px;
  font-family: ${avenir};
  text-transform: uppercase;
  letter-spacing: 1px;
  cursor: pointer;
  border: none;
  border-radius: 4px;
  text-align: center;
  margin-bottom: 1px;
  background: ${colors.whiteSmoke};
  text-shadow: none;
  color: ${colors.black};
  font-weight: 600;
  position: relative;
  bottom: 3px;
  box-shadow: none;
  //transition: 0.1s ease-in-out;
  transition: border 0.1s ease-in-out;
  transition: padding 0s;
  padding: 12px 14px;
  box-sizing: border-box;

  :hover {
    transform: none;
    box-shadow: none;
    background: ${colors.lightGray};
  }

  ${({ active }) =>
    active &&
    `
    outline: none;
    background: ${colors.white};
		border: solid 2px ${colors.black};
		padding: 10px 12px;

		:hover {
			background: ${colors.white};
		}

		${ListIcon} {
			right: 0;
			top: 3px;
		}

	`};
`;

export const HeaderTitle = styled.div`
  font-weight: 300;
  font-family: ${avenir};
  font-weight: 500;
`;

export const Placeholder = styled.div`
  font-weight: 300;
  margin: 0 20px;
  margin-right: 30px;
  font-family: ${avenir};
  font-weight: 500;
  color: ${colors.offGray};
`;

export const List = styled.div`
  z-index: 10;
  position: absolute;
  width: 100%;
  border-top: none;
  border-radius: 4px;
  background-color: ${colors.white};
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  font-weight: 700;
  max-height: 280px;
  overflow-y: scroll;
  box-sizing: border-box;
  transition: 0.1s ease-in-out;
  opacity: 1;

  ${({ open }) =>
    !open &&
    `
			opacity: 0;
	`};
`;

export const ListItem = styled.div`
  width: 100%;
  font-size: 14px;
  padding: 12px 14px;
  cursor: pointer;
  display: flex;
  margin: 0;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow-x: hidden;
  box-sizing: border-box;
  position: relative;

  font-family: ${avenir};
  font-weight: 500;

  &:hover {
    background-color: ${colors.whiteSmoke};
  }
`;

export const ListIcon = styled(Icon)`
  position: absolute;
  right: 2px;
  top: 5px;
  padding: 0;
`;

export const Label = styled.label`
  margin-bottom: 8px;
  text-transform: uppercase;
  font-size: 12px;
  font-family: ${avenir};
`;
