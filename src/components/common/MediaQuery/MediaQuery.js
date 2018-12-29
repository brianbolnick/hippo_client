import { Component } from "react";
import PropTypes from "prop-types";

class MediaQuery extends Component {
  componentDidMount = () => {
    this.matchMedia = window.matchMedia("(" + this.props.query + ")");
    this.matchMedia.addListener(this.props.onChange);
    this.props.onChange(this.matchMedia);
  };

  componentWillUnmount = () => {
    this.matchMedia.removeListener(this.props.onChange);
  };

  render() {
    return null;
  }
}

MediaQuery.propTypes = {
  onChange: PropTypes.func,
  query: PropTypes.any
};

export default MediaQuery;
