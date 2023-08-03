import React, { useEffect } from 'react'

export default function Component3_todisplay() {

  useEffect(() => {
    console.log('Component3_todisplay is mount')

    return () => {
      console.log('Component3_todisplay is UNMOUT')
    }
  }, [])
  
    return (
    <h4 style={{color:'blue'}}>Component3 is displayed !!</h4>
  )
}
