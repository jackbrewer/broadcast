import React from 'react'
import PropTypes from 'prop-types'
import './MenuHeading.styl'

const MenuHeading = ({ text }) => (
  <h6 className="menu-heading">
    {text}
  </h6>
)

MenuHeading.propTypes = {
  text: PropTypes.string.isRequired
}

export default MenuHeading
