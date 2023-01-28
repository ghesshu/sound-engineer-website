import React from 'react'
import BlacNav from '../components/General/BlacNav'
import Brands from '../components/General/Brands'
import Footer from '../components/General/Footer'
import HeroP from '../components/Portfolio/HeroP'
import ContentP from '../components/Portfolio/ContentP'

const Portfolio = () => {
  return (
    <div>
       <div className="flex flex-col space-y-20 bg bg-black">
      
      <div className="absolute z-10">
      <BlacNav />
      </div>
    

    <div className="relative z-0 w-full">
      <HeroP />
    </div>
    </div>

      <ContentP />
      <Brands />
      <Footer />
    </div>
  )
}

export default Portfolio
