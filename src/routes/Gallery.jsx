import React from 'react'
import BlacNav from '../components/General/BlacNav'
import ContentG from '../components/Gallery/ContentG'
import HeroG from '../components/Gallery/HeroG'
import Brands from '../components/General/Brands'
import Footer from '../components/General/Footer'



const Gallery = () => {
  return (
    <div>
       <div className="flex flex-col space-y-20 bg bg-black">
      
      <div className="absolute z-10">
      <BlacNav />
      </div>
    

    <div className="relative z-0 w-full">
      <HeroG />
    </div>
    </div>

      <ContentG />
      <Brands />
      <Footer />
    </div>
  )
}

export default Gallery
