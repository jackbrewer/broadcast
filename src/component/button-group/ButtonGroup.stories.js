import React from 'react'
import { storiesOf } from '@storybook/react'

import ButtonGroup from './ButtonGroup'
import Button from '../button/Button'
import Dropdown from '../dropdown/Dropdown'
import Menu from '../menu/Menu'
import MenuItem from '../menu/MenuItem'

const stories = storiesOf('ButtonGroup', module)

stories.add('Three buttons',
  () =>
    <ButtonGroup>
      <Button>One</Button>
      <Button>Two</Button>
      <Button>Three</Button>
    </ButtonGroup>
)

stories.add('Two buttons',
  () =>
    <ButtonGroup>
      <Button>One</Button>
      <Button>Two</Button>
    </ButtonGroup>
)

stories.add('Single button',
  () =>
    <ButtonGroup>
      <Button>One</Button>
    </ButtonGroup>
)

stories.add('Dropdown as content',
  () =>
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

stories.add('Justified (Natural)',
  () =>
    <ButtonGroup modifiers={[ 'justified' ]}>
      <Button>One</Button>
      <Button>Two</Button>
      <Button>Three</Button>
      <Dropdown text="Four">
        <Menu>
          <MenuItem text="One" />
          <MenuItem text="Two" />
          <MenuItem text="Three" />
        </Menu>
      </Dropdown>
    </ButtonGroup>
)

stories.add('Justified (Even)',
  () =>
    <ButtonGroup modifiers={[ 'justified-even' ]}>
      <Button>One</Button>
      <Button>Two</Button>
      <Button>Three</Button>
      <Dropdown text="Four">
        <Menu>
          <MenuItem text="One" />
          <MenuItem text="Two" />
          <MenuItem text="Three" />
        </Menu>
      </Dropdown>
    </ButtonGroup>
)
