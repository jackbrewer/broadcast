import React from 'react'
import PropTypes from 'prop-types'

const Option = ({ option }) => {
  const { text, value, ...other } = option
  return (
    <option
      value={value || text}
      {...other}
      >
      {text}
    </option>
  )
}

Option.propTypes = {
  option: PropTypes.shape({
    text: PropTypes.string,
    value: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ])
  })
}

export default Option
