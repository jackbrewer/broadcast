import React from 'react'
import assert from 'assert'
import { shallow } from 'enzyme'

import Avatar from './Avatar'

const requiredProps = () => ({
  name: 'Firstname Lastname'
})

describe('Component: Avatar', function () {
  it('should error without expected default props', function () {
    const originalError = console.error
    console.error = message => { throw new Error(message) }
    assert.throws(() => shallow(<Avatar />), Error)
    console.error = originalError
  })

  it('should return null with blank name passed', function () {
    const wrapper = shallow(<Avatar name="" />)
    assert.equal(wrapper.type(), null)
  })

  it('should output expected default attributes', function () {
    const wrapper = shallow(<Avatar {...requiredProps()} />)
    assert.equal(wrapper.type(), 'div')
    assert.equal(wrapper.text(), 'FL')
    assert.equal(wrapper.prop('className'), 'avatar')
    assert.deepEqual(wrapper.prop('style'), { 'fontSize': 23, 'height': 50, 'lineHeight': '50px', 'width': 50 })
  })

  it('should add bespoke class(es) if passed', function () {
    const wrapper = shallow(<Avatar {...requiredProps()}
      className="bespoke-class"
    />)
    assert.equal(wrapper.prop('className'), 'avatar bespoke-class')
    wrapper.setProps({ className: 'bespoke-one bespoke-two' })
    assert.equal(wrapper.prop('className'), 'avatar bespoke-one bespoke-two')
  })

  it('should format name into initials with expected inline styles', function () {
    const wrapper = shallow(<Avatar
      name="Firstname"
    />)
    assert.equal(wrapper.text(), 'F')
    assert.deepEqual(wrapper.prop('style').fontSize, 30)
    wrapper.setProps({ name: 'Firstname Lastname' })
    assert.equal(wrapper.text(), 'FL')
    assert.deepEqual(wrapper.prop('style').fontSize, 23)
    wrapper.setProps({ name: 'Firstname Double-Barreled' })
    assert.equal(wrapper.text(), 'FDB')
    assert.deepEqual(wrapper.prop('style').fontSize, 15)
  })

  it('should display at a custom size if supplied', function () {
    const wrapper = shallow(<Avatar {...requiredProps()}
      size={100}
    />)
    assert.deepEqual(wrapper.prop('style'), { 'fontSize': 47, 'height': 100, 'lineHeight': '100px', 'width': 100 })
    wrapper.setProps({ size: 20 })
    assert.deepEqual(wrapper.prop('style'), { 'fontSize': 9, 'height': 20, 'lineHeight': '20px', 'width': 20 })
  })

  it('show an image if supplied', function () {
    const wrapper = shallow(<Avatar {...requiredProps()}
      src="example.png"
    />)
    assert.equal(wrapper.prop('className'), 'avatar avatar--has-image')
    assert.equal(wrapper.find('img').prop('src'), 'example.png')
    assert.equal(wrapper.find('img').prop('alt'), 'Firstname Lastname')
  })

  describe('Additional classes', function () {
    it('should add modifier class(es) if passed', function () {
      const wrapper = shallow(<Avatar {...requiredProps()}
        modifiers={[ 'one' ]}
      />)
      assert.equal(wrapper.prop('className'), 'avatar avatar--one')
      wrapper.setProps({ modifiers: [ 'one', 'two' ] })
      assert.equal(wrapper.prop('className'), 'avatar avatar--one avatar--two')
    })

    it('should add bespoke class(es) if passed', function () {
      const wrapper = shallow(<Avatar {...requiredProps()}
        className="bespoke-class"
      />)
      assert.equal(wrapper.prop('className'), 'avatar bespoke-class')
      wrapper.setProps({ className: 'bespoke-one bespoke-two' })
      assert.equal(wrapper.prop('className'), 'avatar bespoke-one bespoke-two')
    })
  })
})
