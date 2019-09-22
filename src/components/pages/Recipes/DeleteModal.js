import React from "react";
import PropTypes from "prop-types";
import Modal from "components/common/Modal/Modal";
import Button from "components/common/Button/Button";
import { varela } from "styles/css-variables";
import styled from "styled-components";

const ButtonContainer = styled.div`
  display: flex;
  width: 200px;
  justify-content: space-between;
  margin: 32px auto;
`;

const ModalText = styled.div`
  font-family: ${varela};
  font-weight: 600;
  margin-top: 16px;
`;

const DeleteModal = ({ onCancelClick, onDeleteClick }) => {
  return (
    <Modal width="25%" onCloseRequest={onCancelClick}>
      <ModalText style={{ textAlign: "center" }}>
        Are you sure you want to delete this recipe? This cannot be undone.
      </ModalText>
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
