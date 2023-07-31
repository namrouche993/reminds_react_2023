
import { useState } from 'react';
import AddtextComponent from './AddtextComponent';
import './App.css';
import Listitems from './Listitems';

function App() {
  const [normalvalue,setNormalvalue] = useState(0)
  const countingfct = () => {
    setNormalvalue(normalvalue+2)
  }
  const [listofitems,setListofitems]=useState([])


  
  const changelist = (input) =>{
    setListofitems([...listofitems,input])
  }

  return (
    <div className="App">
      <br></br>
      <AddtextComponent sendinput={changelist}/>
      <br></br>
      <br></br>
      <Listitems lists={listofitems}/>
      <br></br>
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
