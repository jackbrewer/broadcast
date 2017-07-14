import React from 'react'
import PropTypes from 'prop-types'
import './List.styl'

const List = ({ children }) => (
  <div className="list">
    <div className="list__head">
      <div className="list__row list__row--head">
        <div className="list__cell">Hey</div>
        <div className="list__cell">Hi</div>
        <div className="list__cell">Ho</div>
      </div>
    </div>
    <div className="list__body">
      {children}
    </div>
  </div>
)

List.propTypes = {
  children: PropTypes.node
}

export default List
