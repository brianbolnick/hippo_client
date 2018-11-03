import React from 'react';
import { storiesOf } from '@storybook/react';
import Input  from './Input';

storiesOf('Input', module)
	.add('Default', () => (
		<Input type="text" placeholder="Email Address" onChange={() => console.log("changing")} />
	))

