import React, { useEffect, useRef } from 'react';
import 'handsontable/dist/handsontable.full.css';
import Handsontable from 'handsontable';
import { useSelector, useDispatch } from 'react-redux';
import { renderer_fct } from './renderer_fct';
import { cols } from './cols';

function Hot12() {
  const dispatch = useDispatch();

  const value11 = useSelector(state => state.value11);
  const value11Ref = useRef(value11); // Create a ref to hold the latest value

  const userLocale3_redux = useSelector(state => state.userLocale3);
  const userLocale3_ref = useRef(userLocale3_redux); // Create a ref to hold the latest value

  const data = [
    ['John', 154687.156],
    ['Ahmed', 84654.1564],
    ['Reda', 86597.154],
    ['Ahmed2', 787465.156],
  ];

  const hotTableComponent12 = useRef(null);

  useEffect(() => {
    alert('we are going to define hot12 = new handsontable and userLocale3_ref is :  ' + userLocale3_ref.current + ' and userLocale3_redux is  : ' + userLocale3_redux)
    const hot12 = new Handsontable(hotTableComponent12.current, {
      data,
      columns: cols(userLocale3_ref),

      afterValidate: (isValid, value, row, prop, source) => {
        alert('we are in afterValidate')
        console.log('afterValidate : ');
        console.log('value11 : ');
        console.log(userLocale3_ref.current); // Use the value11 from the useSelector directly
      },
    });

    dispatch({ type: 'SET_HOT12', payload: hot12 });

    return () => {
      console.log('unmount handsontable ');
      hot12.destroy();
    };
  },[]);

  useEffect(() => {
    alert('we change userLocale3_redux , and we are in userEffect 2 in Hot12.js ' + userLocale3_redux)
    userLocale3_ref.current = userLocale3_redux; // Update the ref whenever value11 changes
  }, [userLocale3_redux]);

  
  return (
    <>
      Hot12 :
      <br />
      <div>
        <div ref={hotTableComponent12} />
      </div>
    </>
  );
}

export default Hot12;
