import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Highlighter from 'react-highlight-words'
import './MultiSelect.styl'

import MultiSelectSearch from './MultiSelectSearch'
import MultiSelectList from './MultiSelectList'
import MultiSelectSummary from './MultiSelectSummary'
import Menu from '../menu/Menu'

class MultiSelect extends Component {
  constructor (props) {
    super(props)

    this.state = {
      selected: props.selected || [],
      filter: ''
    }

    this.handleSearch = this.handleSearch.bind(this)
    this.handleClearSearch = this.handleClearSearch.bind(this)
    this.handleSelect = this.handleSelect.bind(this)
    this.handleResetSelected = this.handleResetSelected.bind(this)
    this.formatChild = this.formatChild.bind(this)
  }

  handleSearch (e) {
    const filter = e.target.value.replace(/^ /, '').replace('  ', ' ')
    this.setState({ filter })
  }

  handleClearSearch (e) {
    this.setState({ filter: '' })
  }

  handleSelect (e) {
    const value = e.currentTarget.dataset.value
    const valueIndex = this.state.selected.indexOf(value)
    let selected = []

    if (valueIndex > -1) {
      // Already selected - remove from selected array
      selected = [
        ...this.state.selected.slice(0, valueIndex),
        ...this.state.selected.slice(valueIndex + 1, this.state.selected.length)
      ]
    } else {
      // Add to selection
      selected = [ ...this.state.selected, value ]
    }

    this.setState({ selected })
    this.props.onSelection(selected)
  }

  handleResetSelected () {
    this.setState({ selected: [] })
    this.props.onSelection([])
  }

  formatChild (child, i) {
    const { searchFields } = this.props

    const formattedFields = {}
    searchFields.map((searchField) => {
      const rawField = child.props[searchField]
      if (!rawField) return
      const matches = rawField.toLowerCase().includes(this.state.filter.toLowerCase())
      if (!matches) return
      formattedFields[searchField] = (
        <Highlighter
          searchWords={[ this.state.filter ]}
          textToHighlight={rawField}
          autoEscape
          highlightClassName="multi-select__mark"
        />
      )
    })

    return formattedFields
  }

  render () {
    const { children, maxHeight, minSearchChars, search, summary } = this.props
    const searchActive = search && this.state.filter.length >= minSearchChars

    return (
      <Menu
        className="multi-select"
        {...this.props}
        >
        {search &&
          <MultiSelectSearch
            onChange={this.handleSearch}
            onClearSearch={this.handleClearSearch}
            value={this.state.filter}
            />
        }
        <MultiSelectList maxHeight={maxHeight}>
          {React.Children.map(children, (child, i) => {
            let embellishedChildProps = {}

            if (searchActive) {
              embellishedChildProps = this.formatChild(child, i)
              if (!Object.keys(embellishedChildProps).length) return null
            }

            return React.cloneElement(child, {
              ...embellishedChildProps,
              selected: this.state.selected.indexOf(child.props.value) > -1,
              onClick: this.handleSelect
            })
          })}
        </MultiSelectList>

        {summary &&
          <MultiSelectSummary
            selected={this.state.selected}
            onResetSelection={this.handleResetSelected}
            {...this.props}
          />
        }
      </Menu>
    )
  }
}

MultiSelect.defaultProps = {
  minSearchChars: 2,
  searchFields: [ 'text', 'subText' ]
}

MultiSelect.propTypes = {
  children: PropTypes.node.isRequired,
  maxHeight: PropTypes.number,
  minSearchChars: PropTypes.number,
  onSelection: PropTypes.func.isRequired,
  search: PropTypes.bool,
  searchFields: PropTypes.arrayOf(PropTypes.string),
  selected: PropTypes.arrayOf(PropTypes.string),
  summary: PropTypes.bool
}

export default MultiSelect
