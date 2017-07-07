import React, { Component } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import '../../asset/stylus/index.styl'

// Layout Components
import DocumentHead from '../document-head/DocumentHead'
import A11yNavigation from '../a11y-navigation/A11yNavigation'
import PreHeader from '../pre-header/PreHeader'
import Header from '../header/Header'
import Navigation from '../navigation/Navigation'
import UserNavigation from '../user-navigation/UserNavigation'
import Routes from '../../Routes'

class App extends Component {
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
            <PreHeader />
            <main className="main-content" id="content" role="main">
              <Routes />
            </main>
          </div>

        </div>
      </Router>
    )
  }
}

export default App
