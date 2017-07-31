import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import './RichTextDraft.styl'
import './RichTextRdw.styl'
import './RichTextCustom.styl'

import toolbarOptions from './toolbar-options'
import { Editor } from 'react-draft-wysiwyg'

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
      <Editor
        toolbar={toolbarOptions}
        spellCheck
        stripPastedStyles
      />
    </div>
  )
}

RichText.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  modifiers: PropTypes.arrayOf(PropTypes.string)
}

export default RichText
