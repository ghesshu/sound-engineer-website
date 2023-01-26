import React from 'react'
import { useEffect } from 'react'

import Aos from 'aos'
import client1 from '../../assets/client-1.png'
import client2 from '../../assets/client-2.png'
import client3 from '../../assets/client-3.png'
import client4 from '../../assets/client-4.png'
import client5 from '../../assets/client-5.png'
import client6 from '../../assets/client-6.png'
import client7 from '../../assets/client-7.png'
import client8 from '../../assets/client-8.png'

const Brands = () => {
  useEffect(() => {
    Aos.init({duration: 1000});
  }, []);

  return (
    <div data-aos="flip-up">

<div className="flex object-contain justify-between flex-wrap">
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
  )
}

export default Brands
