import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { fadeIn, scaleUp } from "styles/css-variables";

const Overlay = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  padding: 1rem;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 9999;
  opacity: 1;
  animation: ${fadeIn} 0.5s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
`;

const StyledModal = styled.div`
  display: inline-block;
  position: relative;
  width: ${({ width }) => (width ? width : "50%")};
  animation: ${scaleUp} 0.5s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
  @media (max-width: 1320px) {
    width: 90%;
  }
`;

const ModalContent = styled.div`
  background: white;
  width: 100%;
  height: 100%;
  padding: 24px;
  border-radius: 3px;
  font-weight: 300;
  text-align: center;
  box-sizing: border-box;
  box-shadow: 0px 11px 15px -7px rgba(0, 0, 0, 0.2),
    0px 24px 38px 3px rgba(0, 0, 0, 0.14), 0px 9px 46px 8px rgba(0, 0, 0, 0.12);
`;

class Modal extends Component {
  constructor(props) {
    super(props);

    this.handleKeyUp = this.handleKeyUp.bind(this);
    this.handleOutsideClick = this.handleOutsideClick.bind(this);
    this.setWrapperRef = this.setWrapperRef.bind(this);
  }

  componentDidMount() {
    window.addEventListener("keyup", this.handleKeyUp, false);
    document.addEventListener("click", this.handleOutsideClick, false);
  }

  componentWillUnmount() {
    window.removeEventListener("keyup", this.handleKeyUp, false);
    document.removeEventListener("click", this.handleOutsideClick, false);
  }

  handleKeyUp(e) {
    const { onCloseRequest } = this.props;
    const keys = {
      27: () => {
        e.preventDefault();
        onCloseRequest();
        window.removeEventListener("keyup", this.handleKeyUp, false);
      }
    };

    if (keys[e.keyCode]) {
      keys[e.keyCode]();
    }
  }

  handleOutsideClick(e) {
    const { onCloseRequest } = this.props;
    if (this.wrapperRef && !this.wrapperRef.contains(e.target)) {
      onCloseRequest();
      document.removeEventListener("click", this.handleOutsideClick, false);
    }
  }

  setWrapperRef = node => {
    this.wrapperRef = node;
  };

  render() {
    const { children, width } = this.props;

    return (
      <Overlay>
        <StyledModal width={width}>
          <ModalContent ref={this.setWrapperRef}>{children}</ModalContent>
        </StyledModal>
      </Overlay>
    );
  }
}

Modal.propTypes = {
  onCloseRequest: PropTypes.func,
  width: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
};

export default Modal;
