import React from 'react'
import { useState, useEffect } from 'react'
import Prev from '../../assets/Prev.svg'
import Next from '../../assets/Next.svg'
import './home.css'

import Img1 from '../../assets/tomorrowland-featured1-.jpeg'
import Img2 from '../../assets/sadara-featured1-1.jpeg'
import Img3 from '../../assets/rtaroute-1.jpeg'

const PortfolioH = () => {

  // CAROUSEL FUNCTION
  const [index, setIndex] = useState(0);
  const images = [Img1, Img2, Img3];
  const length = 3;

  const handlePrevious = () => {
      const newIndex = index - 1; 
      setIndex(newIndex < 0 ? images.length-1 : newIndex);
  };

  const handleNext = () => {
      const newIndex = index + 1; 
      setIndex(newIndex >= images.length ? 0 : newIndex);
  };

  // const transitions = useTransition(images[index], item => item, {
  //   from: { opacity: 0 },
  //   enter: { opacity: 1 },
  //   leave: { opacity: 0 },
  // });


  useEffect(() => {
    const intervalId = setInterval(() => {
      const newIndex = index + 1;
      setIndex(newIndex >= images.length ? 0 : newIndex);
    }, 8000);
    return () => clearInterval(intervalId);
  },[index,images.length]);

  


  return (
    // <div className='mt-20 px-8 xl:px-36 space-y-8 slg:space-y-16'>
    //      {/* Heading */}
    //      <h1 className='font-extrabold text-2xl md:text-4xl' >Portfolio</h1>

    //   <div className={` ${images[index]} `}>
    //   <div className="flex items-center justify-between h-[504px] px-8 bg-black bg-opacity-70">

    

    
    //   <button onClick={handlePrevious} className='md:block'><img src={Prev} alt="" /></button>

    //   <div className="text-white self-end mr-[250px] slg:mr-[450px]  lg:mr-[700px]">
    //     <h1 className='font-extrabold text-3xl' >Afro Nation</h1>
    //     <h1>Music Festival</h1>
    //   </div>
      

    //   <button  onClick={handleNext}  className='hidden md:block'><img src={Next} alt="" /></button>
    //   </div>
    //   </div>
    // </div>


    <div className='mt-20 px-8 xl:px-36 space-y-8 slg:space-y-16'>
         {/* Heading */}
         <h1 className='font-extrabold text-2xl md:text-4xl' >Portfolio</h1>

      <div className='relative w-full '>

        <img src={images[index]} alt="" className=' h-[504px] w-full object-cover' />

        <div className=" text-white absolute flex justify-between px-8 items-center top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50">
          {/* Previous Button */}
        <button onClick={handlePrevious} className='md:block  bg-white p-2 px-3 md:p-4 md:px-5 bg-opacity-20 rounded-full'><img src={Prev} alt="" className=' h-4 md:h-6' /></button>

          <div className="flex flex-col">
          <h1 className='font-extrabold text-3xl' >Afro Nation</h1>
          <h1>Music Festival</h1>
          </div>

          {/* Next Button */}
          <button onClick={handleNext} className='md:block bg-white p-2 px-3 md:p-4 md:px-5 bg-opacity-20 rounded-full '><img src={Next} alt="" className='h-4 md:h-6' /></button>
        </div>
      </div>
    </div>
  )
}

export default PortfolioH
