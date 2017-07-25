import React from 'react'
import PropTypes from 'prop-types'
import './ListHeader.styl'

const ListHeader = ({ children }) => (
  <div className="list-header">
    <div className="list-header__row">
      {children}
    </div>
  </div>
)

ListHeader.propTypes = {
  children: PropTypes.node
}

export default ListHeader
