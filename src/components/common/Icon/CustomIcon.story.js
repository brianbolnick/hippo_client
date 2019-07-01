import React from "react";
import { storiesOf } from "@storybook/react";
import styled from "styled-components";

import {
  IconDish,
  IconClock,
  IconCog,
  IconEdit,
  IconHome,
  IconMixer,
  IconMessage,
  IconShare,
  IconTrash,
	IconUser,
	IconFries,
	IconFire
} from "./";

const Grid = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
`;

const Item = styled.div`
  padding: 36px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Name = styled.div`
  padding-top: 16px;
`;

const iconList = [
  { name: "IconDish", icon: IconDish },
  { name: "IconClock", icon: IconClock },
  { name: "IconCog", icon: IconCog },
  { name: "IconEdit", icon: IconEdit },
  { name: "IconHome", icon: IconHome },
  { name: "IconMixer", icon: IconMixer },
  { name: "IconMessage", icon: IconMessage },
  { name: "IconShare", icon: IconShare },
  { name: "IconTrash", icon: IconTrash },
  { name: "IconUser", icon: IconUser },
  { name: "IconFries", icon: IconFries },
  { name: "IconFire", icon: IconFire },
];

function IconsGrid() {
  return (
    <Grid>
      {iconList.map(({ icon: Icon, props, name }, index) => (
        <Item key={index}>
          <Icon size="50" {...props} />
          <Name>{name}</Name>
        </Item>
      ))}
    </Grid>
  );
}

storiesOf("Custom Icon", module).add("Icons", () => <IconsGrid />);
