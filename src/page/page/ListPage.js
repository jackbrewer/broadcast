import React from 'react'

import Page from '../../structure/page/Page'
import List from '../../component/list/List'
import ListItem from '../../component/list-item/ListItem'
// import Button from '../../component/button/Button'

const mockHeadings = [ 'Heading', 'Date', 'Something' ]
const mockItems = [
  {
    heading: 'Example Headline'
  },
  {
    heading: 'Example Headline'
  }
]

const ListPage = () => {
  return (
    <Page heading="List page">
      <List headings={mockHeadings} >

        {mockItems.map((item, i) => {
          return (
            <ListItem key={`item-${i}`} {...item} />
          )
        })}
      </List>
    </Page>
  )
}

export default ListPage
