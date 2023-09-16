import { useSelector, useDispatch } from 'react-redux';
import React, { useEffect, useState, useRef } from 'react';
import { cols } from './cols';



const SubmitComponent2 = () => {
  const dispatch = useDispatch();
  const hotInstance12_redux = useSelector(state => state.hotInstance12_redux);
  const userLocale3 = useSelector(state => state.userLocale3);


  const handleSubmit = () => {
    console.log('handlesubmit start : ');
    const newValue = 'fr';  
    console.log('setting new value');
    dispatch({ type: 'SET_USERLOCALE3', payload: newValue } );
    hotInstance12_redux.setDataAtCell(1,1,28746.156)
    alert('we just changed userLocale3 ,lets try : ' + userLocale3)
    }

  return (
    <div>
      <button onClick={handleSubmit}>submit 2 </button>
    </div>
  );
};

export default SubmitComponent2;
