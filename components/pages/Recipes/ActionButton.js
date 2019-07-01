import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Icon from "components/common/Icon/Icon";
import { fadeInDown, colors } from "styles/css-variables";
import Tooltip from "components/common/Tooltip/Tooltip";

const StyledTooltip = styled(Tooltip)``;

const ButtonContainer = styled.button`
  border-radius: 50%;
  box-sizing: border-box;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ background }) => background || colors.black};
  cursor: pointer;
  width: 48px;
  height: 48px;
  border: none;
  outline: none;
  * > &:hover {
    box-shadow: 0px 0px 6px 2px ${colors.offGray};
  }

  div {
    width: 100%;
    height: 100%;
    padding: 10px;
    margin: 0;
  }

  span {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const Container = styled.div`
  animation-name: ${fadeInDown};
  animation-duration: 0.2s;
  animation-fill-mode: backwards;
  :nth-child(2) {
    animation-delay: 0.1s;
  }
  :nth-child(3) {
    animation-delay: 0.2s;
  }
`;

const ActionButton = ({
  icon,
  fill,
  background,
  onClick,
  to,
  tooltip,
  tipPosition
}) => {
  return (
    <Container>
      <StyledTooltip type="arrow" tip={tooltip} position={tipPosition}>
        {to ? (
          <Link to={to}>
            <ButtonContainer background={background}>
              <Icon name={icon} color={fill} />
            </ButtonContainer>
          </Link>
        ) : (
          <ButtonContainer onClick={onClick} background={background}>
            <Icon name={icon} color={fill} />
          </ButtonContainer>
        )}
      </StyledTooltip>
    </Container>
  );
};

ActionButton.propTypes = {
  icon: PropTypes.string.isRequired,
  fill: PropTypes.string.isRequired,
  background: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  to: PropTypes.string,
  tooltip: PropTypes.string.isRequired,
  tipPosition: PropTypes.string
};

export default ActionButton;
