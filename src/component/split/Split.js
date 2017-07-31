import React, { Children } from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import './Split.styl'

const Split = ({ children, className, modifiers }) => {
  const splitClassNames = classNames(
    'split',
    modifiers && modifiers.map(modifierClass => `split--${modifierClass}`),
    className
  )

  return (
    <div
      className={splitClassNames}
      >
      {Children.map(children, child => (
        <div className="split__item">
          {child}
        </div>
      ))}
    </div>
  )
}

Split.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  modifiers: PropTypes.arrayOf(PropTypes.string)
}

export default Split
