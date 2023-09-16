import React from 'react'
import { useSelector, useDispatch } from 'react-redux'; 

function Callfromstore2() {
    console.log('we are inside callfromstore2 component ')
    const  value6 = useSelector(state => state.value6);
    const dispatch = useDispatch();
    const onchangecallfromstore2fct = (e) => {
        dispatch({ type: 'SET_VALUE6', payload: e.target.value });
    }

  return (
    <>
    Callfromstore2 : 
    <br></br>
    <input onChange={onchangecallfromstore2fct}/>

    </>
  )
}

export default React.memo(Callfromstore2)