import React from 'react'
import { storiesOf } from '@storybook/react'
import { BrowserRouter as Router } from 'react-router-dom'

import Dropdown from './Dropdown'
import Menu from '../menu/Menu'
import MenuItem from '../menu/MenuItem'
import MenuHeading from '../menu/MenuHeading'
import MenuDivider from '../menu/MenuDivider'

const stories = storiesOf('Dropdown', module)

stories.add('Default',
  () =>
    <Router>
      <Dropdown>
        <Menu>
          <MenuItem text="One - Link" href="#one" />
          <MenuItem text="Two - Disabled Link" href="#two" disabled />
          <MenuItem text="Three - onClick" onClick={() => console.log('clicked')} />
          <MenuDivider />
          <MenuHeading text="Heading" />
          <MenuItem text="Four" subText="Subtext here" />
        </Menu>
      </Dropdown>
    </Router>
)

stories.add('Custom button text',
  () =>
    <Router>
      <Dropdown text="Hello">
        <Menu>
          <MenuItem text="One - Link" href="#one" />
          <MenuItem text="Two - Disabled Link" href="#two" disabled />
          <MenuItem text="Three - onClick" onClick={() => console.log('clicked')} />
          <MenuDivider />
          <MenuHeading text="Heading" />
          <MenuItem text="Four" subText="Subtext here" />
        </Menu>
      </Dropdown>
    </Router>
)

stories.add('Custom icon',
  () =>
    <Router>
      <Dropdown iconType="kebab">
        <Menu>
          <MenuItem text="One - Link" href="#one" />
          <MenuItem text="Two - Disabled Link" href="#two" disabled />
          <MenuItem text="Three - onClick" onClick={() => console.log('clicked')} />
          <MenuDivider />
          <MenuHeading text="Heading" />
          <MenuItem text="Four" subText="Subtext here" />
        </Menu>
      </Dropdown>
    </Router>
)

stories.add('Max height',
  () =>
    <Router maxHeight={200}>
      <Dropdown icon="kebab">
        <Menu>
          <MenuItem text="One - Link" href="#one" />
          <MenuItem text="Two - Disabled Link" href="#two" disabled />
          <MenuItem text="Three - onClick" onClick={() => console.log('clicked')} />
          <MenuDivider />
          <MenuHeading text="Heading" />
          <MenuItem text="Four" subText="Subtext here" />
        </Menu>
      </Dropdown>
    </Router>
)
