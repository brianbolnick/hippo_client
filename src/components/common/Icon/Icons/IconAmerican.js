import React, { Component } from "react";
import PropTypes from "prop-types";
import Icon from "../CustomIcon";

export default class IconAmerican extends Component {
  render() {
    const { color } = this.props;
    return (
      <Icon viewBoxWidth="49.6" viewBoxHeight="48.1" {...this.props}>
        <path
          fill={color}
          d="M57,23c6,2.9,10.9,6.7,12.7,13.6.7,2.9.7,4.6-3.2,4.5-13-.2-26-.3-39,0-4,.1-3.8-1.7-3.2-4.5C26,29.7,31.1,25.9,37,23Z"
          transform="translate(-22 -23)"
        />
        <path
          fill={color}
          d="M22,47c2-.2,2.9-2,4.5-2.8,3.2-1.7,6.3-2.2,9.1.6s3.2,2.5,5.5.6,7.6-3.8,11.3.1c1,1,2.2,1.9,3.5.6,6-5.8,10.9-2.7,15.7,1.8-2.7,1.2-2.9,1.4-4.7-.5s-5.4-2.8-8.1-.3-5.5,2.8-8.2-.1-5-2.4-7.4-.2-5.9,3.2-9-.1-4.8-1.9-7,0-3,2.6-5.2,2.3Z"
          transform="translate(-22 -23)"
        />
        <path
          fill={color}
          d="M46.8,71h-14c-6.1-.1-9.1-3.3-9-9.3,0-2.1.6-2.8,2.8-2.7,7.3.1,14.7-.7,21.9.3,4.5.6,8.7,3,13.1-.3a2.7,2.7,0,0,1,2,0c2.1,1.1,6.4-2.8,6.4,3s-2.5,8.8-7.2,8.9S52.1,71,46.8,71Z"
          transform="translate(-22 -23)"
        />
        <path
          fill={color}
          d="M46.5,57h-18c-2.3,0-4.5,0-4.5-3.1S26.2,51,28.3,51H65.7c2.2,0,4.2.1,4.3,2.9S67.7,57,65.5,57Z"
          transform="translate(-22 -23)"
        />
        <path
          fill="white"
          d="M67.4,38.8H26.5a10.8,10.8,0,0,1,.3-1.9c2.5-9.1,9.6-12.5,24.3-11.9C60.2,25.4,65.9,30.1,67.4,38.8Z"
          transform="translate(-22 -23)"
        />
        <path
          fill="white"
          d="M46.9,69H33.4a7.4,7.4,0,0,1-6.2-2.6c-1-1.4-1.7-3.1-1-4.7s2.4-.6,3.6-.7c4.5-.1,9,.1,13.5,0s7.2.1,10.2,2.8,3.5,1.4,5.1-.5a7.4,7.4,0,0,1,1.9-1.6c2.2-1.4,4.6-.8,6.8-.5s.6,1.7.5,2.5a5.8,5.8,0,0,1-4.4,4.9,30.3,30.3,0,0,1-6,.4Z"
          transform="translate(-22 -23)"
        />
        <path
          fill="white"
          d="M67.1,54.6H26.9v-1H67.1Z"
          transform="translate(-22 -23)"
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
