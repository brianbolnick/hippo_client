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
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 9999;
  opacity: 1;
  animation: ${fadeIn} 0.5s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
`;

const StyledModal = styled.div`
  display: inline-block;
  position: relative;
  width: 50%;
  animation: ${scaleUp} 0.5s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
  @media (max-width: 1320px) {
    width: 90%;
  }
`;

const ModalContent = styled.div``;

const CloseButton = styled.button`
  position: fixed;
  top: 0;
  right: 0;
  background: #fff;
  width: 2.5rem;
  height: 2.5rem;
  padding: 0;
  border: 0;
  cursor: pointer;
  outline: 0;
  box-shadow: 0 0 0.625rem rgba(0, 0, 0, 0.2);
  &:before,
  &:after {
    content: "";
    position: absolute;
    top: 1.2rem;
    left: 0.25rem;
    width: 2rem;
    height: 0.1rem;
    background-color: #888;
  }
  &:before {
    transform: rotate(45deg);
  }
  &:after {
    transform: rotate(-45deg);
  }

  &:hover:before,
  &:hover:after {
    background-color: #444;
  }
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
    const { onCloseRequest, children } = this.props;

    return (
      <Overlay>
        <StyledModal>
          <ModalContent ref={this.setWrapperRef}>{children}</ModalContent>
        </StyledModal>

        <CloseButton type="button" onClick={onCloseRequest} />
      </Overlay>
    );
  }
}

Modal.propTypes = {
  onCloseRequest: PropTypes.func,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
};

export default Modal;
