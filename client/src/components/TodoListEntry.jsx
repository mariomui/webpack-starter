import React from 'react'
// const styled = require('styled-components')
import styled from 'styled-components'
const TodoListEntryCss = styled.div`
  background-color: white;
`

export const TodoListEntry = ({ todo, keyd, handleClose, handleDirection }) => {
  const { heading, content, ido, time } = todo;
  return (
    <div style={{
      backgroundColor: 'green', border: "1px solid black", padding: '20px auto'
    }}>
      <TodoListEntryCss>
        <div style={{ marginTop: '5px', border: "1px solid black" }}>
          {heading}
        </div>
      </TodoListEntryCss>
      <div style={{ height: '15vh', position: 'relative', color: 'white', border: "1px solid black" }}>
        {content}
        <p style={{ height: '15vh', position: 'absolute', right: '5px' }}>{time}</p>
      </div>
      <input type="button" value='⬆️' onClick={() => handleDirection(keyd, 'up')} />
      <input type="button" value='⬇️' onClick={() => { handleDirection(keyd, 'down') }} />
      <input type="button" value='close' onClick={(e) => { handleClose(e, ido) }} />

    </div >
  );
}