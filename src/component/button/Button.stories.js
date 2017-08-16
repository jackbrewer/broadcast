import React from 'react'
import { storiesOf } from '@storybook/react'
import { text } from '@storybook/addon-knobs'

import { BrowserRouter as Router } from 'react-router-dom'
import Button from './Button'

const stories = storiesOf('Button', module)

stories.add('Default (<button>)',
  () =>
    <Button>{text('name', 'Button Text')}</Button>
)

stories.add('Submit button (<button type="submit">)',
  () =>
    <Button type="submit">{text('name', 'Button Text')}</Button>
)

stories.add('Anchor (<a>)',
  () =>
    <Button href="http://example.com">{text('name', 'Button Text')}</Button>
)

stories.add('Link (React Router <Link>)',
  () =>
    <Router><Button href="#">{text('name', 'Button Text')}</Button></Router>
)

stories.add('Disabled',
  () =>
    <Button disabled>{text('name', 'Button Text')}</Button>
)

stories.add('Target',
  () =>
    <Button href="http://example.com" target="_blank">{text('name', 'Button Text')}</Button>
)

stories.add('onClick',
  () =>
    <Button onClick={function (e) { e.target.textContent = 'Clicked!' }}>{text('name', 'Button Text')}</Button>
)

stories.add('Modifier classNames',
  () =>
    <Button
      modifiers={[ 'one', 'two' ]}
      >
      {text('name', 'Button Text')}
    </Button>
)

stories.add('Bespoke className',
  () =>
    <Button
      className={text('className', 'example-class')}
      >
      {text('name', 'Button Text')}
    </Button>
)
