import React from 'react'
// const styled = require('styled-components')
import styled from 'styled-components'
const TodoListEntryCss = styled.div`
  background-color: white;
`

export const TodoListEntry = ({ todo, handleClose }) => {
  const { heading, content, ido } = todo;
  return (
    <div style={{
      backgroundColor: 'green', border: "1px solid black", padding: '20px auto'
    }}>
      <TodoListEntryCss>
        <div style={{ marginTop: '5px', border: "1px solid black" }}>
          {heading}
        </div>
      </TodoListEntryCss>
      <div style={{ color: 'white', border: "1px solid black" }}>
        {content}
      </div>
      <input type="button" value='close' onClick={(e) => { handleClose(e, ido) }} />

    </div >
  );
}