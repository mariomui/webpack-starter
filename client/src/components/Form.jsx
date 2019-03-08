import React, { Component } from 'react'

export class Form extends Component {
  constructor(props) {
    super(props)
    this.state = {
      heading: '',
      content: '',
      ido: 0,
    }
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
  }
  render() {
    const { heading, content } = this.state
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="heading">Heading:</label>
        <div>

          <input required id="heading" name="heading" type='text' onChange={this.setForm} value={heading} />
        </div>
        <div>
          <div>
            <label htmlFor="content">Content:</label>
          </div>
          <textarea required rows="6" id="content" name="content" type='text' onChange={this.setForm} value={content}></textarea>
        </div>
        <ul className="actions">
          <li>
            <input value="submit" type="submit" />
          </li>
          <li>
            <input value="Reset All" type="reset" />
          </li>
        </ul>
      </form >

    );
  }

}