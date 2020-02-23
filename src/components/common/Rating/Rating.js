import React, { Component } from 'react';
import styled from 'styled-components/macro';
import PropTypes from 'prop-types';
import Star from './Star';
import Popover from 'components/common/Popover/Popover';
import RateModal from './RateModal';

const StyledSpan = styled.span``;
const RatingContainer = styled.div`
  max-width: 125px;

  ${({ rateable }) =>
    rateable &&
    `
	cursor: pointer
`}
`;

class Rating extends Component {
  state = { showRateModal: false };

  handleSubmit = rating => {
    this.props.onSubmit(rating);
    this.setState({ showRateModal: false });
  };
  renderStars = () => {
    const { value, rateable, small } = this.props;

    //round value to nearest .5
    const rounded = Math.round(value * 2) / 2;

    let stars = [];

    for (let i = 1; i <= 5; i++) {
      if (i <= rounded) {
        stars.push(<Star type="filled" small={small} key={i} />);
      } else if (
        i > Math.floor(rounded) &&
        i <= Math.ceil(rounded) &&
        rounded % 1 !== 0
      ) {
        stars.push(<Star type="half" small={small} key={i} />);
      } else {
        stars.push(<Star type="blank" small={small} key={i} />);
      }
    }

    return (
      <RatingContainer
        rateable={rateable}
        onClick={() => rateable && this.setState({ showRateModal: true })}
      >
        {stars}
      </RatingContainer>
    );
  };

  render() {
    const { rateable } = this.props;
    const { showRateModal } = this.state;
    return (
      <>
        {showRateModal && (
          <RateModal
            onCancelClick={() => this.setState({ showRateModal: false })}
            onSuccess={() => console.log('success')}
            onFailire={() => console.log('success')}
            onSubmit={this.handleSubmit}
          />
        )}
        <Popover target={this.renderStars()}>
          <StyledSpan
            onClick={() => rateable && this.setState({ showRateModal: true })}
          >
            Rating: {this.props.value && parseInt(this.props.value).toFixed(1)}
            /5
          </StyledSpan>
        </Popover>
      </>
    );
  }
}

Rating.propTypes = {
  value: PropTypes.number.isRequired,
  rateable: PropTypes.bool,
  onSubmit: PropTypes.func,
  small: PropTypes.bool
};

export default Rating;
