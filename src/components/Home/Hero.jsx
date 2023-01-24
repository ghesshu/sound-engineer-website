import React from 'react'
import Button from '../General/Button'
import Prev from '../../assets/Prev.svg'
import Next from '../../assets/Next.svg'
import Dnext from '../../assets/d-next.svg'

const Hero = (props) => {
  return (
    <div className='relative flex justify-center md:justify-between items-center h-5/6 text-white px-4'>
        
        {/* Previous Image Button */}
        <button onClick={props.prevClick} className='hidden md:block'><img src={Prev} alt="" /></button>

        {/* Hero Text */}
        <div className="flex flex-col items-center text-center space-y-4 ">
            <h1 className='font-bold text-5xl  md:text-7xl' >COME SEE US</h1>
            <h1 className='font-bold text-5xl  md:text-7xl' >PLAY LIVE</h1>

            {/* Read More Button */}
            <a href="about">
            <button className='flex items-center space-x-3 bg-black py-2 px-3'>
                <p className='font-bold' >READ MORE</p>
                <img src={Dnext} alt="" />
            </button>
            </a>
            
        </div>

        {/* Next Image Button */}
        <button onClick={props.nextClick} className='hidden md:block' ><img src={Next} alt="" /></button>
      
    </div>
  )
}

export default Hero
