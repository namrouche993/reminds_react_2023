import React, { useState } from 'react'

export default function Typingnb(props) {
  const [numberr,setNumberr]=useState(0)

  const onchangenbfct = (e) => {
    setNumberr(e.target.value)
  }

  const change_sommenb_in_proppage = () => {
    props.send_from_proppage_to_mainpage(numberr)
  }

    return (
     <>
       <input value={numberr} onChange={onchangenbfct} type='number'></input>
       <button onClick={change_sommenb_in_proppage}>Add nb to the sum</button>
    </>
  )
}
