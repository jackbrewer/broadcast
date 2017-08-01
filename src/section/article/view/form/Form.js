import React from 'react'

import Heading from '../../../../component/heading/Heading'
import Field from '../../../../component/field/Field'

import WidgetPicker from '../../../../component/widget-picker/WidgetPicker'

const FormView = () => (
  <form action="" method="post">
    <Heading level={2}>Basic Details</Heading>

    <Field
      label="Headline"
      name="headline"
      required
      type="text"
      autoFocus
    />

    <Field
      label="Short Headline"
      name="shortHeadline"
      required
      type="text"
    />

    <Field
      label="Slug"
      name="slug"
      required
      type="text"
    />

    <Heading level={2}>Content</Heading>

    <WidgetPicker />

  </form>
)

export default FormView
