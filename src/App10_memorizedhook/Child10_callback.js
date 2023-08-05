import React, { useEffect } from 'react'

function Child10_callback(props) {
    console.log('child10_callback')

    useEffect(() => {
      console.log('we are inside useeffect of child10_usecallback')
    })
    
  return (
    <>
    Child10_callback
    <br></br>
    <button onClick={props.sendbttnclick}>child10_callback bttn</button>
    </>
  )
}

//export default Child10_callback
export default React.memo(Child10_callback) // if we use usecallback in the function that we setted in parent component , here in the child componant we should add React.memo like that