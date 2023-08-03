import React, { useEffect } from 'react';

const Enterpress = () => {
  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key === 'Enter') {
        console.log('Enter key pressed!');
      }
    };

    document.addEventListener('keypress', handleKeyPress);

    return () => {
      document.removeEventListener('keypress', handleKeyPress);
      console.log('enterpress component is removed , we are in unmounted process')
    };
  }, []);

  return <div>Press the Enter key!</div>;
};

export default Enterpress;
