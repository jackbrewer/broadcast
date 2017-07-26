import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'

// Site Pages
import Dashboard from './section/dashboard/component/index'
import NotFound from './section/not-found/component/index'

import Login from './section/user/component/login'

// Component Pages
import ArticleForm from './section/article/component/form'
import AdministratorIndex from './section/administrator/component/index'

class Routes extends Component {
  render () {
    return (
      <Switch>
        <Route exact path="/login" component={Login} />

        <Route exact path="/" component={Dashboard} />
        <Route exact path="/article/form" component={ArticleForm} />
        <Route exact path="/administrator" component={AdministratorIndex} />

        <Route component={NotFound} />
      </Switch>
    )
  }
}

export default Routes
