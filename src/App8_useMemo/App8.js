import React, { useState } from 'react'

export default function App8() {
    const [number,setNumber]=useState(0);
    const [valfct0,setValfct0] = useState(0)

    const onclicknb = () =>{
        console.log('onclicknb : ')
        setNumber(number+1)
    }

    const randomfct = () => {
        console.log('randomfct bef')
        return Math.random()
    }

    const randomfct0 = () =>{
        setValfct0(randomfct());
    }
    

    const valfct = randomfct();
  return (
    <>
    App8
    <br></br>
    <button onClick={onclicknb} >increment </button> {number}
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <button onClick={randomfct0} >change random</button>
    <br></br>
    valfct0 return : {valfct0}
    <br></br>
    valfct return : {valfct}
    <br></br>
    
    </>
  )
}
