import React, { Component } from "react";
import PropTypes from "prop-types";
import Icon from "../CustomIcon";

export default class IconEdit extends Component {
  render() {
    const { size, color } = this.props;
    return (
      <Icon
        size={size}
        viewBoxWidth="77.6"
        viewBoxHeight="76.6"
        {...this.props}
      >
        <path
          fill={color}
          d="M47.4,88.5c-5.7,0-11.3.2-17,0C19.6,88.2,14,83.2,12,72.6a14.2,14.2,0,0,1-.4-2c.1-12.6-.5-25.3.4-37.9.7-10.9,6.3-16.1,17.2-17.3,6.2-.6,12.6,0,18.8.3.7,0,1.7,1.3,1.7,2a2.8,2.8,0,0,1-1.8,2,53.7,53.7,0,0,1-7,.4c-3.6.1-7.3-.1-11,.1-8.3.6-12.9,4.9-13.1,13.3-.4,12.3-.4,24.6-.1,36.9.2,8.8,5,13.5,13.9,13.7,12,.3,24-.2,36,.1,7.4.2,14.5-7,14.1-13.9-.2-3.9-.1-8,0-11.9q.1-3,.6-6a1.9,1.9,0,0,1,1.4-1,1.8,1.8,0,0,1,1.5.7,3.1,3.1,0,0,1,.7,1.8c0,6.4.4,12.7-.1,19-.6,8.8-6.7,14.9-15.4,15.4s-14.7.1-22,.1Z"
          transform="translate(-11.5 -12.1)"
        />
        <path
          fill={color}
          d="M32.5,60.9c-.8-6.3,2.8-11.1,7.6-15.7C49,36.8,57.6,27.9,66.2,19.3a57,57,0,0,1,5.1-4.8,10.4,10.4,0,0,1,4.3-2.2c4.4-1.1,9.4,1.8,12.2,6.8s1.6,7.4-1.4,11c-1.3,1.5-2.8,2.9-4.2,4.3C72.6,44,62.9,53.6,53.4,63.3c-2.9,2.9-6,5-10.4,5.1-2.3,0-4.6.7-6.9.9s-4.7-1.1-4.3-4.7A28.1,28.1,0,0,1,32.5,60.9Zm4.9-3.3c-.7,5.3,1,6.7,4.5,6.3a14.3,14.3,0,0,0,8.7-4.4L73.8,36.2A2.9,2.9,0,0,0,75,34.7c.2-.9.5-2.1,0-2.7s-3.1-3.4-4.7-5.1-3.4-1.8-5.1,0c-8,7.9-16.1,15.8-23.9,24C39.2,53.1,38.1,56.4,37.4,57.6ZM76.5,16.7a17.6,17.6,0,0,0-3.7,3.2c-.5.6,0,2.5.6,3.4a26.5,26.5,0,0,0,4.1,4.1c.9.7,2.8,1.5,3.3,1s3-2.7,3.3-4.3S80.2,17.2,76.5,16.7Z"
          transform="translate(-11.5 -12.1)"
        />
      </Icon>
    );
  }
}

IconEdit.propTypes = {
  size: PropTypes.number,
  color: PropTypes.string
};

IconEdit.defaultProps = {
  size: 35,
  color: "#333333"
};
