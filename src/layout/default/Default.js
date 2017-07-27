import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import './Default.styl'

// Default Components
import DocumentHead from '../../structure/document-head/DocumentHead'
import A11yNavigation from '../../structure/a11y-navigation/A11yNavigation'
import Header from '../../structure/header/Header'
import Navigation from '../../structure/navigation/Navigation'
import UserNavigation from '../../structure/user-navigation/UserNavigation'
import Content from '../../structure/content/Content'

const Default = ({ children, overlay, toolbar }) => {
  const overlayActive = overlay && overlay.props.isActive

  return (
    <div className="default">

      <DocumentHead />
      <A11yNavigation />

      <div className="default__item default__item--sidebar">
        <Header />
        <UserNavigation />
        <Navigation />
      </div>

      <div className="default__item default__item--grow">

        <div className="default__content-wrapper">
          <div
            className={classNames(
              'default__content-wrapper-inner',
              { 'is-blurred': overlayActive }
            )}
            >
            {toolbar}
            <Content>
              {children}
            </Content>
          </div>
          {overlay}
        </div>
      </div>

    </div>
  )
}

Default.propTypes = {
  children: PropTypes.node,
  overlay: PropTypes.node,
  toolbar: PropTypes.node
}

export default Default
