import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import Icon from "./Icon";
import styled from "styled-components";
import { varela, colors } from "styles/css-variables";
const shadedIconList = ["american", "asian"];

const iconList = [
  "dish",
  "mixer",
  "share",
  "trash",
  "addRecipe",
  "book",
  "checkCircle",
  "checkOpenCircle",
  "chevronDown",
  "chevronLeft",
  "chevronRight",
  "chevronUp",
  "clock",
  "clockAlarm",
  "close",
  "closeOpenCircle",
  "cog",
  "edit",
  "envelope",
  "filter",
  "heartbeat",
  "home",
  "info",
  "lock",
  "menu",
  "message",
  "new",
  "plus",
  "profile",
  "search",
  "signin",
  "star",
  "tags",
  "unlock",
  "upload",
  "user",
  "users",
  "utensils",
  "american",
  "asian"
];

const IconLabel = styled.span`
  margin: 0 0 10px 0;
  font-family: ${varela};
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
const shadedIcons = shadedIconList.map(icon => {
  return (
    <IconWrapper>
      <Icon
        name={icon}
        color={colors.red}
        size="40px"
        onClick={action("click")}
      />
      <IconLabel>{icon}</IconLabel>
    </IconWrapper>
  );
});

const IconList = () => <StyledContainer>{icons}</StyledContainer>;

const ShadedIconList = () => <StyledContainer>{shadedIcons}</StyledContainer>;

storiesOf("Icon", module)
  .add("default", () => <IconList />)
  .add("colored", () => (
    <Icon name="home" onClick={action("click")} color={colors.red} />
  ))
  .add("colored shade", () => <ShadedIconList />);
