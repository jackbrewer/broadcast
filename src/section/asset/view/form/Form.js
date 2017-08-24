import React from 'react'

import Button from '../../../../component/button/Button'
import Field from '../../../../component/field/Field'
import Form from '../../../../component/form/Form'
import Heading from '../../../../component/heading/Heading'

function handleSubmit (e, data) {
  e.preventDefault()
  alert('Form submitted: ' + JSON.stringify(data, null, 2)) // eslint-disable-line no-undef
}

const FormView = () => (
  <Form action="" method="post" onSubmit={handleSubmit}>
    <Heading level={2}>Asset Details</Heading>
    <div className="grid grid--sticky">
      <div className="grid__item desktop-one-half">
        <img src="https://img.clock.co.uk/800x450" />
        <dl>
          <dt>Filename: </dt>
          <dd>IMG_1234.jpg</dd>
          <dt>Filesize: </dt>
          <dd>1.4MB</dd>
          <dt>Dimensions:</dt>
          <dd>1024 x 768</dd>
        </dl>
        <Button>View fullsize</Button>
      </div>
      <div className="grid__item desktop-one-half">
        <Field
          label="Description"
          type="text"
          name="description"
          autoFocus
          required
          assistance="A brief description of the image contents, used to improve accessibility for sight-impaired users."
          value=""
        />
        <Field
          label="Caption"
          type="text"
          name="caption"
          value=""
          assistance="Displayed alongside the image"
        />
        <Field
          label="Credit"
          type="text"
          name="credit"
          value=""
        />
        <Field
          label="Credit link"
          type="text"
          name="creditLink"
          value=""
        />
        <Button type="submit">Save</Button>
      </div>
    </div>
  </Form>
)

export default FormView
