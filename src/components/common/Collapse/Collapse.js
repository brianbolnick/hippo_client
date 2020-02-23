import React, { useState } from 'react';
import styled from 'styled-components/macro';
import PropTypes from 'prop-types';
import Icon from 'components/common/Icon/Icon';
import { colors, avenir } from 'styles/css-variables';

const Container = styled.div`
  display: flex;
  flex-flow: column;
  margin-bottom: 16px;
  ${({ divider }) =>
    divider &&
    `
		padding-bottom: 16px;
		border-bottom: solid 1px ${colors.offWhite};
	`};
`;

const Label = styled.div`
  font-family: ${avenir};
  color: ${colors.black};
  font-size: 1.1rem;
  font-weight: 600;
`;

const Header = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: 0.3s;
  box-sizing: border-box;
  padding: 8px;

  &:hover {
    background: ${colors.whiteSmoke};
  }
`;

const StyledIcon = styled(Icon)`
  transition: transform 0.2s ease;
  ${({ isOpen }) =>
    isOpen &&
    `
		transform: rotate(-90deg);
	`};
`;

const ChildrenContainer = styled.div`
  max-height: 0;
  overflow: scroll;
  transition: max-height 0.2s ease-in-out;

  ${({ isOpen }) =>
    isOpen &&
    `
		max-height: 200px;
	`};

  ${({ isOpen, large }) =>
    isOpen &&
    large &&
    `
		max-height: initial;
	`};
`;

const Collapse = ({ label, divider, children, defaultOpen, large }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <Container divider={divider}>
      <Header onClick={() => setIsOpen(!isOpen)}>
        <Label>{label}</Label>
        <StyledIcon
          size="24px"
          name="chevronDown"
          isOpen={isOpen}
          color={colors.black}
        />
      </Header>
      <ChildrenContainer isOpen={isOpen} large={large}>
        {children}
      </ChildrenContainer>
    </Container>
  );
};

Collapse.propTypes = {
  children: PropTypes.any,
  label: PropTypes.string.isRequired,
  defaultOpen: PropTypes.bool,
  divider: PropTypes.bool,
  large: PropTypes.bool
};

Collapse.defaultProps = {
  defaultOpen: false,
  divider: false,
  large: false
};

export default Collapse;
