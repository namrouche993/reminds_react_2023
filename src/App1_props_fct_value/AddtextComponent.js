import React, { useState } from 'react'

export default function AddtextComponent(props) {
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
      <input value={textwrited} onChange={onchangeinput} id='inputText' type='text'></input>
      <button onClick={onclickbutton}>Add</button>
      <p>just to test textwrited is : {textwrited} </p>
    </>
  )
}
