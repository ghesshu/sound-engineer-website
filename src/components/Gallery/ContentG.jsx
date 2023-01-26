import React from 'react'
import { useEffect } from 'react'
import Aos from 'aos'
import HoverImg from '../General/HoverImg'
import Img1 from '../../assets/Conferencing-scaled.jpg'
import Img2 from '../../assets/rtaroute-1.jpeg'
import Img3 from '../../assets/tomorrowland-featured1-.jpeg'
import Img4 from '../../assets/idex19-featured-1.jpeg'
import Img5 from '../../assets/jeddah-featured1-1.jpeg'
import Img6 from '../../assets/sadara-featured1-1.jpeg'

const ContentG = () => {

  useEffect(() => {
    Aos.init({duration: 1000});
  }, []);

  return (
    <div className='mt-20 mb-20 px-2 smd:8 lg:px-28 xl:px-44 space-y-14'>

    <h1 className='font-extrabold text-3xl slg:text-4xl' data-aos='' >Gallery</h1>

    <div  data-aos='fade-left' className="grid grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">

    <HoverImg data-aos='zoom-in' headClass=' mb-2 mr-16 md:mr-32 md:mb-8 pl-6' image={Img1} displayText='Lorem' imgClass=' w-40 h-40 md:w-72 md:h-72' navTo='/' />
    <HoverImg headClass=' mb-2 mr-16 md:mr-32 md:mb-8 pl-6' image={Img2} displayText='Lorem' imgClass=' w-40 h-40 md:w-72 md:h-72' navTo='/' />
    <HoverImg headClass=' mb-2 mr-16 md:mr-32 md:mb-8 pl-6' image={Img3} displayText='Lorem' imgClass=' w-40 h-40 md:w-72 md:h-72' navTo='/' />
    <HoverImg headClass=' mb-2 mr-16 md:mr-32 md:mb-8 pl-6' image={Img4} displayText='Lorem' imgClass=' w-40 h-40 md:w-72 md:h-72' navTo='/' />
    <HoverImg headClass=' mb-2 mr-16 md:mr-32 md:mb-8 pl-6' image={Img5} displayText='Lorem' imgClass=' w-40 h-40 md:w-72 md:h-72' navTo='/' />
    <HoverImg headClass=' mb-2 mr-16 md:mr-32 md:mb-8 pl-6' image={Img6} displayText='Lorem' imgClass=' w-40 h-40 md:w-72 md:h-72' navTo='/' />
    <HoverImg headClass=' mb-2 mr-16 md:mr-32 md:mb-8 pl-6' image={Img3} displayText='Lorem' imgClass=' w-40 h-40 md:w-72 md:h-72' navTo='/' />
    <HoverImg headClass=' mb-2 mr-16 md:mr-32 md:mb-8 pl-6' image={Img5} displayText='Lorem' imgClass=' w-40 h-40 md:w-72 md:h-72' navTo='/' />
    <HoverImg  data-aos='zoom-in' headClass=' mb-2 mr-16 md:mr-32 md:mb-8 pl-6' image={Img1} displayText='Lorem' imgClass=' w-40 h-40 md:w-72 md:h-72' navTo='/' />


    </div>
  
</div>
  )
}

export default ContentG
