import React from 'react'
import { useState } from 'react'
import Img1 from '../../assets/Conferencing-scaled.jpg'

const HoverImg = (props) => {

    const [hoverdiv, setHoverDiv] = useState('opacity-40')


  return (


    // <div className={`relative ${props.divClass}`}
    // onMouseEnter={() => setHoverDiv('opacity-90')} 
    // onMouseLeave={() => setHoverDiv('opacity-40')}
    // >

    // <a href="">
    //   <div className={`${props.imgClass} bg-black border-2 rounded-lg`}></div>

    //   <div className={` ${props.imgClass} absolute flex flex-col  justify-end items-center top-0 left-0 right-0 bottom-0 bg-black bg-opacity-70 rounded-lg  `}>
    //     <img src={props.image} alt="" className={`object-cover ${props.imgClass} rounded-lg transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-700`} />

    //   </div>
    // </a>

    // </div>

    <div 
    onMouseEnter={() => setHoverDiv('opacity-90')} 
    onMouseLeave={() => setHoverDiv('opacity-40')}
    className={` inline-block relative overflow-hidden ${props.imgClass} ${props.divClass} z-10 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-700 `}>
    <a href={props.navTo}>
    <div className={`relative ${props.imgClass}`}><img src={props.image} alt="" className={` ${props.imgClass
    } object-cover rounded-lg `} /></div>

    <div className={`absolute z-0 ${hoverdiv}  flex flex-col  justify-end items-center top-0 left-0 right-0 bottom-0 bg-black bg-opacity-70 rounded-lg 
    `}>
        <h1 className={`text-white text-sm md:text-2xl ${props.headClass} font-bold  px-2`} >{props.displayText}</h1>
    </div>
    </a>
    </div>
  )
}

export default HoverImg
