import React from 'react'
import { storiesOf } from '@storybook/react'

import Field from './Field'

const stories = storiesOf('Field', module)

stories.add('Standard Text',
  () =>
    <div>
      <Field
        label="Standard Text"
        name="exampleText"
        type="text"
        assistance="Some assistive text"
      />
      <hr />
      <Field
        label="Standard Text"
        name="exampleText"
        type="text"
        required
        assistance="Some assistive text"
        error="This field is required"
      />
    </div>
)

stories.add('Standard Check',
  () =>
    <div>
      <Field
        label="Standard Check"
        name="exampleCheck"
        type="checkbox"
        assistance="Some assistive text"
        options={[
          { text: 'One', value: 1 },
          { text: 'Two', value: 2 },
          { text: 'Three', value: 3 }
        ]}
      />
      <hr />
      <Field
        label="Standard Check"
        name="exampleCheck"
        type="checkbox"
        assistance="Some assistive text"
        required
        options={[
          { text: 'One', value: 1 },
          { text: 'Two', value: 2 },
          { text: 'Three', value: 3 }
        ]}
        error="Please select at least one option"
      />
    </div>
)
