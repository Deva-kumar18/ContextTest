import React, { useContext } from 'react'

import { ClickCont } from './context/ClickContext'

export default function TestContext() {
    const {count, Clickfunction,Decrease} = useContext(ClickCont);
  return (
    <>
    <div className='click-container'>
        <div className='heading'><h>ClickFunction with Context</h></div>
      <div>TestContext:{count}</div>  <div><button className='add-btn' onClick={Clickfunction}>Count Add</button></div>
      <div><button className='less-btn' onClick={Decrease}>Count Less</button></div>
    </div>
    
    </>
    
  )
}
