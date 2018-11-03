import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { colors } from '../../styles/css-variables';

const StyledInput = styled.input`
		color: ${colors.black};
		width: 240px;
		border-style: solid;
		padding: 0 1rem;
		transition: background-color 0.15s,border-color 0.15s;
		border: solid 2px ${colors.lightGray};
		height: 32px;
		line-height: 2.4em;
		border-radius: 2px;
		font-size: 14px;
		letter-spacing: 0.025rem;

		&:focus {
			outline: none;
			border-color: ${colors.blue};
			background-color: ${colors.white};
		}
`
const Input = ({type, onChange, placeholder, label }) => {
	return (
		<StyledInput ype={type} onChange={onChange} placeholder={placeholder} />
	)
}

Input.propTypes = {
	type: PropTypes.string,
	onChange: PropTypes.func, 
	placeholder: PropTypes.string, 
	label: PropTypes.string
}

export default Input;
