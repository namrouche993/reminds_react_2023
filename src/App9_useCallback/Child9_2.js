import React, { useEffect, useState,memo } from 'react'

function Child9_2(props) {
  const [nb92,setNb92]=useState(0);

  useEffect(() => {
    console.log('use effect of child9_2')
    setNb92(Math.random())
  },[props.texta])
  
   return (
    <>
    Child9_2
    <br></br>
    nb92 : {nb92} and props from parent : {props.texta}
    </>
  )
}

export default Child9_2