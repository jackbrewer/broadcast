import React from 'react'
import PropTypes from 'prop-types'

import Toolbar from '../../../../component/toolbar/Toolbar'
import ButtonGroup from '../../../../component/button-group/ButtonGroup'
import Button from '../../../../component/button/Button'
import Icon from '../../../../component/icon/Icon'

const FormToolbar = ({ handleCancel, handleSave }) => (
  <Toolbar modifiers={[ 'light' ]}>
    <ButtonGroup>
      <Button onClick={handleCancel} modifiers={[ 'inverse' ]}>
        <Icon type="arrow-left" width={9} height={13.5} /> Back
      </Button>
    </ButtonGroup>
    <ButtonGroup>
      <Button onClick={handleSave}>
        Save
      </Button>
    </ButtonGroup>
  </Toolbar>
)

FormToolbar.propTypes = {
  handleCancel: PropTypes.func.isRequired,
  handleSave: PropTypes.func.isRequired
}

export default FormToolbar
