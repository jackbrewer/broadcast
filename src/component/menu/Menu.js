import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import './Menu.styl'

const Menu = ({ bordered, children, className }) => (
  <div
    className={classNames(
      'menu',
      { 'menu--bordered': bordered },
      className
    )}
    role="menu"
    >
    {children}
  </div>
)

Menu.propTypes = {
  bordered: PropTypes.bool,
  children: PropTypes.node.isRequired,
  className: PropTypes.string
}

export default Menu
