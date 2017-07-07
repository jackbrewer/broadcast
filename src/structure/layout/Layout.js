import React, { Component } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import '../../asset/stylus/index.styl'
import './Layout.styl'

// Layout Components
import DocumentHead from '../document-head/DocumentHead'
import A11yNavigation from '../a11y-navigation/A11yNavigation'
import Toolbar from '../toolbar/Toolbar'
import Header from '../header/Header'
import Navigation from '../navigation/Navigation'
import UserNavigation from '../user-navigation/UserNavigation'
import Content from '../content/Content'

class Layout extends Component {
  render () {
    return (
      <Router>
        <div className="layout">

          <DocumentHead />
          <A11yNavigation />

          <div className="layout__item">
            <Header />
            <UserNavigation />
            <Navigation />
          </div>

          <div className="layout__item layout__item--grow">
            <Toolbar />
            <Content />
          </div>

        </div>
      </Router>
    )
  }
}

export default Layout
