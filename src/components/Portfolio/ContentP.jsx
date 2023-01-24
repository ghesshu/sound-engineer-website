import React from 'react'
import Img1 from '../../assets/Conferencing-scaled.jpg'
import Img2 from '../../assets/rtaroute-1.jpeg'
import Img3 from '../../assets/tomorrowland-featured1-.jpeg'
import Img4 from '../../assets/idex19-featured-1.jpeg'
import Img5 from '../../assets/jeddah-featured1-1.jpeg'
import Img6 from '../../assets/sadara-featured1-1.jpeg'

const ContentP = () => {
  return (
    <div className='mt-20 mb-20 px-8 lg:px-28 xl:px-44 space-y-14'>

        <h1 className='font-extrabold text-3xl slg:text-4xl'>Portfolio</h1>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">

        <img src={Img1} alt="" className='border-2 w-72 h-72' />
        <img src={Img2} alt="" className='border-2 w-72 h-72' />
        <img src={Img3} alt="" className='border-2 w-72 h-72' />
        <img src={Img4} alt="" className='border-2 w-72 h-72' />
        <img src={Img5} alt="" className='border-2 w-72 h-72' />
        <img src={Img6} alt="" className='border-2 w-72 h-72' />
        <img src={Img3} alt="" className='border-2 w-72 h-72' />
        <img src={Img5} alt="" className='border-2 w-72 h-72' />
        <img src={Img1} alt="" className='border-2 w-72 h-72' />

        </div>
      
    </div>
  )
}

export default ContentP
