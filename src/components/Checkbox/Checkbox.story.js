import React from "react";
import { storiesOf } from "@storybook/react";
import Checkbox from "./Checkbox";
import { action } from "@storybook/addon-actions";

storiesOf("Checkbox", module)
  .add("default", () => <Checkbox onChange={action("change")} />)
  .add("disabled", () => <Checkbox disabled onChange={action("change")} />)
  .add("With Label", () => {
    return (
      <Checkbox value="testing" onChange={action("change")}>
        I agree
      </Checkbox>
    );
  });
