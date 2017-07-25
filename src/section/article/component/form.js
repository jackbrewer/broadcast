import React from 'react'
import slug from 'slugg'
import classNames from 'classnames'

import { CSSTransitionGroup } from 'react-transition-group'

import Default from '../../../layout/default/Default'

import Button from '../../../component/button/Button'
import Field from '../../../component/field/Field'

class ArticleForm extends React.Component {
  constructor () {
    super()

    this.state = {
      headline: '',
      shortHeadline: '',
      slug: null
    }

    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleCheckboxChange = this.handleCheckboxChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentWillMount () {
    const localState = localStorage.getItem('articleForm')

    if (!localState) return
    this.setState(JSON.parse(localState))
  }

  handleInputChange (event) {
    const target = event.target
    const name = target.name
    const value = target.type === 'checkbox'
      ? this.handleCheckboxChange(name, target.value)
      : target.value
    this.setState({ [name]: value })
    // console.log(name, value)
  }

  handleCheckboxChange (name, value) {
    const valueArr = [ ...(this.state[name] || []) ]
    valueArr.includes(value)
      ? valueArr.splice(valueArr.indexOf(value), 1)
      : valueArr.push(value)
    return valueArr.sort()
  }

  handleSubmit (e) {
    e.preventDefault()
    console.log(e)
    alert('Form submitted: ' + JSON.stringify(this.state, null, 2)) // eslint-disable-line no-undef
    localStorage.setItem('articleForm', JSON.stringify(this.state))
  }

  render () {
    const shortHeadlineMin = 20
    const shortHeadlineMax = 50

    return (
      <Default>
        <h1 className="heading">Article Form</h1>

        <form
          action=""
          method="get"
          onSubmit={this.handleSubmit}
          >

          <Field
            label="Headline"
            name="headline"
            required
            type="text"
            onChange={this.handleInputChange}
            value={this.state.headline}
            modifiers={[ 'feature' ]}
            controlClassName={classNames(
              'control--medium-type',
              { 'control--large-type': this.state.headline.length <= shortHeadlineMin }
            )}
          />

          <CSSTransitionGroup
            transitionName="field-fade"
            transitionEnterTimeout={500}
            transitionLeaveTimeout={500}>
            {(this.state.shortHeadline !== '' || this.state.headline.length > shortHeadlineMin) &&
              <Field
                label="Short Headline"
                name="shortHeadline"
                type="text"
                onChange={this.handleInputChange}
                value={this.state.shortHeadline}
                assistance={`Recommended maximum length: ${this.state.shortHeadline.length}/${shortHeadlineMax}`}
                modifiers={[ 'feature' ]}
              />
            }
          </CSSTransitionGroup>

          <Field
            label="Slug"
            name="slug"
            required
            type="text"
            onChange={this.handleInputChange}
            value={this.state.slug !== null ? this.state.slug : slug(this.state.headline)}
            modifiers={[ 'feature', 'inline-muted' ]}
          />

          <Button type="submit">Submit</Button>
        </form>
      </Default>
    )
  }
}

export default ArticleForm
