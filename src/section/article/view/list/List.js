import React from 'react'
import { Link } from 'react-router-dom'

import SortableList from '../../../../component/sortable-list/SortableList'
import ListHeading from '../../../../component/list/ListHeading'
import ListRow from '../../../../component/list/ListRow'
import ListCell from '../../../../component/list/ListCell'

import Avatar from '../../../../component/avatar/Avatar'
import ButtonGroup from '../../../../component/button-group/ButtonGroup'
import Button from '../../../../component/button/Button'
import Dropdown from '../../../../component/dropdown/Dropdown'
import Menu from '../../../../component/menu/Menu'
import MenuItem from '../../../../component/menu/MenuItem'
import ImagePreview from '../../../../component/image-preview/ImagePreview'
import OverflowWrapper from '../../../../component/overflow-wrapper/OverflowWrapper'

import generateMockArticles from '../../fixture/article'

const ListView = () => {
  const headings = [
    <ListHeading />,
    <ListHeading sortable key="headline">Headline</ListHeading>,
    <ListHeading sortable key="author">Author</ListHeading>,
    <ListHeading sortable key="createdDate">Created</ListHeading>,
    <ListHeading key="actions">Actions</ListHeading>
  ]

  const mockData = generateMockArticles(30)

  const data = mockData
    .map((row, i) => (
      <ListRow key={`row-${i}`} {...row}>
        <ListCell modifiers={[ 'full-bleed' ]}>
          <ImagePreview src={row.imgSrc} />
        </ListCell>
        <ListCell>
          <Link to="#" className="text-strong">{row.headline}</Link>
          <div className="text-muted">Gallery</div>
        </ListCell>
        <ListCell>
          <div className="spaced-group">
            <div className="flag">
              <div className="flag__image">
                <Avatar name={row.author} size={24} />
              </div>
              <div className="flag__body">
                {row.author}
              </div>
            </div>
          </div>
        </ListCell>
        <ListCell>
          <div className="text-muted">{row.createdDate}</div>
          {Math.random() < 0.2 &&
            <div className="text-muted text-muted--small">Updated: {row.createdDate}</div>
          }
        </ListCell>
        <ListCell
          align="right"
          modifiers={[ 'shrink', 'nowrap' ]}
          >
          <ButtonGroup>
            <Button>Preview</Button>
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
