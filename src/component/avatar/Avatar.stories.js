import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, text, number } from '@storybook/addon-knobs'

import Avatar from './Avatar'

const stories = storiesOf('Avatar', module)

stories.addDecorator(withKnobs)

stories.addWithInfo(
  'Name (Default)',
  () => <Avatar name={text('name', 'Firstname Lastname')} />
)

stories.addWithInfo(
  'Name and custom size',
  () => (
    <Avatar
      name={text('name', 'Firstname Lastname')}
      size={number('size', 30)}
    />
  )
)

stories.addWithInfo(
  'Image',
  () => (
    <Avatar
      name={text('name', 'Firstname Lastname')}
      src={text('src', 'https://img.clock.co.uk/50')}
    />
  )
)

stories.addWithInfo(
  'Image and custom size',
  () => (
    <Avatar
      name={text('name', 'Firstname Lastname')}
      size={number('size', 100)}
      src={text('src', 'https://img.clock.co.uk/100')}
    />
  )
)

stories.addWithInfo(
  'Modifier classNames',
  () => (
    <Avatar
      name="Firstname Lastname"
      modifiers={[ 'one', 'two' ]}
    />
  )
)

stories.addWithInfo(
  'Bespoke className',
  () => (
    <Avatar
      name="Firstname Lastname"
      className={text('className', 'example-class')}
    />
  )
)
