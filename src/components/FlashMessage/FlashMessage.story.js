import React from "react";
import { storiesOf } from "@storybook/react";
import FlashMessage from "./FlashMessage";

storiesOf("Flash Message", module)
  .add("Info", () => <FlashMessage>This is some information!</FlashMessage>)
  .add("Closeable", () => (
    <FlashMessage closeable>This is some information!</FlashMessage>
  ))
  .add("Closeable With Error", () => (
    <FlashMessage closeable error>
      This is some information!
    </FlashMessage>
  ))

  .add("Error", () => (
    <FlashMessage error>This is some information!</FlashMessage>
  ));
