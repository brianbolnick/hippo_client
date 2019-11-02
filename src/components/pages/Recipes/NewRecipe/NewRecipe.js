import React, { useState } from "react";
import styled from "styled-components";
import { colors, avenir, media } from "styles/css-variables";
import Layout from "components/common/Layout";
import FileInput from "components/common/FileInput";
import Button from "components/common/Button";
import Input from "components/common/Input";
import Textarea from "components/common/Textarea";
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

const StepContainer = styled.div``;

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
    margin-right: 32px;
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
  padding: 0 16%;

  ${media.smallDesktop`
		padding: 0;
	`}
`;

const NewRecipe = () => {
  const [image, setImage] = useState(null);
  const [title, setTitle] = useState("");
  const [notes, setNotes] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [currentStep, setCurrentStep] = useState(1);

  const handleUploadImage = e => {
    const image = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      const imageUrl = reader.result;
      setImageUrl(imageUrl);
    };

    image && reader.readAsDataURL(image);

    setImage(image);
  };

  const removeImage = () => {
    setImage(null);
    this.setState({ image: null });
  };

  const STEP_MAP = {
    1: () => <Step1 />,
    2: () => <Step2 />,
    3: () => <Step3 />,
    4: () => <Step4 />,
    5: () => <Step5 />
  };

  const Step1 = () => {
    return (
      <StepContainer>
        <Title>What is it?</Title>
        <Columns>
          <Column flex={1}>
            <Input
              type="text"
              placeholder="Title"
              onChange={val => setTitle(title)}
              label="Recipe Title"
            />
            <Textarea
              placeholder="Notes"
              label="Notes"
              onChange={val => setNotes(notes)}
            />
          </Column>

          <Column flex={1.5}>
            <FileInput
              onChange={handleUploadImage}
              file={image}
              onClear={removeImage}
              imageUrl={imageUrl}
            />
          </Column>
        </Columns>
      </StepContainer>
    );
  };

  const Step2 = () => {
    return (
      <StepContainer>
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

  const Step3 = () => {
    return (
      <StepContainer>
        <Title>What's in it?</Title>
        <div>Ingredients</div>
      </StepContainer>
    );
  };

  const Step4 = () => {
    return (
      <StepContainer>
        <Title>How is it made?</Title>
        <div>directions</div>
      </StepContainer>
    );
  };

  const Step5 = () => {
    return (
      <StepContainer>
        <Title>Preview</Title>

        <div>Preview recipe</div>
      </StepContainer>
    );
  };

  const renderCurrentStepView = () => {
    const component = STEP_MAP[currentStep];
    return <>{component()}</>;
  };

  const submitRecipe = () => {
    console.log("submit");
  };

  return (
    <Layout>
      <PageContainer>
        <ProgressSteps
          step={currentStep}
          totalSteps={TOTAL_STEPS}
          title="New Recipe"
          color={colors.blue}
        />
        {renderCurrentStepView()}
        <StepOptions>
          {currentStep > 1 && (
            <ActionButton
              secondary
              onClick={() => setCurrentStep(currentStep - 1)}
            >
              Back
            </ActionButton>
          )}
          {currentStep === TOTAL_STEPS ? (
            <ActionButton onClick={submitRecipe}>Finish</ActionButton>
          ) : (
            <ActionButton onClick={() => setCurrentStep(currentStep + 1)}>
              Next
            </ActionButton>
          )}
        </StepOptions>
      </PageContainer>
    </Layout>
  );
};

export default NewRecipe;
