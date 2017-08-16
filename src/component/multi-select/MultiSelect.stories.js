import React from 'react'
import { storiesOf } from '@storybook/react'
import { BrowserRouter as Router } from 'react-router-dom'

import MultiSelect from './MultiSelect'
import MultiSelectItem from './MultiSelectItem'
import Dropdown from '../dropdown/Dropdown'

const stories = storiesOf('MultiSelect', module)

const items = [
  { value: '1', text: 'Abu Dhabi', subText: 'United Arab Emirates' },
  { value: '2', text: 'Abuja', subText: 'Nigeria' },
  { value: '3', text: 'Accra', subText: 'Ghana' },
  { value: '4', text: 'Adamstown', subText: 'Pitcairn' },
  { value: '5', text: 'Addis Ababa', subText: 'Ethiopia' },
  { value: '6', text: 'Algiers', subText: 'Algeria' },
  { value: '7', text: 'Alofi', subText: 'Niue' },
  { value: '8', text: 'Amman', subText: 'Jordan' },
  { value: '9', text: 'Amsterdam', subText: 'Netherlands' },
  { value: '10', text: 'Andorra la Vella', subText: 'Andorra' },
  { value: '11', text: 'Ankara', subText: 'Turkey' },
  { value: '12', text: 'Antananarivo', subText: 'Madagascar' },
  { value: '13', text: 'Apia', subText: 'Samoa' },
  { value: '14', text: 'Ashgabat', subText: 'Turkmenistan' },
  { value: '15', text: 'Asmara', subText: 'Eritrea' },
  { value: '16', text: 'Astana', subText: 'Kazakhstan' },
  { value: '17', text: 'Asunción', subText: 'Paraguay' },
  { value: '18', text: 'Athens', subText: 'Greece' },
  { value: '19', text: 'Avarua', subText: 'Cook Islands' },
  { value: '20', text: 'Baghdad', subText: 'Iraq' },
  { value: '21', text: 'Baku', subText: 'Azerbaijan' },
  { value: '22', text: 'Bamako', subText: 'Mali' },
  { value: '23', text: 'Bandar Seri Begawan', subText: 'Brunei' },
  { value: '24', text: 'Bangkok', subText: 'Thailand' },
  { value: '25', text: 'Bangui', subText: 'Central African Republic' },
  { value: '26', text: 'Banjul', subText: 'Gambia' },
  { value: '27', text: 'Basse-Terre', subText: 'Guadeloupe' },
  { value: '28', text: 'Basseterre', subText: 'Saint Kitts and Nevis' },
  { value: '29', text: 'Beijing', subText: 'China' },
  { value: '30', text: 'Beirut', subText: 'Lebanon' },
  { value: '31', text: 'Belgrade', subText: 'Serbia' },
  { value: '32', text: 'Belmopan', subText: 'Belize' },
  { value: '33', text: 'Berlin', subText: 'Germany' },
  { value: '34', text: 'Bern', subText: 'Switzerland' },
  { value: '35', text: 'Bishkek', subText: 'Kyrgyzstan' },
  { value: '36', text: 'Bissau', subText: 'Guinea-Bissau' },
  { value: '37', text: 'Bogotá', subText: 'Colombia' },
  { value: '38', text: 'Brasília', subText: 'Brazil' },
  { value: '39', text: 'Bratislava', subText: 'Slovakia' },
  { value: '40', text: 'Brazzaville', subText: 'Republic of the Congo' },
  { value: '41', text: 'Bridgetown', subText: 'Barbados' },
  { value: '42', text: 'Brussels', subText: 'Belgium' },
  { value: '43', text: 'Bucharest', subText: 'Romania' },
  { value: '44', text: 'Budapest', subText: 'Hungary' },
  { value: '45', text: 'Buenos Aires', subText: 'Argentina' },
  { value: '46', text: 'Bujumbura', subText: 'Burundi' },
  { value: '47', text: 'Cairo', subText: 'Egypt' },
  { value: '48', text: 'Canberra', subText: 'Australia' },
  { value: '49', text: 'Caracas', subText: 'Venezuela' },
  { value: '50', text: 'Castries', subText: 'Saint Lucia' },
  { value: '51', text: 'Cayenne', subText: 'French Guiana' },
  { value: '52', text: 'Charlotte Amalie', subText: 'United States Virgin Islands' },
  { value: '53', text: 'Chișinău', subText: 'Moldova' },
  { value: '54', text: 'Cockburn Town', subText: 'Turks and Caicos Islands' },
  { value: '55', text: 'Conakry', subText: 'Guinea' },
  { value: '56', text: 'Copenhagen', subText: 'Denmark' },
  { value: '57', text: 'Dakar', subText: 'Senegal' },
  { value: '58', text: 'Damascus', subText: 'Syria' },
  { value: '59', text: 'Dhaka', subText: 'Bangladesh' },
  { value: '60', text: 'Dili', subText: 'East Timor (Timor-Leste)' },
  { value: '61', text: 'Djibouti', subText: 'Djibouti' },
  { value: '62', text: 'Dodoma (official, legislative)', subText: 'Tanzania' },
  { value: '63', text: 'Doha', subText: 'Qatar' },
  { value: '64', text: 'Douglas', subText: 'Isle of Man' },
  { value: '65', text: 'Dublin', subText: 'Ireland' },
  { value: '66', text: 'Dushanbe', subText: 'Tajikistan' },
  { value: '67', text: 'Edinburgh of the Seven Seas', subText: 'Tristan da Cunha' },
  { value: '68', text: 'Episkopi Cantonment', subText: 'Akrotiri and Dhekelia' },
  { value: '69', text: 'Flying Fish Cove', subText: 'Christmas Island' },
  { value: '70', text: 'Fort-de-France', subText: 'Martinique' },
  { value: '71', text: 'Freetown', subText: 'Sierra Leone' },
  { value: '72', text: 'Funafuti', subText: 'Tuvalu' },
  { value: '73', text: 'Gaborone', subText: 'Botswana' },
  { value: '74', text: 'George Town', subText: 'Cayman Islands' },
  { value: '75', text: 'Georgetown', subText: 'Ascension Island' },
  { value: '76', text: 'Georgetown', subText: 'Guyana' },
  { value: '77', text: 'Gibraltar', subText: 'Gibraltar' },
  { value: '78', text: 'Grozny', subText: 'Chechnya' },
  { value: '79', text: 'Guatemala City', subText: 'Guatemala' },
  { value: '80', text: 'Gustavia', subText: 'Saint Barthélemy' },
  { value: '81', text: 'Hagåtña', subText: 'Guam' },
  { value: '82', text: 'Hamilton', subText: 'Bermuda' },
  { value: '83', text: 'Hanga Roa', subText: 'Easter Island' },
  { value: '84', text: 'Hanoi', subText: 'Vietnam' },
  { value: '85', text: 'Harare', subText: 'Zimbabwe' },
  { value: '86', text: 'Hargeisa', subText: 'Somaliland' },
  { value: '87', text: 'Havana', subText: 'Cuba' },
  { value: '88', text: 'Helsinki', subText: 'Finland' },
  { value: '89', text: 'Hong Kong', subText: 'Hong Kong' },
  { value: '90', text: 'Honiara', subText: 'Solomon Islands' },
  { value: '91', text: 'Islamabad', subText: 'Pakistan' },
  { value: '92', text: 'Jakarta', subText: 'Indonesia' },
  { value: '93', text: 'Jamestown', subText: 'Saint Helena' },
  { value: '94', text: 'Jerusalem (declared, de facto)', subText: 'Israel' },
  { value: '95', text: 'Juba', subText: 'South Sudan' },
  { value: '96', text: 'Kabul', subText: 'Afghanistan' },
  { value: '97', text: 'Kampala', subText: 'Uganda' },
  { value: '98', text: 'Kathmandu', subText: 'Nepal' },
  { value: '99', text: 'Khartoum', subText: 'Sudan' },
  { value: '100', text: 'Kiev', subText: 'Ukraine' },
  { value: '101', text: 'Kigali', subText: 'Rwanda' },
  { value: '102', text: 'King Edward Point', subText: 'South Georgia and the South Sandwich Islands' },
  { value: '103', text: 'Kingston', subText: 'Jamaica' },
  { value: '104', text: 'Kingston', subText: 'Norfolk Island' },
  { value: '105', text: 'Kingstown', subText: 'Saint Vincent and the Grenadines' },
  { value: '106', text: 'Kinshasa', subText: 'Democratic Republic of the Congo' },
  { value: '107', text: 'Kuwait City', subText: 'Kuwait' },
  { value: '108', text: 'Libreville', subText: 'Gabon' },
  { value: '109', text: 'Lilongwe', subText: 'Malawi' },
  { value: '110', text: 'Lima', subText: 'Peru' },
  { value: '111', text: 'Lisbon', subText: 'Portugal' },
  { value: '112', text: 'Ljubljana', subText: 'Slovenia' },
  { value: '113', text: 'Lomé', subText: 'Togo' },
  { value: '114', text: 'London', subText: 'United Kingdom' },
  { value: '115', text: 'Luanda', subText: 'Angola' },
  { value: '116', text: 'Lusaka', subText: 'Zambia' },
  { value: '117', text: 'Luxembourg', subText: 'Luxembourg' },
  { value: '118', text: 'Madrid', subText: 'Spain' },
  { value: '119', text: 'Majuro', subText: 'Marshall Islands' },
  { value: '120', text: 'Malabo', subText: 'Equatorial Guinea' },
  { value: '121', text: 'Malé', subText: 'Maldives' },
  { value: '122', text: 'Mamoudzou', subText: 'Mayotte' },
  { value: '123', text: 'Managua', subText: 'Nicaragua' },
  { value: '124', text: 'Manama', subText: 'Bahrain' },
  { value: '125', text: 'Manila', subText: 'Philippines' },
  { value: '126', text: 'Maputo', subText: 'Mozambique' },
  { value: '127', text: 'Marigot', subText: 'Saint Martin' },
  { value: '128', text: 'Maseru', subText: 'Lesotho' },
  { value: '129', text: 'Mata-Utu', subText: 'Wallis and Futuna' },
  { value: '130', text: 'Mexico City', subText: 'Mexico' },
  { value: '131', text: 'Minsk', subText: 'Belarus' },
  { value: '132', text: 'Mogadishu', subText: 'Somalia' },
  { value: '133', text: 'Monaco', subText: 'Monaco' },
  { value: '134', text: 'Monrovia', subText: 'Liberia' },
  { value: '135', text: 'Montevideo', subText: 'Uruguay' },
  { value: '136', text: 'Moroni', subText: 'Comoros' },
  { value: '137', text: 'Moscow', subText: 'Russia' },
  { value: '138', text: 'Muscat', subText: 'Oman' },
  { value: '139', text: 'Nairobi', subText: 'Kenya' },
  { value: '140', text: 'Nassau', subText: 'Bahamas' },
  { value: '141', text: 'Naypyidaw', subText: 'Myanmar' },
  { value: '142', text: 'N’Djamena', subText: 'Chad' },
  { value: '143', text: 'New Delhi', subText: 'India' },
  { value: '144', text: 'Ngerulmud', subText: 'Palau' },
  { value: '145', text: 'Niamey', subText: 'Niger' },
  { value: '146', text: 'Nicosia', subText: 'Cyprus' },
  { value: '147', text: 'Nicosia', subText: 'Northern Cyprus' },
  { value: '148', text: 'Nouakchott', subText: 'Mauritania' },
  { value: '149', text: 'Nouméa', subText: 'New Caledonia' },
  { value: '150', text: 'Nukuʻalofa', subText: 'Tonga' },
  { value: '151', text: 'Nuuk', subText: 'Greenland' },
  { value: '152', text: 'Oranjestad', subText: 'Aruba' },
  { value: '153', text: 'Oslo', subText: 'Norway' },
  { value: '154', text: 'Ottawa', subText: 'Canada' },
  { value: '155', text: 'Ouagadougou', subText: 'Burkina Faso' },
  { value: '156', text: 'Pago Pago', subText: 'American Samoa' },
  { value: '157', text: 'Palikir', subText: 'Federated States of Micronesia' },
  { value: '158', text: 'Panama City', subText: 'Panama' },
  { value: '159', text: 'Papeete', subText: 'French Polynesia' },
  { value: '160', text: 'Paramaribo', subText: 'Suriname' },
  { value: '161', text: 'Paris', subText: 'France' },
  { value: '162', text: 'Philipsburg', subText: 'Sint Maarten' },
  { value: '163', text: 'Phnom Penh', subText: 'Cambodia' },
  { value: '164', text: 'Port Louis', subText: 'Mauritius' },
  { value: '165', text: 'Port Moresby', subText: 'Papua New Guinea' },
  { value: '166', text: 'Port Vila', subText: 'Vanuatu' },
  { value: '167', text: 'Port-au-Prince', subText: 'Haiti' },
  { value: '168', text: 'Port of Spain', subText: 'Trinidad and Tobago' },
  { value: '169', text: 'Prague', subText: 'Czech Republic' },
  { value: '170', text: 'Praia', subText: 'Cape Verde' },
  { value: '171', text: 'Cape Town (legislative)', subText: 'South Africa' },
  { value: '172', text: 'Pristina', subText: 'Kosovo' },
  { value: '173', text: 'Pyongyang', subText: 'North Korea' },
  { value: '174', text: 'Quito', subText: 'Ecuado' },
  { value: '175', text: 'Rabat', subText: 'Morocco' },
  { value: '176', text: 'Reykjavík', subText: 'Iceland' },
  { value: '177', text: 'Riga', subText: 'Latvia' },
  { value: '178', text: 'Riyadh', subText: 'Saudi Arabia' },
  { value: '179', text: 'Road Town', subText: 'British Virgin Islands' },
  { value: '180', text: 'Rome', subText: 'Italy' },
  { value: '181', text: 'Roseau', subText: 'Dominica' },
  { value: '182', text: 'Saint-Denis', subText: 'Réunion' },
  { value: '183', text: 'Saipan', subText: 'Northern Mariana Islands' },
  { value: '184', text: 'San José', subText: 'Costa Rica' },
  { value: '185', text: 'San Juan', subText: 'Puerto Rico' },
  { value: '186', text: 'San Marino', subText: 'San Marino' },
  { value: '187', text: 'San Salvador', subText: 'El Salvador' },
  { value: '188', text: 'Santiago', subText: 'Chile' },
  { value: '189', text: 'Santo Domingo', subText: 'Dominican Republic' },
  { value: '190', text: 'São Tomé', subText: 'São Tomé and Príncipe' },
  { value: '191', text: 'Sarajevo', subText: 'Bosnia and Herzegovina' },
  { value: '192', text: 'Seoul', subText: 'South Korea' },
  { value: '193', text: 'Singapore', subText: 'Singapore' },
  { value: '194', text: 'Skopje', subText: 'Republic of Macedonia' },
  { value: '195', text: 'Sofia', subText: 'Bulgaria' },
  { value: '196', text: 'St. George’s', subText: 'Grenada' },
  { value: '197', text: 'St. Helier', subText: 'Jersey' },
  { value: '198', text: 'St. John’s', subText: 'Antigua and Barbuda' },
  { value: '199', text: 'St. Peter Port', subText: 'Guernsey' },
  { value: '200', text: 'St. Pierre', subText: 'Saint Pierre and Miquelon' },
  { value: '201', text: 'Stanley', subText: 'Falkland Islands' },
  { value: '202', text: 'Stepanakert', subText: 'Nagorno-Karabakh Republic' },
  { value: '203', text: 'Stockholm', subText: 'Sweden' },
  { value: '204', text: 'Sukhumi', subText: 'Abkhazia' },
  { value: '205', text: 'Suva', subText: 'Fiji' },
  { value: '206', text: 'Taipei', subText: 'Taiwan' },
  { value: '207', text: 'Tallinn', subText: 'Estonia' },
  { value: '208', text: 'Tarawa', subText: 'Kiribati' },
  { value: '209', text: 'Tashkent', subText: 'Uzbekistan' },
  { value: '210', text: 'Tegucigalpa', subText: 'Honduras' },
  { value: '211', text: 'Tehran', subText: 'Iran' },
  { value: '212', text: 'Thimphu', subText: 'Bhutan' },
  { value: '213', text: 'Tirana', subText: 'Albania' },
  { value: '214', text: 'Tiraspol', subText: 'Transnistria' },
  { value: '215', text: 'Tokyo', subText: 'Japan' },
  { value: '216', text: 'Tórshavn', subText: 'Faroe Islands' },
  { value: '217', text: 'Tripoli', subText: 'Libya' },
  { value: '218', text: 'Tskhinvali', subText: 'South Ossetia' },
  { value: '219', text: 'Tunis', subText: 'Tunisia' },
  { value: '220', text: 'Ulaanbaatar', subText: 'Mongolia' },
  { value: '221', text: 'Vaduz', subText: 'Liechtenstein' },
  { value: '222', text: 'Valletta', subText: 'Malta' },
  { value: '223', text: 'The Valley', subText: 'Anguilla' },
  { value: '224', text: 'Vatican City', subText: 'Vatican City' },
  { value: '225', text: 'Victoria', subText: 'Seychelles' },
  { value: '226', text: 'Vienna', subText: 'Austria' },
  { value: '227', text: 'Vientiane', subText: 'Laos' },
  { value: '228', text: 'Vilnius', subText: 'Lithuania' },
  { value: '229', text: 'Warsaw', subText: 'Poland' },
  { value: '230', text: 'Washington, D.C.', subText: 'United States' },
  { value: '231', text: 'Wellington', subText: 'New Zealand' },
  { value: '232', text: 'West Island', subText: 'Cocos (Keeling) Islands' },
  { value: '233', text: 'Willemstad', subText: 'Curaçao' },
  { value: '234', text: 'Windhoek', subText: 'Namibia' },
  { value: '235', text: 'Yaoundé', subText: 'Cameroon' },
  { value: '236', text: 'Yerevan', subText: 'Armenia' },
  { value: '237', text: 'Zagreb', subText: 'Croatia' }
]

function handleSelection (items = []) {
  console.log(items)
}

stories.add('Default',
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

stories.add('Multi-select with search',
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

stories.add('Multi-select with summary',
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

stories.add('Multi-select with max-height',
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

stories.add('Multi-select with pre-selected options',
  () =>
    <Router>
      <div>
        <p>See console for current selection</p>
        <MultiSelect bordered maxHeight={400} onSelection={handleSelection} selected={[ '1', '3', '5', '10' ]}>
          {items.map((item, i) => (
            <MultiSelectItem key={`item-${i}`} {...item} />
          ))}
        </MultiSelect>
      </div>
    </Router>
)

stories.add('Multi-select with all features',
  () =>
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

stories.add('As Dropdown content',
  () =>
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
