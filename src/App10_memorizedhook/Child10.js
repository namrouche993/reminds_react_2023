import React, { useEffect, useState,memo } from 'react'

function Child10(props) {
  console.log('we are in child10');

  const [nbchild10,setnbChild10] = useState(0)
  const onchangeinputchild10 = (e) => {
        setnbChild10(e.target.value)
      }
  useEffect(() => {
    console.log('we are inside useeffect of child10')
   })
  

   return (
    <>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    Child 10 : 
    <br></br>
    <input onChange={onchangeinputchild10} /> {nbchild10}
    <br></br>
    props value from parent : {props.val10}
    </>
  )
}

export default memo(Child10)