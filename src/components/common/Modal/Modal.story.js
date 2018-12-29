import React from "react";
import { storiesOf } from "@storybook/react";
import Modal from "./Modal";
import Button from "components/common/Button/Button";

storiesOf("Modal", module).add("default", () => (
  <Modal target={<Button> Open Modal </Button>}>Put what you want here!</Modal>
));
