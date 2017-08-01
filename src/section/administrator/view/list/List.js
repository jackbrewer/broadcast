import React from 'react'
import { Link } from 'react-router-dom'

import SortableList from '../../../../component/sortable-list/SortableList'
import ListHeading from '../../../../component/list/ListHeading'
import ListRow from '../../../../component/list/ListRow'
import ListCell from '../../../../component/list/ListCell'

import ButtonGroup from '../../../../component/button-group/ButtonGroup'
import Button from '../../../../component/button/Button'
import Dropdown from '../../../../component/dropdown/Dropdown'
import Menu from '../../../../component/menu/Menu'
import MenuItem from '../../../../component/menu/MenuItem'
import OverflowWrapper from '../../../../component/overflow-wrapper/OverflowWrapper'

import mockData from '../../fixture/administrator'

const ListView = () => {
  const headings = [
    <ListHeading sortable key="name">Name</ListHeading>,
    <ListHeading sortable key="emailAddress">Email Address</ListHeading>,
    <ListHeading sortable key="publishedArticles" align="right">Articles</ListHeading>,
    <ListHeading sortable key="lastLogin">Last Login</ListHeading>,
    <ListHeading key="actions">Actions</ListHeading>
  ]

  const data = mockData
    .map((row, i) => (
      <ListRow key={`row-${i}`} {...row}>
        <ListCell>
          <Link to="#">{row.name}</Link>
        </ListCell>
        <ListCell>{row.emailAddress}</ListCell>
        <ListCell align="right">{row.publishedArticles}</ListCell>
        <ListCell><div className="text-muted">{row.lastLogin}</div></ListCell>
        <ListCell
          align="right"
          modifiers={[ 'shrink', 'nowrap' ]}
          >
          <ButtonGroup>
            <Button>Reset Password</Button>
            <Dropdown align="right">
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
    <OverflowWrapper>
      <SortableList headings={headings} data={data} />
    </OverflowWrapper>
  )
}

export default ListView
