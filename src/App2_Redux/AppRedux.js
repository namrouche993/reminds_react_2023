// App.js
import React, { useCallback, useMemo, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'; 
import Callfromstore from './Callfromstore';
import Callfromstore2 from './Callfromstore2';
import Child2 from './Child2';
import Child2_usecallback from './Child2_usecallback';
import { Fct2 } from './Fct2';

const AppRedux = () => {

  const { value1, value2, value3 } = useSelector(state => state);
  const dispatch = useDispatch();

  const handleChangeValue1 = () => {
    const newValue = 10; // Set the new value here
    dispatch({ type: 'SET_VALUE1', payload: newValue });
  };

  const handleChangeValue2 = () => {
    const newValue = 20; // Set the new value here
    dispatch({ type: 'SET_VALUE2', payload: newValue });
  };

  const handleChangeValue3 = () => {
    const newValue = 100; // Set the new value here
    dispatch({ type: 'SET_VALUE3', payload: newValue });
  };

  // React.memo
  const [valeurparent2,setValeurparent2] = useState(0);
  const onchangeinputforchild2 = (e) => {
    setValeurparent2(e.target.value)
  }

  // useCallback : 
  const [valeurparent2_usecallback,setValeurparent2_usecallback] = useState(0);
  const onchangeparent2usecallback = useCallback((input) => {
    setValeurparent2_usecallback(input)
  },[valeurparent2_usecallback])

  // useMemo :
  const valfct2 = useMemo(() => Fct2(60000,value2), [value2]) 


 // Redux with 3hooks : (essai) : 
 const [valuewithredux,setValuewithredux] = useState(0)
 const onchangeinputaftercallfromstore = (e) => {
  setValuewithredux(e.target.value)
 }
  const handleChangeValue6 = () => {
    dispatch({ type: 'SET_VALUE6', payload: valuewithredux });
  }


  return (
    <div className="App">
      <h3>value1 equal to: {value1}</h3>
      <button onClick={handleChangeValue1}>Change Value1</button>
      
      <h3>value2 equal to: {value2}</h3>
      <button onClick={handleChangeValue2}>Change Value2</button>
      
      <h3>value3 equal to: {value3}</h3>
      <button onClick={handleChangeValue3}>Change Value3</button>

      <br></br>
      <br></br>
      <br></br>
      React.memo : 
      <br></br>
      <input onChange={onchangeinputforchild2} type='number'/>
      <br></br>
      <Child2 valeur={valeurparent2}/>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      useCallback :
      <br></br>
      <Child2_usecallback sendtoparent={onchangeparent2usecallback}/>
      <br></br>
      valeurparent2_usecallback : {valeurparent2_usecallback}
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      useMemo : 
      <br></br>
      valfct2 created and wrapped by useMemo is {valfct2}
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <Callfromstore/>
      <br></br>
      <input onChange={onchangeinputaftercallfromstore}/>
      <br></br>
      <button onClick={handleChangeValue6}>Change Value6</button>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      Callfromstore2 : -replace the work of useCallback and to send value from child to parent : 
      <Callfromstore2/>

    </div>
  );
};

export default AppRedux;
