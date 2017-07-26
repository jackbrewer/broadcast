import React from 'react'
import PropTypes from 'prop-types'
import './List.styl'

const List = ({ children }) => (
  <div className="list">
    {children}
  </div>
)

List.propTypes = {
  children: PropTypes.node
}

export default List
