import React from "react";
import { storiesOf } from "@storybook/react";
import Link from "./Link";
import { MemoryRouter } from "react-router";

storiesOf("Link", module)
  .addDecorator(story => (
    <MemoryRouter initialEntries={["/"]}>{story()}</MemoryRouter>
  ))
  .add("default", () => <Link to="/">Home</Link>);
