import React, { Component } from 'react'
import { TransitionMotion, spring } from 'react-motion'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import './Dropdown.styl'

import Icon from '../icon/Icon'

class Dropdown extends Component {
  constructor () {
    super()

    this.state = {
      isActive: false
    }

    this.showDropdownList = this.showDropdownList.bind(this)
    this.hideDropdownList = this.hideDropdownList.bind(this)
    this.handleClickOutside = this.handleClickOutside.bind(this)
    this.handleKeyDown = this.handleKeyDown.bind(this)
    this.willEnter = this.willEnter.bind(this)
    this.willLeave = this.willLeave.bind(this)
  }

  componentDidUpdate () {
    if (this.state.isActive && this.props.clickOutsideToClose) {
      document.addEventListener('click', this.handleClickOutside)
      document.addEventListener('touchstart', this.handleClickOutside)
    } else {
      document.removeEventListener('click', this.handleClickOutside)
      document.removeEventListener('touchstart', this.handleClickOutside)
    }
    if (this.state.isActive) {
      document.addEventListener('keydown', this.handleKeyDown)
    } else {
      document.removeEventListener('keydown', this.handleKeyDown)
    }
  }

  componentWillUnmount () {
    document.removeEventListener('click', this.handleClickOutside)
    document.removeEventListener('touchstart', this.handleClickOutside)
    document.removeEventListener('keydown', this.handleKeyDown)
  }

  showDropdownList () {
    this.setState({ isActive: true })
  }

  hideDropdownList () {
    this.setState({ isActive: false })
  }

  handleClickOutside (e) {
    if (e.target.closest('.dropdown__list')) return
    this.hideDropdownList()
  }

  handleKeyDown (e) {
    const keys = {
      27: this.hideDropdownList
    }
    return keys[e.keyCode] && keys[e.keyCode]()
  }

  willEnter () {
    return {
      scale: 0,
      opacity: 0,
      rotate: -5
    }
  }

  willLeave () {
    return {
      scale: spring(0, { stiffness: 300, damping: 26 }),
      opacity: spring(0, { stiffness: 300, damping: 26 })
    }
  }

  render () {
    const { align, text, children, iconType, maxHeight, modifiers } = this.props
    const dropdownTriggerClassNames = classNames(
      'button',
      'button--block',
      modifiers && modifiers.map(modifierClass => `button--${modifierClass}`)
    )
    return (
      <div className="dropdown">
        <button
          className={dropdownTriggerClassNames}
          type="button"
          onClick={this.state.isActive ? this.hideDropdownList : this.showDropdownList}
          >
          {text &&
            <span>{text}</span>
          }
          <Icon type={iconType} />
        </button>
        <TransitionMotion
          styles={!this.state.isActive ? [] : [ {
            key: 'child',
            data: {},
            style: {
              scale: spring(1, { stiffness: 500, damping: 26 }),
              opacity: spring(1, { stiffness: 500, damping: 26 })
            }
          } ]}
          willEnter={this.willEnter}
          willLeave={this.willLeave}
          >
          {(items) => {
            return (
              <div>
                {items.map(item => {
                  return (
                    <div
                      className={classNames(
                        'dropdown__list',
                        `dropdown__list--${align}`
                      )}
                      key={item.key}
                      style={{
                        opacity: item.style.opacity,
                        transform: `scaleY(${item.style.scale})`,
                        maxHeight
                      }}
                      >
                      {React.Children.map(children, (child, i) => {
                        return React.cloneElement(child, {
                          onDone: this.hideDropdownList
                        })
                      })}
                    </div>
                  )
                })}
              </div>
            )
          }}
        </TransitionMotion>
      </div>
    )
  }
}

Dropdown.defaultProps = {
  align: 'left',
  iconType: 'arrow-down',
  clickOutsideToClose: true
}

Dropdown.propTypes = {
  align: PropTypes.oneOf([ 'left', 'right' ]),
  children: PropTypes.node.isRequired,
  clickOutsideToClose: PropTypes.bool,
  iconType: PropTypes.string,
  maxHeight: PropTypes.number,
  modifiers: PropTypes.arrayOf(PropTypes.string),
  text: PropTypes.string
}

export default Dropdown
