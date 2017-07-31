import React from 'react'
import PropTypes from 'prop-types'

import Button from '../../../../component/button/Button'
import ButtonGroup from '../../../../component/button-group/ButtonGroup'
import Search from '../../../../component/search/Search'
import Toolbar from '../../../../component/toolbar/Toolbar'

const ListToolbar = ({ handleShowOverlay, handleSearch }) => (
  <Toolbar>
    <Search placeholder="Search Articles" handleSubmit={handleSearch} />
    <ButtonGroup>
      <Button onClick={handleShowOverlay} modifiers={[ 'inverse' ]}>
        Add New
      </Button>
    </ButtonGroup>
  </Toolbar>
)

ListToolbar.propTypes = {
  handleSearch: PropTypes.func.isRequired,
  handleShowOverlay: PropTypes.func.isRequired
}

export default ListToolbar
