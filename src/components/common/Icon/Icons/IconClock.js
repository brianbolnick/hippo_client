import React, { Component } from "react";
import PropTypes from "prop-types";
import Icon from "../CustomIcon";

export default class IconClock extends Component {
  render() {
    const { size, color } = this.props;
    return (
      <Icon size={size} viewBoxWidth="80.2" viewBoxHeight="76.2">
        <path
          fill={color}
          d="M356.9,241.7a36.4,36.4,0,0,1-37,36.4c-20.1-.1-36.8-17.2-36.4-37.2s17.1-36.1,36.7-36.1A36.9,36.9,0,0,1,356.9,241.7Z"
          transform="translate(-280.2 -201.9)"
        />
        <path
          fill={color}
          d="M295.4,202.5c-2.2,6.2-7.3,9.9-11.7,14.1a1.8,1.8,0,0,1-2.6,0,2,2,0,0,1-.5-2.7C285,209.4,288.2,203.5,295.4,202.5Z"
          transform="translate(-280.2 -201.9)"
        />
        <path
          fill={color}
          d="M346.9,201.9a5.7,5.7,0,0,1,2.2.9c3.5,3.3,7,6.8,10.4,10.3,1,1,1.4,2.3.1,3.4s-1.6,1-2.6.2a71.9,71.9,0,0,1-11.6-11.8C344.6,203.9,344.7,202.4,346.9,201.9Z"
          transform="translate(-280.2 -201.9)"
        />
        <path
          fill="white"
          d="M288.7,241.5c0-17.8,13.6-31.6,31.4-31.7s32.7,14.7,32.3,32.3-15.2,31.6-32.3,31.5S288.6,259,288.7,241.5Z"
          transform="translate(-280.2 -201.9)"
        />
        <path
          fill={color}
          d="M316.7,235.6c.9-2.4-2.1-8.1,2.6-8.2s2,5.5,1.9,8.6c-.2,4.7,1.5,6.8,6.3,6.3a7.5,7.5,0,0,1,3.9.7,3.1,3.1,0,0,1,1.5,2.2,3.1,3.1,0,0,1-1.9,2,99.1,99.1,0,0,1-10.9.2c-2.3-.1-3.4-1.8-3.4-4.1S316.7,238.6,316.7,235.6Z"
          transform="translate(-280.2 -201.9)"
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
