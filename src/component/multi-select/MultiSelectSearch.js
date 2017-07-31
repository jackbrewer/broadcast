import React from 'react'
import PropTypes from 'prop-types'
import './MultiSelectSearch.styl'

import Control from '../control/Control'
import Button from '../button/Button'
import Icon from '../icon/Icon'

const MultiSelectSearch = ({ onChange, onClearSearch, placeholder, value }) => {
  return (
    <div className="multi-select-search">
      <Control
        autoComplete="off"
        name="search"
        onChange={onChange}
        placeholder={placeholder}
        type="text"
        value={value}
      />

      {value.length > 0 &&
        <Button
          className="button"
          disabled={!value}
          onClick={onClearSearch}
          title="Clear filter"
          type="button"
          >
          <Icon
            a11yText="Clear filter"
            type="cross"
            width={14}
            height={14}
          />
        </Button>
      }
    </div>
  )
}

MultiSelectSearch.defaultProps = {
  placeholder: 'Filter…'
}

MultiSelectSearch.propTypes = {
  onChange: PropTypes.func.isRequired,
  onClearSearch: PropTypes.func,
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired
}

export default MultiSelectSearch
