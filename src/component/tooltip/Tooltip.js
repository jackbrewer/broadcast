import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import './Tooltip.styl'

class Tooltip extends Component {
  constructor (props) {
    super(props)

    this.state = {
      isActive: false,
      align: props.align,
      valign: props.valign
    }

    this.hideTooltip = this.hideTooltip.bind(this)
    this.showTooltip = this.showTooltip.bind(this)
    this.handleKeyDown = this.handleKeyDown.bind(this)
    // this.checkOverflow = this.checkOverflow.bind(this)
  }

  // componentWillUpdate () {
  //   this.checkOverflow()
  // }

  componentDidUpdate () {
    this.state.isActive
      ? document.addEventListener('keydown', this.handleKeyDown)
      : document.removeEventListener('keydown', this.handleKeyDown)
  }

  componentWillUnmount () {
    document.removeEventListener('keydown', this.handleKeyDown)
  }

  hideTooltip () {
    this.content.style = {}
    this.setState({ isActive: false })
  }

  showTooltip () {
    this.setState({ isActive: true })
  }

  handleKeyDown (e) {
    const keys = {
      27: this.hideTooltip
    }
    return keys[e.keyCode] && keys[e.keyCode]()
  }

  // checkOverflow (e) {
  //   if (this.state.isActive) return
  //   console.log(this.content.getBoundingClientRect(), document.body.getBoundingClientRect())
  //   const documentPosition = document.body.getBoundingClientRect()
  //   const contentPosition = this.content.getBoundingClientRect()
  //
  //   const tooWide = (contentPosition.width + contentPosition.left) > documentPosition.width
  //   const overflowingLeft = contentPosition.left < documentPosition.left
  //   const overflowingRight = contentPosition.right > documentPosition.right
  //
  //   if (tooWide) {
  //     console.log('Too wide')
  //     this.content.style.left = documentPosition.left - contentPosition.left + 'px'
  //     this.content.style.right = 'auto'
  //     this.content.style.width = documentPosition.width + 'px'
  //     this.content.style.minWidth = '0px'
  //   }
  //
  //   if (contentPosition.left < 0) {
  //     console.log('Overflowing left')
  //     this.content.style.right = contentPosition.left + 'px'
  //   }
  //
  //   if (contentPosition.right > documentPosition.right) {
  //     console.log('Overflowing right')
  //     this.content.style.left = -(contentPosition.right - documentPosition.right) + 'px'
  //     this.content.style.right = 'auto'
  //   }
  // }

  render () {
    const { children, className, clickOutsideToClose, enableHover, modifiers, text } = this.props
    const TooltipClassNames = classNames(
      'tooltip',
      { 'is-active': this.state.isActive },
      modifiers && modifiers.map(modifierClass => `tooltip--${modifierClass}`),
      className
    )
    return (
      <span
        className={TooltipClassNames}
        >
        <button
          type="button"
          className="tooltip__trigger text-button"
          onClick={this.state.isActive ? this.hideTooltip : this.showTooltip}
          {...enableHover && {
            onMouseOver: this.showTooltip,
            onMouseOut: this.hideTooltip
          }}
          >
          {children}
        </button>
        <span
          className={classNames(
            'tooltip__content',
            `tooltip__content--${this.state.align}`,
            `tooltip__content--${this.state.valign}`,
            { 'is-vhidden': !this.state.isActive }
          )}
          {...this.state.isActive && {
            tabIndex: 0,
            onBlur: this.hideTooltip
          }}
          ref={(span) => { this.content = span }}
          >
          {text}
        </span>
        {this.state.isActive && clickOutsideToClose &&
          <span
            className="tooltip__backdrop"
            onClick={this.hideTooltip}
            />
        }
      </span>
    )
  }
}

Tooltip.defaultProps = {
  align: 'left',
  clickOutsideToClose: true,
  valign: 'bottom'
}

Tooltip.propTypes = {
  align: PropTypes.oneOf([ 'left', 'right' ]),
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  clickOutsideToClose: PropTypes.bool,
  enableHover: PropTypes.bool,
  modifiers: PropTypes.arrayOf(PropTypes.string),
  text: PropTypes.string.isRequired,
  valign: PropTypes.oneOf([ 'top', 'bottom' ])
}

export default Tooltip
