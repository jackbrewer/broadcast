import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'

// Site Pages
import Dashboard from './section/dashboard/view/Dashboard'
import NotFound from './section/not-found/view/NotFound'

import Login from './section/user/component/login'

// Component Pages
import ArticleIndex from './section/article/view/Article'
import AdministratorIndex from './section/administrator/view/Administrator'

class Routes extends Component {
  render () {
    return (
      <Switch>
        <Route exact path="/login" component={Login} />

        <Route exact path="/" component={Dashboard} />
        <Route exact path="/article" component={ArticleIndex} />
        <Route exact path="/administrator" component={AdministratorIndex} />

        <Route component={NotFound} />
      </Switch>
    )
  }
}

export default Routes
