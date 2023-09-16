import React from 'react'

function Child2(props) {
    console.log('we are inside child2')
  return (
    <>
    Child2
    <br></br>
    the value from parent  props.valeur is : {props.valeur}
    </>
  )
}

//export default Child2
export default React.memo(Child2)