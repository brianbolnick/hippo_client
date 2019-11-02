import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { colors, avenir } from "styles/css-variables";

const Title = styled.div`
  font-family: ${avenir};
  font-size: 1.75rem;
  font-weight: 500;
  margin-bottom: 8px;
`;

const Container = styled.div``;

const Step = styled.div`
  height: 16px;
  border: solid 1px ${({ color }) => color};
  flex: 1;
  box-sizing: border-box;
  border-radius: 4px;

  &:not(:last-child) {
    margin-right: 8px;
  }

  ${({ active, color }) =>
    active &&
    `
		background-color: ${color};
		border: none;
	`};
`;

const StepsContainer = styled.div`
  display: flex;
  width: 100%;
  flex-flow: row;
  justify-content: space-between;
  box-sizing: border-box;
`;

const ProgressSteps = ({ step, totalSteps, title, color }) => {
  const renderSteps = () => {
    return [...new Array(totalSteps)].map((currentStep, index) => (
      <Step active={index + 1 <= step} color={color} />
    ));
  };
  return (
    <Container>
      {title && <Title>{title}</Title>}
      <StepsContainer>{renderSteps()}</StepsContainer>
    </Container>
  );
};

ProgressSteps.propTypes = {
  step: PropTypes.number.isRequired,
  totalSteps: PropTypes.number.isRequired,
  title: PropTypes.string,
  color: PropTypes.string
};

ProgressSteps.defaultProps = {
  color: colors.yellow
};
export default ProgressSteps;
