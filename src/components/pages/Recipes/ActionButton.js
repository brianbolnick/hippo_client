import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Icon from "components/Icon/Icon";
import { fadeInDown, colors, media } from "styles/css-variables";
import Tooltip from "components/Tooltip/Tooltip";

const ButtonContainer = styled.button`
	border-radius: 50%;
  box-sizing: border-box;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
	background: ${colors.black};
	cursor: pointer;
  width: 48px;
  height: 48px;
	border: none;
	outline: none;
	animation-name: ${fadeInDown};
	animation-duration: 0.3s;
	animation-fill-mode: backwards;
	:nth-child(2) {
		animation-delay: .1s;
	}
	:nth-child(3) {
		animation-delay: .2s;
	}

  * > &:hover {
    box-shadow: 0px 0px 6px 2px ${colors.offGray};
  }

  //${media.phone`
	//top: -32px;
	//left: calc(50% - 36px);
	//`};

  div {
    width: 100%;
    height: 100%;
    padding: 12px;
    margin: 0;
  }

  span {
    display: flex;
    align-items: center;
    justify-content: center;
  }


`;

const ActionButton = ({ icon, color, onClick, to, tooltip, tipPosition }) => {
  return to ? (
    <Tooltip type="arrow" tip={tooltip} position={tipPosition}>
      <Link to={to}>
        <ButtonContainer>
          <Icon name={icon} color={color} />
        </ButtonContainer>
      </Link>
    </Tooltip>
  ) : (
    <Tooltip type="arrow" tip={tooltip} position={tipPosition}>
      <ButtonContainer onClick={onClick}>
        <Icon name={icon} color={color} />
      </ButtonContainer>
    </Tooltip>
  );
};

ActionButton.propTypes = {
  icon: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  to: PropTypes.string,
  tooltip: PropTypes.string.isRequired,
  tipPosition: PropTypes.string
};

export default ActionButton;
