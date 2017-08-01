import React from 'react'
import './WidgetPicker.styl'

import WidgetPickerItem from './WidgetPickerItem'

const WidgetPicker = () => {
  return (
    <div className="widget-picker">
      <WidgetPickerItem icon="text" name="Text" />
      <WidgetPickerItem icon="photo" name="Image" />
      <WidgetPickerItem icon="video" name="Video" />
      <WidgetPickerItem icon="quote" name="Quote" />
      <WidgetPickerItem icon="gallery" name="Gallery" />
      <WidgetPickerItem icon="rule" name="Rule" />
    </div>
  )
}

export default WidgetPicker
