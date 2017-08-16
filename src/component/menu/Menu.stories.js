import React from 'react'
import { storiesOf } from '@storybook/react'
import { BrowserRouter as Router } from 'react-router-dom'

import Menu from './Menu'
import MenuItem from './MenuItem'
import MenuHeading from './MenuHeading'
import MenuDivider from './MenuDivider'

const stories = storiesOf('Menu', module)

stories.add('Default',
  () =>
    <Router>
      <Menu bordered>
        <MenuItem text="One - Link" href="#one" />
        <MenuItem text="Two - Disabled Link" href="#two" disabled />
        <MenuItem text="Three - onClick" onClick={() => console.log('clicked')} />
        <MenuDivider />
        <MenuHeading text="Heading" />
        <MenuItem text="Four" subText="Subtext here" />
        <MenuItem text="Five - selected" selected />
      </Menu>
    </Router>
)
