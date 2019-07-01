import React, { Component } from "react";
import PropTypes from "prop-types";
import Icon from "../CustomIcon";

export default class IconClock extends Component {
  render() {
    const { size, color } = this.props;
    return (
      <Icon size={size} viewBoxWidth="79.5" viewBoxHeight="76" {...this.props}>
        <path
          fill={color}
          d="M86.8,52.3c-.2,20.3-16.8,36.3-37.4,36S13,71.6,13.4,51.9c.4-21.4,15.9-36.3,36.9-36.7S86.9,32.1,86.8,52.3Zm-68.3-.7c-1.1,16,12.8,31.9,31.1,32.2S81.9,70.5,82,52.6c.2-21.4-16.7-32.4-31.8-32.7S17.8,33.7,18.5,51.6Z"
          transform="translate(-10.3 -12.4)"
        />
        <path
          fill={color}
          d="M11.7,27.1c-.3-.2-.7-.3-.8-.6s-.8-1.4-.6-1.7A41.4,41.4,0,0,1,22.9,12.4a2.4,2.4,0,0,1,1.8.4c.3.4.7,1.5.4,1.7C21,18.7,16.8,22.9,12.6,27,12.4,27.2,12,27.1,11.7,27.1Z"
          transform="translate(-10.3 -12.4)"
        />
        <path
          fill={color}
          d="M76.7,12.6c.4,0,.8-.1,1,.1L89.6,24.4a1.9,1.9,0,0,1-.2,1.8c-.7.4-2.1.9-2.5.6-3.9-4-7.8-8-11.6-12.1-.2-.2.3-1.1.6-1.7S76.4,12.8,76.7,12.6Z"
          transform="translate(-10.3 -12.4)"
        />
        <path
          fill={color}
          d="M46.4,45.9c.2-1.9.4-4.6.8-7.2,0-.4.9-.9,1.4-.9s1.5.4,1.6.8c.4,3.3.6,6.5.9,9.8a3.9,3.9,0,0,0,3.6,4l6.7,1.3c.4.1.9,1.1.9,1.6a2,2,0,0,1-1,1.6,17.1,17.1,0,0,1-11.6.3c-1.2-.4-2.5-2.3-2.8-3.6S46.6,49,46.4,45.9Z"
          transform="translate(-10.3 -12.4)"
        />
      </Icon>
    );
  }
}

IconClock.propTypes = {
  size: PropTypes.number,
  color: PropTypes.string
};

IconClock.defaultProps = {
  size: 35,
  color: "#333333"
};
