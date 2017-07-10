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

    <div className="navigation__inner">

      <h3>Test Pages</h3>
      <ul className="list--unstyled">
        <NavigationItem to="/page/article-form" text="Article Form" />
        <NavigationItem to="/page/list-page" text="List Page" />
        <NavigationItem to="/login" text="Login" />
      </ul>

      <h3>Content</h3>
      <ul className="list--unstyled">
        <NavigationItem to="/section" text="Sections" />
        <NavigationItem to="/article" text="Articles" />
        <NavigationItem to="/list" text="Lists" />
        <NavigationItem to="/asset" text="Assets" />
        <NavigationItem to="/author" text="Authors" />
        <NavigationItem to="/tag" text="Tags" />
        <NavigationItem to="/redirect" text="Redirects" />
      </ul>

      <h3>User Management</h3>
      <ul className="list--unstyled">
        <NavigationItem to="/tier" text="Tiers" />
        <NavigationItem to="/role" text="Roles" />
        <NavigationItem to="/administrator" text="Administrators" />
      </ul>

      <h3>Settings</h3>
      <ul className="list--unstyled">
        <NavigationItem to="/account" text="Accounts" />
        <NavigationItem to="/instance" text="Instances" />
      </ul>

    </div>
  </nav>
)

export default Navigation
