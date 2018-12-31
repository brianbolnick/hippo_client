import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { colors } from "styles/css-variables";

const StyledTab = styled.div`
  margin-right: 16px;
  cursor: pointer;

  ${({ isActive }) =>
    isActive &&
    `
			border-bottom: solid 4px ${colors.red};
			padding-bottom: 4px;
		`};
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
