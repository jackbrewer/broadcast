import React, { Component } from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import './Search.styl'

import Button from '../button/Button'
import Control from '../control/Control'

class Search extends Component {
  constructor () {
    super()

    this.state = {
      search: ''
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange (e) {
    this.setState({ search: e.target.value })
  }

  render () {
    const { className, handleSubmit, modifiers, placeholder } = this.props

    const searchClassNames = classNames(
      'search',
      modifiers && modifiers.map(modifierClass => `search--${modifierClass}`),
      className
    )

    return (
      <form
        className={searchClassNames}
        onSubmit={handleSubmit}
        >
        <div className="is-vhidden">{placeholder}</div>
        <Control
          type="text"
          name="search"
          modifiers={[ 'compact' ]}
          onChange={this.handleChange}
          value={this.state.search}
          placeholder={placeholder}
          />
        <div className="search__action">
          <Button
            type="submit"
            modifiers={[ 'inverse' ]}
            disabled={!this.state.search}
            >
            Search
          </Button>
        </div>
      </form>
    )
  }
}

Search.propTypes = {
  className: PropTypes.string,
  handleSubmit: PropTypes.func,
  modifiers: PropTypes.arrayOf(PropTypes.string),
  placeholder: PropTypes.string
}

export default Search
