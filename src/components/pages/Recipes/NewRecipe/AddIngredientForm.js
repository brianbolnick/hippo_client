import React, { useState } from "react";
import { parse } from "recipe-ingredient-parser";
import Button from "components/common/Button/Button";
import {
  AddIngredientContainer,
  AddIngredientLabel,
  StyledInput
} from "./NewRecipeStyledComponents";

const AddIngredientForm = ({ onSave }) => {
  const [ingredient, setIngredient] = useState("");

  const handleAdd = e => {
    e.preventDefault();
    //const { quantity, unit: measurement, ingredient: name } = parse(ingredient);
    onSave(ingredient);
    setIngredient("");
  };

  return (
    <form style={{ marginBottom: "16px" }} onSubmit={handleAdd}>
      <AddIngredientLabel>Ingredients</AddIngredientLabel>
      <AddIngredientContainer>
        <StyledInput
          placeholder="3 C Sugar"
          type="text"
          value={ingredient}
          onChange={e => setIngredient(e.target.value)}
        />
      </AddIngredientContainer>
      <Button type="submit" secondary disabled={!ingredient}>
        Add Ingredient
      </Button>
    </form>
  );
};
export default AddIngredientForm;
