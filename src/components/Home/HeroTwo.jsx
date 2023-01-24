import React from 'react'
import HeroImg from '../../assets/Hero-img.png'
import Dnext from '../../assets/d-next.svg'

const HeroTwo = () => {
  return (
    <div className='p-8 xl:px-36 md:py-28 '>

      <div className="flex flex-col slg:flex-row justify-center items-center h-5/6 slg:space-x-8 space-y-4 slg:space-y-0">

        <img src={HeroImg} alt="" className='w-auto slg:w-1/2' />


        <div className=" space-y-8">

            {/* Heading */}
            <h1 className='font-extrabold text-xl'>A ONE-STOP PRESTIGIOUS AUDIO & MUSIC PRODUCTION</h1>

            {/* Text */}
            <p className='text text-slate-900'>
                Mastermix Production Gear Limited is a one-stop prestigious audio & music production outfit and a supplier of professional event & entertainment technology services to the industry in Ghana and throughout West Africa</p>

            <p className='text-slate-900'>
                The <strong>#1</strong> reason to choose Mastermix Production Gear is ... <br />
            <strong>We know how it is supposed to sound & Look and we Deliver</strong>
            </p>

            {/* Read More Button */}
            <button className='flex items-center space-x-3 bg-black py-2 px-3'>
                <p className='font-bold text-white' >READ MORE</p>
                <img src={Dnext} alt="" />
            </button>


        </div>
      </div>
    </div>
  )
}

export default HeroTwo
