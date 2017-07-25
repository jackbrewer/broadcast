import React from 'react'
import './Toolbar.styl'

import ButtonGroup from '../../component/button-group/ButtonGroup'
import Button from '../../component/button/Button'

const Toolbar = () => (
  <div className="toolbar">
    <div className="toolbar__inner">
      <ButtonGroup>
        <Button modifiers={[ 'inverse' ]}>
          Example
        </Button>
      </ButtonGroup>
    </div>
  </div>
)

export default Toolbar
