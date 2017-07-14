import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Highlighter from 'react-highlight-words'

import Menu from './Menu'
import MenuSearch from './MenuSearch'
import MenuItem from './MenuItem'

class MenuMultiSelect extends Component {
  constructor () {
    super()

    this.state = {
      selected: [],
      filter: ''
    }

    this.handleSearch = this.handleSearch.bind(this)
    this.handleSelect = this.handleSelect.bind(this)
  }

  handleSearch (e) {
    this.setState({ filter: e.target.value })
  }

  handleSelect (e) {
    const id = e.currentTarget.id
    const idIndex = this.state.selected.indexOf(id)
    let selected = []

    if (idIndex > -1) {
      // Already selected - remove from selected array
      selected = [
        ...this.state.selected.slice(0, idIndex),
        ...this.state.selected.slice(idIndex + 1, this.state.selected.length)
      ]
    } else {
      // Add to selection
      selected = [ ...this.state.selected, id ]
    }

    this.setState({ selected })
    this.props.onSelection(selected)
  }

  render () {
    const { children, maxHeight, search } = this.props

    return (
      <Menu
        {...this.props}
        >
        {search &&
          <MenuSearch onChange={this.handleSearch} />
        }
        <div
          style={{ ...maxHeight && { maxHeight, overflowY: 'auto' } }}
          >
          {React.Children.map(children, (child, i) => {
            if (child.type !== MenuItem) return child

            const searchFields = [ 'text', 'subText' ]
            const formattedFields = {}

            if (this.state.filter.length >= 3) {
              searchFields.map((searchField) => {
                const rawField = child.props[searchField]
                if (!rawField) return
                const matches = rawField.toLowerCase().includes(this.state.filter.toLowerCase())
                if (!matches) return
                formattedFields[searchField] = <Highlighter searchWords={[ this.state.filter ]} textToHighlight={rawField} autoEscape />
              })
              if (Object.keys(formattedFields).length === 0) return null
            }

            return React.cloneElement(child, {
              ...formattedFields,
              selected: this.state.selected.indexOf(child.props.id) > -1,
              onClick: this.handleSelect
            })
          })}
        </div>
      </Menu>
    )
  }
}

MenuMultiSelect.propTypes = {
  children: PropTypes.node.isRequired,
  search: PropTypes.bool,
  maxHeight: PropTypes.number,
  onSelection: PropTypes.func.isRequired
}

export default MenuMultiSelect
