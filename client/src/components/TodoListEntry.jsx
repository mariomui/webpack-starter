import React from 'react'
// const styled = require('styled-components')
import styled from 'styled-components'
const TodoListEntryCss = styled.div`
  background-color: white;
`
const getTime = () => {
  var date = new Date()
  var seconds = '' + date.getSeconds();
  if (seconds.length === 1) {
    seconds = '0'.concat(seconds);
  }
  return `${date.toLocaleDateString()} ${date.getHours()}:${date.getMinutes()}:${seconds}`;
}
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
      <div style={{ height: '15vh', position: 'relative', color: 'white', border: "1px solid black" }}>
        {content}
        <p style={{ height: '15vh', position: 'absolute', right: '5px' }}>{getTime()}</p>
      </div>

      <input type="button" value='close' onClick={(e) => { handleClose(e, ido) }} />

    </div >
  );
}