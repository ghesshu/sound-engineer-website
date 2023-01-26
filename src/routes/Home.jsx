import React from 'react'
import { useState, useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'
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
import Img1 from '../assets/tomorrowland-featured1-.jpeg'
import Img2 from '../assets/sadara-featured1-1.jpeg'
import Img3 from '../assets/rtaroute-1.jpeg'

const Home = () => {


    // CAROUSEL FUNCTION
    const [index, setIndex] = useState(0);
    const [slideIn, setSlideIn] = useState("")
    const images = [Img1, Img2, Img3];
    const length = 3;

    const handlePrevious = () => {
        const newIndex = index - 1; 
        setIndex(newIndex < 0 ? images.length-1 : newIndex);
    };

    const handleNext = () => {
        const newIndex = index + 1; 
        setIndex(newIndex >= images.length ? 0 : newIndex);
        setSlideIn('c-img')
    };

    useEffect(() => {
      const intervalId = setInterval(() => {
        const newIndex = index + 1;
        setIndex(newIndex >= images.length ? 0 : newIndex);
      }, 8000);
      return () => clearInterval(intervalId);
    },[index,images.length]);

    useEffect(() => {
      Aos.init({duration: 1000});
    }, []);

    

  return (
    <div className='scroll-smooth w-full'>
      <div className="absolute z-10">
    <Navbar/>
    </div>
    <div 
    data-aos="fade-down "
    className="relative z-0 w-full h-screen">
    <img src={images[index]} alt="" className={`object-cover w-full h-full`} />

    <div className="absolute flex justify-center items-center top-0 left-0 right-0 bottom-0 bg-black bg-opacity-70 rounded-b-xl "
    >   
    <Hero nextClick={handleNext} prevClick={handlePrevious} />
    </div>
    </div>

    <div className="" data-aos="zoom-in" data-aos-mirror="true">
    <HeroTwo />
    </div>
    
    <div className="" data-aos="flip-down">
    <Services />
    </div>

    <div className="" data-aos="fade-in">
    <Portfolio />
    </div>

    
    <div className="" data-aos="fade-right">
    <Gallery />
    </div>

    <div className=" mt-20 px-8 aos-item">
        <Brands />
    </div>
    
    <div className="" data-aos="fade-up">
    <Newsletter />
    </div>

    <div className="" data-aos="fade-down">
    <Insights />
    </div>
   
    <Footer />
    

    </div>
  )
}

export default Home
