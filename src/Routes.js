import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'

import ScrollToTop from './layout/scroll-to-top/ScrollToTop'

// Site Pages
import IndexPage from './page/IndexPage'
import NotFoundPage from './page/NotFoundPage'

// Component Pages
import ArticleForm from './page/page/ArticleForm'

class Routes extends Component {
  render () {
    return (
      <ScrollToTop>
        <Switch>
          <Route exact path="/" component={IndexPage} />

          <Route exact path="/page/article-form" component={ArticleForm} />

          <Route component={NotFoundPage} />
        </Switch>
      </ScrollToTop>
    )
  }
}

export default Routes
