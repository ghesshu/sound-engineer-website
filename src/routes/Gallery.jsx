import React from 'react'
import Navbar from '../components/General/Navbar'
import ContentG from '../components/Gallery/ContentG'
import HeroG from '../components/Gallery/HeroG'
import Brands from '../components/General/Brands'
import Footer from '../components/General/Footer'



const Gallery = () => {
  return (
    <div>
      <div className="bg bg-black">
      <Navbar />
      <HeroG />
      </div>

      <ContentG />
      <Brands />
      <Footer />
    </div>
  )
}

export default Gallery
