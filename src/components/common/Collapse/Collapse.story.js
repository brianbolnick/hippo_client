import React from "react";
import { storiesOf } from "@storybook/react";
import Collapse from "./Collapse";

storiesOf("Collapse", module)
	.add("Default", () => <div style={{width: "200px"}}><Collapse label="Open Me" >Something</Collapse></div>)
