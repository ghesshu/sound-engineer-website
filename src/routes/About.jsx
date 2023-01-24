import React from 'react'
import Navbar from '../components/General/Navbar'
import HeroA from '../components/About/HeroA'
import ContentA from '../components/About/ContentA'

const About = () => {
  return (
    <div>
      <div className="bg bg-black">
      <Navbar />
      <HeroA />
      </div>

      <ContentA />
      
    </div>
  )
}

export default About
