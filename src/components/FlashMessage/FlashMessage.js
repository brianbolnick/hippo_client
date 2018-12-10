import React from "react";
import styled from "styled-components";
import Icon from "../Icon/Icon";
import { colors, varela } from "../../styles/css-variables";

const FlashContainer = styled.div`
  min-width: 500px;
  margin-left: -250px;
  background-color: ${({ error }) => (error ? colors.red : colors.black)};
  color: ${colors.white};
  font-family: ${varela};
  text-align: center;
  border-radius: 3px 3px 0 0;
  padding: 16px;
  position: fixed;
  z-index: 1;
  left: 50%;
  bottom: 0;
  font-size: 1.1rem;
  display: flex;
  align-items: center;
`;

const CloseIcon = styled(Icon)`
  position: absolute;
  right: 16px;
	padding: 5px;
	width: 24px;
	height: 24px;
	&:hover {
		cursor: pointer;
		background: ${colors.offGray};
		border-radius: 50%;
`;

const FlashMessage = ({ children, error, closeable }) => {
  return (
    <FlashContainer error={error}>
      {children}
      {closeable && (
        <CloseIcon name="close" onClick={() => console.log("clicked")} />
      )}
    </FlashContainer>
  );
};

export default FlashMessage;
