import React, { useState } from "react";
import { storiesOf } from "@storybook/react";
import Dropdown from "./Dropdown";

const LIST = [
  {
    id: 0,
    title: "Apple",
    selected: false,
    key: "fruit"
  },
  {
    id: 1,
    title: "Orange",
    selected: true,
    key: "fruit"
  },
  {
    id: 2,
    title: "Strawberry",
    selected: false,
    key: "fruit"
  },
  {
    id: 3,
    title: "Blueberry",
    selected: false,
    key: "fruit"
  },
  {
    id: 4,
    title: "Raspberry",
    selected: false,
    key: "fruit"
  },
  {
    id: 5,
    title: "Watermelon",
    selected: false,
    key: "fruit"
  }
];

const DropDown2Story = () => {
  const [list, setList] = useState(LIST);

  const handleChange = item => {
    const newList = list.map(x => {
      return {
        ...x,
        selected: x.id === item.id
      };
    });
    setList(newList);
  };

  return (
    <Dropdown
      placeholder="Fruit"
      onChange={item => handleChange(item)}
      items={list}
    />
  );
};

const WithInitial = () => {
  const [list, setList] = useState(LIST);

  const handleChange = item => {
    const newList = list.map(x => {
      return {
        ...x,
        selected: x.id === item.id
      };
    });
    setList(newList);
  };

  return (
    <Dropdown
      placeholder="Fruit"
      onChange={item => handleChange(item)}
      items={list}
      defaultValue={5}
    />
  );
};

storiesOf("Dropdown2", module)
  .add("Default", () => <DropDown2Story />)
  .add("With Initial Value", () => <WithInitial />);
