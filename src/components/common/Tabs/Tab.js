import React from 'react';
import styled, { css } from 'styled-components/macro';
import PropTypes from 'prop-types';
import { colors } from 'styles/css-variables';

const originalCss = css`
  border-bottom: solid 4px ${colors.red};
  padding-bottom: 4px;
`;

const profileCss = css`
  border-bottom: solid 2px ${colors.blue};
  padding-bottom: 4px;
  color: ${colors.black} !important;
`;

const StyledTab = styled.div`
  margin-right: 16px;
  cursor: pointer;

  ${({ profile }) =>
    profile &&
    `
			color: ${colors.darkGray};
	`};

  ${({ isActive, profile }) =>
    isActive ? (profile ? profileCss : originalCss) : ``};
`;

const Tab = ({ children, name, onClick, isActive, ...props }) => {
  const renderChildren = () => {
    return React.cloneElement(children, { isActive });
  };

  return (
    <StyledTab onClick={() => onClick(name)} isActive={isActive} {...props}>
      {renderChildren()}
    </StyledTab>
  );
};

Tab.propTypes = {
  children: PropTypes.element.isRequired, //title or display name of the tab
  name: PropTypes.string.isRequired, //name to associate with the associated tab pane
  onClick: PropTypes.func, //callback for clicking on the tab
  isActive: PropTypes.bool //handles styling for the active and inactive tabs
};

export default Tab;
