import React from "react";
import { storiesOf } from "@storybook/react";
import Button from "./Button";

storiesOf("Button", module)
  .add("Default", () => <Button>Primary</Button>)
  .add("Secondary", () => <Button secondary>Secondary</Button>)
  .add("Tertiary", () => <Button tertiary>Tertiary</Button>)
  .add("Loading", () => <Button loading>Secondary</Button>)
  .add("As Link", () => <Button asLink>Button Link</Button>)
  .add("Fixed CTA", () => <Button fixed icon='addRecipe'>Do something special!</Button>);
