import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import Icon from "./Icon";
import styled from "styled-components";
import { avenir, colors } from "styles/css-variables";

const iconList = [
  "addRecipe",
  "american",
  "asian",
  "book",
  "bread",
  "breakfast",
  "camera",
  "checkCircle",
  "checkOpenCircle",
  "cheese",
  "chevronDown",
  "chevronLeft",
  "chevronRight",
  "chevronUp",
  "clock",
  "clockAlarm",
  "close",
  "closeOpenCircle",
  "cog",
  "dessert",
  "dish",
  "drink",
  "edit",
  "envelope",
  "family",
  "filter",
  "fire",
  "fries",
  "fruit",
  "heartbeat",
  "home",
  "info",
  "italian",
  "list",
  "lock",
  "main",
  "menu",
  "message",
  "mexican",
  "mixer",
  "new",
  "plus",
  "profile",
  "salad",
  "search",
  "share",
  "signin",
  "star",
  "tags",
  "trash",
  "unlock",
  "upload",
  "user",
  "users",
  "utensils"
];
const IconLabel = styled.span`
  margin: 0 0 10px 0;
  font-family: ${avenir};
`;

const StyledContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-flow: row wrap;
`;

const IconWrapper = styled.div`
  width: 20%;
  text-align: center;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
`;

const icons = iconList.map(icon => {
  return (
    <IconWrapper>
      <Icon name={icon} onClick={action("click")} />
      <IconLabel>{icon}</IconLabel>
    </IconWrapper>
  );
});

const IconList = () => <StyledContainer>{icons}</StyledContainer>;

storiesOf("Icon", module)
  .add("default", () => <IconList />)
  .add("colored", () => (
    <Icon name="home" onClick={action("click")} color={colors.red} />
  ));
