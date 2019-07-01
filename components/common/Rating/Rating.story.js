import React from "react";
import { storiesOf } from "@storybook/react";
import Rating from "./Rating";

storiesOf("Rating", module)
  .add("5 Star", () => <Rating value={5} />)
  .add("2.5 Star", () => <Rating value={2.5} />)
  .add("2.2 Star", () => <Rating value={2.2} />)
  .add("1 Star", () => <Rating value={1} />)
  .add("Rateable", () => <Rating value={1} rateable />);
