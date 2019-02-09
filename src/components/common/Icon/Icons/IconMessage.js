import React, { Component } from "react";
import PropTypes from "prop-types";
import Icon from "../CustomIcon";

export default class IconMessage extends Component {
  render() {
    const { size, color } = this.props;
    return (
      <Icon size={size} viewBoxWidth="73.9" viewBoxHeight="73.8">
        <path
          fill={color}
          d="M308.7,279.7c-5.7,0-11.4.2-17,0-3.7-.1-5.1-2.5-2.4-5.1,5.2-5.1,2.4-8.8-.4-13.7a36.9,36.9,0,1,1,43.5,17.2C324.6,280.6,316.6,279.5,308.7,279.7Z"
          transform="translate(-284.1 -206)"
        />
        <path
          fill="white"
          d="M296.2,275c2.7-5.5,1.4-9.6-1.7-14.1-8-11.9-7.6-25.4.3-36.3s21.4-16.2,34.1-13,22.1,13.9,24.2,27.5c2.7,17.4-11.2,34.7-29.3,35.8C314.9,275.5,306,275,296.2,275Z"
          transform="translate(-284.1 -206)"
        />
        <path
          fill={color}
          d="M303.7,238.7c2.6,0,4.3,1.2,4.5,3.9s-1.1,4.4-3.8,4.6-4.4-1.2-4.6-3.9S301,239.1,303.7,238.7Z"
          transform="translate(-284.1 -206)"
        />
        <path
          fill={color}
          d="M325.7,242.7c-.6,3.2-2.1,4.7-4.7,4.6s-4.4-1.6-4.4-4.2,1.9-4.6,5-4.4S325.2,240.9,325.7,242.7Z"
          transform="translate(-284.1 -206)"
        />
        <path
          fill={color}
          d="M333.8,242.9c.3-2.7,1.7-4.3,4.4-4.2s4.2,1.7,4.1,4.4-1.6,4.2-4.4,4.1S333.9,245.5,333.8,242.9Z"
          transform="translate(-284.1 -206)"
        />
      </Icon>
    );
  }
}

IconMessage.propTypes = {
  size: PropTypes.number,
  color: PropTypes.string
};

IconMessage.defaultProps = {
  size: 35,
  color: "#333333"
};
