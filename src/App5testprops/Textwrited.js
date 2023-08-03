import React, { useState,useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';

export default function Textwrited(props) {
  const [text0,setText0]=useState('')
  const [counteffect,setCounteffect]=useState(0)

  const onchangefct = (e) =>{
    setText0(e.target.value)
  }
  const onclickfct = () => {
    props.sendtext(text0)
  }

  const value3 = useSelector(state => state.value3);

  useEffect(() => {
    console.log('textwrited is updated')
    setCounteffect(counteffect+1)
  },[text0,props.sendtext])
 
    return (
    <>
      text5 value3 getted by redux is :  {value3}
      <br></br>
      <br></br>

      <input type='text' value={text0} onChange={onchangefct}/>
      <button onClick={onclickfct}>send</button>
      <br></br>
      <br></br>
      there are {counteffect} updated in this Textwrited component
    </>
  )
}
