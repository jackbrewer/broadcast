import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './Snackbar.styl'
import { CSSTransitionGroup } from 'react-transition-group'

class Snackbar extends Component {
  // componentDidUpdate () {
  //   console.log('Did')
  //   window.setTimeout(() => { console.log('Hello') }, 2000)
  // }

  // componentWillUpdate () {
  //   if (!this.props.text) return
  //   if (this.state.isActive === true) return
  //   this.setState({ isActive: true })
  //   console.log('Will Update')
  // }

  render () {
    const { action, handleClick, text } = this.props
    return (
      <CSSTransitionGroup
        transitionName="snackbar-reveal"
        transitionEnterTimeout={300}
        transitionLeaveTimeout={300}
        >
        {text &&
          <div
            className="snackbar"
            >
            {text}
            {(action && handleClick) &&
              <div className="snackbar__action" onClick={handleClick}>{action}</div>
            }
          </div>
        }
      </CSSTransitionGroup>
    )
  }
}

Snackbar.propTypes = {
  action: PropTypes.string,
  handleClick: PropTypes.func,
  text: PropTypes.string
}

export default Snackbar
