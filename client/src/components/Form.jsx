import React, { Component } from 'react'
import styled from 'styled-components'

const FormCss = styled.form`
  
  input {
    width: 100%;
  }
  ul {
    list-style-type: none;
  }
  ul > * li {
    width: 100%;
    text-indent: -5px;
  }
  .actions {
    padding-inline-start: 0px;

  }
  textarea {
    width: 100%
  }
`
export class Form extends Component {
  constructor(props) {
    super(props)
    this.state = {
      heading: '',
      content: '',
      ido: 0,
    }
  }
  componentDidMount() {
    // document.addEventListener('DOMContentLoaded', (e) => {

    //   document.getElementsByClassName('focusHeading')[0].focus();
    // })
    document.getElementsByClassName('focusHeading')[0].focus();

  }

  setForm = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  clear = () => {
    this.setState({
      heading: '',
      content: '',
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    let { ido } = this.state;
    const { insertTodos } = this.props
    ido = ido + 1;
    insertTodos(e, this.state, ido)
    this.clear();
    document.getElementsByClassName('focusHeading')[0].focus()
  }

  handleKeyPress = (e) => {
    if (e.key === 'Enter' && e.shiftKey) {
      this.handleSubmit(e);
    }
  }
  render() {
    const { heading, content } = this.state
    return (
      <FormCss style={{ width: '70vw', minWidth: '300px' }} onSubmit={this.handleSubmit}>

        <label htmlFor="heading">Heading:</label>
        <div>

          <input className="focusHeading" required id="heading" name="heading" type='text' onChange={this.setForm} value={heading} />
        </div>
        <div>
          <div>
            <label htmlFor="content">Content:</label>
          </div>
          <textarea onKeyPress={this.handleKeyPress} required rows="6" id="content" name="content" type='text' onChange={this.setForm} value={content}></textarea>
        </div>
        <ul className="actions">
          <li>
            <input value="Reset All" onClick={this.clear} type="reset" />
            <input value="submit" type="submit" />
          </li>
        </ul>
      </FormCss >

    );
  }

}