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
import nxt from '../assets/Next.svg'
import prev from '../assets/Prev.svg'
import '../components/Home/home.css'
import arrowDownB from '../assets/icon-arrow-down-black.gif'
import arrowDown from '../assets/icon-arrow-down.svg'
import "./routes.css"


const Home = () => {


    // CAROUSEL FUNCTION
    const [index, setIndex] = useState(0);
    const [slideIn, setSlideIn] = useState("")
    const [arrowColor, setArrowColor] = useState(arrowDown);
    const [visible, setVisible] = useState(false);
    const images = [Img1, Img2, Img3];
    const length = 3;

    // const handlePrevious = () => {
    //     const newIndex = index - 1; 
    //     setIndex(newIndex < 0 ? images.length-1 : newIndex);
    // };

    const handlePrevious = () => {
      setVisible(false);
      setTimeout(() => {
          const newIndex = index - 1; 
          setIndex(newIndex < 0 ? images.length-1 : newIndex);
          setVisible(true);
      }, 1000);
  };

    // const handleNext = () => {
    //     const newIndex = index + 1; 
    //     setIndex(newIndex >= images.length ? 0 : newIndex);
    //     setSlideIn('c-img')
    // };

    const handleNext = () => {
      setVisible(false);
      setTimeout(() => {
          const newIndex = index + 1; 
          setIndex(newIndex >= images.length ? 0 : newIndex);
          setVisible(true);
      }, 1000);
  };
  

  

    // useEffect(() => {
    //   const intervalId = setInterval(() => {
    //     const newIndex = index + 1;
    //     setIndex(newIndex >= images.length ? 0 : newIndex);
    //   }, 8000);
    //   return () => clearInterval(intervalId);
    // },[index,images.length]);

    useEffect(() => {
      setVisible(true);
      const intervalId = setInterval(() => {
        setVisible(false);
        setTimeout(() => {
            const newIndex = index + 1;
            setIndex(newIndex >= images.length ? 0 : newIndex);
            setVisible(true);
        }, 500);
      }, 8000);
      return () => clearInterval(intervalId);
    },[index,images.length]);

    
    
    useEffect(() => {
      Aos.init({duration: 1000});
    }, []);

    const [navbar, setNavbar] = useState('text-white bg-transparent')

    const changeBackground = () => {
      if(window.scrollY >= 600) {
        setNavbar('bg-white text-black drop-shadow-2xl')
        setArrowColor(arrowDownB)
      } else if(window.scrollY <= 600){
        setArrowColor(arrowDown)
        setNavbar('bg-transparent text-white')
      } else {
        setNavbar('bg-transparent text-white')
        
        
      }
    };
  
    window.addEventListener('scroll', changeBackground);

    

  return (
    <div className='scroll-smooth w-full'>
      <div className="absolute z-10">
    <Navbar navbar={navbar} arrowDownB={arrowColor} />
    </div>
    <div 
    data-aos="fade-down "
    className="relative z-0 w-full h-screen">

    {/* <img src={images[index]} alt="" className={`object-cover w-full h-full`} /> */}
    <img 
        src={images[index]} 
        alt="" 
        className={`object-cover w-full h-full transition duration-1000 ease-in-out ${visible ? 'opacity-100' : 'opacity-25'}`} 
    />


    <div className="absolute flex justify-center items-center top-0 left-0 right-0 bottom-0 bg-black bg-opacity-70 rounded-b-xl "
    >   
    <Hero nextClick={handleNext} prevClick={handlePrevious} />
    </div>
    </div>

    <div className="" data-aos="zoom-in" data-aos-mirror="true">
    <HeroTwo />
    </div>
    
    <div className="" data-aos="fade-up">
    <Services />
    </div>

    <div className="" data-aos="fade-in">
    <Portfolio />
    </div>

    
    <div className="" data-aos="fade-left">
    <Gallery />
    </div>

    <div className=" mt-9 lg:mt-16 px-1 md:px-8 aos-item">
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
