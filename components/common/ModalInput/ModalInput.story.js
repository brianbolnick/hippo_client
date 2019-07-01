import React from "react";
import { storiesOf } from "@storybook/react";
import ModalInput from "./ModalInput";
import { action } from "@storybook/addon-actions";

storiesOf("Modal Input", module)
  .add("Default", () => (
    <div style={{ width: "300px" }}>
      <ModalInput
        type="text"
        placeholder="Email Address"
        onChange={action("change")}
      />
    </div>
  ))
  .add("Error", () => (
    <div style={{ width: "300px" }}>
      <ModalInput
        type="text"
        placeholder="Email Address"
        inputState="error"
        icon="envelope"
        onChange={action("change")}
      />
    </div>
  ))
  .add("Success", () => (
    <div style={{ width: "300px" }}>
      <ModalInput
        type="text"
        placeholder=""
        inputState="success"
        icon="envelope"
        onChange={action("change")}
      />
    </div>
  ))

  .add("Icon", () => (
    <div style={{ width: "300px" }}>
      <ModalInput
        type="text"
        placeholder="Email Address"
        onChange={action("change")}
        icon="envelope"
      />
    </div>
  ))
  .add("Label", () => (
    <div style={{ width: "300px" }}>
      <ModalInput
        type="text"
        placeholder="Email Address"
        onChange={action("change")}
        label="Email"
      />
    </div>
  ))
  .add("Label and Icon", () => (
    <div style={{ width: "300px" }}>
      <ModalInput
        type="text"
        placeholder="Email Address"
        onChange={action("change")}
        label="Email"
        icon="envelope"
      />
    </div>
  ));
