import React, { useState } from 'react'

function Child2_usecallback(props) {
    console.log('we are inside child2_usecallback')
    const [valtosend,setValtosend] = useState(0);

    const onchangechild2usecallback = (e) => {
        props.sendtoparent(e.target.value)
    }
  return (
    <>
    Child2_usecallback
    <input onChange={onchangechild2usecallback}/>
    </>
  )
}

//export default Child2_usecallback
export default React.memo(Child2_usecallback)