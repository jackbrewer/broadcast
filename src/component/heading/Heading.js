import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import './Heading.styl'

const Heading = ({ children, className, level, modifiers, size }) => {
  const headingClassNames = classNames(
    'heading',
    size && `heading--${size}`,
    modifiers && modifiers.map(modifierClass => `heading--${modifierClass}`),
    className
  )
  const HeadingEl = [ 'h1', 'h2', 'h3', 'h4', 'h5', 'h6' ][level - 1]
  return (
    <HeadingEl
      className={headingClassNames}
      >
      {children}
    </HeadingEl>
  )
}

Heading.defaultProps = {
  level: 1
}

Heading.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  level: PropTypes.oneOf([ 1, 2, 3, 4, 5, 6 ]),
  modifiers: PropTypes.arrayOf(PropTypes.string),
  size: PropTypes.oneOf([ 'huge', 'regular', 'small', 'tiny' ])
}

export default Heading
