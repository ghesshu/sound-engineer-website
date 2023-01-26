import React from 'react'
import Prev from '../../assets/Prev.svg'
import Next from '../../assets/Next.svg'

const FacilitiesA = () => {
  return (
    <div className='clear-left'>
        <div className="bg bg-P-img-1  object-cover ">
        <div className="flex items-center justify-between h-[504px] p-8 bg-black bg-opacity-70">

    
        <button className='md:block  bg-white p-2 px-3 md:p-4 md:px-5 bg-opacity-20 rounded-full'><img src={Prev} alt="" className=' h-4 md:h-6' /></button>

            <div className="text-white self-end smd:mr-[200px] slg:mr-[350px]  lg:mr-[400px]">
        <h1 className='font-extrabold text-xl smd:mdtext-3xl' >Our Facilities</h1>
        </div>
      

        <button className='md:block bg-white p-2 px-3 md:p-4 md:px-5 bg-opacity-20 rounded-full '><img src={Next} alt="" className='h-4 md:h-6' /></button>
        </div>
        </div>
        </div>

  )
}

export default FacilitiesA
