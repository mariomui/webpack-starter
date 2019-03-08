import React, { Fragment, Component } from 'react'
import { TodoListEntry } from '../components/TodolistEntry.jsx'

export class TodoList extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }
  render() {
    let { todos, handleClose, handleDirection } = this.props
    return (
      <Fragment>
        {todos.map((todo, key) => {
          return (
            <div>

              <TodoListEntry
                keyd={key}
                todo={todo}
                key={todo.ido}
                handleDirection={handleDirection}
                handleClose={handleClose} />
            </div>
          )
        })}

      </Fragment>
    )
  }
}