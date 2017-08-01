import React, { Component } from 'react'
import PropTypes from 'prop-types'

import ArrowDown from '../../asset/image/svg/arrow-down.svg'
import ArrowLeft from '../../asset/image/svg/arrow-left.svg'
import ArrowRight from '../../asset/image/svg/arrow-right.svg'
import ArrowUp from '../../asset/image/svg/arrow-up.svg'
import CalendarSvg from '../../asset/image/svg/calendar.svg'
import Computer from '../../asset/image/svg/computer.svg'
import CrossSvg from '../../asset/image/svg/cross.svg'
import GithubSvg from '../../asset/image/svg/github.svg'
import KebabSvg from '../../asset/image/svg/kebab.svg'
import Menu from '../../asset/image/svg/menu.svg'
import Phone from '../../asset/image/svg/phone.svg'
import PickSvg from '../../asset/image/svg/pick.svg'

import Gallery from '../../asset/image/svg/gallery.svg'
import Photo from '../../asset/image/svg/photo.svg'
import Quote from '../../asset/image/svg/quote.svg'
import Rule from '../../asset/image/svg/rule.svg'
import Text from '../../asset/image/svg/text.svg'
import Video from '../../asset/image/svg/video.svg'

const svgs = {
  'arrow-down': ArrowDown,
  'arrow-left': ArrowLeft,
  'arrow-right': ArrowRight,
  'arrow-up': ArrowUp,
  'calendar': CalendarSvg,
  'computer': Computer,
  'cross': CrossSvg,
  'gallery': Gallery,
  'github': GithubSvg,
  'kebab': KebabSvg,
  'menu': Menu,
  'phone': Phone,
  'photo': Photo,
  'pick': PickSvg,
  'quote': Quote,
  'rule': Rule,
  'text': Text,
  'video': Video
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
    // TODO: If width/height not set, calculate them using viewbox coordinates
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
