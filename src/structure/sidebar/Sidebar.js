import React, { Component } from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import './Sidebar.styl'

import { CSSTransitionGroup } from 'react-transition-group'

import Header from '../../structure/header/Header'
import Navigation from '../../structure/navigation/Navigation'
import UserNavigation from '../../structure/user-navigation/UserNavigation'

import Avatar from '../../component/avatar/Avatar'
import Icon from '../../component/icon/Icon'

class Sidebar extends Component {
  constructor () {
    super()

    this.state = {
      activePanel: ''
    }

    this.togglePanel = this.togglePanel.bind(this)
  }

  togglePanel (type) {
    if (this.state.activePanel === type) {
      this.setState({ activePanel: '' })
      return
    }
    this.setState({ activePanel: type })
  }

  render () {
    const { className, modifiers } = this.props
    const sidebarClassNames = classNames(
      'sidebar',
      modifiers && modifiers.map(modifierClass => `sidebar--${modifierClass}`),
      className
    )

    return (
      <div
        className={sidebarClassNames}
        >
        <div className="sidebar__item sidebar__item--primary">
          <div>
            <Header />
            <button
              className={classNames(
                'sidebar-button',
                { 'is-active': this.state.activePanel === 'navigation' }
              )}
              type="button"
              onClick={() => this.togglePanel('navigation')}
              >
              {this.state.activePanel !== 'navigation' &&
                <Icon type="menu" width={20} height={19} a11yText="Open Navigation" />
              }
              {this.state.activePanel === 'navigation' &&
                <Icon type="arrow-left" width={9} height={13.5} a11yText="Close Navigation" />
              }
            </button>
          </div>
          <button
            className={classNames(
              'sidebar-button',
              { 'is-active': this.state.activePanel === 'user' }
            )}
            type="button"
            onClick={() => this.togglePanel('user')}
            >
            {this.state.activePanel !== 'user' &&
              <Avatar name="Firstname Lastname" size={32} />
            }
            {this.state.activePanel === 'user' &&
              <Icon type="arrow-left" width={9} height={13.5} a11yText="Close Navigation" />
            }
          </button>
        </div>
        <CSSTransitionGroup
          component="div"
          className="sidebar__item sidebar__item--secondary"
          transitionName="sidebar-reveal"
          transitionEnterTimeout={300}
          transitionLeaveTimeout={300}
          >
          {this.state.activePanel !== '' &&
            <div className="sidebar__panel">
              <div className="sidebar__panel-inner">
                {this.state.activePanel === 'navigation' && <Navigation />}
                {this.state.activePanel === 'user' && <UserNavigation />}
              </div>
            </div>
          }
        </CSSTransitionGroup>
      </div>
    )
  }
}

Sidebar.propTypes = {
  className: PropTypes.string,
  modifiers: PropTypes.arrayOf(PropTypes.string)
}

export default Sidebar
