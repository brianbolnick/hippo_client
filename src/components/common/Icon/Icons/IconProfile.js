import React, { Component } from "react";
import PropTypes from "prop-types";
import Icon from "../CustomIcon";
import { colors } from "styles/css-variables";

export default class IconAmerican extends Component {
  render() {
    const { color } = this.props;
    return (
      <Icon viewBoxWidth="50" viewBoxHeight="50" {...this.props}>
        <path
          fill={color}
          d="M75,50.4A24.5,24.5,0,0,1,49.8,75a24.2,24.2,0,0,1-17.9-7.5A24.5,24.5,0,0,1,25,49.4,23.9,23.9,0,0,1,32.4,32c5.1-4.9,11.1-7,18.1-7C64.3,25,75,36.1,75,50.4ZM49.9,53c4.2,0,4.2.1,9.4,2.7,2.2,1.2,4,2.5,4.9,4.9A21.8,21.8,0,0,0,66,64.4a1,1,0,0,0,1.9.1c3.7-6.1,6.5-12.3,4.2-20-1.5-4.9-3.6-9.3-7.5-12.2s-6-4.8-10.2-4.4c-4.2-2.3-8.5-.8-12.4.7A22.9,22.9,0,0,0,27,51.5c.3,5,2.6,9.2,5.3,13.3.2.1,1.5,0,1.6-.3,1.1-1.9,1.6-4.2,3-5.7C40.3,55.1,44.6,52.6,49.9,53Zm1.4,20a45.7,45.7,0,0,0,6.2-1.1A14,14,0,0,0,62,69.5c2.3-1.7,2.4-2.9,1.3-5.8s-2.8-3.5-4.3-5.2-5.1-3.2-8-3.4c-6.4-.4-10.9,2.9-14,8.2-1.8,3.3-1.4,5,1.8,6.7A24.6,24.6,0,0,0,51.3,73Z"
          transform="translate(-25 -25)"
        />
        <path
          fill={color}
          d="M59,41.8A9.1,9.1,0,0,1,50.1,51c-4.6,0-9-4-9.1-8.5s3.9-9.4,8.6-9.5A9.2,9.2,0,0,1,59,41.8ZM57,42c.2-2.7-3.2-7-7.1-7s-6.7,3.5-6.9,6.7,3.4,7.2,6.8,7.3S57,45.5,57,42Z"
          transform="translate(-25 -25)"
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
