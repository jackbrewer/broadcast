import React from 'react'
import { storiesOf } from '@storybook/react'
// import { withKnobs, text } from '@storybook/addon-knobs'

import Tooltip from './Tooltip'

const stories = storiesOf('Tooltip', module)

// stories.addDecorator(withKnobs)

stories.addWithInfo(
  'Standard',
  () => (
    <div>
      <Tooltip
        text="Here is example content which goes on for quite a while"
        >
        <strong>One</strong>
      </Tooltip>

      <hr />

      <Tooltip
        text="Here is example content"
        >
        <p>Two</p>
      </Tooltip>

      <hr />

      <p>
        In a <Tooltip
          text="Here is example content"
          >
          sentence
        </Tooltip>
        .
      </p>

    </div>
  )
)

stories.addWithInfo(
  'Positions',
  () => (
    <div>
      <Tooltip text="Content">Default</Tooltip><hr />
      <Tooltip text="Content" valign="top" align="left">Top Left</Tooltip><hr />
      <Tooltip text="Content" valign="top" align="right">Top Right</Tooltip><hr />
      <Tooltip text="Content" valign="bottom" align="left">Bottom Left</Tooltip><hr />
      <Tooltip text="Content" valign="bottom" align="right">Bottom Right</Tooltip>
    </div>
  )
)
