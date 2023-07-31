// App.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

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

  return (
    <div className="App">
      <h3>value1 equal to: {value1}</h3>
      <button onClick={handleChangeValue1}>Change Value1</button>
      
      <h3>value2 equal to: {value2}</h3>
      <button onClick={handleChangeValue2}>Change Value2</button>
      
      <h3>value3 equal to: {value3}</h3>
      <button onClick={handleChangeValue3}>Change Value3</button>
    </div>
  );
};

export default AppRedux;
