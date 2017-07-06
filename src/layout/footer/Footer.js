import React from 'react'
import './Footer.styl'

const Footer = () => (
  <footer
    className="footer"
    role="contentinfo"
    >
    <div className="content-center content-gutter">
      <small>© {(new Date()).getFullYear()} Picks Backline. All rights reserved.</small>
    </div>
  </footer>
)

export default Footer
