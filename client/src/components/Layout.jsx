import React from 'react'
import Header from './Header.jsx'
import layoutCss from './layout.module.css'


export default ({ children }) => {
  return (
    <div className={layoutCss.grid}>
      <Header />
      <div className={layoutCss.flexrow}>
        <div className={layoutCss.colOne}></div>
        <div className={layoutCss.colTwo}>
          {children}
        </div>
        <div className={layoutCss.colThree}></div>

      </div>

    </div >
  )
}
