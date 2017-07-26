import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import './Toolbar.styl'

const Toolbar = ({ children, className, modifiers }) => {
  const toolbarClassNames = classNames(
    'toolbar',
    modifiers && modifiers.map(modifierClass => `toolbar--${modifierClass}`),
    className
  )

  return (
    <div className={toolbarClassNames}>
      <div className="toolbar__inner">
        {children}
      </div>
    </div>
  )
}

Toolbar.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  modifiers: PropTypes.arrayOf(PropTypes.string)
}

export default Toolbar
