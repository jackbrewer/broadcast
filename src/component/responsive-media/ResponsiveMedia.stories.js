import React from 'react'
import { storiesOf } from '@storybook/react'

import ResponsiveMedia from './ResponsiveMedia'

const stories = storiesOf('ResponsiveMedia', module)

stories.add('Default',
  () =>
    <ResponsiveMedia ratio="16:9">
      <img src="http://img.clock.co.uk/800x450?text=16:9%20ratio" />
    </ResponsiveMedia>
)
