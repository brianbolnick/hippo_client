import React from "react";
import { storiesOf } from "@storybook/react";
import Icon from "./Icon";
import styled from "styled-components";
import { openSans, colors } from "../../styles/css-variables";

const iconList = [
  "chevronDown",
  "chevronLeft",
  "chevronRight",
  "chevronUp",
  "edit",
  "envelope",
  "filter",
  "home",
  "info",
  "message",
  "new",
  "profile",
  "search",
  "signin",
  "user",
  "users",
  "unlock",
  "lock",
  "checkOpenCircle",
  "closeOpenCircle",
  "menu",
  "utensils"
];

const IconLabel = styled.span`
  margin: 0 0 10px 0;
  font-family: ${openSans};
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
