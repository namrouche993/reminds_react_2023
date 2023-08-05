import React, { memo, useEffect, useState } from 'react'

function Child8(props) {
  console.log('we are inside Child8')

  const [text0,setText0] = useState('')

  useEffect(() => {
    console.log('we are inside Child8 useEffect ')
  }, [props.sendatatoparent])

  const onchangefct = (e) => {
    setText0(e.target.value)
  }
  const onclickbttn = () => {
    props.sendatatoparent(text0)
  }
  
  return (
    <>
    Child8 : 
    <br></br>
    <input type='text' onChange={onchangefct} />
    <button onClick={onclickbttn}> send to parent</button>
    text0 from child8 is : {text0}
    </>
  )
}

export default memo(Child8)