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
  const [tIndex, tSetIndex] = useState(0);
  const images = [Img1, Img2, Img3];
  const [visible, setVisible] = useState(false);
  const texts = ['Afro Nation', 'Cochella', 'Rapperholic'];
  const length = 3;

  // const handlePrevious = () => {
  //     const newIndex = index - 1; 
  //     setIndex(newIndex < 0 ? images.length-1 : newIndex);
  //     tSetIndex(newIndex < 0 ? texts.length-1 : newIndex)
  // };

  const handlePrevious = () => {
    setVisible(false);
    setTimeout(() => {
        const newIndex = index - 1; 
        setIndex(newIndex < 0 ? images.length-1 : newIndex);
        tSetIndex(newIndex < 0 ? texts.length-1 : newIndex)
        setVisible(true);
    }, 1000);
};

  // const handleNext = () => {
  //     const newIndex = index + 1; 
  //     setIndex(newIndex >= images.length ? 0 : newIndex);
  //     tSetIndex(newIndex >= texts.length ? 0 : newIndex)
  // };

  const handleNext = () => {
    setVisible(false);
    setTimeout(() => {
        const newIndex = index + 1; 
        setIndex(newIndex >= images.length ? 0 : newIndex);
        tSetIndex(newIndex >= texts.length ? 0 : newIndex);
        setVisible(true);
    }, 1000);
};

  // const transitions = useTransition(images[index], item => item, {
  //   from: { opacity: 0 },
  //   enter: { opacity: 1 },
  //   leave: { opacity: 0 },
  // });


  // useEffect(() => {
  //   const intervalId = setInterval(() => {
  //     const newIndex = index + 1;
  //     setIndex(newIndex >= images.length ? 0 : newIndex);
  //     tSetIndex(newIndex >= texts.length ? 0 : newIndex);
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
          tSetIndex(newIndex >= texts.length ? 0 : newIndex);
          setVisible(true);
      }, 500);
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


    <div className='mt-9 md:mt-16 p-3 md:px-8 xl:px-36 space-y-8 slg:space-y-12'>
         {/* Heading */}
         <h1 className='font-extrabold text-2xl md:text-4xl px-8' >Portfolio</h1>

      <div className='relative w-full '>

        {/* <img src={images[index]} alt="" className='h-[400px] smd:h-[600px] w-full object-cover rounded-xl' /> */}

        <img 
        src={images[index]} 
        alt="" 
        className={`object-cover w-full h-[400px] smd:h-[600px] rounded-xl transition duration-1000 ease-in-out ${visible ? 'opacity-100' : 'opacity-25'}`} 
    />

        <div className=" text-white absolute flex justify-between px-8 items-center top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 rounded-xl">
          {/* Previous Button */}
        <button onClick={handlePrevious} className='md:block  bg-white p-2 px-3 md:p-4 md:px-5 bg-opacity-20 rounded-full'><img src={Prev} alt="" className=' h-4 md:h-6' /></button>

          <div className="flex flex-col">
          <h1 className={`font-extrabold text-3xl transition duration-1000 ease-in-out ${visible ? 'opacity-100' : 'opacity-0'}`} >{texts[tIndex]}</h1>
          {/* <h1>Music Festival</h1> */}
          </div>

          {/* Next Button */}
          <button onClick={handleNext} className='md:block bg-white p-2 px-3 md:p-4 md:px-5 bg-opacity-20 rounded-full '><img src={Next} alt="" className='h-4 md:h-6' /></button>
        </div>
      </div>
    </div>
  )
}

export default PortfolioH
