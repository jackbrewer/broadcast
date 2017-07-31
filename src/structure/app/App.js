import React, { Component } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import '../../asset/stylus/index.styl'

import ScrollToTop from '../scroll-to-top/ScrollToTop'

import Routes from '../../Routes.js'

class App extends Component {
  render () {
    return (
      <Router>
        <ScrollToTop>
          <Routes />
        </ScrollToTop>
      </Router>
    )
  }
}

export default App
