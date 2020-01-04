import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import ActionButton from './ActionButton';

const LIST = [
  {
    id: 0,
    title: 'Import URL',
    key: 'import',
    onClick: () => console.log('import')
  },
  {
    id: 1,
    title: 'Create',
    key: 'create',
    onClick: () => console.log('create')
  }
];

const ActionButtonStory = () => {
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
    <ActionButton
      placeholder="Fruit"
      onChange={item => handleChange(item)}
      actionName="New"
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
    <ActionButton
      placeholder="Fruit"
      onChange={item => handleChange(item)}
      items={list}
      defaultValue={5}
    />
  );
};

storiesOf('ActionButton', module)
  .add('Default', () => <ActionButtonStory />)
  .add('With Initial Value', () => <WithInitial />);
