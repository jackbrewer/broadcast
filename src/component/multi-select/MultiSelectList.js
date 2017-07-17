import React from 'react'
import PropTypes from 'prop-types'
import './MultiSelectList.styl'

const MultiSelectList = ({ children, maxHeight }) => {
  return (
    <div className="multi-select-list">
      <div
        className="multi-select-list__inner"
        style={{ ...maxHeight && { maxHeight } }}
        >
        {children.length
          ? children
          : <div className="multi-select-list__feedback">
              No matches found
            </div>
        }
      </div>
    </div>
  )
}

MultiSelectList.defaultProps = {
  minSearchChars: 2,
  searchFields: [ 'text', 'subText' ]
}

MultiSelectList.propTypes = {
  children: PropTypes.node.isRequired,
  maxHeight: PropTypes.number
}

export default MultiSelectList
