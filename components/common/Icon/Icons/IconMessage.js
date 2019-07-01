import React, { Component } from "react";
import PropTypes from "prop-types";
import Icon from "../CustomIcon";

export default class IconMessage extends Component {
  render() {
    const { size, color } = this.props;
    return (
      <Icon
        size={size}
        viewBoxWidth="74.1"
        viewBoxHeight="73.4"
        {...this.props}
      >
        <path
          fill={color}
          d="M38.3,88.5H20.4c-1.7,0-2.9-2.5-1.7-3.7,5.3-5.1,3.1-9.4-.1-14.8C10.1,55,13,37.8,25.1,25.9s29.6-13.8,43.5-6.1,22,24.7,18.5,39.8c-4.5,19.1-19.8,29-33.8,29.1h-15ZM26.5,83.8c9.3,1.2,17.9.9,26.5.4,13.1-.7,22.5-7.5,27.5-19.7S83.6,40.9,75.1,31,55.2,18,42.6,21.1C23.7,25.9,11.1,49.2,23.4,68.8,26.3,73.5,29.2,77.7,26.5,83.8Z"
          transform="translate(-13.7 -15.4)"
        />
        <path
          fill={color}
          d="M33.3,48.2c3.3.3,4.9,2.6,4.4,5a3.9,3.9,0,0,1-4.3,3C30.9,56,29,53.6,30,51.4S32.5,48.9,33.3,48.2Z"
          transform="translate(-13.7 -15.4)"
        />
        <path
          fill={color}
          d="M71.9,51.7c-.3,3.4-2.6,5-5,4.5a4.1,4.1,0,0,1-3.1-4.4c.3-2.4,2.7-4.3,4.9-3.4S71.1,50.9,71.9,51.7Z"
          transform="translate(-13.7 -15.4)"
        />
        <path
          fill={color}
          d="M55.1,52.5a4.2,4.2,0,0,1-4.7,3.8c-2.5-.3-4.4-2.6-3.9-4.8a4.3,4.3,0,0,1,4.3-3.3A4.2,4.2,0,0,1,55.1,52.5Z"
          transform="translate(-13.7 -15.4)"
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
