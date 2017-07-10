import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'

import ScrollToTop from './structure/scroll-to-top/ScrollToTop'

// Site Pages
import IndexPage from './page/IndexPage'
import NotFoundPage from './page/NotFoundPage'

// Component Pages
import ArticleForm from './page/page/ArticleForm'
import ListPage from './page/page/ListPage'

class Routes extends Component {
  render () {
    return (
      <ScrollToTop>
        <Switch>
          <Route exact path="/" component={IndexPage} />

          <Route exact path="/page/article-form" component={ArticleForm} />
          <Route exact path="/page/list-page" component={ListPage} />

          <Route component={NotFoundPage} />
        </Switch>
      </ScrollToTop>
    )
  }
}

export default Routes
