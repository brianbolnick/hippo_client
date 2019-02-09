import React from "react";
import { storiesOf } from "@storybook/react";
import styled from "styled-components";

import { IconDish } from "./";

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

const iconList = [{ name: "IconDish", icon: IconDish }];

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
