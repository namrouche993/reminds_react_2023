import React, { useState } from 'react'
import Sumnb from './Sumnb'
import Typingnb from './Typingnb'

export default function AppProps3byme() {
  const [sommenb,setSommenb] = useState(0)

  const change_sommenb_fct_in_mainapp = (input) =>{
    setSommenb(Number(sommenb)+Number(input))
  }
    return (
     <>
       <Typingnb send_from_proppage_to_mainpage={change_sommenb_fct_in_mainapp}/>
       <br></br>
       aaa
       <br></br>
       <Sumnb somme={sommenb}/>
    </>
  )
}
