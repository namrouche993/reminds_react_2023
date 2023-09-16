import React from 'react'

function App114_child(props) {
    console.log('child component in app114 : ')
    return (
      <div>
        <h3>Child Component</h3>
        <button onClick={props.handleClick}>Click Me</button>
      </div>
    );
  }
export default React.memo(App114_child)
