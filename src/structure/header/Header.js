import React from 'react'
import './Header.styl'

import SiteTitle from '../site-title/SiteTitle'

const Header = () => (
  <header
    className="header"
    role="banner"
    >
    <SiteTitle href="/" />
  </header>
)

export default Header
