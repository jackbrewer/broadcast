import React from 'react'
import { storiesOf } from '@storybook/react'
// import { withKnobs, text, number } from '@storybook/addon-knobs'
import { BrowserRouter as Router } from 'react-router-dom'

import Dropdown from './Dropdown'
import Menu from '../menu/Menu'
import MenuMultiSelect from '../menu/MenuMultiSelect'
import MenuItem from '../menu/MenuItem'
import MenuHeading from '../menu/MenuHeading'
import MenuDivider from '../menu/MenuDivider'

const stories = storiesOf('Dropdown', module)

// stories.addDecorator(withKnobs)

stories.addWithInfo(
  'Default',
  () => (
    <Router>
      <Dropdown maxHeight={200}>
        <Menu>
          <MenuItem text="One - Link" href="#one" />
          <MenuItem text="Two - Disabled Link" href="#two" disabled />
          <MenuItem text="Three - onClick" onClick={() => console.log('clicked')} />
          <MenuDivider />
          <MenuHeading text="Heading" />
          <MenuItem text="Four" subText="Subtext here" />
        </Menu>
      </Dropdown>
    </Router>
  )
)

stories.addWithInfo(
  'Multi-select with search',
  () => {
    const items = [
      { text: 'One Apple' },
      { text: 'Two Apples' },
      { text: 'Three Melons', subText: 'Appleton' },
      { text: 'Four Oranges' },
      { text: 'Five Strawberries', subText: 'Raspberries' },
      { text: 'Six Pineapples' },
      { text: 'Seven Grapes' }
    ]

    function handleSelection (itemIds = []) {
      const formattedSelected = []
      itemIds.sort().map(itemId => {
        formattedSelected.push(items[itemId].text)
      })

      console.log(formattedSelected.length ? formattedSelected.join(', ') : 'Nothing selected')
    }

    return (
      <Router>
        <div>
          <p>Type 3+ characters to filter, click to select. See console for current selection.</p>
          <br />
          <Dropdown>
            <MenuMultiSelect search onSelection={handleSelection} maxHeight={225}>
              {items.map((item, i) => (
                <MenuItem key={`item-${i}`} id={`${i}`} {...item} />
              ))}
            </MenuMultiSelect>
          </Dropdown>
        </div>
      </Router>
    )
  }
)
