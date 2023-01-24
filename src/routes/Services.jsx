import React from 'react'
import Navbar from '../components/General/Navbar'
import Brands from '../components/General/Brands'
import Footer from '../components/General/Footer'
import HeroS from '../components/Services/HeroS'
import ContentS from '../components/Services/ContentS'

const Services = () => {
  return (
    <div>
    <div className="bg bg-black">
    <Navbar />
    <HeroS />
    </div>

    <ContentS />
    <Brands />
    <Footer />
  </div>
  )
}

export default Services
