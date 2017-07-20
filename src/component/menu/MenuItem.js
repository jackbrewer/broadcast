import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { Link } from 'react-router-dom'
import './MenuItem.styl'

const MenuItem = ({ children, disabled, href, onClick, selected, subText, text, value, ...other }) => {
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
      role="menuitem"
      data-value={value}
      {...other}
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
  onClick: PropTypes.func,
  selected: PropTypes.bool,
  subText: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node
  ]),
  text: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node
  ]).isRequired,
  value: PropTypes.string
}

export default MenuItem
