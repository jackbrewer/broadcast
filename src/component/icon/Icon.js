import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import './Icon.styl'

import Svg from '../svg/Svg'

class Icon extends Component {
  constructor () {
    super()
    this.state = {}
    this.getDimensions = this.getDimensions.bind(this)
  }

  getDimensions (defaultWidth, defaultHeight) {
    const { width, height } = this.props
    this.setState({
      width: width || defaultWidth,
      height: height || defaultHeight
    })
  }

  render () {
    const { a11yText, type, className, modifiers } = this.props
    const { width, height } = this.state

    const iconsClassNames = classNames(
      'icon',
      modifiers && modifiers.map(modifierClass => `icon--${modifierClass}`),
      className
    )

    return (
      <i
        className={iconsClassNames}
        aria-hidden={!a11yText ? 'true' : null}
        style={{
          width: width && `${width}px`,
          height: height && `${height}px`,
          lineHeight: height && `${height}px`
        }}
        >
        {a11yText &&
          <span className="is-vhidden">{a11yText}</span>
        }
        <Svg type={type} getDimensions={this.getDimensions} />
      </i>
    )
  }
}

Icon.propTypes = {
  a11yText: PropTypes.string,
  type: PropTypes.string.isRequired,
  className: PropTypes.string,
  height: PropTypes.number,
  modifiers: PropTypes.arrayOf(PropTypes.string),
  width: PropTypes.number
}

export default Icon
