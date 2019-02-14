import React, { Component } from "react";
import PropTypes from "prop-types";
import Icon from "../CustomIcon";
import { WhitePath } from "../IconStyledComponents";

export default class IconDish extends Component {
  render() {
    const { size, color } = this.props;
    return (
      <Icon size={size} viewBoxWidth="79.6" viewBoxHeight="76" {...this.props}>
        <path
          fill={color}
          d="M320.4,235c10.6,0,21.2-.1,31.9.1,7.9.1,9.3,2.3,6.5,9.8a38.3,38.3,0,0,1-13.7,18c-3.2,2.2-5.5,4.2-5.4,8.6s-3.3,6.5-7.3,6.6c-8,.1-16,.2-23.9,0-4.2-.1-7.4-2.2-7.4-6.5s-3.1-6.9-6.3-9.3a39.3,39.3,0,0,1-13.2-18.4c-2.3-6.7-1.1-8.7,5.9-8.8C298.4,234.9,309.4,235,320.4,235Z"
          transform="translate(-280.6 -202.2)"
        />
        <path
          fill={color}
          d="M302.7,229.2c-.2-1-.7-2.1-.3-2.7,2.5-4.3,2.5-7.9-1.4-11.6a7.2,7.2,0,0,1-1.3-9.1c.9-1.7,1.8-4.1,4.1-3.5s1.7,2.9.8,4.8c-1.7,3.5,1.1,5.3,2.8,7.7C311.8,221.2,310.3,225.5,302.7,229.2Z"
          transform="translate(-280.6 -202.2)"
        />
        <path
          fill={color}
          d="M321.7,205.9c-2.7,3.5-.5,5.9,1.8,8.5s3.6,7.6.9,11.7c-1.1,1.8-2,4.9-5,3s-.2-3.5.7-5c2.5-3.7.4-6-2-8.5s-3.3-7.7-.6-11.7c.8-1.1,2-1.9,3.3-1.4S322.1,204.5,321.7,205.9Z"
          transform="translate(-280.6 -202.2)"
        />
        <path
          fill={color}
          d="M337.5,205.6c-3.9,4.2.8,7,3.1,10.4a8.3,8.3,0,0,1,.1,9.3c-1.1,1.9-2.1,5.1-4.7,4.2s-1-3.8,0-5.5c2.1-3.8,0-6.1-2.3-8.7s-3.1-7.8,0-11.6a3,3,0,0,1,2.5-1C337.1,202.8,337.9,203.6,337.5,205.6Z"
          transform="translate(-280.6 -202.2)"
        />
        <WhitePath
          d="M354.6,240c-1.7,14.8-19.5,27.5-35.9,26.6s-29.3-11.7-32.1-26.6Z"
          transform="translate(-280.6 -202.2)"
        />
        <WhitePath
          d="M320,273c-4,0-8,.1-11.9,0a1.8,1.8,0,0,1-1.8-1.9c.2-.9.6-2,2-1.6a47.3,47.3,0,0,0,24.5-.1c1.1-.3,1.9.6,2,1.7A1.8,1.8,0,0,1,333,273C328.7,273.1,324.3,273.1,320,273Z"
          transform="translate(-280.6 -202.2)"
        />
        <path
          fill={color}
          d="M345.2,243.8c.4,5.9-3.5,12.4-7.5,13a2.5,2.5,0,0,1-1.8-.6,2,2,0,0,1-.3-2.7C338.7,250.4,340.8,246.1,345.2,243.8Z"
          transform="translate(-280.6 -202.2)"
        />
      </Icon>
    );
  }
}

IconDish.propTypes = {
  size: PropTypes.string,
  color: PropTypes.string
};

IconDish.defaultProps = {
  size: "100",
  color: "#333333"
};
