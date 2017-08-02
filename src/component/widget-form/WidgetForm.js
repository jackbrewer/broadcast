import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import './WidgetForm.styl'

import Icon from '../icon/Icon'
import Field from '../field/Field'
import Button from '../button/Button'

const WidgetForm = ({ children, className, icon, modifiers, type }) => {
  const widgetClassNames = classNames(
    'widget-form',
    modifiers && modifiers.map(modifierClass => `widget-form--${modifierClass}`),
    className
  )

  return (
    <div
      className={widgetClassNames}
      >
      <button
        className="widget-form__header text-button"
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

      <form className="widget-form__content">
        <Field
          label="One"
          name="one"
          required
          type="text"
          autoFocus
        />

        <Field
          label="Two"
          name="two"
          required
          type="text"
        />

        <div className="auto-justify">
          <div className="auto-justify__item">
            <Button type="button" modifiers={[ 'inverse' ]}>Cancel</Button>
          </div>
          <div className="auto-justify__item">
            <Button type="submit">Save</Button>
          </div>
        </div>
      </form>
    </div>
  )
}

WidgetForm.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  icon: PropTypes.string,
  modifiers: PropTypes.arrayOf(PropTypes.string),
  type: PropTypes.string.isRequired
}

export default WidgetForm
