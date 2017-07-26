import React from 'react'
import { Link } from 'react-router-dom'

import Default from '../../../layout/default/Default'

import SortableList from '../../../component/sortable-list/SortableList'
import ListHeading from '../../../component/list/ListHeading'
import ListRow from '../../../component/list/ListRow'
import ListCell from '../../../component/list/ListCell'

import Heading from '../../../component/heading/Heading'
import ButtonGroup from '../../../component/button-group/ButtonGroup'
import Button from '../../../component/button/Button'
import Dropdown from '../../../component/dropdown/Dropdown'
import Menu from '../../../component/menu/Menu'
import MenuItem from '../../../component/menu/MenuItem'
import OverflowWrapper from '../../../component/overflow-wrapper/OverflowWrapper'
import Toolbar from '../../../component/toolbar/Toolbar'

const mockItems = [
  {
    name: 'Michael Turner',
    emailAddress: 'michael.turner63@example.com',
    lastLogin: '2 days ago',
    publishedArticles: 1
  },
  {
    name: 'Evan Spencer',
    emailAddress: 'evan.spencer93@example.com',
    lastLogin: '1 day ago',
    publishedArticles: 2
  },
  {
    name: 'Rose Bennett',
    emailAddress: 'rose.bennett64@example.com',
    lastLogin: '5 minutes ago',
    publishedArticles: 10
  },
  {
    name: 'Sue Butler',
    emailAddress: 'sue.butler27@example.com',
    lastLogin: '4 June 2017',
    publishedArticles: 3
  },
  {
    name: 'Marie Stephens',
    emailAddress: 'marie.stephens96@example.com',
    lastLogin: 'Never',
    publishedArticles: 20
  },
  {
    name: 'Jordan Robertson',
    emailAddress: 'jordan.robertson73@example.com',
    lastLogin: '2 days ago',
    publishedArticles: 0
  }
]

const AdministratorList = () => {
  const toolbar = (
    <Toolbar>
      <ButtonGroup>
        <Button href="/administrator/form" modifiers={[ 'inverse' ]}>
          New Administrator
        </Button>
      </ButtonGroup>
    </Toolbar>
  )

  const headings = [
    <ListHeading sortable key="name">Name</ListHeading>,
    <ListHeading sortable key="emailAddress">emailAddress</ListHeading>,
    <ListHeading sortable key="publishedArticles" align="right">publishedArticles</ListHeading>,
    <ListHeading sortable key="lastLogin">lastLogin</ListHeading>,
    <ListHeading key="actions">Actions</ListHeading>
  ]

  const data = mockItems
    .map((row, i) => (
      <ListRow key={`row-${i}`} {...row}>
        <ListCell>
          <Link to="#">{row.name}</Link>
        </ListCell>
        <ListCell>{row.emailAddress}</ListCell>
        <ListCell align="right">{row.publishedArticles}</ListCell>
        <ListCell modifiers={[ 'muted' ]}>{row.lastLogin}</ListCell>
        <ListCell
          align="right"
          modifiers={[ 'shrink', 'nowrap' ]}
          >
          <ButtonGroup>
            <Button>Reset Password</Button>
            <Dropdown>
              <Menu>
                <MenuItem text="Revisions" />
                <MenuItem text="Delete" />
              </Menu>
            </Dropdown>
          </ButtonGroup>
        </ListCell>
      </ListRow>
    ))

  return (
    <Default toolbar={toolbar}>
      <Heading size="huge">Administrators</Heading>
      <OverflowWrapper>
        <SortableList headings={headings} data={data} />
      </OverflowWrapper>
    </Default>
  )
}

export default AdministratorList
