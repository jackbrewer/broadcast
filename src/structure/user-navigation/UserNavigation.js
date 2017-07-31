import React from 'react'
import './UserNavigation.styl'

import Avatar from '../../component/avatar/Avatar'

const UserNavigation = () => (
  <nav
    aria-label="User Navigation"
    className="user-navigation"
    id="user-navigation"
    >

    <div className="user-navigation__content">
      <div className="user-navigation__hero">
        <div className="user-navigation__avatar">
          <Avatar name="Firstname Lastname" size={60} />
        </div>
        <div className="user-navigation__name">
          Firstname Lastname
        </div>
        <div className="user-navigation__position">
          Editor
        </div>
      </div>

      <div className="user-navigation__links">
        <ul className="list--unstyled">
          <li><a href="#">Account Details</a></li>
          <li><a href="#">My articles</a></li>
          <li><a href="#">My assets</a></li>
        </ul>
      </div>

    </div>

    <div className="user-navigation__footer">
      <ul className="list--unstyled">
        <li><a href="#">Logout</a></li>
      </ul>
    </div>

  </nav>
)

export default UserNavigation
