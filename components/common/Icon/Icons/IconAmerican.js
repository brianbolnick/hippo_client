import React, { Component } from "react";
import PropTypes from "prop-types";
import Icon from "../CustomIcon";

export default class IconAmerican extends Component {
  render() {
    const { color } = this.props;
    return (
      <Icon viewBoxWidth="81.1" viewBoxHeight="79.4" {...this.props}>
        <path
          fill={color}
          d="M51.2,54.4c8,.1,15.9-.1,23.9.1a35,35,0,0,1,9.7,1.4c6.7,2.2,8.8,10.3,3.8,15.2a37.6,37.6,0,0,0-7.7,10.1,15.3,15.3,0,0,1-13.6,8.7c-11,.2-21.9.3-32.9,0-6.4-.2-11.3-3.7-14.2-9.4A36.2,36.2,0,0,0,13.7,72c-6.3-6.2-3.8-14.6,4.7-16.8,2.6-.7,5.3-.5,7.9-.7H51.2Zm-.4,5.4H25a21.5,21.5,0,0,0-6.8.8,5.4,5.4,0,0,0-2.7,3.8,5.1,5.1,0,0,0,2,4.1,10.6,10.6,0,0,0,5.6,1.4H78.8a13.2,13.2,0,0,0,3.9-.6,4.5,4.5,0,0,0,3.2-4.6,4.2,4.2,0,0,0-3.3-4.4,39.3,39.3,0,0,0-6.9-.6Zm1.1,14.9v-.2c-7.3,0-14.6-.1-21.9.1a9.8,9.8,0,0,0-5.3,1.7c-1.3.9,0,4.3,2.5,5.8s5.4,3.2,8.2,3.3c10.2.4,20.6.3,30.9,0A12.4,12.4,0,0,0,77,79.1c1.1-2,.2-4.3-2.1-4.3C67.2,74.6,59.6,74.7,51.9,74.7Z"
          transform="translate(-10.2 -10.7)"
        />
        <path
          fill={color}
          d="M50.7,50h-24a39.4,39.4,0,0,1-6.9-.4,6.9,6.9,0,0,1-5.5-7.3l.3-2c3.1-16.5,19.9-30,36.7-29.6A37.3,37.3,0,0,1,86.8,40.5c1,5-1.9,9.5-7.1,9.4h-29Zm.6-4.4h22a40.2,40.2,0,0,0,6-.3c1.9-.4,2.7-1.8,2.6-3.7a25,25,0,0,0-.5-2.9C77.7,25.5,65.5,16.3,51.8,15.8a31.6,31.6,0,0,0-31,20.7,17,17,0,0,0-.9,3.9c-.4,2.8.8,4.7,3.5,4.9s4.6.3,7,.3Z"
          transform="translate(-10.2 -10.7)"
        />
        <path
          fill={color}
          d="M35.7,40.7c-1.3-1.9-2.6-3-2.9-4.4s2.1-3.8,4-3.2,3,2,2.5,3.8S37.3,39.1,35.7,40.7Z"
          transform="translate(-10.2 -10.7)"
        />
        <path
          fill={color}
          d="M69.8,36.9c-1.9,1.3-3.1,2.5-4.4,2.8s-3-1.1-3.2-3,1.9-4.1,3.7-3.3S68.1,35.3,69.8,36.9Z"
          transform="translate(-10.2 -10.7)"
        />
        <path
          fill={color}
          d="M55,25.9c-2,1.3-3.2,2.7-4.4,2.7s-2.8-1.5-2.7-3.4,1.4-3.2,3.2-2.7S53.3,24.3,55,25.9Z"
          transform="translate(-10.2 -10.7)"
        />
      </Icon>
    );
  }
}

IconAmerican.propTypes = {
  color: PropTypes.string
};

IconAmerican.defaultProps = {
  color: "#333333"
};
