import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import ControlledInput from "./ControlledInput";

const optionsMap = [
  { id: 1, value: "Seconds" },
  { id: 2, value: "Minutes" },
  { id: 3, value: "Hours" },
  { id: 4, value: "Days" }
];

const options = optionsMap.map(opt => {
  return <option value={opt.value}>{opt.value}</option>;
});

storiesOf("ControlledInput", module)
  .add("Default", () => (
    <div style={{ width: "500px" }}>
      <ControlledInput
        placeholder="Preparation Time"
        onChange={action("change")}
        defaultSelectValue="Seconds"
      >
        {options}
      </ControlledInput>
    </div>
  ))

  .add("Labeled", () => (
    <div style={{ width: "500px" }}>
      <ControlledInput
        placeholder="Preparation Time"
        label="Prep Time"
        onChange={action("change")}
        defaultSelectValue="Seconds"
      >
        {options}
      </ControlledInput>
    </div>
  ))

  .add("Icon", () => (
    <div style={{ width: "500px" }}>
      <ControlledInput
        placeholder="Preparation Time"
        onChange={action("change")}
        defaultSelectValue="Seconds"
        icon="clock"
      >
        {options}
      </ControlledInput>
    </div>
  ))

  .add("Labeled + Icon", () => (
    <div style={{ width: "500px" }}>
      <ControlledInput
        placeholder="Preparation Time"
        onChange={action("change")}
        defaultSelectValue="Seconds"
        label="Prep Time"
        icon="clock"
      >
        {options}
      </ControlledInput>
    </div>
  ));
