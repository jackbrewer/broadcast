import React from 'react'
// import classNames from 'classnames'
import PropTypes from 'prop-types'
import './WidgetPickerItem.styl'

import Icon from '../icon/Icon'

const WidgetPickerItem = ({ icon, type }) => {
  return (
    <button
      className="widget-picker__item text-button"
      type="button"
      >

      <div className="flag">
        {icon &&
          <div className="flag__image">
            <Icon type={icon} width={24} height={24} />
          </div>
        }
        <div className="flag__body">
          {type}
        </div>
      </div>
    </button>
  )
}

WidgetPickerItem.propTypes = {
  type: PropTypes.string.isRequired,
  icon: PropTypes.string
}

export default WidgetPickerItem
