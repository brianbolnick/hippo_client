import React, { useState } from "react";
import Button from "components/common/Button/Button";
import {
  AddIngredientContainer,
  AddIngredientLabel,
  StyledInput
} from "./NewRecipeStyledComponents";

const AddStepForm = ({ onSave }) => {
  const [step, setStep] = useState("");

  const handleAdd = e => {
    e.preventDefault();
    onSave(step);
    setStep("");
  };

  return (
    <form style={{ marginBottom: "16px" }} onSubmit={handleAdd}>
      <AddIngredientLabel>Steps</AddIngredientLabel>
      <AddIngredientContainer>
        <StyledInput
          placeholder="Preheat oven to 350 degrees"
          type="text"
          value={step}
          onChange={e => setStep(e.target.value)}
        />
      </AddIngredientContainer>
      <Button type="submit" secondary disabled={!step}>
        Add Step
      </Button>
    </form>
  );
};
export default AddStepForm;
