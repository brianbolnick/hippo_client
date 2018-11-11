import React from "react";
import { storiesOf } from "@storybook/react";
import Input from "./Input";

storiesOf("Input", module)
  .add("Default", () => (
    <div style={{ width: "300px" }}>
      <Input
        type="text"
        placeholder="Email Address"
        onChange={() => console.log("changing")}
      />
    </div>
  ))
  .add("Icon", () => (
    <div style={{ width: "300px" }}>
      <Input
        type="text"
        placeholder="Email Address"
        onChange={() => console.log("changing")}
        icon="envelope"
      />
    </div>
  ))
  .add("Label", () => (
    <div style={{ width: "300px" }}>
      <Input
        type="text"
        placeholder="Email Address"
        onChange={() => console.log("changing")}
        label="Email"
      />
    </div>
  ))
  .add("Label and Icon", () => (
    <div style={{ width: "300px" }}>
      <Input
        type="text"
        placeholder="Email Address"
        onChange={() => console.log("changing")}
        label="Email"
        icon="envelope"
      />
    </div>
  ));
