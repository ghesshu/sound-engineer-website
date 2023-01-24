import React from 'react'
import Navbar from '../components/General/Navbar'
import HeroC from '../components/Communication/HeroC'
import ContentC from '../components/Communication/ContentC'
import Brands from '../components/General/Brands'
import Footer from '../components/General/Footer'



const Communication = () => {
  return (
    <div>
        <div className="bg-black">
            <Navbar />
            <HeroC />
        </div>
        
        <ContentC />
        <Brands />
        <Footer />
      
    </div>
  )
}

export default Communication
