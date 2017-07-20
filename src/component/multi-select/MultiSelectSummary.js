import React from 'react'
import PropTypes from 'prop-types'
import './MultiSelectSummary.styl'

const MultiSelectSummary = ({ selected, onDone, onResetSelection }) => {
  return (
    <div className="multi-select-summary">
      {selected.length > 0 &&
        <div className="multi-select-summary__inner">
          {onDone &&
            <button
              className="text-button"
              onClick={onDone}
              >
              Done
            </button>
          }
          <p>{selected.length} item{selected.length !== 1 && 's'} selected</p>
          <button
            className="text-button"
            onClick={onResetSelection}
            >
            Reset
          </button>
        </div>
      }
    </div>
  )
}

MultiSelectSummary.defaultProps = {
  placeholder: 'Filter…'
}

MultiSelectSummary.propTypes = {
  onDone: PropTypes.func,
  onResetSelection: PropTypes.func,
  selected: PropTypes.arrayOf(PropTypes.string)
}

export default MultiSelectSummary
