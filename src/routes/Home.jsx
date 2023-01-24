import React from 'react'
import { useState } from 'react'
import Navbar from '../components/General/Navbar'
import Hero from '../components/Home/Hero'
import HeroTwo from '../components/Home/HeroTwo'
import Services from '../components/Home/Services'
import Portfolio from '../components/Home/PortfolioH'
import Gallery from '../components/Home/Gallery'
import Newsletter from '../components/Home/Newsletter'
import Insights from '../components/Home/Insights'
import Footer from '../components/General/Footer'
import Brands from '../components/General/Brands'

const Home = () => {


    // CAROUSEL FUNCTION
    const [index, setIndex] = useState(0);
    const images = ['bg-img-1', 'bg-s-img-1', 'bg-s-img-2'];
    const length = 3;

    const handlePrevious = () => {
        const newIndex = index - 1; 
        setIndex(newIndex < 0 ? images.length-1 : newIndex);
    };

    const handleNext = () => {
        const newIndex = index + 1; 
        setIndex(newIndex >= images.length ? 0 : newIndex);
    };

  return (
    <div>
    <div className={` ${images[index]} `}>
    <div className="bg-orange-900 h-screen bg-opacity-70 object-contain">
     <Navbar /> 
     <Hero nextClick={handleNext} prevClick={handlePrevious} />
     </div>
    </div>

    <HeroTwo />
    <Services />
    <Portfolio />
    <Gallery />
    <div className=" mt-20 px-8">
        <Brands />
    </div>
    <Newsletter />
    <Insights />
    <Footer />


    
    
    </div>
  )
}

export default Home
