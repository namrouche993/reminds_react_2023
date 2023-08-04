import React, { useState,useMemo,useCallback } from 'react'
import App_alternative_useeffect from './App_alternative_useeffect';
import Child8 from './Child8';

export default function App8() {
  console.log('App8 component')
    const [number1,setNumber1]=useState(0);
    const [number2,setNumber2]=useState(0);
    const [number20,setNumber20]=useState(0);

    const onclicknb1 = () =>{
        console.log('onclicknb1 : ')
        setNumber1(number1+1)
    }
    
    const getNumbers2 = useCallback((input) => {
      setNumber20(input)
      },[number20])
    
    const onclicknb2 = () =>{
      console.log('onclicknb2 : ')
      setNumber2(number2+1)
  }

    const randomfct = () => {
        console.log('randomfct bef')
        return Math.random()
    }


    //const valfct = randomfct();
    const valfct = useMemo(() => randomfct(), [number1])
  return (
    <>
    App8
    <br></br>
    <button onClick={onclicknb1} >increment 1 </button> {number1}
    <br></br>
    <button onClick={onclicknb2} >increment 2 </button> {number2}
    <br></br>
    valfct return : {valfct}
    <br></br>
    <br></br>
    <Child8 sendatatoparent={getNumbers2}/>
    <br></br>
    number20 is : {number20}
    <br></br>
    <br></br>
    <br></br>
---------------------------------
    <br></br>
    <App_alternative_useeffect/>
    
    </>
  )
}
