import React from 'react'
import Img1 from '../../assets/Conferencing-scaled.jpg'
import Img2 from '../../assets/rtaroute-1.jpeg'
import Img3 from '../../assets/tomorrowland-featured1-.jpeg'
import Img4 from '../../assets/idex19-featured-1.jpeg'
import '../Home/home.css'

const Services = () => {
  return (
    <div className='px-8 xl:px-36 space-y-8 slg:space-y-16'>

        {/* Heading */}
        <h1 className='font-extrabold text-2xl md:text-4xl' >Services</h1>


        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 smd:space-x-4 lg:space-x-8 justify-center">

        {/* IMages First Set */}
        <div className="flex flex-col space-y-4 lg:space-y-8 justify-center items-center ">
            
        <div className="flex space-x-4 lg:space-x-8">
            {/* Image 1 */}
            <div className=" border-2  ">
                <img src={Img1} alt="" className=' w-40 h-40 lg:h-[236px] lg:w-[236px] object-cover' />
            </div>
            {/* Image 2 */}
            <div className=" border-2 ">
            <img src={Img1} alt="" className='object-cover w-40 h-40 lg:h-[236px] lg:w-[236px]' />
            </div>
        </div>

        <div className="border-2 ">
        <img src={Img2} alt="" className='object-cover h-40 w-[336px] lg:w-[510px] lg:h-[236px]' />
        </div>
        </div>


        {/* Images Second Set */}
        <div className="flex space-x-4 lg:space-x-8">
            <div className=" border-2">
            <img src={Img3} alt="" className='object-cover h-[336px] lg:h-[510px] w-40 lg:w-[236px]' />
            </div>

            <div className="flex flex-col space-y-4 lg:space-y-8">
            <div className=" border-2">
            <img src={Img4} alt="" className='object-cover w-40 h-40 lg:h-[236px] lg:w-[236px]' />
            </div>
            <div className=" border-2">
            <img src={Img4} alt="" className='object-cover w-40 h-40 lg:h-[236px] lg:w-[236px]' />
            </div>
            </div>

        </div>

        </div>
      
    </div>
  )
}

export default Services
