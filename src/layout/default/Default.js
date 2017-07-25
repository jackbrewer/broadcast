import React from 'react'
import PropTypes from 'prop-types'
import './Default.styl'

// Default Components
import DocumentHead from '../../structure/document-head/DocumentHead'
import A11yNavigation from '../../structure/a11y-navigation/A11yNavigation'
import Toolbar from '../../structure/toolbar/Toolbar'
import Header from '../../structure/header/Header'
import Navigation from '../../structure/navigation/Navigation'
import UserNavigation from '../../structure/user-navigation/UserNavigation'
import Content from '../../structure/content/Content'

const Default = ({ children }) => {
  return (
    <div className="default">

      <DocumentHead />
      <A11yNavigation />

      <div className="default__item">
        <Header />
        <UserNavigation />
        <Navigation />
      </div>

      <div className="default__item default__item--grow">
        <Toolbar />
        <Content>
          {children}
        </Content>
      </div>

    </div>
  )
}

Default.propTypes = {
  children: PropTypes.node
}

export default Default
