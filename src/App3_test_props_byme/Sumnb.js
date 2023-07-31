import React from 'react'
import { useSelector, useDispatch } from 'react-redux';


export default function Sumnb(props) {
    // const { value1, value2, value3 } = useSelector(state => state);
    const  value1  = useSelector(state => state.value1);
  return (
    <div>the sum is equal to {props.somme} and value1 is {value1}</div>


  )
}
