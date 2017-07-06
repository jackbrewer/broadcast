import React from 'react'
import './Navigation.styl'

import NavigationItem from './NavigationItem'

const Navigation = () => (
  <nav
    aria-label="Primary Navigation"
    className="navigation"
    id="navigation"
    >
    <h2 className="is-vhidden">Primary Navigation</h2>
    <div className="navigation__group">

      <h3>Pages</h3>
      <ul className="list--unstyled">
        <NavigationItem to="/page/article-form" text="Article Form" />
      </ul>

    </div>
  </nav>
)

export default Navigation
