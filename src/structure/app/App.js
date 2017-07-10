import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import '../../asset/stylus/index.styl'

import Layout from '../layout/Layout'
import Public from '../public/Public'

class App extends Component {
  render () {
    return (
      <Router>

        <Switch>
          <Route exact path="/login" component={Public} />

          <Route component={Layout} />
        </Switch>

      </Router>
    )
  }
}

export default App
