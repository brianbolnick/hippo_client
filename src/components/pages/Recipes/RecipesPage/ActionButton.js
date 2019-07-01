import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Icon from "components/common/Icon/Icon";
import { ActionButtonContainer, ButtonContainer, StyledTooltip, } from './RecipesPageStyledComponents';

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
    <ActionButtonContainer>
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
    </ActionButtonContainer>
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
