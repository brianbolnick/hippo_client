import React, { Component } from "react";
import PropTypes from "prop-types";
import Icon from "../CustomIcon";
import { colors } from "styles/css-variables";

export default class IconMexican extends Component {
  render() {
    const { color } = this.props;

    return (
      <Icon viewBoxWidth="48.1" viewBoxHeight="24.1" {...this.props}>
        <path
          fill={color}
          d="M50.1,62c-6.5,0-13-.2-19.5.1-3.9.1-4.8-1.6-4.6-5.1.5-9.6,9.4-18.6,19.2-19,3.1-.1,6.3-.1,9.4,0,10.6.2,19.8,10.1,19.5,20.7-.1,2.6-1,3.4-3.6,3.3C63.7,61.9,56.9,62,50.1,62Z"
          transform="translate(-25.9 -37.9)"
        />
        <path
          fill={colors.white}
          d="M47.3,60c-5.2,0-10.4-.1-15.5,0-2.8.1-3.9-.8-3.6-3.7C29.4,47.2,38,40,47.5,40.2s17.8,8.1,18.4,17.1c.1,2.2-.5,2.8-2.7,2.7C57.9,59.9,52.6,60,47.3,60Z"
          transform="translate(-25.9 -37.9)"
        />
        <path
          fill={colors.white}
          d="M63.7,44.3c5.1,3,7.4,7.6,8.1,13.2.1,1,.7,2.5-1.3,2.5s-2.6.5-2.5-1.4C68.4,53.3,65.6,49,63.7,44.3Z"
          transform="translate(-25.9 -37.9)"
        />
      </Icon>
    );
  }
}

IconMexican.propTypes = {
  color: PropTypes.string
};

IconMexican.defaultProps = {
  color: "#333333"
};
