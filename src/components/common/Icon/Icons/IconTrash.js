import React, { Component } from "react";
import PropTypes from "prop-types";
import Icon from "../CustomIcon";

export default class IconTrash extends Component {
  render() {
    const { size, color } = this.props;
    return (
      <Icon size={size} viewBoxWidth="73.5" viewBoxHeight="81.6">
        <path
          fill={color}
          d="M283.6,214.3c7.8-3.7,14-2.4,20.2-2.7,3-.1,5.1-.7,5.2-4.3.1-6.3,4.3-7.6,9.5-7.4h7c3.8.1,7,2,7,5.7.1,6,3.6,5.8,7.8,6s11-1.1,16.8,1.1c-6.9,5.9-6.9,5.9-6.9,15.7,0,11.6.2,23.3-.1,34.9s-4.8,17.6-17.5,17.9q-12.5.4-24.9,0c-10.7-.4-15.8-5.5-16.1-16.2-.3-13.3,0-26.6-.1-39.9C291.5,220.4,293.1,214.5,283.6,214.3Z"
          transform="translate(-283.6 -199.9)"
        />
        <path
          fill="white"
          d="M345.2,244.2c-.1,7,.1,13.9-.1,20.9s-2.7,10.9-10.7,11-17.9.3-26.9.1-10.6-2.6-10.7-10c-.3-14.9,0-29.9-.1-44.8-.1-3.8,1.4-5.3,5.2-5.3,12.7.1,25.3.2,37.9,0,4.7-.1,5.5,2.3,5.4,6.2C345.1,229.6,345.2,236.9,345.2,244.2Z"
          transform="translate(-283.6 -199.9)"
        />
        <path
          fill="white"
          d="M320.9,211.9c-2.7-.7-7.4,1.7-7.4-3.7s4.4-3.8,7.6-4a17,17,0,0,1,3.9.1,3.7,3.7,0,0,1,3.2,4.3,3.2,3.2,0,0,1-3.2,3.1C323.7,211.9,322.4,211.8,320.9,211.9Z"
          transform="translate(-283.6 -199.9)"
        />
        <path
          fill={color}
          d="M333.1,247.5c0,3.4.2,6.7-.1,10s1.5,7.5-2.3,7.5-2.9-5-3-8c-.2-7-.1-13.9-.1-20.9v-1c.4-2.8-1.1-7.4,2.6-7.6s2.6,4.4,2.8,7.1C333.2,238.9,333,243.2,333.1,247.5Z"
          transform="translate(-283.6 -199.9)"
        />
        <path
          fill={color}
          d="M312.9,265.6c-3.9-1.2-3.9-3-3.9-4.6-.1-9.6-.1-19.2,0-28.9,0-1.8-.4-4.4,2.5-4.3s2,2.3,1.9,3.8C313.3,242.8,314.1,254,312.9,265.6Z"
          transform="translate(-283.6 -199.9)"
        />
      </Icon>
    );
  }
}

IconTrash.propTypes = {
  size: PropTypes.number,
  color: PropTypes.string
};

IconTrash.defaultProps = {
  size: 35,
  color: "#333333"
};
