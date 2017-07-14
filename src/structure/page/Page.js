import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import './Page.styl'

const Page = ({ children, heading, slug }) => (
  <div className="page">
    <div className="content-gutter content-center">

      <Helmet title={heading} />

      <div className="page__header">
        <h1 className="page__heading heading">{heading}</h1>
      </div>

      <div className="page__content">
        {children}
      </div>

    </div>
  </div>
)

Page.propTypes = {
  children: PropTypes.node,
  heading: PropTypes.string.isRequired,
  slug: PropTypes.string
}

export default Page
