import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import './ImagePreview.styl'

const ImagePreview = ({ className, cover, modifiers, src }) => {
  const imagePreviewClassNames = classNames(
    'image-preview',
    { 'image-preview--cover': cover },
    modifiers && modifiers.map(modifierClass => `image-preview--${modifierClass}`),
    className
  )

  return (
    <div className={imagePreviewClassNames}>
      <div className="image-preview__inner">
        <div className="image-preview__image"
          style={{ backgroundImage: `url(${src})` }}
        />
      </div>
    </div>
  )
}

ImagePreview.propTypes = {
  className: PropTypes.string,
  cover: PropTypes.bool,
  modifiers: PropTypes.arrayOf(PropTypes.string),
  src: PropTypes.string.isRequired
}

export default ImagePreview
