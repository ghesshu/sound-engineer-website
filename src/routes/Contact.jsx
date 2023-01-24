import React from 'react'
import Navbar from '../components/General/Navbar'
import HeroCT from '../components/Contact/HeroCT'
import ContentCT from '../components/Contact/ContentCT'
import Brands from '../components/General/Brands'
import Footer from '../components/General/Footer'

const Contact = () => {
  return (
    <div>
        <div className="bg-black">
            <Navbar />
            <HeroCT />
        </div>
        
        <ContentCT />
        <Brands />
        <Footer />
      
    </div>
  )
}

export default Contact
