import React from "react";
import styled from "styled-components";
import Icon from "components/common/Icon/Icon";
import { colors, varela, media } from "styles/css-variables";

const FlashContainer = styled.div`
  min-width: 500px;
  margin-left: -250px;
  background-color: ${({ error, success }) =>
    error ? colors.darkRed : success ? colors.green : colors.black};
  color: ${colors.white};
  font-family: ${varela};
  text-align: center;
  border-radius: 3px 3px 0 0;
  padding: 16px;
  position: fixed;
  z-index: 1999;
  left: 50%;
  bottom: 0;
  font-size: 1.1rem;
  display: flex;
  align-items: center;

  transition: transform 0.3s cubic-bezier(0, 0.52, 0, 1);
  ${media.phone`
	min-width: 250px;
	margin-left: -135px;
	`};

  ${({ visible }) =>
    visible
      ? `
  transform: translate3d(0, 0vh, 0);
	overflow: hidden;
	`
      : `
	transform: translate3d(0, 100vh, 0);
	`};
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

const FlashMessage = ({ children, error, success, onClose, visible }) => {
  return (
    <FlashContainer error={error} visible={visible} success={success}>
      {children}
      {onClose && <CloseIcon name="close" onClick={onClose} />}
    </FlashContainer>
  );
};

export default FlashMessage;
