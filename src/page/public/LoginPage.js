import React from 'react'
import Helmet from 'react-helmet'

import Button from '../../component/button/Button'
import Field from '../../component/field/Field'

const LoginPage = () => {
  return (
    <div className="prose">
      <Helmet title="Article Form" />
      <h1>Login</h1>

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
    </div>
  )
}

export default LoginPage
