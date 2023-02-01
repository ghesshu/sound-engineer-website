import React from 'react'
import { useState, useEffect } from 'react';

import Aos from 'aos'
import client1 from '../../assets/client-1.png'
import client2 from '../../assets/client-2.png'
import client3 from '../../assets/client-3.png'
import client4 from '../../assets/client-4.png'
import client5 from '../../assets/client-5.png'
import client6 from '../../assets/client-6.png'
import client7 from '../../assets/client-7.png'
import client8 from '../../assets/client-8.png'
import './General.css'

const Brands = () => {

  
  useEffect(() => {
    Aos.init({duration: 1000});
  }, []);

  return (
    <div data-aos="flip-up">

<div className="relative overflow-hidden p-16 xl:p-28 ">

<div className="flex absolute left-0 animate justify-between">
<div className="flex object-contain justify-evenly w-1/2">
  <img src={client1} alt="" className='w-10 slg:w-16 xl:w-24 h-full' />
  <img src={client2} alt="" className='w-10 slg:w-16 xl:w-24 h-full' />
  <img src={client3} alt="" className='w-10 slg:w-16 xl:w-24 h-full' />
  <img src={client4} alt="" className='w-10 slg:w-16 xl:w-24 h-full' />
  <img src={client5} alt="" className='w-10 slg:w-16 xl:w-24 h-full' />
  <img src={client6} alt="" className='w-10 slg:w-16 xl:w-24 h-full' />
  <img src={client7} alt="" className='w-10 slg:w-16 xl:w-24 h-full' />
  <img src={client8} alt="" className='w-10 slg:w-16 xl:w-24 h-full' />
</div>

<div className="flex object-contain justify-evenly w-1/2">
  <img src={client1} alt="" className='w-10 slg:w-16 xl:w-24 h-full' />
  <img src={client2} alt="" className='w-10 slg:w-16 xl:w-24 h-full' />
  <img src={client3} alt="" className='w-10 slg:w-16 xl:w-24 h-full' />
  <img src={client4} alt="" className='w-10 slg:w-16 xl:w-24 h-full' />
  <img src={client5} alt="" className='w-10 slg:w-16 xl:w-24 h-full' />
  <img src={client6} alt="" className='w-10 slg:w-16 xl:w-24 h-full' />
  <img src={client7} alt="" className='w-10 slg:w-16 xl:w-24 h-full' />
  <img src={client8} alt="" className='w-10 slg:w-16 xl:w-24 h-full' />
</div>
</div>

</div>

      {/* <div className="flex object-contain justify-between flex-wrap">
        <img src={client1} alt="" className='w-10 slg:w-16 xl:w-24 h-full' />
        <img src={client2} alt="" className='w-10 slg:w-16 xl:w-24 h-full' />
        <img src={client3} alt="" className='w-10 slg:w-16 xl:w-24 h-full' />
        <img src={client4} alt="" className='w-10 slg:w-16 xl:w-24 h-full' />
        <img src={client5} alt="" className='w-10 slg:w-16 xl:w-24 h-full' />
        <img src={client6} alt="" className='w-10 slg:w-16 xl:w-24 h-full' />
        <img src={client7} alt="" className='w-10 slg:w-16 xl:w-24 h-full' />
        <img src={client8} alt="" className='w-10 slg:w-16 xl:w-24 h-full' />
      </div> */}
      
    </div>
  )
}

export default Brands
