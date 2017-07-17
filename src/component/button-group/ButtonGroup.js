import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import './ButtonGroup.styl'

const ButtonGroup = ({ children }) => {
  return (
    <div
      className={classNames(
        'button-group'
      )}
      >
      {children}
    </div>
  )
}

ButtonGroup.propTypes = {
  children: PropTypes.node.isRequired
}

export default ButtonGroup
