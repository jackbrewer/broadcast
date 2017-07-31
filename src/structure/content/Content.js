import React from 'react'
import PropTypes from 'prop-types'
import './Content.styl'

const Content = ({ children }) => (
  <main className="content" id="content" role="main">
    <div className="content__inner">
      {children}
    </div>
  </main>
)

Content.propTypes = {
  children: PropTypes.node
}

export default Content
