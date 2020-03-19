import React from 'react';
import { storiesOf } from '@storybook/react';
import Button from './Button';
import { action } from '@storybook/addon-actions';

storiesOf('Button', module)
  .add('Default', () => <Button onClick={action('click')}>Primary</Button>)
  .add('Disabled', () => (
    <Button disabled onClick={action('click')}>
      Disabled
    </Button>
  ))
  .add('Secondary', () => (
    <Button onClick={action('click')} secondary>
      Secondary
    </Button>
  ))
  .add('Small w/ With Icon', () => (
    <Button small secondary onClick={action('click')} icon="list">
      Shopping List
    </Button>
  ))
  .add('Loading', () => <Button loading>Secondary</Button>)
  .add('As Link', () => <Button asLink>Button Link</Button>)
  .add('Fixed CTA', () => (
    <Button onClick={action('click')} fixed icon="addRecipe">
      Do something special!
    </Button>
  ));
