import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import './Avatar.styl'

const Avatar = ({ className, src, modifiers, alt, size }) => {
  const avatarClassNames = classNames(
    'avatar',
    { 'avatar--custom-size': size },
    modifiers && modifiers.map(modifierClass => `avatar--${modifierClass}`),
    className
  )
  return (
    <div
      className={avatarClassNames}
      style={{
        width: size && `${size}px`,
        height: size && `${size}px`,
        lineHeight: size && `${size}px`
      }}
      >
      <img src={src} alt={alt} />
    </div>
  )
}

Avatar.propTypes = {
  className: PropTypes.string,
  src: PropTypes.string.isRequired,
  modifiers: PropTypes.arrayOf(PropTypes.string),
  alt: PropTypes.string.isRequired,
  size: PropTypes.number
}

export default Avatar
