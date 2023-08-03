import React, { useRef, useState,useEffect } from 'react'
let variable = 0; // a eviter
export default function App7_concrete_example() {
  const [sta,setSta] = useState(0);
  const refin = useRef(0);

  const incrementState = () => {
    setSta(sta+1)
    console.log('inside incrementState')
  }

  const incrementRef = () => {
    refin.current=refin.current+1;
    console.log('inside incrementRef')

  }

  const incrementVar = () => {
    variable = variable+1
    console.log('inside incrementVar')
  }

  useEffect(() => {
    console.log('inside use Effect')
  })
  

  return (
    <>
    <button onClick={incrementState}>Incremante State</button>
    <button onClick={incrementRef}>Incremante Ref</button>
    <button onClick={incrementVar}>Incremante Variable</button>
    <br></br>
    <br></br>
    State : {sta} --------  Ref : {refin.current} ------- Variable : {variable}
    </>
  )
}
