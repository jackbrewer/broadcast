import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import classNames from 'classnames'
import './SiteTitle.styl'

import Icon from '../../component/icon/Icon'

const SiteTitle = ({ href, isFeature }) => {
  const siteTitleClasses = classNames('site-title', { 'site-title--feature': isFeature })
  const SiteTitleEl = href ? Link : 'div'
  return (
    <SiteTitleEl
      className={siteTitleClasses}
      {...href && { to: href }}
      >
      <Icon type="pick" width={30} height={37} />
      Picks <span>Backline</span>
    </SiteTitleEl>
  )
}

SiteTitle.defaultProps = {
  isFeature: false
}

SiteTitle.propTypes = {
  href: PropTypes.string,
  isFeature: PropTypes.bool
}

export default SiteTitle
