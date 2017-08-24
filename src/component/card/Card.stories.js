import React from 'react'
import { storiesOf } from '@storybook/react'

import { BrowserRouter as Router } from 'react-router-dom'
import Card from './Card'

const stories = storiesOf('Card', module)

stories.add('Simple',
  () =>
    <Card
      heading="Simple"
      text="Fusce dapibus, tellus ac cursus commodo, tortor mauris."
    />
)

stories.add('Article',
  () =>
    <Card
      actionText="Action"
      actionUrl="http://example.com"
      centered
      className="additional-class"
      heading="Example Heading"
      imgAlt="A placeholder image"
      imgRatio="16:9"
      imgSrc="https://img.clock.co.uk/800x450"
      text="Fusce dapibus, tellus ac cursus commodo, tortor mauris."
    />
)

stories.add('Custom content',
  () =>
    <Card>
      <ul>
        <li>Custom content</li>
        <li>Passed as children</li>
      </ul>
    </Card>
)

stories.add('Overlay Link',
  () =>
    <Router>
      <Card
        heading="Overlay Link"
        imgSrc="https://img.clock.co.uk/800x450"
        overlayUrl="#overlay-link"
        actionText="Action"
        actionUrl="#action-link"
        >
        <p>Copy with <a href="#child-link">clickable link</a>.</p>
      </Card>
    </Router>
)
