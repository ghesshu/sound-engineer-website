import React from 'react'
import { useState } from 'react'
import Prev from '../../assets/Prev.svg'
import Next from '../../assets/Next.svg'
import Dnext from '../../assets/d-next.svg'

const PortfolioH = () => {

  // CAROUSEL FUNCTION
  const [index, setIndex] = useState(0);
  const images = ['bg-P-img-1', 'bg-img-1', 'bg-s-img-1', 'bg-s-img-2'];
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
    <div className='mt-20 px-8 xl:px-36 space-y-8 slg:space-y-16'>
         {/* Heading */}
         <h1 className='font-extrabold text-2xl md:text-4xl' >Portfolio</h1>

      <div className={` ${images[index]} `}>
      <div className="flex items-center justify-between h-[504px] px-8 bg-black bg-opacity-70">

    

    
      <button onClick={handlePrevious} className='md:block'><img src={Prev} alt="" /></button>

      <div className="text-white self-end mr-[250px] slg:mr-[450px]  lg:mr-[700px]">
        <h1 className='font-extrabold text-3xl' >Afro Nation</h1>
        <h1>Music Festival</h1>
      </div>
      

      <button  onClick={handleNext}  className='hidden md:block'><img src={Next} alt="" /></button>
      </div>
      </div>
    </div>
  )
}

export default PortfolioH
