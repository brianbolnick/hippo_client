import React, { Component } from "react";
import PropTypes from "prop-types";
import Icon from "../CustomIcon";
import { colors } from "styles/css-variables";

export default class IconAsian extends Component {
  render() {
    const { color } = this.props;
    //const shade = getShadeColor(color);
    const shade = "white";

    return (
      <Icon viewBoxWidth="50.2" viewBoxHeight="45.9" {...this.props}>
        <path
          fill={color}
          d="M38.4,27.2c1.2,4.9.6,9.6.5,14.2s.9,3.8,3.9,3.8c9.5-.2,19,.1,28.5-.2,3.7-.1,4.2,1.4,3.5,4.3a24.6,24.6,0,0,1-12.7,17c-1.1.6-3.2.6-2.9,2.2.7,5.7-3.2,4.6-6.4,4.6h-7c-2.9.2-5.5.2-4.8-4,.3-2.1-1.9-2.1-3-2.8A24.5,24.5,0,0,1,25.2,49.4c-.7-2.8-.4-4.5,3.5-4.4,8.3.2,8.3-.1,8.3-8.5,0-2.9.2-5.7.3-8.5C37.3,27.8,37.7,27.7,38.4,27.2Z"
          transform="translate(-24.9 -27.2)"
        />
        <path
          fill={color}
          d="M68.8,38.1c-6.1,1.5-12.2.5-18.2.2-.7,0-1.4-.1-1.6-.9a1,1,0,0,1,1-1.3C56.4,36.1,62.7,36.4,68.8,38.1Z"
          transform="translate(-24.9 -27.2)"
        />
        <path
          fill={color}
          d="M67.8,28c-5.7,2.1-11.5,2-17.4,2.1-.6.1-1.3,0-1.4-.9a1.2,1.2,0,0,1,1.2-1.3C56,27.6,61.9,26.7,67.8,28Z"
          transform="translate(-24.9 -27.2)"
        />
        <path
          fill={color}
          d="M41.7,27.5c1.8,3,1.5,6.1.7,10.5C40.1,33.8,41.4,30.6,41.7,27.5Z"
          transform="translate(-24.9 -27.2)"
        />
        <path
          fill={color}
          d="M45.9,36.8c-1-3.2-1.4-6.3.3-9.3C46.9,30.6,47.6,33.7,45.9,36.8Z"
          transform="translate(-24.9 -27.2)"
        />
        <path
          fill={color}
          d="M28.2,36.1c2.8-1.2,4.7-1.3,6.5-.5.2,0,.2,1.1.1,1.2C32.9,37.6,31,37.6,28.2,36.1Z"
          transform="translate(-24.9 -27.2)"
        />
        <path
          fill={color}
          d="M29.3,30.4c2.3-1.7,3.9-1.9,5.5-.9s.3.8.1.9S31.8,31.1,29.3,30.4Z"
          transform="translate(-24.9 -27.2)"
        />
        <path
          fill="white"
          d="M61.5,53c-2.1-2.6-3.9-1.8-5.4-1.9h-25c-1.6,0-3.5.4-3.5-2.2s2.4-1.5,3.6-1.5c12.6-.2,25.3-.1,37.9-.1,2.1,0,3.9-.4,3.1,3-1.9,8.5-10.7,15.9-20.3,16.6S32.7,62.2,29.3,53Z"
          transform="translate(-24.9 -27.2)"
        />
        <path
          fill="white"
          d="M49.9,71.1H45c-1,0-2.1.1-1.9-1.4s1.2-1,2-.9a36.5,36.5,0,0,0,9.9,0c1-.2,1.9-.6,2,1s-.7,1.3-1.6,1.3Z"
          transform="translate(-24.9 -27.2)"
        />
      </Icon>
    );
  }
}

IconAsian.propTypes = {
  color: PropTypes.string
};

IconAsian.defaultProps = {
  color: "#333333"
};
