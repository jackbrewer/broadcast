import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import './ListHeading.styl'

// TODO: This component is very similar to ListCell. Once all feature are added
// (sprting etc), see if this can still extend ListCell to reduce duplication

const ListHeading = ({ align, children, modifiers }) => {
  const listHeadingClassNames = classNames(
    'list-heading',
    {
      [`list-heading--${align}`]: align
    },
    modifiers && modifiers.map(modifierClass => `list-heading--${modifierClass}`)
  )

  return (
    <div className={listHeadingClassNames}>
      {children}
    </div>
  )
}

ListHeading.propTypes = {
  align: PropTypes.oneOf([ 'left', 'right' ]),
  children: PropTypes.node,
  modifiers: PropTypes.arrayOf(PropTypes.string)
}

export default ListHeading
