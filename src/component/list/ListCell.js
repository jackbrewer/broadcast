import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import './ListCell.styl'

const ListCell = ({ align, children, modifiers }) => {
  const listCellClassNames = classNames(
    'list-cell',
    {
      [`list-cell--${align}`]: align
    },
    modifiers && modifiers.map(modifierClass => `list-cell--${modifierClass}`)
  )

  return (
    <div className={listCellClassNames}>
      {children}
    </div>
  )
}

ListCell.propTypes = {
  align: PropTypes.oneOf([ 'left', 'right' ]),
  children: PropTypes.node,
  modifiers: PropTypes.arrayOf(PropTypes.string)
}

export default ListCell
