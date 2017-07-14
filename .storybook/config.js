import React from 'react'
import { configure, addDecorator, setAddon } from '@storybook/react'

import infoAddon, { setDefaults } from '@storybook/addon-info';
import { setOptions } from '@storybook/addon-options';

import '../src/asset/stylus/index.styl'

setOptions({
  name: 'Picks Backline',
  url: '/',
  downPanelInRight: true
});

setDefaults({
  // inline: true,
  maxPropsIntoLine: 1,
  // maxPropObjectKeys: 10,
  // maxPropArrayLength: 10,
  // maxPropStringLength: 100,
})
setAddon(infoAddon)

addDecorator(story => (
  <div style={{padding: '50px'}}>
    {story()}
  </div>
));

const req = require.context('../src/component', true, /\.stories\.js$/)

function loadStories() {
  req.keys().forEach((filename) => req(filename))
}

configure(loadStories, module)
