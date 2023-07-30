import React from 'react'

export default function Listitems(props) {
  return (
    <div>
        
      <ul>
        {props.lists.map((item, index) => (
           <li key={index}>{item}</li>
         ))}
      </ul>

    </div>
  )
}