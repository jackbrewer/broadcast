import React from 'react'
import PropTypes from 'prop-types'
import './UserNavigation.styl'

import Avatar from '../../component/avatar/Avatar'

const UserNavigation = ({ isLoggedIn }) => (
  <nav
    aria-label="User Navigation"
    className="user-navigation"
    id="user-navigation"
    >
    <div className="user-navigation__inner">

      <div className="user-navigation__avatar">
        <Avatar src="https://img.clock.co.uk/40" name="Firstname Lastname" />
      </div>

      <div className="user-navigation__content">
        <div className="user-navigation__name">
          Firstname Lastname
        </div>
        <div className="user-navigation__position">
          Editor
        </div>
        <ul className="user-navigation__links list--inline">
          {isLoggedIn &&
            <li><a href="#">Login</a></li>
          }
          {isLoggedIn &&
            <li><a href="#">Register</a></li>
          }
          {!isLoggedIn &&
            <li><a href="#">Logout</a></li>
          }
        </ul>
      </div>

    </div>
  </nav>
)

UserNavigation.defaultProps = {
  isLoggedIn: false
}

UserNavigation.propTypes = {
  isLoggedIn: PropTypes.bool
}

export default UserNavigation
