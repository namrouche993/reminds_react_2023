import React, { useState, useCallback } from 'react';
import App114_child from './App114_child';
const ParentComponent = () => {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);

  // Function to be passed to the child component with count as a dependency
  const handleButtonClick = useCallback(() => {
    // Use count inside the callback
    alert(`Button clicked! Count: ${count}`);
  }, [count]); // Keep count as a dependency

  const handleButtonClick2 = () => {
    //alert(`Button clicked! Count: ${count}`);
  }

  return (
    <div>
      <h2>Parent Component</h2>
      <p>Count: {count}</p>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>Increment</button>
      <button onClick={() => setCount2((prevCount) => prevCount + 1)}>Increment bttn2</button>

      {/* <ChildComponent handleClick={handleButtonClick} /> */}
      <App114_child handleClick={handleButtonClick} />
      <br></br>
      count2 is : {count2}

    </div>
  );
};


export default ParentComponent;
