import React, { useCallback, useState } from 'react'

function App11_child() {
  console.log('we are inside  App11_child component')
  const [count, setCount] = useState(0);
  const [count2,setCount2] = useState(5);

  //  const handleClick = () => {
  //    console.log('handleClick fct consolelog without usecallback')
  //    setCount((prevCount) => prevCount + 1);
  //  }

    const handleClick = useCallback(() => {
     console.log('handleClick fct consolelog with usecallback')
     console.log(count2)
      setCount((prevCount) => prevCount + 1+count2);
    }, []);

    const onchangenumberinput = (e) => {
      setCount2(e.target.value)
    }

  return (
    <>
      App11_child componenet :
      <br></br>
      <button onClick={handleClick}>Increment</button>
      <p>Count: {count}</p>
      <br></br>
      <br></br>
      <input type='number' onChange={onchangenumberinput}/>
    </>
  );
}

export default App11_child
//export default React.memo(App11_child)