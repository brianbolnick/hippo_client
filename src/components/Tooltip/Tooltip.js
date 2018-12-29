import React from "react";
import PropTypes from "prop-types";
import {
  MoreInfo,
  ToolTipStyled,
  positions,
  types
} from "./TooltipStyledComponents";

const supportedPositions = Object.keys(positions).reduce((carry, key) => {
  carry.push(positions[key]);
  return carry;
}, []);

const supportedTypes = Object.keys(types).reduce((carry, key) => {
  carry.push(types[key]);
  return carry;
}, []);

function ToolTip({ children, tip, position, type, show, hide }) {
  const hoverEnabled = show === null && hide === null;
  const forceShowToolTip =
    !hoverEnabled && ((show !== null && show) || (hide !== null && !hide));

  return (
    <MoreInfo>
      {children}
      <ToolTipStyled
        position={position}
        type={type}
        hoverEnabled={hoverEnabled}
        forceShowToolTip={forceShowToolTip}
      >
        {tip}
      </ToolTipStyled>
    </MoreInfo>
  );
}

ToolTip.propTypes = {
  children: PropTypes.node.isRequired,
  position: PropTypes.oneOf(supportedPositions),
  tip: PropTypes.node.isRequired,
  type: PropTypes.oneOf(supportedTypes),
  show: PropTypes.bool,
  hide: PropTypes.bool
};

ToolTip.defaultProps = {
  position: positions.top,
  type: types.default,
  show: null,
  hide: null
};

export { positions, types };

export default ToolTip;
