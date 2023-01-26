import React from 'react'
import HoverImg from '../General/HoverImg'
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
            <HoverImg headClass="mb-4 mr-11 px-2" image={Img1} displayText='Live Sound' imgClass='w-40 h-40 lg:h-[236px] lg:w-[236px]' navTo='/' />

            {/* Image 2 */}
            <HoverImg headClass="mb-4 mr-11 px-2" image={Img1} displayText='Backlines' imgClass='w-40 h-40 lg:h-[236px] lg:w-[236px]' navTo='/' />
        </div>

        {/* Image 3 */}
        <HoverImg headClass="mb-4 mr-56 px-2" image={Img2} displayText='Audio & Music Production' imgClass='h-40 w-[336px] lg:w-[510px] lg:h-[236px]' navTo='/' />
        </div>
 

        {/* Images Second Set */}
        <div className="flex space-x-4 lg:space-x-8">

            {/* Image 1 */}
            <HoverImg headClass="mb-4 mr-11 px-2" image={Img3} displayText='Video' imgClass='h-[336px] lg:h-[510px] w-40 lg:w-[236px]' navTo='/' />

            <div className="flex flex-col space-y-4 lg:space-y-8">
            {/* Image 2 */}
            <HoverImg headClass="mb-4 mr-11 px-2" image={Img4} displayText='Event Production' imgClass='w-40 h-40 lg:h-[236px] lg:w-[236px]' navTo='/' />

            {/* Image 3 */}
            <HoverImg headClass="mb-4 mr-11 px-2" image={Img4} displayText='Streaming' imgClass='w-40 h-40 lg:h-[236px] lg:w-[236px]' navTo='/' />
            </div>

        </div>

        </div>
      
    </div>
  )
}

export default Services
