import React from 'react'
import { storiesOf } from '@storybook/react'
// import { withKnobs, text, number } from '@storybook/addon-knobs'
import { BrowserRouter as Router } from 'react-router-dom'

import Menu from './Menu'
import MenuMultiSelect from './MenuMultiSelect'
import MenuItem from './MenuItem'
import MenuHeading from './MenuHeading'
import MenuDivider from './MenuDivider'

const stories = storiesOf('Menu', module)

// stories.addDecorator(withKnobs)

stories.addWithInfo(
  'Default',
  () => (
    <Router>
      <Menu bordered>
        <MenuItem text="One - Link" href="#one" />
        <MenuItem text="Two - Disabled Link" href="#two" disabled />
        <MenuItem text="Three - onClick" onClick={() => console.log('clicked')} />
        <MenuDivider />
        <MenuHeading text="Heading" />
        <MenuItem text="Four" subText="Subtext here" />
        <MenuItem text="Five - selected" selected />
      </Menu>
    </Router>
  )
)

stories.addWithInfo(
  'Multi-select',
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
          <p>See console for current selection</p>
          <MenuMultiSelect bordered onSelection={handleSelection}>
            {items.map((item, i) => (
              <MenuItem key={`item-${i}`} id={`${i}`} {...item} />
            ))}
          </MenuMultiSelect>
        </div>
      </Router>
    )
  }
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
          <p>See console for current selection</p>
          <MenuMultiSelect bordered search onSelection={handleSelection}>
            {items.map((item, i) => (
              <MenuItem key={`item-${i}`} id={`${i}`} {...item} />
            ))}
          </MenuMultiSelect>
        </div>
      </Router>
    )
  }
)
