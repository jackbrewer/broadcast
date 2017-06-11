import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'

import ScrollToTop from './layout/scroll-to-top/ScrollToTop'

// Site Pages
import IndexPage from './page/IndexPage'
import NotFoundPage from './page/NotFoundPage'

// Component Pages
import UiPage from './page/ui/UiPage'

class Routes extends Component {
  render () {
    return (
      <ScrollToTop>
        <Switch>
          <Route exact path="/" component={IndexPage} />

          <Route exact path="/ui" component={UiPage} />

          <Route component={NotFoundPage} />
        </Switch>
      </ScrollToTop>
    )
  }
}

export default Routes
