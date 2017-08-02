import React from 'react'
import './WidgetPicker.styl'

import WidgetPickerItem from './WidgetPickerItem'

const WidgetPicker = () => {
  return (
    <div className="widget-picker">
      <WidgetPickerItem icon="text" type="Text" />
      <WidgetPickerItem icon="photo" type="Image" />
      <WidgetPickerItem icon="video" type="Video" />
      <WidgetPickerItem icon="quote" type="Quote" />
      <WidgetPickerItem icon="gallery" type="Gallery" />
      <WidgetPickerItem icon="rule" type="Rule" />
    </div>
  )
}

export default WidgetPicker
