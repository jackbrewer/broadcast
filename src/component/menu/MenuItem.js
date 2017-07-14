import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { Link } from 'react-router-dom'
import './MenuItem.styl'

const MenuItem = ({ children, disabled, href, id, onClick, selected, subText, text }) => {
  const MenuItemEl = (href && !disabled) ? Link : 'button'

  return (
    <MenuItemEl
      className={classNames(
        'menu-item',
        'text-button',
        {
          'is-disabled': disabled,
          'is-selected': selected
        }
      )}
      {...disabled && { disabled }}
      {...href && { to: href }}
      {...onClick && { onClick }}
      id={id}
      role="menuitem"
      >
      {text}
      {subText &&
        <div className="menu-item__subtext">{subText}</div>
      }
      {children}
    </MenuItemEl>
  )
}

MenuItem.propTypes = {
  children: PropTypes.node,
  disabled: PropTypes.bool,
  href: PropTypes.string,
  id: PropTypes.string,
  onClick: PropTypes.func,
  selected: PropTypes.bool,
  subText: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node
  ]),
  text: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node
  ]).isRequired
}

export default MenuItem
