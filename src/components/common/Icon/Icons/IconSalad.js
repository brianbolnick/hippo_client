import React, { Component } from "react";
import PropTypes from "prop-types";
import Icon from "../CustomIcon";

export default class IconSalad extends Component {
  render() {
    const { color } = this.props;
    return (
      <Icon viewBoxWidth="80.3" viewBoxHeight="80.2" {...this.props}>
        <path
          fill={color}
          d="M55.9,65.8c2-.3,4.1-1.5,5.4.8s-1.5,3.1-5,3.3a34.8,34.8,0,0,1-14.7-2,6,6,0,0,0-7.1,1.7C29.4,74.9,24.2,80.1,19,85.3c-1.9,1.9-3.8,3.7-5.8,5.4a2.7,2.7,0,0,1-2.6.1,2.5,2.5,0,0,1-.3-2.5,22.9,22.9,0,0,1,4.6-5.2c5.1-4.2,6.4-9.2,6.1-15.8-1.1-23.6,9.5-40.9,30-52.2,6.9-3.9,14.3-5.4,22.1-3.2,9.7,2.7,15.3,9.1,17,18.9,1,5.9-1.2,11.3-5.1,15.6s-3.2,5.9-2.5,9.9C85,70.4,73.3,90.2,51.1,86.2a47.7,47.7,0,0,1-11.2-3.8c-4.9-2.3-6.9-4.9-5.3-5.8s5,.7,7.2,1.7c4.9,2.3,9.9,4,15.4,3.8A22,22,0,0,0,77.9,58.6c-.2-3.1-1.8-4.1-5.4-3.6s-5.2.4-7.8.5c-.3,0-.9-.9-.9-1.4s.3-1.5.7-1.6c2.5-.9,5.1-1.5,7.6-2.5,6.2-2.4,10.9-6.5,12.7-13.1,2.6-9.9-4.2-19.2-14.9-20.8-6.6-1-12.6.6-18.2,3.9A50.8,50.8,0,0,0,27.1,51.3c-1.5,5.2-2.5,10.4-1.6,15.8,0,.6.4,1.6.8,1.6a4,4,0,0,0,2.7-.4c4.1-3.9,8-7.9,12.1-11.9,2-2.1,2.2-4.7,2.1-7.4s-.2-8.1,2.2-11.6a2.4,2.4,0,0,1,1.6-.7c.6,0,1.4.6,1.4,1,.3,2.3.2,4.6.4,6.9.1.5.6,1.3,1,1.4a2,2,0,0,0,1.8-.5c3.8-3.7,7.5-7.6,11.3-11.3a45.2,45.2,0,0,1,5-4.8,2.5,2.5,0,0,1,2.5.3,2.9,2.9,0,0,1,.2,2.7A28.8,28.8,0,0,1,66.7,37c-5.5,5.7-11.2,11.4-16.8,17-1.6,1.7-3.3,3.3-4.9,5.1s-1.9,4.2,1.2,5S52.7,65.3,55.9,65.8Z"
          transform="translate(-10.1 -10.9)"
        />
      </Icon>
    );
  }
}

IconSalad.propTypes = {
  color: PropTypes.string
};

IconSalad.defaultProps = {
  color: "#333333"
};