import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'

// Site Pages
import Dashboard from './section/dashboard/component/index'
import NotFound from './section/not-found/component/index'

import Login from './section/user/component/login'

// Component Pages
import ArticleForm from './section/article/component/form'
import AdministratorList from './section/administrator/component/list'
import AdministratorForm from './section/administrator/component/form'

class Routes extends Component {
  render () {
    return (
      <Switch>
        <Route exact path="/login" component={Login} />

        <Route exact path="/" component={Dashboard} />
        <Route exact path="/article/form" component={ArticleForm} />
        <Route exact path="/administrator" component={AdministratorList} />
        <Route exact path="/administrator/form" component={AdministratorForm} />

        <Route component={NotFound} />
      </Switch>
    )
  }
}

export default Routes
