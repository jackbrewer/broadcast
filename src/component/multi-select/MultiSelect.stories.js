import React from 'react'
import { storiesOf } from '@storybook/react'
// import { withKnobs, text, number } from '@storybook/addon-knobs'
import { BrowserRouter as Router } from 'react-router-dom'

import MultiSelect from './MultiSelect'
import MultiSelectItem from '../multi-select/MultiSelectItem'
import Dropdown from '../dropdown/Dropdown'

const stories = storiesOf('MultiSelect', module)
// stories.addDecorator(withKnobs)

const items = [
  { text: 'Abu Dhabi', subText: 'United Arab Emirates' },
  { text: 'Abuja', subText: 'Nigeria' },
  { text: 'Accra', subText: 'Ghana' },
  { text: 'Adamstown', subText: 'Pitcairn' },
  { text: 'Addis Ababa', subText: 'Ethiopia' },
  { text: 'Algiers', subText: 'Algeria' },
  { text: 'Alofi', subText: 'Niue' },
  { text: 'Amman', subText: 'Jordan' },
  { text: 'Amsterdam', subText: 'Netherlands' },
  { text: 'Andorra la Vella', subText: 'Andorra' },
  { text: 'Ankara', subText: 'Turkey' },
  { text: 'Antananarivo', subText: 'Madagascar' },
  { text: 'Apia', subText: 'Samoa' },
  { text: 'Ashgabat', subText: 'Turkmenistan' },
  { text: 'Asmara', subText: 'Eritrea' },
  { text: 'Astana', subText: 'Kazakhstan' },
  { text: 'Asunción', subText: 'Paraguay' },
  { text: 'Athens', subText: 'Greece' },
  { text: 'Avarua', subText: 'Cook Islands' },
  { text: 'Baghdad', subText: 'Iraq' },
  { text: 'Baku', subText: 'Azerbaijan' },
  { text: 'Bamako', subText: 'Mali' },
  { text: 'Bandar Seri Begawan', subText: 'Brunei' },
  { text: 'Bangkok', subText: 'Thailand' },
  { text: 'Bangui', subText: 'Central African Republic' },
  { text: 'Banjul', subText: 'Gambia' },
  { text: 'Basse-Terre', subText: 'Guadeloupe' },
  { text: 'Basseterre', subText: 'Saint Kitts and Nevis' },
  { text: 'Beijing', subText: 'China' },
  { text: 'Beirut', subText: 'Lebanon' },
  { text: 'Belgrade', subText: 'Serbia' },
  { text: 'Belmopan', subText: 'Belize' },
  { text: 'Berlin', subText: 'Germany' },
  { text: 'Bern', subText: 'Switzerland' },
  { text: 'Bishkek', subText: 'Kyrgyzstan' },
  { text: 'Bissau', subText: 'Guinea-Bissau' },
  { text: 'Bogotá', subText: 'Colombia' },
  { text: 'Brasília', subText: 'Brazil' },
  { text: 'Bratislava', subText: 'Slovakia' },
  { text: 'Brazzaville', subText: 'Republic of the Congo' },
  { text: 'Bridgetown', subText: 'Barbados' },
  { text: 'Brussels', subText: 'Belgium' },
  { text: 'Bucharest', subText: 'Romania' },
  { text: 'Budapest', subText: 'Hungary' },
  { text: 'Buenos Aires', subText: 'Argentina' },
  { text: 'Bujumbura', subText: 'Burundi' },
  { text: 'Cairo', subText: 'Egypt' },
  { text: 'Canberra', subText: 'Australia' },
  { text: 'Caracas', subText: 'Venezuela' },
  { text: 'Castries', subText: 'Saint Lucia' },
  { text: 'Cayenne', subText: 'French Guiana' },
  { text: 'Charlotte Amalie', subText: 'United States Virgin Islands' },
  { text: 'Chișinău', subText: 'Moldova' },
  { text: 'Cockburn Town', subText: 'Turks and Caicos Islands' },
  { text: 'Conakry', subText: 'Guinea' },
  { text: 'Copenhagen', subText: 'Denmark' },
  { text: 'Dakar', subText: 'Senegal' },
  { text: 'Damascus', subText: 'Syria' },
  { text: 'Dhaka', subText: 'Bangladesh' },
  { text: 'Dili', subText: 'East Timor (Timor-Leste)' },
  { text: 'Djibouti', subText: 'Djibouti' },
  { text: 'Dodoma (official, legislative)', subText: 'Tanzania' },
  { text: 'Doha', subText: 'Qatar' },
  { text: 'Douglas', subText: 'Isle of Man' },
  { text: 'Dublin', subText: 'Ireland' },
  { text: 'Dushanbe', subText: 'Tajikistan' },
  { text: 'Edinburgh of the Seven Seas', subText: 'Tristan da Cunha' },
  { text: 'Episkopi Cantonment', subText: 'Akrotiri and Dhekelia' },
  { text: 'Flying Fish Cove', subText: 'Christmas Island' },
  { text: 'Fort-de-France', subText: 'Martinique' },
  { text: 'Freetown', subText: 'Sierra Leone' },
  { text: 'Funafuti', subText: 'Tuvalu' },
  { text: 'Gaborone', subText: 'Botswana' },
  { text: 'George Town', subText: 'Cayman Islands' },
  { text: 'Georgetown', subText: 'Ascension Island' },
  { text: 'Georgetown', subText: 'Guyana' },
  { text: 'Gibraltar', subText: 'Gibraltar' },
  { text: 'Grozny', subText: 'Chechnya' },
  { text: 'Guatemala City', subText: 'Guatemala' },
  { text: 'Gustavia', subText: 'Saint Barthélemy' },
  { text: 'Hagåtña', subText: 'Guam' },
  { text: 'Hamilton', subText: 'Bermuda' },
  { text: 'Hanga Roa', subText: 'Easter Island' },
  { text: 'Hanoi', subText: 'Vietnam' },
  { text: 'Harare', subText: 'Zimbabwe' },
  { text: 'Hargeisa', subText: 'Somaliland' },
  { text: 'Havana', subText: 'Cuba' },
  { text: 'Helsinki', subText: 'Finland' },
  { text: 'Hong Kong', subText: 'Hong Kong' },
  { text: 'Honiara', subText: 'Solomon Islands' },
  { text: 'Islamabad', subText: 'Pakistan' },
  { text: 'Jakarta', subText: 'Indonesia' },
  { text: 'Jamestown', subText: 'Saint Helena' },
  { text: 'Jerusalem (declared, de facto)', subText: 'Israel' },
  { text: 'Juba', subText: 'South Sudan' },
  { text: 'Kabul', subText: 'Afghanistan' },
  { text: 'Kampala', subText: 'Uganda' },
  { text: 'Kathmandu', subText: 'Nepal' },
  { text: 'Khartoum', subText: 'Sudan' },
  { text: 'Kiev', subText: 'Ukraine' },
  { text: 'Kigali', subText: 'Rwanda' },
  { text: 'King Edward Point', subText: 'South Georgia and the South Sandwich Islands' },
  { text: 'Kingston', subText: 'Jamaica' },
  { text: 'Kingston', subText: 'Norfolk Island' },
  { text: 'Kingstown', subText: 'Saint Vincent and the Grenadines' },
  { text: 'Kinshasa', subText: 'Democratic Republic of the Congo' },
  { text: 'Kuwait City', subText: 'Kuwait' },
  { text: 'Libreville', subText: 'Gabon' },
  { text: 'Lilongwe', subText: 'Malawi' },
  { text: 'Lima', subText: 'Peru' },
  { text: 'Lisbon', subText: 'Portugal' },
  { text: 'Ljubljana', subText: 'Slovenia' },
  { text: 'Lomé', subText: 'Togo' },
  { text: 'London', subText: 'United Kingdom' },
  { text: 'Luanda', subText: 'Angola' },
  { text: 'Lusaka', subText: 'Zambia' },
  { text: 'Luxembourg', subText: 'Luxembourg' },
  { text: 'Madrid', subText: 'Spain' },
  { text: 'Majuro', subText: 'Marshall Islands' },
  { text: 'Malabo', subText: 'Equatorial Guinea' },
  { text: 'Malé', subText: 'Maldives' },
  { text: 'Mamoudzou', subText: 'Mayotte' },
  { text: 'Managua', subText: 'Nicaragua' },
  { text: 'Manama', subText: 'Bahrain' },
  { text: 'Manila', subText: 'Philippines' },
  { text: 'Maputo', subText: 'Mozambique' },
  { text: 'Marigot', subText: 'Saint Martin' },
  { text: 'Maseru', subText: 'Lesotho' },
  { text: 'Mata-Utu', subText: 'Wallis and Futuna' },
  { text: 'Mexico City', subText: 'Mexico' },
  { text: 'Minsk', subText: 'Belarus' },
  { text: 'Mogadishu', subText: 'Somalia' },
  { text: 'Monaco', subText: 'Monaco' },
  { text: 'Monrovia', subText: 'Liberia' },
  { text: 'Montevideo', subText: 'Uruguay' },
  { text: 'Moroni', subText: 'Comoros' },
  { text: 'Moscow', subText: 'Russia' },
  { text: 'Muscat', subText: 'Oman' },
  { text: 'Nairobi', subText: 'Kenya' },
  { text: 'Nassau', subText: 'Bahamas' },
  { text: 'Naypyidaw', subText: 'Myanmar' },
  { text: 'N’Djamena', subText: 'Chad' },
  { text: 'New Delhi', subText: 'India' },
  { text: 'Ngerulmud', subText: 'Palau' },
  { text: 'Niamey', subText: 'Niger' },
  { text: 'Nicosia', subText: 'Cyprus' },
  { text: 'Nicosia', subText: 'Northern Cyprus' },
  { text: 'Nouakchott', subText: 'Mauritania' },
  { text: 'Nouméa', subText: 'New Caledonia' },
  { text: 'Nukuʻalofa', subText: 'Tonga' },
  { text: 'Nuuk', subText: 'Greenland' },
  { text: 'Oranjestad', subText: 'Aruba' },
  { text: 'Oslo', subText: 'Norway' },
  { text: 'Ottawa', subText: 'Canada' },
  { text: 'Ouagadougou', subText: 'Burkina Faso' },
  { text: 'Pago Pago', subText: 'American Samoa' },
  { text: 'Palikir', subText: 'Federated States of Micronesia' },
  { text: 'Panama City', subText: 'Panama' },
  { text: 'Papeete', subText: 'French Polynesia' },
  { text: 'Paramaribo', subText: 'Suriname' },
  { text: 'Paris', subText: 'France' },
  { text: 'Philipsburg', subText: 'Sint Maarten' },
  { text: 'Phnom Penh', subText: 'Cambodia' },
  { text: 'Port Louis', subText: 'Mauritius' },
  { text: 'Port Moresby', subText: 'Papua New Guinea' },
  { text: 'Port Vila', subText: 'Vanuatu' },
  { text: 'Port-au-Prince', subText: 'Haiti' },
  { text: 'Port of Spain', subText: 'Trinidad and Tobago' },
  { text: 'Prague', subText: 'Czech Republic' },
  { text: 'Praia', subText: 'Cape Verde' },
  { text: 'Cape Town (legislative)', subText: 'South Africa' },
  { text: 'Pristina', subText: 'Kosovo' },
  { text: 'Pyongyang', subText: 'North Korea' },
  { text: 'Quito', subText: 'Ecuado' },
  { text: 'Rabat', subText: 'Morocco' },
  { text: 'Reykjavík', subText: 'Iceland' },
  { text: 'Riga', subText: 'Latvia' },
  { text: 'Riyadh', subText: 'Saudi Arabia' },
  { text: 'Road Town', subText: 'British Virgin Islands' },
  { text: 'Rome', subText: 'Italy' },
  { text: 'Roseau', subText: 'Dominica' },
  { text: 'Saint-Denis', subText: 'Réunion' },
  { text: 'Saipan', subText: 'Northern Mariana Islands' },
  { text: 'San José', subText: 'Costa Rica' },
  { text: 'San Juan', subText: 'Puerto Rico' },
  { text: 'San Marino', subText: 'San Marino' },
  { text: 'San Salvador', subText: 'El Salvador' },
  { text: 'Santiago', subText: 'Chile' },
  { text: 'Santo Domingo', subText: 'Dominican Republic' },
  { text: 'São Tomé', subText: 'São Tomé and Príncipe' },
  { text: 'Sarajevo', subText: 'Bosnia and Herzegovina' },
  { text: 'Seoul', subText: 'South Korea' },
  { text: 'Singapore', subText: 'Singapore' },
  { text: 'Skopje', subText: 'Republic of Macedonia' },
  { text: 'Sofia', subText: 'Bulgaria' },
  { text: 'St. George’s', subText: 'Grenada' },
  { text: 'St. Helier', subText: 'Jersey' },
  { text: 'St. John’s', subText: 'Antigua and Barbuda' },
  { text: 'St. Peter Port', subText: 'Guernsey' },
  { text: 'St. Pierre', subText: 'Saint Pierre and Miquelon' },
  { text: 'Stanley', subText: 'Falkland Islands' },
  { text: 'Stepanakert', subText: 'Nagorno-Karabakh Republic' },
  { text: 'Stockholm', subText: 'Sweden' },
  { text: 'Sukhumi', subText: 'Abkhazia' },
  { text: 'Suva', subText: 'Fiji' },
  { text: 'Taipei', subText: 'Taiwan' },
  { text: 'Tallinn', subText: 'Estonia' },
  { text: 'Tarawa', subText: 'Kiribati' },
  { text: 'Tashkent', subText: 'Uzbekistan' },
  { text: 'Tegucigalpa', subText: 'Honduras' },
  { text: 'Tehran', subText: 'Iran' },
  { text: 'Thimphu', subText: 'Bhutan' },
  { text: 'Tirana', subText: 'Albania' },
  { text: 'Tiraspol', subText: 'Transnistria' },
  { text: 'Tokyo', subText: 'Japan' },
  { text: 'Tórshavn', subText: 'Faroe Islands' },
  { text: 'Tripoli', subText: 'Libya' },
  { text: 'Tskhinvali', subText: 'South Ossetia' },
  { text: 'Tunis', subText: 'Tunisia' },
  { text: 'Ulaanbaatar', subText: 'Mongolia' },
  { text: 'Vaduz', subText: 'Liechtenstein' },
  { text: 'Valletta', subText: 'Malta' },
  { text: 'The Valley', subText: 'Anguilla' },
  { text: 'Vatican City', subText: 'Vatican City' },
  { text: 'Victoria', subText: 'Seychelles' },
  { text: 'Vienna', subText: 'Austria' },
  { text: 'Vientiane', subText: 'Laos' },
  { text: 'Vilnius', subText: 'Lithuania' },
  { text: 'Warsaw', subText: 'Poland' },
  { text: 'Washington, D.C.', subText: 'United States' },
  { text: 'Wellington', subText: 'New Zealand' },
  { text: 'West Island', subText: 'Cocos (Keeling) Islands' },
  { text: 'Willemstad', subText: 'Curaçao' },
  { text: 'Windhoek', subText: 'Namibia' },
  { text: 'Yaoundé', subText: 'Cameroon' },
  { text: 'Yerevan', subText: 'Armenia' },
  { text: 'Zagreb', subText: 'Croatia' }
]

