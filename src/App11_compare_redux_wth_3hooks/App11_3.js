import React, { useState } from 'react';

function App11_3(props) {
    console.log('we are inside App11_3')
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  // Regular function definition without useCallback
  const handleIncrement = () => {
   setCount((prevCount) => prevCount + step);
   props.fctfromchild(count+step)
  };


  return (
    <div>
      App11_3 : 
      <br></br>
      <p>Count: {count}</p>
      <input
        type="number"
        value={step}
        onChange={(e) => setStep(Number(e.target.value))}
      />
      <button onClick={handleIncrement}>Increment by Step</button>
    </div>
  );
};
export default React.memo(App11_3)