import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';


export default function Sumnbredux() {
    const  value4_sumnb  = useSelector(state => state.value4_sumnb);

  const dispatch = useDispatch();

  const [nb,setNb] = useState(0);
  
  const onchangefct = (e) => {
    setNb(Number(e.target.value))
  }


  const onclickadd = () => {
     dispatch({ type: 'SET_VALUE4', payload: nb });
     setNb('')
   }

  return (
    <>
      <input value={nb} onChange={onchangefct} type='numeric'></input>
      <button onClick={onclickadd}>Add</button>
      value4_sumnb is equal to : {value4_sumnb}
    </>
  )
}
