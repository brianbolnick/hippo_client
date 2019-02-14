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
      <Icon viewBoxWidth="25" viewBoxHeight="23.4" {...this.props}>
        <path
          fill={color}
          d="M44,38.8c.7,2.2.5,4.5.5,6.7s.5,2.1,2.1,2c4.7-.1,9.3.1,14,0,1.8-.1,2.1.6,1.8,2.2-.9,4-3.5,6.7-6.8,8.7-.4.2-1.1.1-1.1.8.3,2.5-1.4,2.4-3,2.3H47.2c-1.2,0-2.2-.1-1.8-1.7s-.8-1-1.4-1.4c-3.5-1.9-5.9-4.7-6.5-8.8-.2-1.6.3-2.2,2-2.1,4,0,4-.1,4-4.1C43.5,41.8,43.3,40.3,44,38.8Z"
          transform="translate(-37.5 -38.1)"
        />
        <path
          fill={color}
          d="M59.5,43.6c-.2,1.3-1.2.9-1.9.9H52.1c-.8-.6-1.8.1-2.6-.5s1-1,1.8-1h5.1C57.4,43.6,58.6,42.8,59.5,43.6Z"
          transform="translate(-37.5 -38.1)"
        />
        <path
          fill={color}
          d="M55.9,40H51.3c-.8,0-1.8.4-1.8-1s1.8.1,2.6-.5h5c.7,0,1.7-.4,1.9.9S56.9,39.3,55.9,40Z"
          transform="translate(-37.5 -38.1)"
        />
        <path
          fill={color}
          d="M46,38.8c.7,1.5.6,2.9.1,4.9A5.6,5.6,0,0,1,46,38.8Z"
          transform="translate(-37.5 -38.1)"
        />
        <path
          fill={color}
          d="M48.1,43.2c-.8-1.4-.6-2.9-.5-5.1C49.1,40.2,48.3,41.7,48.1,43.2Z"
          transform="translate(-37.5 -38.1)"
        />
        <path
          fill={color}
          d="M39.5,43.4c1.1-1.3,2.1-1.7,3,.1A3.5,3.5,0,0,1,39.5,43.4Z"
          transform="translate(-37.5 -38.1)"
        />
        <path
          fill={color}
          d="M42.5,39.5c-.8,1.7-1.6,1.5-2.5.1A2.5,2.5,0,0,1,42.5,39.5Z"
          transform="translate(-37.5 -38.1)"
        />
        <path
          fill="white"
          d="M55.9,40c.9-.7,2.1-.2,3.1-.6C58.1,40.5,56.9,39.8,55.9,40Z"
          transform="translate(-37.5 -38.1)"
        />
        <path
          fill="white"
          d="M59.5,43.6c-1-.4-2.2.1-3.1-.6C57.4,43.2,58.6,42.5,59.5,43.6Z"
          transform="translate(-37.5 -38.1)"
        />
        <path
          fill="white"
          d="M39.5,43.4h3A2.1,2.1,0,0,1,39.5,43.4Z"
          transform="translate(-37.5 -38.1)"
        />
        <path
          fill="white"
          d="M42.5,39.5H40A1.6,1.6,0,0,1,42.5,39.5Z"
          transform="translate(-37.5 -38.1)"
        />
        <path
          fill="white"
          d="M49.5,44c.9.2,1.8-.2,2.6.5C51.2,44.4,50.2,44.8,49.5,44Z"
          transform="translate(-37.5 -38.1)"
        />
        <path
          fill="white"
          d="M52.1,38.5c-.8.7-1.7.3-2.6.5C50.2,38.2,51.2,38.6,52.1,38.5Z"
          transform="translate(-37.5 -38.1)"
        />
        <path
          fill="white"
          d="M46,57.5c-3.1-.9-5.1-2.8-6.5-6.1H55.6a2.1,2.1,0,0,0-2.3-.9H41.1c-.8,0-1.9.5-2.2-.9s1.1-.8,1.7-.8H56.3c2.1,0,2.6.8,1.7,2.8C56.1,55.8,51,58.3,46,57.5Z"
          transform="translate(-37.5 -38.1)"
        />
        <path
          fill={shade}
          d="M46,57.5c5.1,0,9.1-1.9,11.6-6.7.5-.9.6-1.8-.9-1.8h-17c-.2,0-.5.3-.8.5s.3-1.1.9-1.1c6.8,0,13.5.1,20.2,0,1.6,0,1.2.9,1,1.8C59.4,56.6,52.2,60,46,57.5Z"
          transform="translate(-37.5 -38.1)"
        />
        <path
          fill="white"
          d="M49.7,60.5c-.9-.3-2.9.6-2.9-.6s2-.1,3-.4a12.2,12.2,0,0,1,2.7-.1c.4-.1.9-.2.9.4s-.3.7-.8.7Z"
          transform="translate(-37.5 -38.1)"
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
