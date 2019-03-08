import React, { Fragment } from 'react'
// import appCss from './app.module.css'
import Layout from './components/Layout.jsx'
import { TodoList } from './components/Todolist.jsx'
import { Form } from './components/Form.jsx'
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      todos: []
    }
  }
  insertTodos = (e, todo, index) => {
    let { todos } = this.state;
    todo.ido = index
    todos = todos.concat(todo);
    this.setState({
      todos: todos
    })
  }
  handleClose = (e, index) => {
    e.preventDefault()
    const { todos } = this.state
    this.setState({
      todos: todos.filter(todo => (todo.ido !== index))
    })
  }
  render() {
    const { todos } = this.state
    return (
      <Fragment>

        <Layout>
          <Form insertTodos={this.insertTodos} />
          <TodoList todos={todos} handleClose={this.handleClose} />
        </Layout>

      </Fragment >

    )
  }

}
export default App