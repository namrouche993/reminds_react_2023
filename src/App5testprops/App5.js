import React, { useState } from 'react'
import Textwrited from './Textwrited'

export default function App5() {
  const [rcvtext,setRcvText] = useState('')

  const receivetext = (input0) => {
    setRcvText(input0)
  }
  return (
    <>
    App5
    <br></br>
    <Textwrited sendtext={receivetext}/>
    <br></br>
    text writed in textwrited is : {rcvtext}
    </>
  )
}
