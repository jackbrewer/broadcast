import React from 'react'
import { storiesOf } from '@storybook/react'
import { number } from '@storybook/addon-knobs'

import ImagePreview from './ImagePreview'

const stories = storiesOf('ImagePreview', module)

stories.add('Default',
  () =>
    <div style={{ height: '200px', width: '200px' }}>
      <ImagePreview
        src={`http://img.clock.co.uk/${number('width', 200)}x${number('height', 100)}`}
      />
    </div>
)

stories.add('Cover',
  () =>
    <div style={{ height: '200px', width: '200px' }}>
      <ImagePreview
        cover
        src={`http://img.clock.co.uk/${number('width', 200)}x${number('height', 100)}`}
      />
    </div>
)
