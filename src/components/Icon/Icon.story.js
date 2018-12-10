import React from "react";
import { storiesOf } from "@storybook/react";
import Icon from "./Icon";
import styled from "styled-components";
import { varela, colors } from "../../styles/css-variables";

const iconList = [
  "addRecipe",
  "checkOpenCircle",
  "chevronDown",
  "chevronLeft",
  "chevronRight",
  "chevronUp",
  "clock",
  "clockAlarm",
  "close",
  "closeOpenCircle",
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
  "profile",
  "search",
  "signin",
  "star",
  "tags",
  "unlock",
  "user",
  "users",
  "utensils"
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
      <Icon name={icon} />
      <IconLabel>{icon}</IconLabel>
    </IconWrapper>
  );
});

const IconList = () => <StyledContainer>{icons}</StyledContainer>;

storiesOf("Icon", module)
  .add("default", () => <IconList />)
  .add("colored", () => <Icon name="home" color={colors.green} />)
  .add("filter", () => (
    <Icon
      name="home"
      filter
      color="#02C285"
      onClick={() => console.log("clicked!")}
    />
  ));
