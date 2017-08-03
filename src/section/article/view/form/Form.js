import React from 'react'

import Form from '../../../../component/form/Form'
import Heading from '../../../../component/heading/Heading'
import Field from '../../../../component/field/Field'
import Button from '../../../../component/button/Button'

import WidgetForm from '../../../../component/widget-form/WidgetForm'
import WidgetPicker from '../../../../component/widget-picker/WidgetPicker'

function handleSubmit (e, data) {
  e.preventDefault()
  alert('Form submitted: ' + JSON.stringify(data, null, 2)) // eslint-disable-line no-undef
}

const FormView = () => (
  <Form action="" method="post" onSubmit={handleSubmit}>
    <Heading level={2}>Basic Details</Heading>

    <Field
      label="Headline"
      name="headline"
      required
      type="text"
      value=""
    />

    <Field
      label="Short Headline"
      name="shortHeadline"
      type="text"
      value=""
    />

    <Field
      label="Slug"
      name="slug"
      required
      type="text"
      value=""
    />

    <Heading level={2}>Content</Heading>

    <WidgetForm type="Text" icon="text" />
    <WidgetForm type="Image" icon="photo" />

    <WidgetPicker />

    <Button type="submit">Save</Button>

  </Form>
)

export default FormView
