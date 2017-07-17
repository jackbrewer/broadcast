import React from 'react'
import { storiesOf } from '@storybook/react'
// import { withKnobs, text } from '@storybook/addon-knobs'

import ButtonGroup from './ButtonGroup'
import Button from '../button/Button'
import Dropdown from '../dropdown/Dropdown'
import Menu from '../menu/Menu'
import MenuItem from '../menu/MenuItem'

const stories = storiesOf('ButtonGroup', module)

// stories.addDecorator(withKnobs)

stories.addWithInfo(
  'Three buttons',
  () => (
    <ButtonGroup>
      <Button>One</Button>
      <Button>Two</Button>
      <Button>Three</Button>
    </ButtonGroup>
  )
)

stories.addWithInfo(
  'Two buttons',
  () => (
    <ButtonGroup>
      <Button>One</Button>
      <Button>Two</Button>
    </ButtonGroup>
  )
)

stories.addWithInfo(
  'Single button',
  () => (
    <ButtonGroup>
      <Button>One</Button>
    </ButtonGroup>
  )
)

stories.addWithInfo(
  'Dropdown as content',
  () => (
    <ButtonGroup>
      <Button>One</Button>
      <Dropdown>
        <Menu>
          <MenuItem text="One" />
          <MenuItem text="Two" />
          <MenuItem text="Three" />
        </Menu>
      </Dropdown>
    </ButtonGroup>
  )
)
