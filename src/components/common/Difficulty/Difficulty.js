import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { colors } from 'styles/css-variables';
import Icon from "components/common/Icon/Icon";

const COLOR_MAP = {
	1: colors.yellow,
	2: colors.orange,
	3: colors.darkRed
}

const Container = styled.div`
	display: flex;
	max-width: 75px;
`;

const Difficulty = ({value, size}) => {
	const renderColor = (val) => {
		if (val > value) return colors.mutedGray;
		return COLOR_MAP[val];
	}

	return (
		<Container>
			<Icon name="fire" size={size} color={renderColor(1)} />
			<Icon name="fire" size={size} color={renderColor(2)} />
			<Icon name="fire" size={size} color={renderColor(3)} />
		</Container> 
	)
}

Difficulty.propTypes = {
	value: PropTypes.oneOf([1,2,3]).isRequired,
	size: PropTypes.string
}

Difficulty.defaultProps = {
	size: "20px"
}

export default Difficulty
