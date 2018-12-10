import React from "react";
import { storiesOf } from "@storybook/react";
import FlashMessage from "./FlashMessage";

storiesOf("Flash Message", module)
  .add("Info", () => (
    <FlashMessage visible>This is some information!</FlashMessage>
  ))
  .add("Closeable", () => (
    <FlashMessage closeable visible>
      This is some information!
    </FlashMessage>
  ))
  .add("Closeable With Error", () => (
    <FlashMessage closeable error visible>
      This is some information!
    </FlashMessage>
  ))

  .add("Error", () => (
    <FlashMessage error visible>
      This is some information!
    </FlashMessage>
  ));
