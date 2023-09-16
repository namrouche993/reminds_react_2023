import React, { useState } from 'react'
import 'handsontable/dist/handsontable.full.css'; // Import Handsontable CSS
import Handsontable from 'handsontable';
import { beforeKeyDownfct } from './beforeKeyDownfct';
import { afterChangeHandler } from './afterChangeHandler';
import Changeval from './Changeval';
import { useSelector, useDispatch } from 'react-redux'; 
import { customRenderer } from './customRenderer';
import { getInputValue_condition_split2,setInputValue_condition_split2 } from './Values';
function Hottable() {

  const value1  = useSelector(state => state.value1);
  console.log('value1 from store in hottable ')
  console.log(value1)
  const dispatch = useDispatch();

  
  // Custom rendering function

  
  const data = [
   ['John', 30, 'Developer', '',60,40,20],
   ['Ahmed', 13, 'Job', '',60,10,20],
   ['Reda', 83, 'Driver', '',60,50,20],
   ['Ahmed2', 75, 'Job', '',60,10,20],
  //  ['John244444', 4443, 'Hamid444', 'Developer',90,40,20],
  //  ['Ahmed3', 26, 'Job', 'Mechanical',60,10,20],
  //  ['John4', 50, 'Developer', 'Developer',60,40,20],
  //  ['John4', 50, 'Developer', 'Developer',60,40,20],
  //  ['John4', 50, 'Developer', 'Developer',60,40,20],
  //  ['John4', 50, 'Developer', 'Developer',60,40,20],
  //  ['John4', 50, 'Developer', 'Developer',60,40,20],
  //  ['John4', 50, 'Developer', 'Developer',60,40,20],

 ];

 var data02 = data.map(arr => [...arr]);
 console.log(data02)
 


  const hotTableComponent = React.useRef(null);
  // const [hotInstance, setHotInstance] = useState(null);  WITHOUT REDUX
  
  React.useEffect(() => {

    const hot  = new Handsontable(hotTableComponent.current, {
      data,
      columns: [
        {}, // Column for 'Name'
        {}, // Column for 'Age'
        {
          renderer: (instance, td, row, col, prop, value, cellProperties) => {
            if(value==null){
              td.innerHTML=''
            } else {
              td.innerHTML = value.toUpperCase();
              //data02[row][col]=td.innerHTML
            }  
          },
        },
        {},
        {},
        {},
        {}
        // ... other columns
      ],
                    
    });

        // Function to unmerge cells
 
      hot.addHook('afterChange', (changes, source) => {
        console.log('afterchange : ')
        console.log(changes)
        console.log(source)
      });
    
      //setHotInstance(hot);  WITHOUT REDUX
      dispatch({ type: 'SET_HOT', payload: hot });  // WITH REDUX

    return () => {
      console.log('unmount handsontable ')
      hot.destroy();
    };
  }, []);

  
  const [input1text1,setInputtext1] = useState('')

  const onchangeinputfct1 = (e) => {
    setInputtext1(e.target.value);
    setInputValue_condition_split2(e.target.value)
  }

  return (
    <>
    Hottable : 
    <br></br>
    <input type='text' onChange={onchangeinputfct1}/> - - {input1text1}
    <br></br>
    getinput condition_split2 is {getInputValue_condition_split2()}
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    {/* <Changeval hota={hotInstance}/>  WHITOUT REDUX */} 
    <Changeval/>  {/* WITH REDUX : */}

    <div>
      <div ref={hotTableComponent} />
    </div>
    </>
  );
}

export default Hottable