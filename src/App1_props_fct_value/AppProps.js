
import React, { useEffect, useState,useRef } from 'react'
import AddtextComponent from './AddtextComponent';
import './App.css';
import Listitems from './Listitems';

function App() {
  const textref01 = useRef(null);

  const [normalvalue,setNormalvalue] = useState(0)
  const countingfct = () => {
    setNormalvalue(normalvalue+2)
  }
  const [listofitems,setListofitems]=useState([])


  
  const changelist = (input) =>{
    setListofitems([...listofitems,input])
  }

  const focusfct = () => {
    textref01.current.focus()
  }

  return (
    <div className="App">
      <br></br>
      <AddtextComponent sendinput={changelist} textref0={textref01}/>
      <br></br>
      <br></br>
      <Listitems lists={listofitems}/>
      <br></br>
      <button onClick={focusfct}>focus in parent</button>
      <br></br>
      <br></br>
      <br></br>
      <button onClick={countingfct}>Count</button>
      <br></br>
      normal value is {normalvalue}
      <br></br>
      <br></br>
      <br></br>
    Hi world
    </div>
  );
}

export default App;
