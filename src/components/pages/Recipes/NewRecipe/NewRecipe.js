import React, { Component } from "react";
import styled from "styled-components";
import { colors, avenir, media } from "styles/css-variables";
import Layout from "components/common/Layout";
import FileInput from "components/common/FileInput";
import Input from "./Input";
import TextArea from "./TextArea";
import Button from "components/common/Button";
import ProgressSteps from "components/common/ProgressSteps";

const TOTAL_STEPS = 5;

const Title = styled.div`
  font-size: 1.5rem;
  letter-spacing: 1px;
  margin: 32px 0;
  font-weight: 600;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  color: ${colors.black};
  font-family: ${avenir};
`;

const StepContainer = styled.div`
  ${({ isHidden }) =>
    isHidden &&
    `
		display: none;
	`};
`;

const Columns = styled.div`
  display: flex;
  flex-flow: row;
  flex-wrap: wrap;
  width: 100%;
  justify-content: space-between;

  ${media.smallDesktop`
		flex-flow: column;
	`}
`;

const Column = styled.div`
  ${({ flex }) =>
    flex &&
    `
		flex: ${flex};
	`};

  &:not(:last-child) {
    margin-right: 48px;
  }
`;

const StepOptions = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const ActionButton = styled(Button)`
  margin-left: 16px;
`;

const PageContainer = styled.div`
  padding: 0 12%;

  ${media.smallDesktop`
		padding: 0;
	`}
`;

class NewRecipe extends Component {
  state = { image: null, title: "", notes: "", imageUrl: "", currentStep: 1 };

  componentDidMount = () => {
    console.log(this.state);
  };

  handleUploadImage = e => {
    const image = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      const imageUrl = reader.result;
      this.setState({ imageUrl });
    };

    image && reader.readAsDataURL(image);

    this.setState({ image });
  };

  removeImage = () => {
    this.setState({ image: null });
  };

  renderStep1 = active => {
    return (
      <StepContainer isHidden={!active}>
        <Title>What is it?</Title>
        <Columns>
          <Column flex={1}>
            <Input
              type="text"
              placeholder="What's it called?"
              onChange={e => this.setState({ title: e.target.value })}
              label="Recipe Title"
              value={this.state.title}
            />
            <TextArea
              placeholder="What's special about it?"
              label="Notes"
              onChange={e => this.setState({ notes: e.target.value })}
              value={this.state.notes}
            />
          </Column>

          <Column flex={1.5}>
            <FileInput
              onChange={this.handleUploadImage}
              file={this.state.image}
              onClear={this.removeImage}
              imageUrl={this.state.imageUrl}
            />
          </Column>
        </Columns>
      </StepContainer>
    );
  };

  renderStep2 = active => {
    return (
      <StepContainer isHidden={!active}>
        <Title>Tell me more.</Title>
        <div>Prep Time</div>
        <div>Cook Time</div>
        <div>Servings</div>
        <div>Calories</div>
        <div>category</div>
        <div>dish type</div>
        <div>difficulty</div>
      </StepContainer>
    );
  };

  renderStep3 = active => {
    return (
      <StepContainer isHidden={!active}>
        <Title>What's in it?</Title>
        <div>Ingredients</div>
      </StepContainer>
    );
  };

  renderStep4 = active => {
    return (
      <StepContainer isHidden={!active}>
        <Title>How is it made?</Title>
        <div>directions</div>
      </StepContainer>
    );
  };

  renderStep5 = active => {
    return (
      <StepContainer isHidden={!active}>
        <Title>Preview</Title>

        <div>Preview recipe</div>
      </StepContainer>
    );
  };

  submitRecipe = () => {
    console.log("submit", this.state);
  };

  render() {
    const { currentStep } = this.state;

    return (
      <Layout>
        <PageContainer>
          <ProgressSteps
            step={currentStep}
            totalSteps={TOTAL_STEPS}
            title="New Recipe"
            color={colors.softRed}
          />
          {this.renderStep1(currentStep === 1)}
          {this.renderStep2(currentStep === 2)}
          {this.renderStep3(currentStep === 3)}
          {this.renderStep4(currentStep === 4)}
          {this.renderStep5(currentStep === 5)}
          <StepOptions>
            {currentStep > 1 && (
              <ActionButton
                secondary
                onClick={() => this.setState({ currentStep: currentStep - 1 })}
              >
                Back
              </ActionButton>
            )}
            {currentStep === TOTAL_STEPS ? (
              <ActionButton onClick={this.submitRecipe}>Finish</ActionButton>
            ) : (
              <ActionButton
                onClick={() => this.setState({ currentStep: currentStep + 1 })}
              >
                Next
              </ActionButton>
            )}
          </StepOptions>
        </PageContainer>
      </Layout>
    );
  }
}

export default NewRecipe;
