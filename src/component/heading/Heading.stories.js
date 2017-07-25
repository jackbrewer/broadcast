import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, text, number } from '@storybook/addon-knobs'

import Heading from './Heading'

const stories = storiesOf('Heading', module)

stories.addDecorator(withKnobs)

stories.addWithInfo(
  'Default (h1)',
  () => <Heading>{text('name', 'Heading')}</Heading>
)

stories.addWithInfo(
  'Sizes',
  () => (
    <div>
      <Heading size="huge">{text('name', 'Heading')}</Heading>
      <Heading>{text('name', 'Heading')}</Heading>
      <Heading size="small">{text('name', 'Heading')}</Heading>
    </div>
  )
)

stories.addWithInfo(
  'Levels (h1-h6)',
  () => (
    <div>
      <Heading level={1}>{text('name', 'Heading')}</Heading>
      <Heading level={2}>{text('name', 'Heading')}</Heading>
      <Heading level={3}>{text('name', 'Heading')}</Heading>
      <Heading level={4}>{text('name', 'Heading')}</Heading>
      <Heading level={5}>{text('name', 'Heading')}</Heading>
      <Heading level={6}>{text('name', 'Heading')}</Heading>
    </div>
  )
)
