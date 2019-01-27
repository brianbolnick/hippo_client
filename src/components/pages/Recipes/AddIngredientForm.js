import React, { useState } from "react";
import Input from "components/common/Input/Input";
import Select from "components/common/Select/Select";
import Button from "components/common/Button/Button";
import { varela, colors } from "styles/css-variables";
import styled from "styled-components";

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

const Container = styled.div`
  display: flex;
  flex-flow: row;
`;

const Label = styled.label`
  font-family: ${varela};
  margin-bottom: 16px;
`;

const StyledSelect = styled(Select)`
  width: 33%;
  margin: 0 8px;
`;

const StyledInput = styled(Input)`
  width: 33%;
  & input {
    width: 100%;
  }
`;

//const MeasureInput = styled.input`
//`;

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
    const regex = /^(\d+[\d. ]*|\d{1,2})?\S+$/;
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
      <Label>Ingredients</Label>
      {error && <div style={{ color: colors.red }}>{error} </div>}
      <Container>
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
      </Container>
      <Button secondary onClick={handleAdd} disabled={!!error}>
        Add Ingredient
      </Button>
    </div>
  );
};
export default AddIngredientForm;
