import React from "react";
import Modal from "components/common/Modal/Modal";
import ModalInput from "components/common/ModalInput/ModalInput";
import Button from "components/common/Button/Button";
import styled from "styled-components";
import Star from "./Star";
import PropTypes from "prop-types";
import { media, varela, colors } from "styles/css-variables";
//import { API_URL, token, userId, familyId } from "utils";
//import axios from "axios";

//const authToken = `Bearer ${token}`;

const RatingContainer = styled.div`
  margin: 16px auto;

  svg {
    height: 40px;
    width: 40px;
  }
`;

const Error = styled.div`
  color: ${colors.red};
  font-family: ${varela};
  position: absolute;
  bottom: -14px;
  left: calc(50% - 181px);

  ${media.phone`
    bottom: auto;
    left: calc(50% - 110px);
    font-size: 0.8rem;
	`}
`;

const FormContainer = styled.form`
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

const FormWrapper = styled.div`
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

const ModalText = styled.div`
  font-family: ${varela};
  font-weight: 600;
  margin: 16px;
  position: relative;
`;

class RateModal extends React.Component {
  state = { loading: false, error: "", ratingValid: false, rating: 0 };

  isRatingValid = rating => {
    const regex = /^[0-5]{0,1}(\.\d{1,2})?$/;
    return rating && regex.test(rating);
  };

  handleRatingChange = e => {
    const rating = e.target.value;
    if (this.isRatingValid(rating)) {
      this.setState({ rating: rating, error: "", ratingValid: true });
    } else {
      this.setState({
        error:
          rating.length <= 4
            ? "Rating must be a number between 0 and 5"
            : "Rating must have no more than 2 decimal places.",
        ratingValid: false
      });
    }
  };

  handleFormSubmit = e => {
    e.preventDefault();
    console.log(e.target.value);
    this.state.rating && this.props.onSubmit(this.state.rating);
  };

  renderStars = () => {
    const { rating } = this.state;

    //round value to nearest .5
    const rounded = Math.round(rating * 2) / 2;

    let stars = [];

    for (let i = 1; i <= 5; i++) {
      if (i <= rounded) {
        stars.push(<Star type="filled" key={i} />);
      } else if (
        i > Math.floor(rounded) &&
        i <= Math.ceil(rounded) &&
        rounded % 1 !== 0
      ) {
        stars.push(<Star type="half" key={i} />);
      } else {
        stars.push(<Star type="blank" key={i} />);
      }
    }

    return <RatingContainer>{stars}</RatingContainer>;
  };

  render() {
    const { onCancelClick } = this.props;
    const { loading, ratingValid, error } = this.state;

    return (
      <Modal onCloseRequest={onCancelClick} width="30%">
        <FormWrapper>
          <FormContainer onSubmit={this.handleFormSubmit}>
            {this.renderStars()}
            <ModalInput
              type="text"
              label="Rate this recipe!"
              placeholder="Type Rating"
              onChange={this.handleRatingChange}
              style={{ fontSize: "3rem", width: "60%", margin: "0 auto" }}
              inputState={ratingValid ? "success" : error ? "error" : ""}
            />

            <ModalText>
              <Error>{error}</Error>
            </ModalText>
            <ButtonContainer>
              <Button loading={loading} type="submit" disabled={!ratingValid}>
                Save
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
RateModal.propTypes = {
  onCancelClick: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
};

export default RateModal;
