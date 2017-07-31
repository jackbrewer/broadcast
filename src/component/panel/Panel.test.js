import React from 'react'
import assert from 'assert'
import { shallow } from 'enzyme'

import Panel from './Panel'

describe('Component: Panel', function () {
  it('should output expected default markup', function () {
    const wrapper = shallow(<Panel>Default Text</Panel>)
    assert.equal(wrapper.type(), 'div', 'Panel element type should default to `div`')
    assert.equal(wrapper.hasClass('panel'), true, 'Panel should have a `panel` class by default')
    assert.equal(wrapper.text(), 'Default Text')
  })

  it('should output expected default markup', function () {
    const wrapper = shallow(<Panel heading="Example Heading">Default Text</Panel>)
    assert.equal(wrapper.find('.panel__heading').length, 1)
    assert.equal(wrapper.find('.panel__heading').text(), 'Example Heading')
  })
})
