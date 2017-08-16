import React from 'react'
import { storiesOf } from '@storybook/react'
import { text } from '@storybook/addon-knobs'

import Heading from './Heading'

const stories = storiesOf('Heading', module)

stories.add('Default (h1)',
  () =>
    <Heading>{text('name', 'Heading')}</Heading>
)

stories.add('Sizes',
  () =>
    <div>
      <Heading size="huge">{text('name', 'Heading')}</Heading>
      <Heading>{text('name', 'Heading')}</Heading>
      <Heading size="small">{text('name', 'Heading')}</Heading>
    </div>
)

stories.add('Levels (h1-h6)',
  () =>
    <div>
      <Heading level={1}>{text('name', 'Heading')}</Heading>
      <Heading level={2}>{text('name', 'Heading')}</Heading>
      <Heading level={3}>{text('name', 'Heading')}</Heading>
      <Heading level={4}>{text('name', 'Heading')}</Heading>
      <Heading level={5}>{text('name', 'Heading')}</Heading>
      <Heading level={6}>{text('name', 'Heading')}</Heading>
    </div>
)
