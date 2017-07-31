import React from 'react'
import PropTypes from 'prop-types'
import './ListBody.styl'

const ListBody = ({ children, headings }) => (
  <div className="list-body">
    {children}
  </div>
)

ListBody.propTypes = {
  children: PropTypes.node,
  headings: PropTypes.arrayOf(PropTypes.string)
}

export default ListBody
