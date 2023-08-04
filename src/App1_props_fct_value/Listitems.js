import React, { memo } from 'react'

function Listitems(props) {
  console.log('list items component')
  return (
    <div>
        
      <ul>
        {/* {props.lists} */}
        {props.lists.map((item, index) => (
           <li key={index}>{item}</li>
         ))}
      </ul>

    </div>
  )
}
export default memo(Listitems)