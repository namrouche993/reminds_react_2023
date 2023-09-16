import React, { useCallback, useState } from 'react'
import App11_3 from './App11_3'
import App11_child from './App11_child'
import App114 from './App114'

function App11() {
    const [valapp11,setValapp11]=useState('');
    const [valapp113,setValapp113]=useState('');

    const onchangeapp11input = (e) => {
        setValapp11(e.target.value)
    }

    const fcttosendinchild =  useCallback((input) => {
        console.log('we are inside fcttosendinchild the one with input in parent')
        setValapp113(input)
    },[valapp113])

  return (
    <>
    App11 - Compare Redux with 3 hooks :
    <br></br>
    <br></br>
    <br></br>
    <input onChange={onchangeapp11input}/>
    <br></br>
    valapp11 : {valapp11}
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <App11_child/>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <App11_3 fctfromchild={fcttosendinchild}/>
    <br></br>
    valapp113 is equal to {valapp113}
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <App114/>
    </>
  )
}

export default App11