import React from "react";
import { storiesOf } from "@storybook/react";
import Anchor from "./Anchor";

storiesOf("Anchor", module).add("default", () => (
  <Anchor href="//google.com" target="_blank">
    Google
  </Anchor>
));
