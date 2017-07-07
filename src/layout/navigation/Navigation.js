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

      <h3>Pages</h3>
      <ul className="list--unstyled">
        <NavigationItem to="/page/article-form" text="Article Form" />
      </ul>

      <h3>Fake Links</h3>
      <ul className="list--unstyled">
        <NavigationItem to="/ui/blockquote" text="Blockquote" />
        <NavigationItem to="/ui/button" text="Button" />
        <NavigationItem to="/ui/card" text="Card" />
        <NavigationItem to="/ui/code" text="Code" />
        <NavigationItem to="/ui/control" text="Control">
          <NavigationItem to="/ui/control/input" text="Input" />
          <NavigationItem to="/ui/control/check" text="Check" />
          <NavigationItem to="/ui/control/date" text="Date" />
          <NavigationItem to="/ui/control/file" text="File" />
          <NavigationItem to="/ui/control/select" text="Select" />
          <NavigationItem to="/ui/control/textarea" text="Textarea" />
        </NavigationItem>
        <NavigationItem to="/ui/field" text="Field" />
        <NavigationItem to="/ui/form" text="Form" />
        <NavigationItem to="/ui/icon" text="Icon" />
        <NavigationItem to="/ui/note" text="Note" />
        <NavigationItem to="/ui/notification" text="Notification" />
        <NavigationItem to="/ui/responsive-media" text="Responsive Media" />
        <NavigationItem to="/ui/swatch" text="Swatch" />
        <NavigationItem to="/ui/table" text="Table" />
        <NavigationItem to="/ui/toggle" text="Toggle" />
        <NavigationItem to="/ui/tooltip" text="Tooltip" />
        <NavigationItem to="/ui/typography" text="Typography" />
      </ul>

    </div>
  </nav>
)

export default Navigation
