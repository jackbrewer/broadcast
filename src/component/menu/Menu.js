import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import './Menu.styl'

const Menu = ({ bordered, children }) => (
  <div
    className={classNames(
      'menu',
      { 'menu--bordered': bordered }
    )}
    role="menu"
    >
    {children}
  </div>
)

Menu.propTypes = {
  bordered: PropTypes.bool,
  children: PropTypes.node.isRequired
}

export default Menu
