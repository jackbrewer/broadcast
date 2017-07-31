import React, { Component } from 'react'

import Default from '../../../layout/default/Default'

import List from './list/List'
import ListToolbar from './list/Toolbar'

import Form from './form/Form'
import FormToolbar from './form/Toolbar'

import Preview from './preview/Preview'

import Overlay from '../../../component/overlay/Overlay'
import Split from '../../../component/split/Split'
import Heading from '../../../component/heading/Heading'
import Snackbar from '../../../component/snackbar/Snackbar'

class ArticleView extends Component {
  constructor () {
    super()
    this.state = {
      overlayActive: false,
      snackbarContent: {}
    }
    this.showOverlay = this.showOverlay.bind(this)
    this.hideOverlay = this.hideOverlay.bind(this)
    this.handleCancel = this.handleCancel.bind(this)
    this.handleSave = this.handleSave.bind(this)
    this.handleSearch = this.handleSearch.bind(this)
  }

  showOverlay () {
    this.setState({ overlayActive: true })
  }

  hideOverlay () {
    this.setState({ overlayActive: false })
  }

  handleCancel () {
    // Check if content entered and prompt
    // if (!window.confirm('Are you sure?')) return
    this.hideOverlay()
  }

  handleSave () {
    // Validate etc
    this.setState({
      snackbarContent: {
        text: 'Your changes were saved'
      }
    })
    this.hideOverlay()
  }

  handleSearch (e) {
    e.preventDefault()
    window.alert(`You searched for ${e.target.search.value}`)
  }

  render () {
    const FormOverlay = (
      <Overlay
        wide
        isActive={this.state.overlayActive}
        toolbar={<FormToolbar handleCancel={this.handleCancel} handleSave={this.handleSave} />}
        handleClose={this.hideOverlay}
        >
        <Split>
          <Form />
          <Preview />
        </Split>
      </Overlay>
    )

    return (
      <Default
        toolbar={<ListToolbar handleShowOverlay={this.showOverlay} handleSearch={this.handleSearch} />}
        overlay={FormOverlay}
        >
        <Heading size="huge">Articles</Heading>
        <List />
        <Snackbar {...this.state.snackbarContent} />
      </Default>
    )
  }
}

export default ArticleView
