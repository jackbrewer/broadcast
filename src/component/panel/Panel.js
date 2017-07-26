import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import './Panel.styl'

const Panel = ({ children, className, modifiers }) => {
  const panelClasses = classNames(
    'panel',
    modifiers && modifiers.map(modifierClass => `panel--${modifierClass}`),
    className
  )
  return (
    <div className={classNames(panelClasses)}>
      {children}
    </div>
  )
}

Panel.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  modifiers: PropTypes.arrayOf(PropTypes.string)
}

export default Panel
