import React, { Component } from "react";
import PropTypes from "prop-types";
import Icon from "../CustomIcon";
import { colors } from "styles/css-variables";

export default class IconAsian extends Component {
  render() {
    const { color } = this.props;

    return (
      <Icon viewBoxWidth="32.3" viewBoxHeight="48.5" {...this.props}>
        <path
          fill={color}
          d="M44.7,38a2.8,2.8,0,0,1,2.7,1c1.6,2.1,3.4,1.7,5.6,1.1s4.7-.2,5.2,1.7c1.4,4.7,8.7,4.7,7.8,10.8a4.1,4.1,0,0,1-1.2,3.1c-1.9,1.5-2.1,3.9-3.1,5.7-2.4,4.2-5.7,8-8.7,11.7s-8.4.6-8.4-2.7c0-4.8-5.6-6.6-4.8-11.4.3-1.5-1.8-.9-2.7-1.5-3.7-2.5-4.5-6.8-1.3-9.7s2-3.1,2.3-5.1S40.9,37.9,44.7,38Z"
          transform="translate(-33.8 -25.8)"
        />
        <path
          fill={color}
          d="M45.1,31.4c.2-.5.2-.7.3-.8,5,2.4,7.6-2.3,11.2-4,1.7-.7,3.8-1.4,5.1-.1s.4,3.1-.2,4.7a9.8,9.8,0,0,1-7,6.5c-2.2.6-4.7,1.3-5.1-2.3S46.6,32.5,45.1,31.4Z"
          transform="translate(-33.8 -25.8)"
        />
        <path
          fill={colors.white}
          d="M39.8,48.1c2.4.3,4,1.5,4,3.8a3.6,3.6,0,0,1-4,3.9,3.5,3.5,0,0,1-3.6-3.9C36.2,49.6,37.8,48.5,39.8,48.1Z"
          transform="translate(-33.8 -25.8)"
        />
        <path
          fill={colors.white}
          d="M59.9,60c-.3,2.2-1.5,3.8-3.7,3.8a3.6,3.6,0,0,1-4-4,3.5,3.5,0,0,1,3.9-3.6C58.4,56.2,59.6,57.7,59.9,60Z"
          transform="translate(-33.8 -25.8)"
        />
        <path
          fill={colors.white}
          d="M49.9,60c-.3,2.3-1.6,3.8-3.8,3.8a3.8,3.8,0,1,1,.1-7.6C48.4,56.3,49.6,57.8,49.9,60Z"
          transform="translate(-33.8 -25.8)"
        />
        <path
          fill={colors.white}
          d="M49.8,48.1c2.3.2,3.8,1.4,4,3.6s-1,4.1-2.9,3.8-4.4-.8-4.7-3.5S47.6,48.6,49.8,48.1Z"
          transform="translate(-33.8 -25.8)"
        />
        <path
          fill={colors.white}
          d="M44.7,47.7c-1.3-1.4-4.4-1-4.5-3.7a3.5,3.5,0,0,1,3.7-3.8c2.3-.1,3.7,1.3,3.9,3.6S46.8,47.1,44.7,47.7Z"
          transform="translate(-33.8 -25.8)"
        />
        <path
          fill={colors.white}
          d="M53.9,68.1c-.3,2.2-1.6,3.7-3.8,3.7a3.5,3.5,0,0,1-3.9-3.6c-.1-2.8,2.8-3.3,4.5-3.7S53.7,66.1,53.9,68.1Z"
          transform="translate(-33.8 -25.8)"
        />
        <path
          fill={colors.white}
          d="M59.8,48.1c2.3.2,3.8,1.4,4,3.6s-1,4.1-2.9,3.8-4.4-.8-4.7-3.5S57.6,48.6,59.8,48.1Z"
          transform="translate(-33.8 -25.8)"
        />
        <path
          fill={colors.white}
          d="M54.2,42.1c1.8.3,3.4,1.3,3.5,3.1s-2,3.1-2.9,2.5-4.3-.7-4.3-3S52.4,42.2,54.2,42.1Z"
          transform="translate(-33.8 -25.8)"
        />
        <path
          fill={colors.white}
          d="M59.9,28c-2,5.7-2.5,6.2-7.5,7.5C52.9,31.2,55.5,29.3,59.9,28Z"
          transform="translate(-33.8 -25.8)"
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
