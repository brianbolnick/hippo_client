import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const StyledTabPane = styled.div`
  display: ${props => (props.isActive ? "block" : "none")};
	height: auto;
	width: 100%;
`;

const TabPane = ({ isActive, asyncRender, children }) => {
  return isActive || asyncRender ? (
    <StyledTabPane isActive={isActive}>{children}</StyledTabPane>
  ) : null;
};

TabPane.propTypes = {
  name: PropTypes.string.isRequired, //name of the associated tab
  isActive: PropTypes.bool, //whether or not the tab pane is selected and should be shown on screen
  asyncRender: PropTypes.bool, //whether or not to render the tab pane regardless of if it's shown on screen
  children: PropTypes.any //guts of the tab pane
};

export default TabPane;
