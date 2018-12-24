import React from "react";
import { storiesOf } from "@storybook/react";
import FileInput from "./FileInput";

storiesOf("File Input", module)
  .add("default", () => <FileInput onChange={() => console.log("change")} />)
  .add("With attached file", () => (
    <FileInput
      fileName="some-file-name.png"
      onChange={() => console.log("change")}
    />
  ));
