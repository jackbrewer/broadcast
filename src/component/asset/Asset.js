import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import './Asset.styl'

import ImagePreview from '../image-preview/ImagePreview'

const Asset = ({ className, handleClick, modifiers }) => {
  const assetClassNames = classNames(
    'asset',
    modifiers && modifiers.map(modifierClass => `asset--${modifierClass}`),
    className
  )

  return (
    <div
      className={assetClassNames}
      onClick={handleClick}
      >
      <ImagePreview src="http://img.clock.co.uk/200x300" />
    </div>
  )
}

Asset.propTypes = {
  className: PropTypes.string,
  handleClick: PropTypes.func,
  modifiers: PropTypes.arrayOf(PropTypes.string)
}

export default Asset
