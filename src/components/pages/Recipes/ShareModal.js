import React from "react";
import Modal from "components/common/Modal/Modal";
import Input from "components/common/Input/Input";
import Button from "components/common/Button/Button";
import styled from "styled-components";
import PropTypes from "prop-types";
import { media } from "styles/css-variables";
import { API_URL, token } from "utils";
import axios from "axios";

const authToken = `Bearer ${token}`;

export const FormContainer = styled.form`
  width: 485px;
  display: flex;
  justify-content: center;
  flex-flow: column;
  ${media.phone` 
	box-sizing: border-box;
	background: #ffffff;
	border-radius: 4px;
	width: 100%;
	padding: 16px;
	`};
`;

export const FormWrapper = styled.div`
  z-index: 9;
  display: flex;
  align-items: center;
  justify-content: center;
  ${media.phone`
	width: 100%;
	`};
`;
const ButtonContainer = styled.div`
  display: flex;
  width: 200px;
  justify-content: space-between;
  margin: 32px auto;
`;

class ShareModal extends React.Component {
  state = { loading: false, error: "", joinCodeValid: false, joinCode: "" };

  onCodeFieldChange = e => {
    const code = e.target.value;
    if (code && code.length >= 3) {
      this.setState({ loading: true, joinCode: code }, () => {
        axios
          .get(`${API_URL}/family/code/${code}`, {
            headers: { Authorization: authToken }
          })
          .then(resp => {
            const joinCodeValid = resp.status === 200;
            this.setState({ loading: false, joinCodeValid });
          })
          .catch(err => {
            console.log(err);
            this.setState({ joinCodeValid: false, loading: false });
          });
      });
    }
  };

  handleFormSubmit = e => {
    e.preventDefault();
    console.log("submit");
    this.props.onSuccess();
  };

  render() {
    const { onCancelClick } = this.props;
    const { loading, joinCodeValid, joinCode } = this.state;

    return (
      <Modal>
        <p style={{ textAlign: "center" }}>
          Share this recipe with another family! Enter the family code below to
          share.
        </p>
        <FormWrapper>
          <FormContainer onSubmit={this.handleFormSubmit}>
            <Input
              inputState={
                joinCodeValid ? "success" : joinCode.length ? "error" : ""
              }
              type="text"
              icon="users"
              placeholder="Family Join Code"
              onChange={this.onCodeFieldChange}
            />

            <ButtonContainer>
              <Button loading={loading} type="submit" disabled={!joinCodeValid}>
                Share
              </Button>
              <Button secondary onClick={onCancelClick}>
                Cancel
              </Button>
            </ButtonContainer>
          </FormContainer>
        </FormWrapper>
      </Modal>
    );
  }
}
ShareModal.propTypes = {
  onCancelClick: PropTypes.func.isRequired,
  onSuccess: PropTypes.func.isRequired
};

export default ShareModal;
