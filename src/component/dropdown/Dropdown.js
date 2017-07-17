import React, { Component } from 'react'
import { TransitionMotion, spring } from 'react-motion'
import PropTypes from 'prop-types'
// import classNames from 'classnames'
import './Dropdown.styl'

import Icon from '../icon/Icon'

class Dropdown extends Component {
  constructor () {
    super()

    this.state = {
      isActive: false
    }

    this.toggleDropdownList = this.toggleDropdownList.bind(this)
    this.willEnter = this.willEnter.bind(this)
    this.willLeave = this.willLeave.bind(this)
  }

  toggleDropdownList () {
    this.setState({ isActive: !this.state.isActive })
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
      opacity: spring(0, { stiffness: 300, damping: 26 }),
      rotate: spring(-5, { stiffness: 300, damping: 26 })
    }
  }

  render () {
    const { buttonText, children, iconType, maxHeight } = this.props
    return (
      <div className="dropdown">
        <button
          className="dropdown__trigger button"
          type="button"
          onClick={this.toggleDropdownList}
          >
          {buttonText &&
            <span>{buttonText}</span>
          }
          <Icon type={iconType} />
        </button>
        <TransitionMotion
          styles={!this.state.isActive ? [] : [ {
            key: 'child',
            data: {},
            style: {
              scale: spring(1, { stiffness: 500, damping: 26 }),
              rotate: spring(0, { stiffness: 500, damping: 26 }),
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
                      className="dropdown__list"
                      key={item.key}
                      style={{
                        opacity: item.style.opacity,
                        transform: `scale(${item.style.scale}) rotate(${item.style.rotate}deg)`,
                        maxHeight
                      }}
                      >
                      {children}
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
  iconType: 'arrow-down'
}

Dropdown.propTypes = {
  buttonText: PropTypes.string,
  children: PropTypes.node.isRequired,
  iconType: PropTypes.string,
  maxHeight: PropTypes.number
}

export default Dropdown
