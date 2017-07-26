import React from 'react'
import PropTypes from 'prop-types'
import './Toolbar.styl'

const Toolbar = ({ children }) => (
  <div className="toolbar">
    <div className="toolbar__inner">
      {children}
    </div>
  </div>
)

Toolbar.propTypes = {
  children: PropTypes.node
}

export default Toolbar
