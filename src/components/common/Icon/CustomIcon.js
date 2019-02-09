import React, { Component } from "react";
import PropTypes from "prop-types";
import { IconSvg } from "./IconStyledComponents";
import { colors } from "styles/css-variables";

export default class Icon extends Component {
  static propTypes = {
    size: PropTypes.string.isRequired,
    viewBoxHeight: PropTypes.string,
    viewBoxWidth: PropTypes.string,
    color: PropTypes.string,
    children: PropTypes.node.isRequired
  };

  static defaultProps = {
    color: colors.black,
    viewBoxHeight: "512",
    viewBoxWidth: "512"
  };

  render() {
    const {
      onClick,
      size,
      color,
      viewBoxWidth,
      viewBoxHeight,
      children
    } = this.props;

    return (
      <IconSvg
        onClick={onClick}
        color={color}
        height={`${size}px`}
        width={`${size}px`}
        viewBox={`0 0 ${viewBoxWidth} ${viewBoxHeight}`}
        xmlns="http://www.w3.org/2000/svg"
        {...this.props}
      >
        {children}
      </IconSvg>
    );
  }
}
