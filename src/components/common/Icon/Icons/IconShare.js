import React, { Component } from "react";
import PropTypes from "prop-types";
import Icon from "../CustomIcon";

export default class IconShare extends Component {
  render() {
    const { size, color } = this.props;
    return (
      <Icon size={size} viewBoxWidth="67.1" viewBoxHeight="80.7">
        <path
          fill={color}
          d="M353.8,212.8c-.3,8.2-8.1,14.4-16.1,11.3-5.7-2.3-9.3-.8-13.5,2.3-2.4,1.8-5,3.3-7.4,5-7.1,5-7.2,12.5-.2,17.5,2.5,1.8,5.1,3.2,7.5,5,4.1,3.2,7.8,4.9,13.5,2.3s10.9.3,13.9,4.8a12,12,0,0,1,0,14c-3.1,4.7-7.7,6.1-13,5.2s-10.1-5.1-9.8-10.9-2.9-9-7.4-11.6a53.6,53.6,0,0,1-4.9-3.4c-4.1-3.1-7.8-4.9-13.5-2.4s-10.9-.1-14-4.6a12.3,12.3,0,0,1-.1-14.1c3-4.4,8.2-6.3,14.1-5.1,2.7.6,5.2,3.5,8.4,1.3,5.4-3.8,11.1-7.4,16.2-11.5,2.2-1.8.4-5.1,1-7.7a12.8,12.8,0,0,1,25.3,2.6Z"
          transform="translate(-286.7 -199.8)"
        />
        <path
          fill="white"
          d="M340.9,275.9a7.9,7.9,0,0,1,.5-15.8,7.9,7.9,0,1,1-.5,15.8Z"
          transform="translate(-286.7 -199.8)"
        />
        <path
          fill="white"
          d="M307.4,240.2a8.2,8.2,0,0,1-8.5,7.9,7.5,7.5,0,0,1-7.3-7.9,7.7,7.7,0,0,1,8.3-7.9A8.4,8.4,0,0,1,307.4,240.2Z"
          transform="translate(-286.7 -199.8)"
        />
        <path
          fill="white"
          d="M349.1,212.5a8.1,8.1,0,0,1-8.6,7.7c-4.3-.3-7.1-3.5-7.1-8a7.9,7.9,0,0,1,8.4-7.8A8.2,8.2,0,0,1,349.1,212.5Z"
          transform="translate(-286.7 -199.8)"
        />
      </Icon>
    );
  }
}

IconShare.propTypes = {
  size: PropTypes.number,
  color: PropTypes.string
};

IconShare.defaultProps = {
  size: 35,
  color: "#333333"
};
