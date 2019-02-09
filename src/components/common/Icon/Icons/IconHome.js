import React, { Component } from "react";
import PropTypes from "prop-types";
import Icon from "../CustomIcon";
import { WhitePath } from "../IconStyledComponents";

export default class IconHome extends Component {
  render() {
    const { size, color } = this.props;
    return (
      <Icon size={size} viewBoxWidth="76.8" viewBoxHeight="78.9" {...this.props}>
        <path
          fill={color}
          d="M289.1,243.2c-2.7-.7-3.4.8-4.6,1.2s-2.1.6-2.7.2-.8-2.5,0-3.4c4.4-4.6,8.9-9.1,13.3-13.6,6.6-6.6,13.1-13.3,19.8-19.7,4.7-4.4,7.4-4.5,12,.1,11,10.7,21.7,21.6,32.5,32.5a4,4,0,0,1,1.3,3.6c-3.9,3.3-5.2-3.3-9.6-2,0,6.8.1,14,0,21.2-.2,10.6-3.7,14.2-14.5,14.4s-21.9.2-32.9,0-14.4-3.8-14.6-14.4C289,256.6,289.1,250,289.1,243.2Z"
          transform="translate(-280.9 -204.6)"
        />
        <WhitePath
          d="M346.6,251.7c0,4.6.3,9.3-.1,13.9-.6,6.2-8.1,9.9-13.7,7.2-1.9-.9-1.8-2.6-1.8-4.2-.1-4-.3-8,0-12s-2-6.6-6.6-6.2h-1c-14.8-.1-12.3-.3-12.5,12.2a12.1,12.1,0,0,1,0,1.9c-.6,3.5,2.1,8.4-4.8,8.7s-11.9-1.5-12.3-8.1c-.5-8.6,0-17.3-.2-25.9,0-3,1.5-5,3.5-6.9,6.6-6.6,13.3-13.1,19.7-19.8,2.9-3.1,5.1-3.3,8.1-.1,5.9,6.3,12.1,12.4,18.4,18.4a10.9,10.9,0,0,1,3.4,8.9c-.2,4,0,8,0,12Z"
          transform="translate(-280.9 -204.6)"
        />
        <WhitePath
          d="M326.3,264c.2,8.4-2,10.8-8.2,9-1.3-.4-2.5-1-2.6-2.5a112.8,112.8,0,0,1,.1-13c.3-3.2,3.3-2.6,5.5-2.6s4.9-.2,5.2,3.1S326.3,262,326.3,264Z"
          transform="translate(-280.9 -204.6)"
        />
      </Icon>
    );
  }
}

IconHome.propTypes = {
  size: PropTypes.number,
  color: PropTypes.string
};

IconHome.defaultProps = {
  size: 35,
  color: "#333333"
};
