import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import './ListHeading.styl'

import Icon from '../icon/Icon'

// TODO: This component is very similar to ListCell. Once all feature are added
// (sprting etc), see if this can still extend ListCell to reduce duplication

const ListHeading = ({ align, children, handleClick, sortable, sortDirection, modifiers }) => {
  const listHeadingClassNames = classNames(
    'list-heading',
    {
      [`list-heading--${align}`]: align,
      'list-heading--sortable': sortable
    },
    modifiers && modifiers.map(modifierClass => `list-heading--${modifierClass}`)
  )

  return (
    <div className={listHeadingClassNames} onClick={sortable && handleClick}>
      {children}
      {sortDirection === 'asc' && <Icon type={'arrow-down'} />}
      {sortDirection === 'desc' && <Icon type={'arrow-up'} />}
    </div>
  )
}

ListHeading.propTypes = {
  align: PropTypes.oneOf([ 'left', 'center', 'right' ]),
  children: PropTypes.node,
  handleClick: PropTypes.func,
  modifiers: PropTypes.arrayOf(PropTypes.string),
  sortable: PropTypes.bool,
  sortDirection: PropTypes.oneOf([ 'asc', 'desc' ])
}

export default ListHeading
