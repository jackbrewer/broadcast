import React from 'react'
import './Content.styl'

import Routes from '../../Routes'

const Content = () => (
  <main className="content" id="content" role="main">
    <div className="content__inner">
      <Routes />
    </div>
  </main>
)

export default Content
