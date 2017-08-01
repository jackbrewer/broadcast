import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import './Avatar.styl'

const Avatar = ({ className, modifiers, name, size, src }) => {
  if (!name || name === '') return null

  const initials = name.split(/[ -]/g).map(word => word[0].toUpperCase())
  const fontSize = Math.floor(initials.length > 1 ? (size * 0.95 / initials.length) : (size * 0.6))
  const avatarClassNames = classNames(
    'avatar',
    { 'avatar--has-image': src },
    modifiers && modifiers.map(modifierClass => `avatar--${modifierClass}`),
    className
  )

  function stringToColour (str) {
    let hash = 0
    for (let i = 0; i < str.length; i++) {
      hash = str.charCodeAt(i) + ((hash << 5) - hash)
    }
    let colour = '#'
    for (let i = 0; i < 3; i++) {
      var value = (hash >> (i * 8)) & 0xFF
      colour += ('00' + value.toString(16)).substr(-2)
    }
    return colour
  }

  return (
    <div
      className={avatarClassNames}
      style={{
        fontSize,
        height: size,
        lineHeight: `${size}px`,
        width: size,
        backgroundColor: stringToColour(name)
      }}
      >
      {src &&
        <img src={src} alt={name} />
      }
      {(!src && initials) &&
        <div
          className="avatar__initials"
          style={{ fontSize }}
          >
          {initials}
        </div>
      }
    </div>
  )
}

Avatar.defaultProps = {
  size: 50
}

Avatar.propTypes = {
  className: PropTypes.string,
  modifiers: PropTypes.arrayOf(PropTypes.string),
  name: PropTypes.string.isRequired,
  size: PropTypes.number,
  src: PropTypes.string
}

export default Avatar
