import React, { Children } from 'react'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'

const NavigationItem = ({ children, exact, to, text }) => (
  <li>
    <NavLink
      exact={exact}
      activeClassName="is-active"
      className="navigation__link"
      to={to}
      >
      {text}
    </NavLink>
    {children &&
      <ul className="list--unstyled">
        {Children.map(children, (child, i) => (
          <li>
            <NavLink
              key={i}
              exact={child.props.exact}
              activeClassName="is-active"
              className="navigation__link"
              to={child.props.to}
              >
              {child.children}
            </NavLink>
          </li>
        ))}
      </ul>
    }
  </li>
)

NavigationItem.propTypes = {
  children: PropTypes.node,
  exact: PropTypes.bool,
  to: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
}

export default NavigationItem
