import React from 'react'
import { storiesOf } from '@storybook/react'
import { text, number } from '@storybook/addon-knobs'

import Avatar from './Avatar'

const stories = storiesOf('Avatar', module)

stories.add('Name (Default)',
  () =>
    <Avatar name={text('name', 'Firstname Lastname')} />
)

stories.add('Name and custom size',
  () =>
    <Avatar
      name={text('name', 'Firstname Lastname')}
      size={number('size', 30)}
    />
)

stories.add('Image',
  () =>
    <Avatar
      name={text('name', 'Firstname Lastname')}
      src={text('src', 'https://img.clock.co.uk/50')}
    />
)

stories.add('Image and custom size',
  () =>
    <Avatar
      name={text('name', 'Firstname Lastname')}
      size={number('size', 100)}
      src={text('src', 'https://img.clock.co.uk/100')}
    />
)

stories.add('Modifier classNames',
  () =>
    <Avatar
      name="Firstname Lastname"
      modifiers={[ 'one', 'two' ]}
    />
)

stories.add('Bespoke className',
  () =>
    <Avatar
      name="Firstname Lastname"
      className={text('className', 'example-class')}
    />
)
