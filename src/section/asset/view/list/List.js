import React from 'react'
import PropTypes from 'prop-types'
// import { Link } from 'react-router-dom'

import Asset from '../../../../component/asset/Asset'
// import ButtonGroup from '../../../../component/button-group/ButtonGroup'
// import Button from '../../../../component/button/Button'
// import Dropdown from '../../../../component/dropdown/Dropdown'
// import Menu from '../../../../component/menu/Menu'
// import MenuItem from '../../../../component/menu/MenuItem'

const ListView = ({ handleEdit }) => {
  return (
    <div className="auto-grid">
      <div className="auto-grid__item">
        <Asset handleClick={handleEdit} />
      </div>
    </div>
  )
}

ListView.propTypes = {
  handleEdit: PropTypes.func.isRequired
}

export default ListView
