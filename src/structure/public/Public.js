import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './Public.styl'

import LoginPage from '../../page/public/LoginPage'

class Public extends Component {
  render () {
    return (
      <Router>
        <div className="public">
          <div className="public__inner">
            <Switch>
              <Route component={LoginPage} />
            </Switch>
          </div>
        </div>
      </Router>
    )
  }
}

export default Public
