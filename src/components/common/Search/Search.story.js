import React from "react";
import { storiesOf } from "@storybook/react";
import Search from "./Search";
import { action } from "@storybook/addon-actions";

storiesOf("Search", module)
  .add("Default", () => (
    <div style={{ width: "300px" }}>
      <Search
        type="text"
        placeholder="Email Address"
        onChange={action("change")}
      />
    </div>
  ))

