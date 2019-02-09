import React, { Component } from "react";
import PropTypes from "prop-types";
import Icon from "../CustomIcon";
import { WhitePath } from "../IconStyledComponents";

export default class IconEdit extends Component {
  render() {
    const { size, color } = this.props;
    return (
			<Icon size={size} viewBoxWidth="76.8" viewBoxHeight="78.9" {...this.props}>
        <path
          fill={color}
          d="M354.3,240a79.5,79.5,0,0,1,.5,26.1c-.9,7.2-7.7,12.9-15.5,13.1-13.6.4-27.3.4-40.9,0-8.4-.2-14.7-5.6-15.7-14a196.5,196.5,0,0,1-.1-44.7c.8-7.3,5.6-12,12.7-13.7s14.6-1.1,21.9-.8a2.8,2.8,0,0,1,3,2.1c.2,2.2-1.6,2.6-3.3,2.7-5,.1-10-.1-15,.1-10.6.3-14.9,4.6-15,15.4s-.2,21.9,0,32.9,4.4,15.4,14.9,15.6,22.6.2,33.9,0,14.8-4.9,15.1-15.6c.1-4.3,0-8.6.1-12.9C350.9,244.3,351,242.4,354.3,240Z"
          transform="translate(-281.4 -202.6)"
        />
        <path
          fill={color}
          d="M302.6,251.5c-.9-6.5,3.2-11.4,8.2-16.1,9.6-9.2,18.8-18.8,28.2-28.1,6.9-6.7,12.5-6.1,18.2,1.3,3,4,3.4,8.2-.1,11.7q-17.7,18.1-35.8,35.9c-4.7,4.5-11.3,3.6-17,3.6C300.1,259.7,302.3,255.2,302.6,251.5Z"
          transform="translate(-281.4 -202.6)"
        />
        <WhitePath
          d="M337,215.2c4.2,2.5,6.6,5.2,9.7,9.2l-28.6,28.3a1.6,1.6,0,0,1-.8.6c-3.1,1.3-6.9,3-9.2.4s-1-6.4.8-9.2,3.5-4,5.4-5.9Z"
          transform="translate(-281.4 -202.6)"
        />
        <WhitePath
          fill="white"
          d="M347.1,207.2c2.9-.1,7.7,4.2,7.7,7a5.3,5.3,0,0,1-4.7,5.5c-1.6.4-8.3-6.8-7.8-8.3A5.8,5.8,0,0,1,347.1,207.2Z"
          transform="translate(-281.4 -202.6)"
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
