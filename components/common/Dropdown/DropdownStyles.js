import styled from 'styled-components';
import Icon from '../Icon/Icon';
import { colors, avenir } from 'styles/css-variables';

export const Container = styled.div`
	user-select: none;
	position: relative;
	width: 256px;
`;

export const Header = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	line-height: 38px;
	border: 1px solid #dfdfdf;
	border-radius: 3px;
	cursor: default;
	position: relative;
	background-color: #fff;

	span {
		margin-right: 20px;
	}
`;

export const HeaderTitle = styled.div`
	font-weight: 300;
	margin: 0 20px;
	margin-right: 30px;
	font-family: ${avenir};
	font-weight: 500;

`;

export const List = styled.ul`
	z-index: 10;
	position: absolute;
	width: 100%;
	border: 1px solid #dfdfdf;
	border-top: none;
	border-bottom-right-radius: 3px;
	border-bottom-left-radius: 3px;
	background-color: #fff;
	box-shadow: 0 2px 5px -1px #e8e8e8;
	font-weight: 700;
	padding: 15px 0;
	max-height: 280px;
	overflow-y: scroll;
	margin-top: -1px;
	box-sizing: border-box;
`;

export const ListItem = styled.li`
	width: 100%;
	font-size: 1rem;
	padding: 8px 10px;
	cursor: default;
	display: inline-block;
	white-space: nowrap;
	text-overflow: ellipsis;
	overflow-x: hidden;
	box-sizing: border-box;
	font-family: ${avenir};
	font-weight: 500;
	position: relative;


	&:hover {
		color: #fff;
		background-color: ${colors.blue};
	}

	${({selected}) => selected && `
		color: #fff;
		background-color: ${colors.blue};
	`};
`;

export const SelectedIcon = styled(Icon)`
	position: absolute;
	right: 0;
	top: 5px;
`;



