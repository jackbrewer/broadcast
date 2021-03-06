import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import './Overlay.styl'

import { CSSTransitionGroup } from 'react-transition-group'

import Content from '../../structure/content/Content'

const Overlay = ({ children, handleClose, isActive, toolbar, wide }) => (
  <CSSTransitionGroup
    transitionName="overlay-reveal"
    transitionEnterTimeout={300}
    transitionLeaveTimeout={300}
    >
    {isActive &&
      <div className={classNames(
          'overlay',
          { 'overlay--wide': wide }
        )}>
        <div
          className="overlay__backdrop"
          onClick={handleClose}
          />
        <div className="overlay__inner">
          {toolbar &&
            <div className="overlay__toolbar">
              {toolbar}
            </div>
          }
          <Content>
            {children}
          </Content>
        </div>
      </div>
    }
  </CSSTransitionGroup>
)

Overlay.propTypes = {
  children: PropTypes.node.isRequired,
  handleClose: PropTypes.func.isRequired,
  isActive: PropTypes.bool,
  toolbar: PropTypes.node,
  wide: PropTypes.bool
}

export default Overlay