function handleSelection (items = []) {
  console.log(items.map(item => item.text))
}

stories.addWithInfo(
  'Default',
  () => {
    return (
      <Router>
        <div>
          <p>See console for current selection</p>
          <MultiSelect bordered onSelection={handleSelection}>
            {items.map((item, i) => (
              <MultiSelectItem key={`item-${i}`} {...item} />
            ))}
          </MultiSelect>
        </div>
      </Router>
    )
  }
)

stories.addWithInfo(
  'Multi-select with search',
  () => {
    return (
      <Router>
        <div>
          <p>See console for current selection</p>
          <MultiSelect bordered search onSelection={handleSelection}>
            {items.map((item, i) => (
              <MultiSelectItem key={`item-${i}`} {...item} />
            ))}
          </MultiSelect>
        </div>
      </Router>
    )
  }
)

stories.addWithInfo(
  'Multi-select with summary',
  () => {
    return (
      <Router>
        <div>
          <p>See console for current selection</p>
          <MultiSelect bordered summary onSelection={handleSelection}>
            {items.map((item, i) => (
              <MultiSelectItem key={`item-${i}`} {...item} />
            ))}
          </MultiSelect>
        </div>
      </Router>
    )
  }
)

stories.addWithInfo(
  'Multi-select with max-height',
  () => {
    return (
      <Router>
        <div>
          <p>See console for current selection</p>
          <MultiSelect bordered maxHeight={400} onSelection={handleSelection}>
            {items.map((item, i) => (
              <MultiSelectItem key={`item-${i}`} {...item} />
            ))}
          </MultiSelect>
        </div>
      </Router>
    )
  }
)

stories.addWithInfo(
  'Multi-select with all features',
  () => {
    return (
      <Router>
        <div>
          <p>See console for current selection</p>
          <MultiSelect bordered search summary maxHeight={400} onSelection={handleSelection}>
            {items.map((item, i) => (
              <MultiSelectItem key={`item-${i}`} {...item} />
            ))}
          </MultiSelect>
        </div>
      </Router>
    )
  }
)

stories.addWithInfo(
  'As Dropdown content',
  () => {
    return (
      <Router>
        <div>
          <p>Type 2+ characters to filter, click to select. See console for current selection.</p>
          <br />
          <Dropdown buttonText="Choose cities">
            <MultiSelect search summary onSelection={handleSelection} maxHeight={225}>
              {items.map((item, i) => (
                <MultiSelectItem key={`item-${i}`} {...item} />
              ))}
            </MultiSelect>
          </Dropdown>
        </div>
      </Router>
    )
  }
)
