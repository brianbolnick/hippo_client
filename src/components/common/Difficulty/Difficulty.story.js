import React from "react";
import { storiesOf } from "@storybook/react";
import Difficulty from "./Difficulty";

storiesOf("Difficulty", module)
  .add("Easy", () => <Difficulty value={1} />)
  .add("Medium", () => <Difficulty value={2} />)
  .add("Difficult", () => <Difficulty value={3} />)
  .add("Custom Size", () => <Difficulty value={3} size="30px" />)
