import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Icon from 'components/common/Icon/Icon';
import { colors, avenir } from 'styles/css-variables';

const Container = styled.div`
	display: flex;
	flex-flow: column;
	margin-bottom: 16px;
`;

const Label = styled.div`
	font-family: ${avenir};
	color: ${colors.black};
	font-size: 1.1rem;
	font-weight: 600;
`

const Header = styled.div`
	display: flex;
	justify-content: space-between;    
	align-items: center;
`;

const StyledIcon = styled(Icon)`
	cursor: pointer;
	transition: transform 0.2s ease;
	${({isOpen}) => isOpen && `
		transform: rotate(-90deg);
	`};
`;

const ChildrenContainer = styled.div`
	max-height: 0;
	overflow: scroll;
	transition: max-height 0.2s ease-in-out;
	
	${({isOpen}) => isOpen && `
		max-height: 200px;
	`};
`;

const Collapse = ({ label, children, defaultOpen }) => {

	const [isOpen, setIsOpen] = useState(defaultOpen);

	return (
		<Container>
			<Header>
				<Label>{label}</Label>
				<StyledIcon size="24px" name='chevronDown' isOpen={isOpen} color={colors.black} onClick={() => setIsOpen(!isOpen)} />
			</Header>
		<ChildrenContainer isOpen={isOpen}>{children}</ChildrenContainer>
		</Container>
	) }

Collapse.propTypes = {
	children: PropTypes.any,
	label: PropTypes.string.isRequired,
	defaultOpen: PropTypes.bool
}

Collapse.defaultProps = {
	defaultOpen: false
}

export default Collapse
