import React from 'react'

const Footer = () => (
  <footer
    className="footer"
    role="contentinfo"
    >
    <div className="content-center content-gutter">
      <small>© {(new Date()).getFullYear()} Picks Broadcast. All rights reserved.</small>
    </div>
  </footer>
)

export default Footer
