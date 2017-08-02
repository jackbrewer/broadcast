import React from 'react'

import Heading from '../../../../component/heading/Heading'
import Field from '../../../../component/field/Field'

import WidgetForm from '../../../../component/widget-form/WidgetForm'
import WidgetPicker from '../../../../component/widget-picker/WidgetPicker'

const FormView = () => (
  <form action="" method="post">
    <Heading level={2}>Basic Details</Heading>

    <Field
      label="Headline"
      name="headline"
      required
      type="text"
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

    <WidgetForm type="Text" icon="text" />
    <WidgetForm type="Image" icon="photo" />

    <WidgetPicker />

  </form>
)

export default FormView
