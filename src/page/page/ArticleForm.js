import React from 'react'
import Helmet from 'react-helmet'

import Form from '../../component/form/Form'
import Field from '../../component/field/Field'

const ArticleForm = () => (
  <div className="prose">
    <Helmet title="Article Form" />
    <h1>Article Form</h1>
    <Form
      action=""
      method="get"
      >

      <Field
        label="Headline"
        name="headline"
        required
        type="text"
      />

      <Field
        label="Short Headline"
        name="shortHeadline"
        type="text"
      />

    </Form>
  </div>
)

export default ArticleForm
