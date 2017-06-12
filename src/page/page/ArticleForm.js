import React from 'react'
import Helmet from 'react-helmet'
import slug from 'slugg'

import { CSSTransitionGroup } from 'react-transition-group'

import Field from '../../component/field/Field'

class ArticleForm extends React.Component {
  constructor () {
    super()

    this.state = {
      headline: 'Test',
      shortHeadline: '',
      slug: null
    }

    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleCheckboxChange = this.handleCheckboxChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleInputChange (event) {
    const target = event.target
    const name = target.name
    const value = target.type === 'checkbox'
      ? this.handleCheckboxChange(name, target.value)
      : target.value
    this.setState({ [name]: value })
    console.log(name, value)
  }

  handleCheckboxChange (name, value) {
    const valueArr = [ ...(this.state[name] || []) ]
    valueArr.includes(value)
      ? valueArr.splice(valueArr.indexOf(value), 1)
      : valueArr.push(value)
    return valueArr.sort()
  }

  handleSubmit (e, data) {
    e.preventDefault()
    alert('Form submitted: ' + JSON.stringify(data, null, 2)) // eslint-disable-line no-undef
  }

  render () {
    return (
      <div className="prose">
        <Helmet title="Article Form" />
        <h1>Article Form</h1>

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
          />

          <CSSTransitionGroup
            transitionName="field-fade"
            transitionEnterTimeout={500}
            transitionLeaveTimeout={500}>
            {this.state.headline.length > 10 &&
              <Field
                label="Short Headline"
                name="shortHeadline"
                type="text"
                onChange={this.handleInputChange}
                value={this.state.shortHeadline}
                assistance={`Recommended maximum length: ${this.state.shortHeadline.length}/100`}
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
          />

          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
}

export default ArticleForm
