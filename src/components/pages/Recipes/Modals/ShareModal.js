import React from "react";
import axios from "axios";
import PropTypes from "prop-types";
import { API_URL, token, userId } from "utils";
import Modal from "components/common/Modal/Modal";
import ModalInput from "components/common/ModalInput/ModalInput";
import Button from "components/common/Button/Button";
import {
  ModalText,
  ButtonContainer,
  FormContainer,
  FormWrapper
} from "./ModalStyledComponents";

const authToken = `Bearer ${token}`;

class ShareModal extends React.Component {
  state = {
    loading: false,
    error: "",
    joinCodeValid: false,
    joinCode: "",
    sharedFamilyId: ""
  };

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
            const sharedFamilyId = resp.data.data && resp.data.data.id;
            this.setState({
              loading: false,
              joinCodeValid,
              familyName,
              sharedFamilyId
            });
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
        family_id: this.state.sharedFamilyId,
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
