import React from 'react'
import { storiesOf } from '@storybook/react'

import Control from './Control'

const stories = storiesOf('Control', module)

stories.add('Text',
  () =>
    <div>
      <Control
        name="exampleText"
        type="text"
      />
    </div>
)

stories.add('Date',
  () =>
    <div>
      <Control
        name="exampleDate"
        type="date"
      />
    </div>
)

stories.add('Textarea',
  () =>
    <div>
      <Control
        name="exampleTextarea"
        type="textarea"
        rows="5"
      />
    </div>
)

stories.add('File',
  () =>
    <div>
      <Control
        name="exampleFile"
        type="file"
        accept="image/jpeg"
      />
    </div>
)

stories.add('Select',
  () =>
    <div>
      <Control
        name="exampleName"
        type="select"
        options={[
          { text: 'One', value: 1 },
          { text: 'Two', value: 2 },
          { text: 'Three', value: 3, disabled: true }
        ]}
      />
      <hr />
      <Control
        name="exampleName"
        type="select"
        options={[
          { text: 'One', value: 1 },
          { text: 'Two', value: 2 },
          { text: 'Three', value: 3 }
        ]}
        defaultValue="2"
      />
    </div>
)

stories.add('Check',
  () =>
    <div>
      <Control
        name="exampleName"
        type="checkbox"
        options={[
          { text: 'One', value: 1 },
          { text: 'Two', value: 2 },
          { text: 'Three', value: 3, disabled: true }
        ]}
      />
      <hr />
      <Control
        name="exampleName"
        type="radio"
        options={[
          { text: 'One', value: 1 },
          { text: 'Two', value: 2 },
          { text: 'Three', value: 3, disabled: true }
        ]}
      />
    </div>
)

stories.add('Other',
  () =>
    <div>
      <Control
        name="exampleEmail"
        type="email"
        placeholder="name@example.com"
      />
      <hr />
      <Control
        name="examplePassword"
        type="password"
        placeholder="Password"
        required
      />
      <hr />
      <Control
        name="exampleNumber"
        type="number"
        placeholder="0"
        min="0"
        max="20"
      />
    </div>
)
