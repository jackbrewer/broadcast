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
    <Heading level={2}>User Details</Heading>
    <Field
      label="First name"
      type="text"
      name="firstName"
      autoFocus
      value=""
    />
    <Field
      label="Last name"
      type="text"
      name="lastName"
      value=""
    />
    <Field
      label="Email address"
      type="email"
      name="emailAddress"
      value=""
    />
    <Heading level={2}>Access level</Heading>
    <Field
      label="Account"
      type="select"
      name="account"
      options={[
        { text: 'Account One', value: 'one' },
        { text: 'Account Two', value: 'two' },
        { text: 'Account Three', value: 'three' }
      ]}
      value=""
      assistance="Leave blank if the user needs to access all accounts."
    />
    <Field
      label="Roles"
      type="checkbox"
      name="roles"
      options={[
        { text: 'Root', value: 'root' },
        { text: 'Editor', value: 'editor' },
        { text: 'Read only', value: 'readOnly' }
      ]}
      value={[]}
    />
    <Button type="submit">Save</Button>
  </Form>
)

export default FormView
