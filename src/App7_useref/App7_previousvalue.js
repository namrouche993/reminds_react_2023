import React, { useEffect, useState,useRef } from 'react';

export default function App7_previousvalue() {
      const [inputValue, setInputValue] = useState("");
      const previousInputValue = useRef("");
    
      useEffect(() => {
        console.log('useeffect in app7_previous')
        
        console.log('inputValue : ')
        console.log(inputValue)

        console.log('previousInputValue before : ')
        console.log(previousInputValue.current)

        previousInputValue.current = inputValue;

        console.log('previousInputValue after : ')
        console.log(previousInputValue.current)

        console.log('inputValue enduseffect : ')
        console.log(inputValue)
      
      }, [inputValue]);

      const onchangeinputvalue = (e) => {
        console.log('insideonchange bef : ')
        console.log(inputValue)

        setInputValue(e.target.value)

        console.log('insideonchange aft : ')
        console.log(inputValue)
      }
    
      return (
        <>
          <input
            type="text"
            value={inputValue}
            onChange={onchangeinputvalue}
          />
          <h2>Current Value: {inputValue}</h2>
          <h2>Previous Value: {previousInputValue.current}</h2>
        </>
      );
    }
    