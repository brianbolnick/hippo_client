import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import AddableInput from "./AddableInput";

storiesOf("AddableInput", module)
  .add("Default", () => (
    <div style={{ width: "550px" }}>
      <AddableInput placeholder="Ingredients" onAddClick={action("click")} />
    </div>
  ))

  .add("Labeled", () => (
    <div style={{ width: "550px" }}>
      <AddableInput
        placeholder="Ingredients"
        label="Ingredients"
        onAddClick={action("click")}
        defaultSelectValue="Seconds"
      />
    </div>
  ))

  .add("Icon", () => (
    <div style={{ width: "550px" }}>
      <AddableInput
        placeholder="Ingredients"
        onAddClick={action("click")}
        defaultSelectValue="Seconds"
        icon="clock"
      />
    </div>
  ))

  .add("Labeled + Icon", () => (
    <div style={{ width: "550px" }}>
      <AddableInput
        placeholder="Ingredients"
        onAddClick={action("click")}
        defaultSelectValue="Seconds"
        label="Ingredients"
        icon="clock"
      />
    </div>
  ));
