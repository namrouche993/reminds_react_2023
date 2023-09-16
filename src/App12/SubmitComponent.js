import { useSelector, useDispatch } from 'react-redux';
import React, { useEffect,useState,useRef } from 'react';
import { Fct2 } from './Fct2';

const SubmitComponent = () => {
  const dispatch = useDispatch();
  const reduxValue1 = useSelector(state => state.value11); // the default value1 is "en"
  const updatedValueRef = useRef(reduxValue1);

  const calculfct4 = () => {
    alert('reduxvalue1 with useref is ' + updatedValueRef.current);
  }

  const handleSubmit = () => {
    console.log('handlesubmit start : ')
    console.log(reduxValue1)
    console.log(updatedValueRef.current); // Now it will return the new value

    console.log('setting new value')
    dispatch({ type: 'SET_VALUE11', payload: 99 });
    updatedValueRef.current = 99; // Update the reference

    console.log(reduxValue1)
    console.log(updatedValueRef.current)
    Fct2(updatedValueRef.current)
    calculfct4()
  };

  return (
    <div>
      <button onClick={handleSubmit}>submit</button>
    </div>
  );
};

export default SubmitComponent;
