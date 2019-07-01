import React, { Component } from "react";
import PropTypes from "prop-types";
import Icon from "../CustomIcon";

export default class IconBreakfast extends Component {
  render() {
    const { color } = this.props;
    return (
      <Icon viewBoxWidth="80.5" viewBoxHeight="71.9" {...this.props}>
        <path
          fill={color}
          d="M91.3,57.5a31.4,31.4,0,0,1-7.2,21.8c-5.4,6.8-12.4,9.3-20.3,5.6-9.7-4.6-19.2-4.5-29-1.3a66.6,66.6,0,0,1-7.7,1.9,12.4,12.4,0,0,1-10.3-2.7A7.4,7.4,0,0,1,14.2,74c.3-.9.7-1.9,1.1-2.8,2.6-4.8,1.8-9.5.1-14.4A80.1,80.1,0,0,1,11,41.6c-1.5-9.3,7.3-15.5,14.1-13.3s11.1-.7,15.7-6C49.2,12.6,64.2,12.1,75,21S92,46.2,91.3,57.5Zm-4.4-.1A47,47,0,0,0,75,27.5a29.6,29.6,0,0,0-6.2-5c-8-4.8-18.6-3.9-24.6,3.2S33.8,36,24.7,32.8c-5.4-1.9-10.3,3.7-9.3,9.6a35.3,35.3,0,0,0,2.8,8.5c3.1,7.6,4.7,15.1,1.3,23.2-1.5,3.5.4,6,4.1,6.1a40.5,40.5,0,0,0,6.9-.4,40.5,40.5,0,0,0,5.7-1.6C45.8,75.4,55,75.4,64.3,80s13,1.8,17.6-5.7C85.2,69.2,87.2,63.6,86.9,57.4Z"
          transform="translate(-10.8 -14.7)"
        />
        <path
          fill={color}
          d="M58,35.5c9.6.2,15.8,7,15.3,16.8A16,16,0,0,1,57.2,67.8c-8.9-.2-16.4-8-16.2-16.7S48.6,35.2,58,35.5Zm-1.1,4.4c-6.2.2-11.4,5.6-11.3,11.5S51.5,63,57.2,63A11.9,11.9,0,0,0,68.9,50.7,11.6,11.6,0,0,0,56.9,39.9Z"
          transform="translate(-10.8 -14.7)"
        />
        <path
          fill={color}
          d="M63.7,51.6c-.6.4-1.4,1.3-2.1,1.2a4.1,4.1,0,0,1-2.2-1.7c-1-1.8-4.4-2.3-3-5.4a2.6,2.6,0,0,1,1.6-.9c3.1,0,4.7,2,5.6,4.6A5.2,5.2,0,0,1,63.7,51.6Z"
          transform="translate(-10.8 -14.7)"
        />
      </Icon>
    );
  }
}

IconBreakfast.propTypes = {
  color: PropTypes.string
};

IconBreakfast.defaultProps = {
  color: "#333333"
};
