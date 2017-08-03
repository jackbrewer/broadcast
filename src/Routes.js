import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'

// Site Pages
import Dashboard from './section/dashboard/view/Dashboard'
import NotFound from './section/not-found/view/NotFound'

import Login from './section/user/component/login'

// Component Pages
import AdministratorIndex from './section/administrator/view/Administrator'
import ArticleIndex from './section/article/view/Article'
import AssetIndex from './section/asset/view/Asset'

class Routes extends Component {
  render () {
    return (
      <Switch>
        <Route exact path="/login" component={Login} />

        <Route exact path="/" component={Dashboard} />
        <Route exact path="/administrator" component={AdministratorIndex} />
        <Route exact path="/article" component={ArticleIndex} />
        <Route exact path="/asset" component={AssetIndex} />

        <Route component={NotFound} />
      </Switch>
    )
  }
}

export default Routes
