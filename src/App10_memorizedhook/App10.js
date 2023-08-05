import React, { useCallback, useState } from 'react'
import Child10 from './Child10'
import Child10_callback from './Child10_callback'

function App10() {
    const [nbparent10,setNbparent10] = useState(0);
    const [nbparent10_2,setNbparent10_2] = useState(0);
    const [getbttn10callback,setGetbttn10callback] = useState('red')

    const onchangeparent10 = (e) => {
        setNbparent10(e.target.value)
    }

    const onchangeparent10_2 = (e) => {
        setNbparent10_2(e.target.value)
    }


    const fctbttnclickfromchild10callback = useCallback(() => {
        setGetbttn10callback(getbttn10callback==='red' ? 'blue' : 'red')
    },[getbttn10callback])

  return (
    <>
    App10 : 
    <br></br>
    <input onChange={onchangeparent10}/>
    value of nb parent 10 is : {nbparent10}
    <br></br>
    <input onChange={onchangeparent10_2}/>
    value of nb parent 10_2 is : {nbparent10_2}

    <Child10 val10={nbparent10}/>
    --------------------------
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <Child10_callback sendbttnclick={fctbttnclickfromchild10callback}/>
    <br></br>
     color of get bttn click from child10usecallback is : {getbttn10callback}
    </>
  )
}

export default App10