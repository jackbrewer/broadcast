import React, { Component } from 'react'
import PropTypes from 'prop-types'

import ArrowDown from '../../asset/image/svg/arrow-down.svg'
import ArrowUp from '../../asset/image/svg/arrow-up.svg'
import CalendarSvg from '../../asset/image/svg/calendar.svg'
import CrossSvg from '../../asset/image/svg/cross.svg'
import GithubSvg from '../../asset/image/svg/github.svg'
import KebabSvg from '../../asset/image/svg/kebab.svg'
import PickSvg from '../../asset/image/svg/pick.svg'

const svgs = {
  'arrow-down': ArrowDown,
  'arrow-up': ArrowUp,
  'calendar': CalendarSvg,
  'cross': CrossSvg,
  'github': GithubSvg,
  'kebab': KebabSvg,
  'pick': PickSvg
}

class Svg extends Component {
  constructor (props) {
    super(props)
    this.SvgType = svgs[props.type]
  }

  componentWillMount () {
    if (!this.SvgType) return
    // Send dimensions back to parent component
    const { getDimensions } = this.props
    const { width, height } = this.SvgType().props
    getDimensions && getDimensions(width, height)
  }

  render () {
    if (!this.SvgType) return null
    return (
      <this.SvgType />
    )
  }
}

Svg.propTypes = {
  type: PropTypes.string.isRequired,
  getDimensions: PropTypes.func
}

export default Svg
