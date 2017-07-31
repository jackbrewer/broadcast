import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import './OverflowWrapper.styl'

const OverflowWrapper = ({ children, className, modifiers }) => {
  const overflowWrapperClassNames = classNames(
    'overflow-wrapper',
    modifiers && modifiers.map(modifierClass => `overflow-wrapper--${modifierClass}`),
    className
  )

  return (
    <div className={overflowWrapperClassNames}>
      <div className="overflow-wrapper__content">
        {children}
      </div>
    </div>
  )
}

OverflowWrapper.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  modifiers: PropTypes.arrayOf(PropTypes.string)
}

export default OverflowWrapper
