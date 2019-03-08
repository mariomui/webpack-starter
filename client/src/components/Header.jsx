import React from 'react'

export default () => {
  return (
    <div style={{
      display: 'flex', flexDirection: 'column', color: 'white', backgroundColor: 'blue', width: "100vw", height: "10vh"
    }}>
      <div style={{
        flex: '1',
        color: 'white',
        height: '30%',
        textAlign: 'center',
        paddingTop: '10px',
      }}>
        TODO LIST
      </div>
      <div style={{ textAlign: 'center', align: 'center', flex: '2' }}>
      </div>

    </div>
  )
}

