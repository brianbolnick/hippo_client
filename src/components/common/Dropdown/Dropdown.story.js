import React from "react";
import { storiesOf } from "@storybook/react";
import Dropdown from "./Dropdown";
import { action } from "@storybook/addon-actions";


const list = [
	    {
				      id: 0,
				      title: 'Apple',
				      selected: false,
				      key: 'fruit'
				    },
	    {
				      id: 1,
				      title: 'Orange',
				      selected: false,
				      key: 'fruit'
				    },
	    {
				      id: 2,
				      title: 'Strawberry',
				      selected: false,
				      key: 'fruit'
				    }
	  ]
storiesOf("Dropdown", module)
  .add("Default", () => (
		<Dropdown
			placeholder="Email Address"
			onChange={action("change")}
		list={list}
		/>
  ))

