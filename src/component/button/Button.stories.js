import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, text } from '@storybook/addon-knobs'

import { BrowserRouter as Router } from 'react-router-dom'
import Button from './Button'

const stories = storiesOf('Button', module)

stories.addDecorator(withKnobs)

stories.addWithInfo(
  'Default (<button>)',
  () => <Button>{text('name', 'Button Text')}</Button>
)

stories.addWithInfo(
  'Submit button (<button type="submit">)',
  () => <Button type="submit">{text('name', 'Button Text')}</Button>
)

stories.addWithInfo(
  'Anchor (<a>)',
  () => <Button href="http://example.com">{text('name', 'Button Text')}</Button>
)

stories.addWithInfo(
  'Link (React Router <Link>)',
  () => <Router><Button href="#">{text('name', 'Button Text')}</Button></Router>
)

stories.addWithInfo(
  'Disabled',
  () => <Button disabled>{text('name', 'Button Text')}</Button>
)

stories.addWithInfo(
  'Target',
  () => <Button href="http://example.com" target="_blank">{text('name', 'Button Text')}</Button>
)

stories.addWithInfo(
  'onClick',
  () => <Button onClick={function (e) { e.target.textContent = 'Clicked!' }}>{text('name', 'Button Text')}</Button>
)

stories.addWithInfo(
  'Modifier classNames',
  () => (
    <Button
      modifiers={[ 'one', 'two' ]}
      >
      {text('name', 'Button Text')}
    </Button>
  )
)

stories.addWithInfo(
  'Bespoke className',
  () => (
    <Button
      className={text('className', 'example-class')}
      >
      {text('name', 'Button Text')}
    </Button>
  )
)
