import React from 'react'

import Minimal from '../../../layout/minimal/Minimal'
import Heading from '../../../component/heading/Heading'
import Button from '../../../component/button/Button'
import Field from '../../../component/field/Field'

const LoginPage = () => {
  return (
    <Minimal>
      <Heading size="huge">Login</Heading>

      <form
        action=""
        method="get"
        >

        <Field
          label="Email address"
          name="emailAddress"
          required
          type="text"
        />

        <Field
          label="Password"
          name="password"
          required
          type="password"
        />

        <Button type="submit">Submit</Button>
      </form>
    </Minimal>
  )
}

export default LoginPage
