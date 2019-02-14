import React, { Component } from "react";
import PropTypes from "prop-types";
import { IconSvg } from "./IconStyledComponents";
import { colors } from "styles/css-variables";

export default class CustomIcon extends Component {
  render() {
    const {
      onClick,
      color,
      viewBoxWidth,
      viewBoxHeight,
      children
    } = this.props;

    return (
      <IconSvg
        onClick={onClick}
        color={color}
        viewBox={`0 0 ${viewBoxWidth} ${viewBoxHeight}`}
        aria-hidden="true"
        data-prefix="fal"
        role="img"
        xmlns="http://www.w3.org/2000/svg"
        {...this.props}
      >
        {children}
      </IconSvg>
    );
  }
}
CustomIcon.propTypes = {
  viewBoxHeight: PropTypes.string,
  viewBoxWidth: PropTypes.string,
  color: PropTypes.string,
  children: PropTypes.node.isRequired
};

CustomIcon.defaultProps = {
  color: colors.black,
  viewBoxHeight: "512",
  viewBoxWidth: "512"
};
