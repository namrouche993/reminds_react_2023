import React from 'react'
import { useSelector, useDispatch } from 'react-redux';

export default function Typingnb_redux() {
    const  value4_sumnb  = useSelector(state => state.value4_sumnb);

  return (
    <div>Typingnb_redux , the sum created by redux is equal to {value4_sumnb}</div>
  )
}
