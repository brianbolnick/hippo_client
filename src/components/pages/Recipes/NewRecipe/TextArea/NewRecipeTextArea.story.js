import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import Textarea from "./Textarea";

storiesOf("Textarea", module)
  .add("Default", () => (
    <div style={{ width: "550px" }}>
      <Textarea placeholder="Ingredients" onChange={action("change")} />
    </div>
  ))

  .add("Labeled", () => (
    <div style={{ width: "550px" }}>
      <Textarea
        placeholder="Ingredients"
        label="Ingredients"
        onChange={action("change")}
        defaultSelectValue="Seconds"
      />
    </div>
  ))

  .add("Icon", () => (
    <div style={{ width: "550px" }}>
      <Textarea
        placeholder="Ingredients"
        onChange={action("change")}
        defaultSelectValue="Seconds"
        icon="clock"
      />
    </div>
  ))

  .add("Labeled + Icon", () => (
    <div style={{ width: "550px" }}>
      <Textarea
        placeholder="Ingredients"
        onChange={action("change")}
        defaultSelectValue="Seconds"
        label="Ingredients"
        icon="clock"
      />
    </div>
  ));
