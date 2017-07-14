import React from 'react'
import PropTypes from 'prop-types'
import './MenuSearch.styl'

import Control from '../control/Control'

const MenuHeading = ({ onChange }) => (
  <div className="menu-search">
    <form>
      <Control
        autoComplete="off"
        name="search"
        onChange={onChange}
        placeholder="Filter…"
        type="search"
      />
    </form>
  </div>
)

MenuHeading.propTypes = {
  onChange: PropTypes.func.isRequired
}

export default MenuHeading
