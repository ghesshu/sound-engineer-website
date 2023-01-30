import React from 'react'
import Navbar from '../components/General/Navbar'
import BlacNav from '../components/General/BlacNav'
import HeroA from '../components/About/HeroA'
import ContentA from '../components/About/ContentA'

const About = () => {
  return (
    <div>
      <div className="relative flex flex-col">
      
        <div className="absolute z-10">
        <BlacNav />
        </div>
      

      <div className="relative z-0 w-full bg-black">
        <HeroA />
      </div>
      </div>
      

      <ContentA />
      
      
    </div>
  )
}

export default About
