import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import styled, { css } from 'styled-components/macro';
import PropTypes from 'prop-types';
import { colors, avenir } from 'styles/css-variables';
const popoverTickTopOffset = 11;
const popoverTickLeftOffset = -16;

const popoverTick = css`
  display: block;
  content: '';
  position: absolute;
  left: ${props => props.tickLeft};
  top: -9px;
  border-bottom: 9px solid ${colors.white};
  border-left: 10px solid transparent;
  border-right: 11px solid transparent;
`;

const StyledPopover = styled.div`
  position: absolute;
  border: none;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.2);
  padding: 16px;
  list-style-type: none;
  background: ${colors.white};
  z-index: 9999;
  min-width: 130px;
  border-radius: 3px;
  font-family: ${avenir};
  text-align: center;
  letter-spacing: 1px;
  :after {
    ${popoverTick};
  }

  :before {
    ${popoverTick} top: -10px;
    border-bottom-color: rgba(0, 0, 0, 0.2);
  }
`;

class Popover extends Component {
  state = {
    tickLeft: 0,
    position: {
      top: 0,
      left: 0
    },
    isOpen: false
  };

  componentDidMount = () => {
    this.setPosition(this.props);
    document.addEventListener('click', this.handleClose, false);
  };

  componentWillUnmount = () => {
    document.removeEventListener('click', this.handleClose, false);
  };

  componentDidUpdate = (prevProps, prevState) => {
    if (this.state.isOpen) {
      document.addEventListener('click', this.handleClose, false);
      if (prevState.position === this.state.position) {
        this.setPosition(this.props);
      }
    } else {
      document.removeEventListener('click', this.handleClose, false);
    }
  };

  setPosition = nextProps => {
    const { alignRight } = nextProps;
    const { isOpen } = this.state;

    if (isOpen) {
      let rect = this.targetEl.getBoundingClientRect();
      let pop = this.popoverEl.getBoundingClientRect();
      let popWidth = pop.width;
      let top = rect.top + this.targetEl.offsetHeight + window.scrollY;
      let left;
      let right;
      let distanceFromRight = document.body.clientWidth - rect.right;
      let additionalOffset;

      if (distanceFromRight < popWidth) {
        if (!left) {
          left = 0;
        }
        additionalOffset = rect.x + pop.width - document.body.clientWidth;
        left -= additionalOffset;
      }

      let { tickLeft } = this.state;
      if (alignRight) {
        right += window.screen.width - (rect.right + rect.width);
      } else {
        if (!left) {
          left = 0;
        }
        left += rect.left;
        if (this.props.leftOffset) {
          left += this.props.leftOffset;
        }
      }

      const elemHalf = this.targetEl.offsetWidth / 2;
      const offsetHalf = popoverTickLeftOffset / 2;

      top += popoverTickTopOffset;
      left += popoverTickLeftOffset;
      tickLeft = elemHalf - offsetHalf;
      if (additionalOffset) {
        tickLeft += additionalOffset;
      }

      if (this.props.leftOffset) {
        tickLeft -= this.props.leftOffset;
      }
      tickLeft += 'px';

      this.setState({
        position: {
          top: top,
          left: left,
          right: right
        },
        tickLeft
      });
    }
  };

  handleClose = e => {
    const { isOpen } = this.state;
    if (
      isOpen &&
      !this.popoverEl.contains(e.target) &&
      !this.targetEl.contains(e.target)
    ) {
      this.setState({ isOpen: false });
      document.removeEventListener('click', this.handleClose, false);
    }
  };

  renderTarget = () => {
    return React.cloneElement(this.props.target, {
      ref: el => (this.targetEl = ReactDOM.findDOMNode(el)),
      onMouseOver: () => this.setState({ isOpen: true }),
      onMouseOut: () => this.setState({ isOpen: false }),
      'aria-haspopup': 'true'
    });
  };

  renderPopover = () => {
    const { position, tickLeft, isOpen } = this.state;
    const { children, ...props } = this.props;

    if (isOpen) {
      return ReactDOM.createPortal(
        <StyledPopover
          ref={el => (this.popoverEl = ReactDOM.findDOMNode(el))}
          style={position}
          tickLeft={tickLeft}
          {...props}
        >
          {children}
        </StyledPopover>,
        document.body
      );
    } else {
      return null;
    }
  };

  render() {
    return (
      <Fragment>
        {this.renderTarget()}
        {this.renderPopover()}
      </Fragment>
    );
  }
}

Popover.propTypes = {
  children: PropTypes.any,
  target: PropTypes.element.isRequired,
  alignRight: PropTypes.bool,
  leftOffset: PropTypes.number
};

export default Popover;
