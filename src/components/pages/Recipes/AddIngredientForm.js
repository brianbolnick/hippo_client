import React, { useState } from "react";
import Input from "components/common/Input/Input";
import MediaQuery from "components/common/MediaQuery/MediaQuery";
import AddableInput from "components/common/AddableInput/AddableInput";
import ControlledInput from "components/common/ControlledInput/ControlledInput";
import Select from "components/common/Select/Select";
import FlashMessage from "components/common/FlashMessage/FlashMessage";
import Button from "components/common/Button/Button";
import Divider from "components/common/Divider/Divider";
import Textarea from "components/common/Textarea/Textarea";
import { tabletMediaQuery } from "styles/css-variables";
import { colors, varela } from "styles/css-variables";
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

  const handleAdd = e => {
    e.preventDefault();
    onSave({
      quantity,
      measurement,
      name
    });
  };

  const renderMeasurements = () => {
    return MEASUREMENTS.map(measurement => {
      return <option value={measurement}> {measurement} </option>;
    });
  };

  return (
    <div style={{ marginBottom: "16px" }}>
      <Label>Ingredients</Label>
      <Container>
        <StyledInput
          onChange={e => setQuantity(e.target.value)}
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
      <Button secondary onClick={handleAdd}>
        Add Ingredient
      </Button>
    </div>
  );
};
export default AddIngredientForm;
