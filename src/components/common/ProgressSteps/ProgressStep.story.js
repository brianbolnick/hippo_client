import React from "react";
import { storiesOf } from "@storybook/react";
import ProgressSteps from "./ProgressSteps";
import { colors } from "styles/css-variables";

storiesOf("ProgressSteps", module)
  .add("5 Steps", () => (
    <div>
      <ProgressSteps step={3} totalSteps={5} />
    </div>
  ))
  .add("10 Steps", () => (
    <div>
      <ProgressSteps step={7} totalSteps={10} />
    </div>
  ))
  .add("Custom Color", () => (
    <div>
      <ProgressSteps step={2} totalSteps={6} color={colors.blue} />
    </div>
  ))

  .add("With Title", () => (
    <div>
      <ProgressSteps step={3} totalSteps={5} title="Progress" />
    </div>
  ));
