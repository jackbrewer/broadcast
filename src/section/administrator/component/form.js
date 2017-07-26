import React, { Component } from 'react'

import Default from '../../../layout/default/Default'

import Heading from '../../../component/heading/Heading'
import ButtonGroup from '../../../component/button-group/ButtonGroup'
import Button from '../../../component/button/Button'
import Toolbar from '../../../component/toolbar/Toolbar'

import Panel from '../../../component/panel/Panel'
import Field from '../../../component/field/Field'

class AdministratorForm extends Component {
  constructor () {
    super()

    this.state = {}
  }

  render () {
    const toolbar = (
      <Toolbar>
        <ButtonGroup>
          <Button href="/administrator" modifiers={[ 'inverse' ]}>
            Back to list
          </Button>
        </ButtonGroup>
      </Toolbar>
    )

    return (
      <Default toolbar={toolbar}>
        <Heading size="huge">New Administrator</Heading>

        <form action="" method="post">

          <Panel>
            <Heading level={2}>User Details</Heading>
            <Field
              label="First name"
              type="text"
              name="firstName"
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
          </Panel>
          <Panel>
            <Heading level={2}>Access level</Heading>
            <Field
              label="Email address"
              type="select"
              name="emailAddress"
              options={[
                { text: 'Account One', value: 'one' },
                { text: 'Account Two', value: 'two' },
                { text: 'Account Three', value: 'three' }
              ]}
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
          </Panel>
        </form>
      </Default>
    )
  }
}

export default AdministratorForm
