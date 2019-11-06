import React, { useState } from "react";
import Button from "components/common/Button/Button";
import { colors } from "styles/css-variables";
import {
  AddIngredientContainer,
  AddIngredientLabel,
  StyledSelect,
  StyledInput
} from "./NewRecipeStyledComponents";
//import StyledInput from "./Input";

const MEASUREMENTS = [
  "tsp",
  "Tbsp",
  "C",
  "L",
  "pt",
  "qt",
  "gal",
  "oz",
  "fl Oz",
  "lb",
  "g",
  ""
];

const AddIngredientForm = ({ onSave }) => {
  const [quantity, setQuantity] = useState("");
  const [measurement, setMeasurement] = useState("tsp");
  const [name, setName] = useState("");
  const [error, setError] = useState("");

  const handleAdd = e => {
    e.preventDefault();
    onSave({
      quantity,
      measurement,
      name
    });
  };

  const verifyQuantity = e => {
    const quantity = e.target.value;
    const regex = /^(\d+[\d. /]*|\d{1,2})?$/;
    if (quantity && regex.test(quantity)) {
      setQuantity(quantity);
      setError("");
    } else {
      setError("Quantities must be whole numbers, decimals, or fractions.");
    }
  };

  const renderMeasurements = () => {
    return MEASUREMENTS.map(measurement => {
      return <option value={measurement}> {measurement} </option>;
    });
  };

  return (
    <div style={{ marginBottom: "16px" }}>
      <AddIngredientLabel>Ingredients</AddIngredientLabel>
      {error && <div style={{ color: colors.red }}>{error} </div>}
      <AddIngredientContainer>
        <StyledInput
          onChange={e => verifyQuantity(e)}
          placeholder="Quantity"
          type="text"
        />
        <StyledSelect
          onChange={e => setMeasurement(e.target.value)}
          placeholder="Measurement"
        >
          {renderMeasurements()}
        </StyledSelect>

        <StyledInput
          placeholder="Name"
          type="text"
          onChange={e => setName(e.target.value)}
        />
      </AddIngredientContainer>
      <Button secondary onClick={handleAdd} disabled={!!error}>
        Add Ingredient
      </Button>
    </div>
  );
};
export default AddIngredientForm;
