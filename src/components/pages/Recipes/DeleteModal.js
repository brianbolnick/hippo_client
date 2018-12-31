import React from "react";
import PropTypes from "prop-types";
import Modal from "components/common/Modal/Modal";
import Button from "components/common/Button/Button";
import styled from "styled-components";

const ButtonContainer = styled.div`
  display: flex;
  width: 200px;
  justify-content: space-between;
  margin: 32px auto;
`;

const DeleteModal = ({ onCancelClick, onDeleteClick }) => {
  return (
    <Modal width="25%">
      <p style={{ textAlign: "center" }}>
        Are you sure you want to delete this recipe? This cannot be undone.
      </p>
      <ButtonContainer>
        <Button secondary onClick={onCancelClick}>
          Cancel
        </Button>
        <Button onClick={onDeleteClick}>Delete</Button>
      </ButtonContainer>
    </Modal>
  );
};

DeleteModal.propTypes = {
  onDeleteClick: PropTypes.func.isRequired,
  onCancelClick: PropTypes.func.isRequired
};

export default DeleteModal;
