import React from "react";
import { storiesOf } from "@storybook/react";
import Modal from "./Modal";
import Button from "../Button/Button";
import styled from "styled-components";

const Content = styled.div`
  background: white;
  width: 100%;
  height: 100%;
  padding: 50px;
  border-radius: 3px;
  font-weight: 300;
  text-align: center;
`;

storiesOf("Modal", module).add("default", () => (
  <Modal target={<Button> Open Modal </Button>}>
    <Content> hello </Content>
  </Modal>
));
