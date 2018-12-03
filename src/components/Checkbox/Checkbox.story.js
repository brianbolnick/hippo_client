import React from "react";
import { storiesOf } from "@storybook/react";
import Checkbox from "./Checkbox";

storiesOf("Checkbox", module)
  .add("default", () => <Checkbox onChange={() => console.log("changed")} />)
  .add("disabled", () => (
    <Checkbox disabled onChange={() => console.log("changed")} />
  ))
  .add("With Label", () => {
    return (
      <Checkbox value="testing" onChange={e => console.log(e.target.value)}>
        I agree
      </Checkbox>
    );
  });
