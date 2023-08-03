import React, { useEffect, useState,useRef } from 'react';
import App7_previousvalue from './App7_previousvalue';
import App7_concrete_example from './App7_concrete_example';

export default function App7() {
  const [inputValue, setInputValue] = useState("");
  const count = useRef(0);

  useEffect(() => {
    console.log('useeffect ...')
    console.log(count.current)
    count.current = count.current + 1;
    console.log(count.current)
  });

  const changefct = (e) => {
  if(Number(e.target.value)>8) {
    setInputValue(e.target.value)
  }
  }

  return (
    <>
      <input
        type="text"
        //value={inputValue}
        onChange={changefct}
      />
      <h1>Render Count: {count.current}</h1>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <App7_previousvalue/>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <App7_concrete_example/>

    </>
  );
}
