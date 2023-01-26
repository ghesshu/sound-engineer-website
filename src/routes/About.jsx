import React from 'react'
import Navbar from '../components/General/Navbar'
import HeroA from '../components/About/HeroA'
import ContentA from '../components/About/ContentA'

const About = () => {
  return (
    <div>
      <div className="flex flex-col space-y-20 bg bg-black">
      
        <div className="absolute z-10">
        <Navbar />
        </div>
      

      <div className="relative z-0 w-full">
        <HeroA />
      </div>
      </div>

      <ContentA />
      
    </div>
  )
}

export default About
