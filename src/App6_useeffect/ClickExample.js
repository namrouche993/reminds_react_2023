import React, { useEffect, useState } from 'react';

const ClickExample = (props) => {
  const [countclicked,setCountclicked] = useState(0);

  useEffect(() => {

    const handleClick = () => {
      console.log('Button clicked!');
      setCountclicked(countclicked+1)
      console.log(countclicked)
      props.sendata(countclicked+1)
    };

    const button = document.querySelector('#myButton');
    button.addEventListener('click', handleClick);

    return () => {
      button.removeEventListener('click', handleClick);
      console.log('Clickexample component is removed , we are in unmounted process')
    };
  }, []);

  return (
    <div>
      <button id="myButton">Click Me</button>
    </div>
  );
};

export default ClickExample;
