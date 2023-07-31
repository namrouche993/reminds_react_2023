import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';

export default function Textwrited(props) {
  const [text0,setText0]=useState('')
  const onchangefct = (e) =>{
    setText0(e.target.value)
  }
  const onclickfct = () => {
    props.sendtext(text0)
  }

  const value3 = useSelector(state => state.value3);

    return (
    <>
      <input type='text' value={text0} onChange={onchangefct}/>
      <button onClick={onclickfct}>send</button>
      text5 value3 is :  {value3}

    </>
  )
}
