import React from 'react'
import PropTypes from 'prop-types'
import './ListItem.styl'

const ListItem = ({ heading }) => (
  <div className="list__row">
    <div className="list__cell">
      <a href="#">hello</a>
    </div>
    <div className="list__cell">
      {heading}
    </div>
    <div className="list__cell">
      there
    </div>
  </div>
)

ListItem.propTypes = {
  heading: PropTypes.string.isRequired
}

export default ListItem
