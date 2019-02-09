import React, { Component } from "react";
import PropTypes from "prop-types";
import Icon from "../CustomIcon";

export default class IconUser extends Component {
  render() {
    const { size, color } = this.props;
    return (
      <Icon size={size} viewBoxWidth="76.8" viewBoxHeight="78.9">
        <path
          fill={color}
          d="M307.6,240.3c-10.1-13.1-10.5-24.4-1.7-32.8a20.7,20.7,0,0,1,27.3-1.2c9.9,8,10.1,19.6.5,33.7,1.7,2.7,4.9,3.1,7.3,4.7,8.3,5.5,14.5,12.8,17,22.6,2,7.8-1.4,12.9-9.2,13.1q-28.5.5-57,0c-8.2-.2-11.8-5.7-9.3-13.8a37.6,37.6,0,0,1,15.9-21C301.2,243.8,304.2,242.3,307.6,240.3Z"
          transform="translate(-281.8 -201.8)"
        />
        <path
          fill="white"
          d="M319.6,276c-8.3,0-16.6.2-24.9,0s-9.8-2.8-6.6-10.7c5.4-13.4,18-21.7,32.7-21.5a34.2,34.2,0,0,1,31.6,21.7c3,7.7,1.4,10.3-7,10.5S328.2,276,319.6,276Z"
          transform="translate(-281.8 -201.8)"
        />
        <path
          fill="white"
          d="M320,206.4c8.5-.2,15.8,6.8,16.2,15.5s-6.4,16.5-15.8,16.6-15.9-6.5-16.2-15.2A16.3,16.3,0,0,1,320,206.4Z"
          transform="translate(-281.8 -201.8)"
        />
      </Icon>
    );
  }
}

IconUser.propTypes = {
  size: PropTypes.number,
  color: PropTypes.string
};

IconUser.defaultProps = {
  size: 35,
  color: "#333333"
};
