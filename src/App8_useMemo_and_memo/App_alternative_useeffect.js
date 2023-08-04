import React, { useEffect, useState,memo } from 'react'


function App_alternative_useeffect() {
    console.log('App_alternative_useeffect component')
        const [number1,setNumber1]=useState(0);
        const [number2,setNumber2]=useState(0);

        const [val0,setVal0] = useState(0);

        const onclicknb1 = () =>{
            console.log('onclicknb1 : ')
            setNumber1(number1+1)
        }
    
      const onclicknb2 = () =>{
          console.log('onclicknb2 : ')
          setNumber2(number2+1)
      }
    
        const randomfct = () => {
            console.log('randomfct bef')
            return Math.random()
        }

        useEffect(() => {
            console.log('useeffect ...')
            setVal0(randomfct())
        
        }, [number1])
        

        //const valfct = useMemo(() => randomfct(), [number1])
      return (
        <>
        App8
        <br></br>
        <button onClick={onclicknb1} >increment 1 </button> {number1}
        <br></br>
        <button onClick={onclicknb2} >increment 2 </button> {number2}
        <br></br>
        valfct return : {val0}
        <br></br>
        
        </>
      )
    }
export default memo(App_alternative_useeffect)
