import React from 'react'
import { useSelector, useDispatch } from 'react-redux'; 

function Callfromstore() {
    console.log('we are inside Call from store component')
    const value6  = useSelector(state => state.value6);

  return (
    <>
    Callfromstore :
    <br></br>
    value6 from store : {value6} 
    </>
  )
}

//export default Callfromstore
export default React.memo(Callfromstore)