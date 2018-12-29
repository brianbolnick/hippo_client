import React from 'react';
import { storiesOf } from '@storybook/react';
import Popover from './Popover'

const target = <button>Hover me</button>

storiesOf('Popover', module)
    .add('Default', () => {
        return (
            <div>
                <Popover target={target} >
                    This is some text
                </Popover>
            </div>
        )
    })