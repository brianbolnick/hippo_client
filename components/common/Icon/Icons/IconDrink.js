import React, { Component } from "react";
import PropTypes from "prop-types";
import Icon from "../CustomIcon";
import { colors } from "styles/css-variables";
//
//TODO: REEXPORT THIS SVG
export default class IconDrink extends Component {
  render() {
    const { color } = this.props;
    return (
      <Icon viewBoxWidth="39.9" viewBoxHeight="48.2" {...this.props}>
        <path
          fill={color}
          d="M55.2,73.6c-5,.5-9.4.8-14-.1.4-.6.4-1,.6-1.2s4.8,1,5-1.5,1.3-7.6-1.1-11.1c-4.5-6.6-8.8-13.3-13.3-19.9-1.8-2.6-2-4,1.9-3.9,5.4.3,10.7.1,16,.1,1.7,0,2.4-.2,2.8-2.3,1.1-5.6,5.1-8.3,10.3-7.7A8.9,8.9,0,0,1,71,34.5c.2,5.1-2.7,8.6-8.2,9.4-1.4.3-2.4.5-3.2,1.8-3.1,4.9-6.5,9.6-9.6,14.6-2.1,3.3-1.2,7.2-.8,10.6S53.2,70.7,55.2,73.6Z"
          transform="translate(-31.2 -25.9)"
        />
        <path
          fill={colors.white}
          d="M34.4,38.2H61.2c-.4,2.2-2.2,3.6-3.1,5.5s-2.4,2.3-4.4,1.4-5.8-2.1-8.2-.9C38.7,47.7,37.2,42.6,34.4,38.2Z"
          transform="translate(-31.2 -25.9)"
        />
        <path
          fill={colors.white}
          d="M62.6,41.9c3.1-5.8,3.1-5.8-3-5.9-1.5-.1-3.7,1.1-4.3-1.1s.6-3.5,2-4.8,4.6-2.6,7.4-1.3A6.4,6.4,0,0,1,68.8,35C68.7,38.5,66.8,40.7,62.6,41.9Z"
          transform="translate(-31.2 -25.9)"
        />
        <path
          fill={colors.white}
          d="M40.9,48.4c4.9-3,9.4-2.8,13.9-.2a1.1,1.1,0,0,0-.1.5c-2.3,3.1-3.6,8.8-7,8.7S43.2,51.7,40.9,48.4Z"
          transform="translate(-31.2 -25.9)"
        />
      </Icon>
    );
  }
}

IconDrink.propTypes = {
  color: PropTypes.string
};

IconDrink.defaultProps = {
  color: "#333333"
};
