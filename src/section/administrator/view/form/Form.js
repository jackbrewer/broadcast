import React from 'react'

import Heading from '../../../../component/heading/Heading'
import Field from '../../../../component/field/Field'

const FormView = () => (
  <form action="" method="post">
    <Heading level={2}>User Details</Heading>
    <Field
      label="First name"
      type="text"
      name="firstName"
      autoFocus
    />
    <Field
      label="Last name"
      type="text"
      name="lastName"
    />
    <Field
      label="Email address"
      type="email"
      name="emailAddress"
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
      assistance="Leave blank if the user needs to access all accounts."
    />
    <Field
      label="Roles"
      type="checkbox"
      name="emailAddress"
      options={[
        { text: 'Root', value: 'root' },
        { text: 'Editor', value: 'editor' },
        { text: 'Read only', value: 'readOnly' }
      ]}
    />
  </form>
)

export default FormView
