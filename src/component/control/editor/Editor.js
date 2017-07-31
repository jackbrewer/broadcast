import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import './RichText.styl'

import { Editor } from 'react-draft-wysiwyg'
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'

const RichText = ({ children, className, modifiers }) => {
  const richTextClassNames = classNames(
    'rich-text',
    modifiers && modifiers.map(modifierClass => `rich-text--${modifierClass}`),
    className
  )

  return (
    <div
      className={richTextClassNames}
      >
      <Editor />
    </div>
  )
}

RichText.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  modifiers: PropTypes.arrayOf(PropTypes.string)
}

export default RichText
