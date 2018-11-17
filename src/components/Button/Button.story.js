import React from "react";
import { storiesOf } from "@storybook/react";
import Button from "./Button";

storiesOf("Button", module)
  .add("Default", () => <Button>Primary</Button>)
  .add("Secondary", () => <Button secondary>Secondary</Button>)

  .add("As Link", () => <Button asLink>Button Link</Button>);
