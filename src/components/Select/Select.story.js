import React from "react";
import { storiesOf } from "@storybook/react";
import Select from "./Select";
import { action } from "@storybook/addon-actions";

const optionsMap = [
  { id: 1, value: "American" },
  { id: 2, value: "Italian" },
  { id: 3, value: "Chinese" },
  { id: 4, value: "Mexican" },
  { id: 5, value: "Japanese" },
  { id: 6, value: "Breakfast" },
  { id: 7, value: "Indian" },
  { id: 8, value: "Thai" }
];

const options = optionsMap.map(opt => {
  return <option value={opt.id}>{opt.value}</option>;
});

storiesOf("Select", module)
  .add("Default", () => (
    <div style={{ width: "300px" }}>
      <Select placeholder="Category" onChange={action("change")}>
        {options}
      </Select>
    </div>
  ))

  .add("Error", () => (
    <div style={{ width: "300px" }}>
      <Select
        inputState="error"
        placeholder="Category"
        onChange={action("change")}
      >
        {options}
      </Select>
    </div>
  ))

  .add("Icon", () => (
    <div style={{ width: "300px" }}>
      <Select
        placeholder="Category"
        onChange={action("change")}
        icon="utensils"
      >
        {options}
      </Select>
    </div>
  ))
  .add("Label", () => (
    <div style={{ width: "300px" }}>
      <Select
        label="Category"
        placeholder="Category"
        onChange={action("change")}
      >
        {options}
      </Select>
    </div>
  ))
  .add("Label and Icon", () => (
    <div style={{ width: "300px" }}>
      <Select
        label="Category"
        placeholder="Category"
        onChange={action("change")}
        icon="utensils"
      >
        {options}
      </Select>
    </div>
  ));
