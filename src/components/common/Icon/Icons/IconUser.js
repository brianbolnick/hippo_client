import React, { Component } from "react";
import PropTypes from "prop-types";
import Icon from "../CustomIcon";

export default class IconUser extends Component {
  render() {
    const { size, color } = this.props;
    return (
      <Icon
        size={size}
        viewBoxWidth="76.3"
        viewBoxHeight="78.8"
        {...this.props}
      >
        <path
          fill={color}
          d="M54.5,96.7H31.6a41,41,0,0,1-7-.3c-5.5-.8-8.8-5.2-7.7-10.7a40.1,40.1,0,0,1,3.7-10.2c4-7.7,10.3-12.9,17.9-16.8,4-2.1,4.2-2.4,1.4-5.6a21,21,0,0,1-5.4-15.5c.3-8.1,4.2-14,11.3-17.4s14.9-3,21.7,2S79.4,38,73.2,48.9a54.5,54.5,0,0,1-4.1,5.7c-1.2,1.7-.8,2.9,1.3,3.7A32,32,0,0,1,84.6,68.9a65.2,65.2,0,0,1,7.5,12.7,15.8,15.8,0,0,1,.7,7.8c-.5,4.3-4,7-9.4,7.2-8,.2-15.9.1-23.9.1Zm.1-4.4H77.5c2.4-.1,4.7-.1,7-.4a5.2,5.2,0,0,0,4-6,15.3,15.3,0,0,0-.7-2.9,34.9,34.9,0,0,0-35-22.9C38.3,61,25.2,71.3,21.6,85.3c-.9,3.3.7,6.1,4.1,6.6a29.8,29.8,0,0,0,6,.4ZM70.9,38.9A15.9,15.9,0,0,0,55.4,22.6c-8.7-.3-16.6,7.7-16.5,16.6s7.2,15.5,16.2,15.4S70.9,47.9,70.9,38.9Z"
          transform="translate(-16.7 -17.9)"
        />
      </Icon>
    );
  }
}

IconUser.propTypes = {
  size: PropTypes.number,
  color: PropTypes.string
};

IconUser.defaultProps = {
  size: 35,
  color: "#333333"
};
