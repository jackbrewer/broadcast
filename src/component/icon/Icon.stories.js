import React from 'react'
import { storiesOf } from '@storybook/react'

import Icon from './Icon'
import { svgs } from '../svg/Svg'

const stories = storiesOf('Icon', module)

stories.add('Natural SVGs',
  () =>
    Object.keys(svgs).map((svg, i) => (
      <span style={{ margin: '5px' }} key={`icon-${i}`}>
        <Icon type={svg} />
      </span>
    ))
)

stories.add('Uniform SVGs',
  () =>
    <div>
      <style>{'path,circle{fill:#333;}.icon{width:24px !important;height:24px !important;line-height:24px !important;}'}</style>
      {Object.keys(svgs).map((svg, i) => (
        <span style={{ margin: '5px' }} key={`icon-${i}`}>
          <Icon type={svg} />
        </span>
      ))}
    </div>
)
