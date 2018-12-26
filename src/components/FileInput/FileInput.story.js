import React from "react";
import { storiesOf } from "@storybook/react";
import FileInput from "./FileInput";
import { action } from "@storybook/addon-actions";

storiesOf("File Input", module)
  .add("default", () => <FileInput onChange={action("change")} />)
  .add("With attached file", () => (
    <FileInput fileName="some-file-name.png" onChange={action("change")} />
  ));
