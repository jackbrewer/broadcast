import React, { Component } from 'react'
import PropTypes from 'prop-types'

import List from '../list/List'
import ListHeader from '../list/ListHeader'
import ListBody from '../list/ListBody'

class SortableList extends Component {
  constructor () {
    super()

    this.state = {
      sortField: '',
      sortDirection: ''
    }

    this.isSorted = this.isSorted.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

  isSorted (field) {
    if (field !== this.state.sortField) return
    return this.state.sortDirection
  }

  handleClick (field) {
    let direction = 'asc'
    if (this.state.sortField === field && this.state.sortDirection !== 'desc') {
      direction = 'desc'
    }
    this.setState({
      sortField: field,
      sortDirection: direction
    })
  }

  render () {
    const { headings, data } = this.props
    return (
      <List>
        <ListHeader>
          {headings.map(heading => {
            return React.cloneElement(heading, {
              handleClick: () => this.handleClick(heading.key),
              sortField: this.state.sortField,
              sortDirection: this.isSorted(heading.key)
            })
          })}
        </ListHeader>

        <ListBody>
          {data
            .sort((a, b) => {
              if (!this.state.sortField) return
              return a.props[this.state.sortField] > b.props[this.state.sortField]
                ? this.state.sortDirection === 'asc' ? 1 : -1
                : this.state.sortDirection === 'asc' ? -1 : 1
            })
          }
        </ListBody>

      </List>
    )
  }
}

SortableList.propTypes = {
  headings: PropTypes.arrayOf(PropTypes.node),
  data: PropTypes.arrayOf(PropTypes.node)
}

export default SortableList
