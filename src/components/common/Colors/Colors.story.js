import React from 'react';
import { storiesOf } from '@storybook/react';
import styled from 'styled-components/macro';
import { colors } from 'styles/css-variables';
import _ from 'lodash';

const ColorContainer = styled.div`
  width: 150px;
  height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 12px;
  flex-direction: column;
  background: ${({ color }) => color};
`;

const ColorLabel = styled.div`
  padding: 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
`;

const Color = ({ color, name }) => {
  return (
    <ColorContainer color={color}>
      <ColorLabel>
        <div>{name}</div>
        <div>{color}</div>
      </ColorLabel>
    </ColorContainer>
  );
};

storiesOf('Colors', module).add('Colors', () => {
  const colorsList = _.pickBy(
    colors,
    (color, name) => typeof color === 'string'
  );
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      {_.map(colorsList, (color, name) => {
        return <Color color={color} name={name} />;
      })}
    </div>
  );
});
