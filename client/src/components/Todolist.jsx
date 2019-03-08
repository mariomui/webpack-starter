import React, { Fragment, Component } from 'react'
import { TodoListEntry } from '../components/TodolistEntry.jsx'

export class TodoList extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }
  render() {
    const { todos, handleClose } = this.props
    return (
      <Fragment>
        {todos.map((todo) => {
          return (
            <div>

              <TodoListEntry todo={todo} key={todo.ido} handleClose={handleClose} />
            </div>
          )
        })}

      </Fragment>
    )
  }
}