import React from 'react'
import { useEffect } from 'react'
import Aos from 'aos'

const HeroG = () => {
  useEffect(() => {
    Aos.init({duration: 1000});
  }, []);

  return (
    <div data-aos="fade-right" className='text-white flex  py-16 mt-6 px-4 md:px-16'>
      <h1 className='font-bold text-base md:text-2xl xl:text-3xl'>The <strong>#1 reason</strong> to choose Mastermix Production Gear is, <br />
      <strong>We know how it is supposed to Sound & Look and We Deliver!</strong></h1>
    </div>
  )
}

export default HeroG
