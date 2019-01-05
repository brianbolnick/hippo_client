import React from "react";
import Modal from "components/common/Modal/Modal";
import ModalInput from "components/common/ModalInput/ModalInput";
import Button from "components/common/Button/Button";
import styled from "styled-components";
import PropTypes from "prop-types";
import { media, varela } from "styles/css-variables";
import { API_URL, token, userId, familyId } from "utils";
import axios from "axios";

const authToken = `Bearer ${token}`;

const ModalText = styled.div`
  font-family: ${varela};
  font-weight: 600;
  margin-top: 16px;
`;

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
            const familyName = resp.data.data && resp.data.data.display_name;
            this.setState({ loading: false, joinCodeValid, familyName });
          })
          .catch(err => {
            this.setState({
              joinCodeValid: false,
              loading: false,
              familyName: ""
            });
          });
      });
    }
  };

  handleFormSubmit = e => {
    e.preventDefault();
    const data = {
      shared_recipe: {
        user_id: userId,
        family_id: familyId,
        recipe_id: this.props.recipeId
      }
    };

    axios
      .post(`${API_URL}/shared_recipes`, data, {
        headers: { Authorization: authToken }
      })
      .then(resp => {
        this.props.onSuccess();
      })
      .catch(err => {
        console.log(err);
        this.props.onFailure();
      });
  };

  render() {
    const { onCancelClick } = this.props;
    const { loading, joinCodeValid, joinCode, familyName } = this.state;

    return (
      <Modal onCloseRequest={onCancelClick}>
        {familyName && <p>{familyName}</p>}
        <FormWrapper>
          <FormContainer onSubmit={this.handleFormSubmit}>
            <ModalInput
              inputState={
                joinCodeValid ? "success" : joinCode.length ? "error" : ""
              }
              type="text"
              icon="users"
              placeholder="Family Join Code"
              onChange={this.onCodeFieldChange}
            />
            <ModalText>
              Share this recipe with another family! Enter the family code below
              to share.
            </ModalText>

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
