import React from 'react'
import Navbar from '../components/General/Navbar'
import Brands from '../components/General/Brands'
import Footer from '../components/General/Footer'
import HeroS from '../components/Services/HeroS'
import ContentS from '../components/Services/ContentS'

const Services = () => {
  return (
    <div>
    <div className="flex flex-col space-y-20 bg bg-black">
      
      <div className="absolute z-10">
      <Navbar />
      </div>
    

    <div className="relative z-0 w-full">
      <HeroS />
    </div>
    </div>

    <ContentS />
    <Brands />
    <Footer />
  </div>
  )
}

export default Services
