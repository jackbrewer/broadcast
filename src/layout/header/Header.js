import React from 'react'
import './Header.styl'

import SiteTitle from '../site-title/SiteTitle'

const Header = () => (
  <header
    className="header"
    role="banner"
    >
    <SiteTitle href="/" />
    <div className="header__meta">v2.3 - 9 May</div>
  </header>
)

export default Header
