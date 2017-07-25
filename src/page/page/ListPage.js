import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import Page from '../../structure/page/Page'

import List from '../../component/list/List'
import ListHeader from '../../component/list/ListHeader'
import ListHeading from '../../component/list/ListHeading'
import ListBody from '../../component/list/ListBody'
import ListRow from '../../component/list/ListRow'
import ListCell from '../../component/list/ListCell'

import ButtonGroup from '../../component/button-group/ButtonGroup'
import Button from '../../component/button/Button'
import Dropdown from '../../component/dropdown/Dropdown'
import Menu from '../../component/menu/Menu'
import MenuItem from '../../component/menu/MenuItem'

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

mockItems.push(...mockItems)

class ListPage extends Component {
  constructor () {
    super()

    this.state = {
      sortField: '',
      sortDirection: 'asc'
    }
  }

  render () {
    return (
      <Page heading="List page">
        <List>

          <ListHeader>
            <ListHeading sortable>Name</ListHeading>
            <ListHeading>Email Address</ListHeading>
            <ListHeading align="right">Published</ListHeading>
            <ListHeading>Last Login</ListHeading>
            <ListHeading>Actions</ListHeading>
          </ListHeader>

          <ListBody>
            {mockItems
              .sort((a, b) => {
                if (!this.state.sortField) return
                return a[this.state.sortField] > b[this.state.sortField]
                  ? this.state.sortDirection === 'asc' ? 1 : -1
                  : this.state.sortDirection === 'asc' ? -1 : 1
              })
              .map((row, i) => {
                return (
                  <ListRow key={`row-${i}`}>
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
                )
              })
            }
          </ListBody>

        </List>
      </Page>
    )
  }
}

export default ListPage
