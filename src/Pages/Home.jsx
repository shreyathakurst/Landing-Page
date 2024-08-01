import React from 'react'
import Navbar from '../Components/Navbar'
import Intro from './About'
// import Feature from '../Components/Feature'
import Features from './Features'
import { FooterWithLogo } from '../Components/Footer'

function Home() {
  return (
    <div>
      <Navbar/>
      <Intro id={"Home"}/>
      <Features id={"block"}/>
      <FooterWithLogo id={"contact"}/>
    </div>
  )
}

export default Home