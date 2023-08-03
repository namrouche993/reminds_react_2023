import React, { useEffect, useState,useRef } from 'react'
import Textwrited from './Textwrited'
import Component3_todisplay from './Component3_todisplay';

export default function App5() {
  const [rcvtext,setRcvText] = useState('')
  const [nbinput,setNbinput] = useState(0);

  const [isEditing, setIsEditing] = useState(false);
  const timeoutRef = useRef(null);

  const receivetext = (input0) => {
    setRcvText(input0)
  }

  const onchangenumericfct = (e) => {
    setNbinput(e.target.value)
    setIsEditing(true); // Set the editing state to true
    clearTimeout(timeoutRef.current); // Clear the previous timeout
  }

  useEffect(() => {
    if (!isEditing) {
    timeoutRef.current = setTimeout(() => {
    //setTimeout(() => {
      setNbinput((count) => count + 1);
    }, 1000);
    return () => {
      // Cleanup function to clear the timeout when the component unmounts
      clearTimeout(timeoutRef.current);
    }
  };
  },[nbinput]);

  const handleInputBlur = () => {
    console.log('on blur handleblur')
    console.log('beforesetisediging : ')
    console.log(isEditing)
    setIsEditing(false); // Set the editing state to false
    console.log('aftersetisediging : ')
    console.log(isEditing)
  };


  useEffect(() => {
  console.log('App5 is updated')
  },[rcvtext])
  
  return (
    <>
    App5
    <br></br>
    <input onChange={onchangenumericfct} type='number' onBlur={handleInputBlur}/>
    <br></br>
    nb input is {nbinput}
    <br></br>

    {/* {Number(nbinput)>11 ? return <p>aza</p> : <p>aza</p>} */}
    {Number(nbinput)>11 ?
       <h3 style={{color:'red'}}>GREATER THAN 11 and hiding Component3</h3> :
       <Component3_todisplay/>
     }
    <br></br>
    <br></br>
      <Textwrited sendtext={receivetext}/>
      <br></br>
      text writed in textwrited is : {rcvtext}  - <span style={{fontSize:'12px'}}> we writed this expression from App5 the parent component of Textwrited</span>

    </>
  )
}
