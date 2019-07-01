import React, { Component } from "react";
import PropTypes from "prop-types";
import Icon from "../CustomIcon";

export default class IconFire extends Component {
  render() {
    const { color } = this.props;
    return (
      <Icon viewBoxWidth="38.4" viewBoxHeight="50.6" {...this.props}>
        <path
          fill={color}
          d="M0,27C-.4,15.2,10.2,2.9,24.3.2c3.2-.6,3.6-.1,3.1,3.2a13.7,13.7,0,0,0,2.1,10.4c1.7,2.7,3.7,5.2,5.1,8A31.2,31.2,0,0,1,38.1,31c1.4,7.7-2.4,13.1-8.8,16.9s-13.4,3.6-19.7-.8S-.1,35.9,0,27ZM29.3,44.5c6.3-5.1,7.9-9.1,5.7-15.1-1.5-4.1-4-8-6.4-11.8s-4.1-7.2-4.4-11.5-.6-3.2-3.3-2.2C12.7,7,6.7,12.5,3.8,20.9s-1.1,15.2,4.8,22c-.2-3.2-.6-5.8-.5-8.4.3-6.1,5.1-12.4,10.5-14,2.5-.8,3.4-.4,3.6,2.1A10.7,10.7,0,0,0,26,30.5C29.8,34.1,31.5,38.3,29.3,44.5ZM27.9,38c-.6-.8-1.4-2.6-2.6-4.1s-4.8-5.1-5.4-8.7c-.4-2-1.6-1.8-3-.9-6,3.6-8.1,12.6-4.3,18.9,2.1,3.5,5.5,5.2,8.6,4.4S27.7,43,27.9,38Z"
        />
      </Icon>
    );
  }
}

IconFire.propTypes = {
  color: PropTypes.string
};

IconFire.defaultProps = {
  color: "#333333"
};
