import React, { Fragment } from 'react'
// import appCss from './app.module.css'
import Layout from './components/Layout.jsx'
import { TodoList } from './components/Todolist.jsx'
import { Form } from './components/Form.jsx'
import { finished } from 'stream';
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      todos: []
    }
  }

  insertTodos = (todo) => {
    let { todos } = this.state;

    todos.unshift(todo);
    this.setState({
      todos: todos
    })
  }

  handleDirection = (index, direction) => {
    let { todos } = this.state;
    if (direction === 'up') {

      if (index === 0) {
        window.alert('nope')
        return;
      }
      [todos[index], todos[index - 1]] = [todos[index - 1], todos[index]]
      this.setState({
        todos: todos
      })
    } else {
      if (index === (todos.length - 1)) {
        window.alert('nope');
        return
      }
      [todos[index], todos[index + 1]] = [todos[index + 1], todos[index]]
      this.setState({
        todos: todos
      })
    }
  }

  handleClose = (e, index) => {
    e.preventDefault()
    let { todos } = this.state

    this.setState({
      todos: todos.filter((item) => (item.ido !== index)),
    })
  }
  render() {
    const { todos } = this.state
    return (
      <Fragment>

        <Layout>
          <Form insertTodos={this.insertTodos} />
          <TodoList todos={todos} handleClose={this.handleClose} handleDirection={this.handleDirection} />
        </Layout>

      </Fragment >

    )
  }

}
export default App