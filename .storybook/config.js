import React from 'react'
import { configure, addDecorator, setAddon } from '@storybook/react'

import { setDefaults, withInfo } from '@storybook/addon-info';
import { setOptions } from '@storybook/addon-options';
import { withKnobs } from '@storybook/addon-knobs'

import '../src/asset/stylus/index.styl'

setOptions({
  name: 'Picks Backline',
  url: '/'
});

setDefaults({
  // inline: true,
  maxPropsIntoLine: 1,
  // maxPropObjectKeys: 10,
  // maxPropArrayLength: 10,
  // maxPropStringLength: 100,
})
// setAddon(infoAddon)

addDecorator((story, context) => withInfo()(story)(context))

addDecorator(withKnobs)

addDecorator(story => (
  <div style={{padding: '20px'}}>
    {story()}
  </div>
));

const req = require.context('../src/component', true, /\.stories\.js$/)

function loadStories() {
  req.keys().forEach((filename) => req(filename))
}

configure(loadStories, module)
