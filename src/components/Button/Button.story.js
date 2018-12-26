import React from "react";
import { storiesOf } from "@storybook/react";
import Button from "./Button";
import { action } from "@storybook/addon-actions";

storiesOf("Button", module)
  .add("Default", () => <Button onClick={action("click")}>Primary</Button>)
  .add("Secondary", () => (
    <Button onClick={action("click")} secondary>
      Secondary
    </Button>
  ))
  .add("Tertiary", () => (
    <Button onClick={action("click")} tertiary>
      Tertiary
    </Button>
  ))
  .add("Loading", () => <Button loading>Secondary</Button>)
  .add("As Link", () => <Button asLink>Button Link</Button>)
  .add("Fixed CTA", () => (
    <Button onClick={action("click")} fixed icon="addRecipe">
      Do something special!
    </Button>
  ));
