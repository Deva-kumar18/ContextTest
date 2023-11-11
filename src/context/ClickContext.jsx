import { createContext,useState } from "react";
import React from 'react'
export const ClickCont = createContext();


const ClickContext = ({children}) => {
    const [count, setcount]= useState(0)
    const Clickfunction=()=>{
     setcount(count + 1)

    }
   const Decrease=()=>{
    setcount(count-1)
   }
  return (
    <ClickCont.Provider value={{count,Clickfunction,Decrease}}>
     {children}
    </ClickCont.Provider>
  )
}

export default ClickContext