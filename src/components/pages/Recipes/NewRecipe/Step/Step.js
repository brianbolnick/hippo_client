import React, { useState, useEffect, useRef } from "react";
import {
  ActionIcon,
  StepContainer,
  ActionsContainer,
  EditInput,
  EditContainer,
  StepNumber,
  InputContainer
} from "./StepStyles";

const Step = ({ step, stepNumber, onUpdate, onDelete }) => {
  const [isEditMode, setIsEditMode] = useState(false);
  const [editValue, setEditValue] = useState(step);

  const editRef = useRef();

  useEffect(() => {
    editRef.current && editRef.current.focus();
  }, [isEditMode]);

  const handleEditSave = () => {
    setIsEditMode(false);
    onUpdate(step, editValue);
  };

  const handleKeyPress = event => event.key === "Enter" && handleEditSave();

  return isEditMode ? (
    <EditContainer>
      <InputContainer>
        <StepNumber>{stepNumber}</StepNumber>
        <EditInput
          ref={editRef}
          value={editValue}
          onChange={e => setEditValue(e.target.value)}
          onKeyPress={handleKeyPress}
        />
      </InputContainer>

      <ActionsContainer>
        <ActionIcon name="checkCircle" onClick={handleEditSave} />
        <ActionIcon name="close" onClick={() => setIsEditMode(false)} />
      </ActionsContainer>
    </EditContainer>
  ) : (
    <StepContainer>
      <div>
        <StepNumber>{stepNumber}</StepNumber> {step}
      </div>
      <ActionsContainer>
        <ActionIcon name="edit" onClick={() => setIsEditMode(true)} />
        <ActionIcon name="trash" onClick={() => onDelete(step)} />
      </ActionsContainer>
    </StepContainer>
  );
};

export default Step;
