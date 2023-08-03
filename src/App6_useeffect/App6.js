import React, {useState,useEffect } from 'react';
import ClickExample from './ClickExample';
import Enterpress from './Enterpress';

const App6 = () => {
    const [countclicked0,setCountclicked0] = useState(0);

    const handleClick0 = (input) => {
        console.log('handlick0 is : ' + input)
        setCountclicked0(input)
    }

    
    return (
        <>
        App6
        <br></br>
        
        {countclicked0==0 ?
                <ClickExample sendata={handleClick0} />:
                <>ClickExample component was removed</>
            }
        <br></br>
        <br></br>
        count clicked is : {countclicked0}
        <br></br>
        <br></br>
        {countclicked0==0 ?
           <Enterpress/>:
           <>Enterpress component was removed</>
        }
        </>
      )
    
};

export default App6;
