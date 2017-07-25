import React from 'react'
import PropTypes from 'prop-types'
import './List.styl'

const List = ({ children, headings }) => (
  <div className="list">
    {children}
  </div>
)

List.propTypes = {
  children: PropTypes.node,
  headings: PropTypes.arrayOf(PropTypes.string)
}

export default List
