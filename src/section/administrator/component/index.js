import React, { Component } from 'react'

import Default from '../../../layout/default/Default'

import ListView from './list'
import FormView from './form'

import Toolbar from '../../../component/toolbar/Toolbar'
import Overlay from '../../../component/overlay/Overlay'
import ButtonGroup from '../../../component/button-group/ButtonGroup'
import Button from '../../../component/button/Button'
import Heading from '../../../component/heading/Heading'

class AdministratorView extends Component {
  constructor () {
    super()
    this.state = {
      overlayActive: false
    }
    this.showOverlay = this.showOverlay.bind(this)
    this.hideOverlay = this.hideOverlay.bind(this)
  }

  showOverlay () {
    this.setState({ overlayActive: true })
  }

  hideOverlay () {
    this.setState({ overlayActive: false })
  }

  render () {
    const listToolbar = (
      <Toolbar>
        <ButtonGroup>
          <Button onClick={this.showOverlay} modifiers={[ 'inverse' ]}>
            Add New
          </Button>
        </ButtonGroup>
      </Toolbar>
    )

    const formToolbar = (
      <Toolbar modifiers={[ 'light' ]}>
        <ButtonGroup>
          <Button onClick={this.hideOverlay} modifiers={[ 'inverse' ]}>
            Back
          </Button>
        </ButtonGroup>
        <ButtonGroup>
          <Button onClick={this.hideOverlay}>
            Save
          </Button>
        </ButtonGroup>
      </Toolbar>
    )

    const formOverlay = (
      <Overlay
        isActive={this.state.overlayActive}
        toolbar={formToolbar}
        handleClose={this.hideOverlay}
        >
        <FormView />
      </Overlay>
    )

    return (
      <Default
        toolbar={listToolbar}
        overlay={formOverlay}
        >
        <Heading size="huge">Administrators</Heading>
        <ListView />
      </Default>
    )
  }
}

export default AdministratorView
