import React, { Component } from 'react'
import './Preview.styl'

import Icon from '../../../../component/icon/Icon'

class Preview extends Component {
  constructor () {
    super()

    this.state = {
      targetWidth: 960
    }

    this.handleResize = this.handleResize.bind(this)
    this.handleSetWidth = this.handleSetWidth.bind(this)
  }

  componentDidMount () {
    this.handleResize()
    // TODO: Throttle resize event
    window.addEventListener('resize', this.handleResize)
  }

  componentWillUnmount () {
    window.removeEventListener('resize', this.handleResize)
  }

  handleResize () {
    const wrapperBoundingRect = this.wrapper.getBoundingClientRect()
    const wrapperWidth = wrapperBoundingRect.width
    const wrapperHeight = wrapperBoundingRect.height
    const targetWidth = this.state.targetWidth
    const ratio = (wrapperWidth / targetWidth)

    this.iframe.style.width = `${targetWidth}px`

    if (wrapperWidth < this.state.targetWidth) {
      this.iframe.style.height = `${wrapperHeight / ratio}px`
      this.iframe.style.transform = `scale(${ratio})`
    }
  }

  handleSetWidth (e) {
    this.setState({ targetWidth: e.target.value })
    this.handleResize()
  }

  render () {
    const resizeWidthMin = 300
    const resizeWidthMax = 1200

    return (
      <div
        className="preview"
        >
        <div className="preview__toolbar">
          <div className="preview__range">
            <Icon type="phone" width={14} height={24} />
            <input
              className="control--slider"
              type="range"
              min={resizeWidthMin}
              max={resizeWidthMax}
              onChange={this.handleSetWidth}
              value={this.state.targetWidth}
            />
            <Icon type="computer" width={24} height={21} />
          </div>
          <div className="preview__current">Preview width: {this.state.targetWidth}px</div>
        </div>
        <div
          className="preview__wrapper"
          ref={(wrapper) => { this.wrapper = wrapper }}
          >
          <iframe
            className="preview__frame"
            src="http://jackbrewer.co.uk"
            ref={(iframe) => { this.iframe = iframe }}
          />
        </div>
      </div>
    )
  }
}

export default Preview
