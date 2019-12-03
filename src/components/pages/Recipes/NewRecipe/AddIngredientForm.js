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
    //TODO add focus on first form after submit
    e.preventDefault();
    const rawIngredient = `${quantity} ${measurement} ${name}`;
    onSave([{ quantity, measurement, name }, rawIngredient]);
    setQuantity("");
    setMeasurement("tsp");
    setName("");
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
    <form style={{ marginBottom: "16px" }} onSubmit={handleAdd}>
      <AddIngredientLabel>Ingredients</AddIngredientLabel>
      {error && <div style={{ color: colors.red }}>{error} </div>}
      <AddIngredientContainer>
        <StyledInput
          onChange={e => verifyQuantity(e)}
          placeholder="Quantity"
          value={quantity}
          type="text"
        />
        <StyledSelect
          onChange={e => setMeasurement(e.target.value)}
          placeholder="Measurement"
          value={measurement}
        >
          {renderMeasurements()}
        </StyledSelect>

        <StyledInput
          placeholder="Name"
          type="text"
          value={name}
          onChange={e => setName(e.target.value)}
        />
      </AddIngredientContainer>
      <Button type="submit" secondary disabled={!!error}>
        Add Ingredient
      </Button>
    </form>
  );
};
export default AddIngredientForm;
