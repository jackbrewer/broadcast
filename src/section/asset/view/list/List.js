import React from 'react'
// import { Link } from 'react-router-dom'

import ImagePreview from '../../../../component/image-preview/ImagePreview'
// import ButtonGroup from '../../../../component/button-group/ButtonGroup'
// import Button from '../../../../component/button/Button'
// import Dropdown from '../../../../component/dropdown/Dropdown'
// import Menu from '../../../../component/menu/Menu'
// import MenuItem from '../../../../component/menu/MenuItem'

const ListView = () => {
  return (
    <div className="auto-grid">
      <div className="auto-grid__item">
        <ImagePreview src="http://img.clock.co.uk/200x300" />
      </div>
      <div className="auto-grid__item">
        <ImagePreview src="http://img.clock.co.uk/200x300" />
      </div>
      <div className="auto-grid__item">
        <ImagePreview src="http://img.clock.co.uk/200x300" />
      </div>
      <div className="auto-grid__item">
        <ImagePreview src="http://img.clock.co.uk/200x300" />
      </div>
      <div className="auto-grid__item">
        <ImagePreview src="http://img.clock.co.uk/200x300" />
      </div>
      <div className="auto-grid__item">
        <ImagePreview src="http://img.clock.co.uk/200x300" />
      </div>
      <div className="auto-grid__item">
        <ImagePreview src="http://img.clock.co.uk/200x300" />
      </div>
      <div className="auto-grid__item">
        <ImagePreview src="http://img.clock.co.uk/200x300" />
      </div>
      <div className="auto-grid__item">
        <ImagePreview src="http://img.clock.co.uk/200x300" />
      </div>
      <div className="auto-grid__item">
        <ImagePreview src="http://img.clock.co.uk/200x300" />
      </div>
    </div>
  )
}

export default ListView
