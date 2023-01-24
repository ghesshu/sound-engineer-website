import React from 'react'
import Navbar from '../components/General/Navbar'
import Brands from '../components/General/Brands'
import Footer from '../components/General/Footer'
import HeroP from '../components/Portfolio/HeroP'
import ContentP from '../components/Portfolio/ContentP'

const Portfolio = () => {
  return (
    <div>
      <div className="bg bg-black">
      <Navbar />
      <HeroP />
      </div>

      <ContentP />
      <Brands />
      <Footer />
    </div>
  )
}

export default Portfolio
