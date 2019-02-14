import React, { Component } from "react";
import PropTypes from "prop-types";
import Icon from "../CustomIcon";
import { colors } from "styles/css-variables";
import { getShadeColor } from "./iconHelper";

export default class IconAmerican extends Component {
  render() {
    const { color } = this.props;
    const shade = getShadeColor(color);

    return (
      <Icon viewBoxWidth="25.1" viewBoxHeight="24" {...this.props}>
        <path
          fill={color}
          d="M54,28.5c2.6,1.6,5.1,3.1,6.1,6.4s.5,2.7-1.8,2.6c-6.9-.1-13.9,0-20.9,0,.1-4.6,2.4-7.5,6.6-9Z"
          transform="translate(-36.5 -28.5)"
        />
        <path
          fill={color}
          d="M36.5,40c.7.3,1-.3,1.5-.7s2.6-1.4,3.4-.7c2.4,1.8,4.4,1,6.6,0a1.7,1.7,0,0,1,1.7,0c2.1,2,3.9,1,6.1,0s3.7,1.3,5.8,2.5a2.5,2.5,0,0,1-3.1-.4,2.8,2.8,0,0,0-4,0,2.8,2.8,0,0,1-4,0c-1.3-1-2.7-1.2-4,.1a2.6,2.6,0,0,1-3.6.2c-1.7-1.4-3.2-1.5-4.8.1s-1,.3-1.6.4Z"
          transform="translate(-36.5 -28.5)"
        />
        <path
          fill={color}
          d="M37.5,46.5c3.4,0,6.8.1,10.2,0,1.9-.1,3.5.8,5.2,1.2s2.8-1.6,4.7-1.2,2.4-.7,2.8.7a4.1,4.1,0,0,1-4,5.3H41c-1.9-.1-3.4-.8-3.6-3A5.1,5.1,0,0,1,37.5,46.5Z"
          transform="translate(-36.5 -28.5)"
        />
        <path
          fill={color}
          d="M49,42.5h9.2c1.2,0,2.3.1,2.3,1.6s-1.2,1.4-2.2,1.4H39.4c-1.2,0-2-.2-1.9-1.6s.8-1.4,1.8-1.4Z"
          transform="translate(-36.5 -28.5)"
        />
        <path
          fill="white"
          d="M37.5,46.5c0,1-.1,2-.1,3-.7-.9-.4-2-.3-3h.4Z"
          transform="translate(-36.5 -28.5)"
        />
        <path
          fill="white"
          d="M56.5,36.4H40.3c-1.5.1-1.7-.5-1.2-1.7A7.8,7.8,0,0,1,46,29.6a26.7,26.7,0,0,1,4,0C54.5,30.4,56.5,32.6,56.5,36.4Z"
          transform="translate(-36.5 -28.5)"
        />
        <path
          fill={shade}
          d="M56.5,36.4A9,9,0,0,0,50,29.6c5.3-.2,8.4,2.1,9.1,6.7A4.6,4.6,0,0,1,56.5,36.4Z"
          transform="translate(-36.5 -28.5)"
        />
        <path
          fill="white"
          d="M54.5,51.4H42.3a4.1,4.1,0,0,1-2.6-.7,2.8,2.8,0,0,1-1.1-2.6c.2-1.2,1.3-.7,2.1-.7h7.7c.6,0,1.5-.1,1.9.2,2.2,2.1,4.2,1.6,6.2-.1C57.2,49.8,56.9,50.5,54.5,51.4Z"
          transform="translate(-36.5 -28.5)"
        />
        <path
          fill={shade}
          d="M54.5,51.4a3.8,3.8,0,0,0,2-3.8c1,.1,2.6-.8,2.9.8s-1.1,2.8-2.9,3A13.4,13.4,0,0,1,54.5,51.4Z"
          transform="translate(-36.5 -28.5)"
        />
        <path
          fill="white"
          d="M56,44.4H39.1v-.8H56C56.3,43.9,56.3,44.1,56,44.4Z"
          transform="translate(-36.5 -28.5)"
        />
        <path
          fill={shade}
          d="M56,44.4v-.8c.9,0,1.9-.4,3.1.4C58,44.8,57,44.4,56,44.4Z"
          transform="translate(-36.5 -28.5)"
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
