import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import './ButtonGroup.styl'

const ButtonGroup = ({ children, className, modifiers }) => {
  const ButtonGroupClassNames = classNames(
    'button-group',
    modifiers && modifiers.map(modifierClass => `button-group--${modifierClass}`),
    className
  )
  return (
    <div
      className={ButtonGroupClassNames}
      >
      {children}
    </div>
  )
}

ButtonGroup.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  modifiers: PropTypes.arrayOf(PropTypes.string)
}

export default ButtonGroup
