import React from 'react'
import Header from './Header.jsx'

export default ({ children }) => {
  return (
    <div>
      <Header />
      <div style={{ textAlign: 'center' }}>

        {children}
      </div>

    </div>
  )
}
