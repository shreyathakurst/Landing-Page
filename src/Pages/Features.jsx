import React from 'react'
import Feature from '../Components/Feature'

function Features() {
  return (
    <div id='block'>
      <Feature reverse={false}/>
      <Feature reverse={true}/>
      <Feature reverse={false}/>
      <Feature reverse={true}/>
      <Feature reverse={false}/>
      
    </div>
  )
}

export default Features