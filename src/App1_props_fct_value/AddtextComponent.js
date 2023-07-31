import React, { useRef, useState } from 'react'

export default function AddtextComponent(props) {
  const textref0 = useRef(null);

  const [textwrited,setTextwrited]= useState('')

  const onchangeinput = (e) => {
    setTextwrited(e.target.value)
  }

  const onclickbutton = () =>{
    props.sendinput(textwrited)
    setTextwrited('')
  }


  

  return (
    <>
      <label htmlFor='inputText'>Item : </label>
      <input ref={props.textref0} value={textwrited} onChange={onchangeinput} id='inputText' type='text'></input>
      <button onClick={onclickbutton}>Add</button>
      <p>just to test textwrited is : {textwrited} </p>
    </>
  )
}
