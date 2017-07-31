import React from 'react'
import PropTypes from 'prop-types'
import './Minimal.styl'

const Minimal = ({ children }) => {
  return (
    <div className="minimal">
      <div className="minimal__inner">
        {children}
      </div>
    </div>
  )
}

Minimal.propTypes = {
  children: PropTypes.node
}

export default Minimal
