import React from 'react'
import PropTypes from 'prop-types'
import './ListRow.styl'

const ListRow = ({ children }) => (
  <div className="list-row">
    {children}
  </div>
)

ListRow.propTypes = {
  children: PropTypes.node
}

export default ListRow
