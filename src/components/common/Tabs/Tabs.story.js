import React from 'react';
import { storiesOf } from '@storybook/react';
import Tab from './Tab';
import Tabs from './Tabs';
import TabPane from './TabPane';
import { action } from '@storybook/addon-actions';
import styled from 'styled-components/macro';
const StyledTab = styled.div`
  color: purple;
`;
storiesOf('Tabs', module).add('Default', () => (
  <Tabs defaultActiveTab="one" onTabChange={action('change')}>
    <Tab name="one">
      <StyledTab>one</StyledTab>
    </Tab>
    <Tab name="two">
      <StyledTab>two</StyledTab>
    </Tab>
    <TabPane name="one">Ruff</TabPane>
    <TabPane name="two">Meow</TabPane>
  </Tabs>
));
