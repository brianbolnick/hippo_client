import React from "react";
import Modal from "components/Modal/Modal";
import Input from "components/Input/Input";
import Button from "components/Button/Button";
import styled from "styled-components";
import { media } from "styles/css-variables";

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
	box-shadow: 0 0 12px 3px #21212170;
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

class ShareModal extends React.Component {
  state = { loading: false, error: "", joinCodeValid: false };

  onCodeFieldChange = e => {
    console.log("make request to validate join code: ", e.target.value);
    const joinCodeValid = false;
    this.setState({ joinCode: e.target.value, joinCodeValid });
  };

  handleFormSubmit = e => {
    e.preventDefault();
  };

  render() {
    const { onCloseRequest } = this.props;
    const { loading, error, joinCodeValid } = this.state;

    return (
      <Modal onCloseRequest={onCloseRequest}>
        <p style={{ textAlign: "center" }}>
          Share this recipe with another family! Enter the family code below to
          share.
        </p>
        <FormWrapper>
          <FormContainer onSubmit={this.handleFormSubmit}>
            {error.message && <div>{error.message}</div>}
            <Input
              inputState={error.field === "join_code" ? "error" : ""}
              type="text"
              icon="users"
              placeholder="Family Join Code"
              onChange={this.onCodeFieldChange}
            />
            <Button loading={loading} type="submit" disabled={!joinCodeValid}>
              Share
            </Button>
          </FormContainer>
        </FormWrapper>
      </Modal>
    );
  }
}

export default ShareModal;
