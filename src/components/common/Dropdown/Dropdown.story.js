import React from "react";
import { storiesOf } from "@storybook/react";
import Dropdown from "./Dropdown";
import { action } from "@storybook/addon-actions";

const list = [
  {
    id: 0,
    title: "Apple",
    selected: false,
    key: "fruit"
  },
  {
    id: 1,
    title: "Orange",
    selected: false,
    key: "fruit"
  },
  {
    id: 2,
    title: "Strawberry",
    selected: false,
    key: "fruit"
  }
];

const navList = [
  {
    title: "Home Page",
    path: "/home"
  },
  {
    title: "About Page",
    path: "/about"
  },
  {
    title: "Contact Page",
    path: "/contact"
  }
];

storiesOf("Dropdown", module)
  .add("Default", () => (
    <Dropdown
      placeholder="Email Address"
      onChange={action("change")}
      list={list}
    />
  ))
  .add("Default Value", () => (
    <Dropdown defaultValue="TesT" onChange={action("change")} list={list} />
  ))

  .add("Navbar", () => <Dropdown nav placeholder="Recipes" list={navList} />);
