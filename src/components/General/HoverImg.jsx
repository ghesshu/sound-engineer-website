import React from 'react'
import { useState } from 'react'
import Img1 from '../../assets/Conferencing-scaled.jpg'

const HoverImg = (props) => {

    const [hoverdiv, setHoverDiv] = useState('opacity-40')


  return (
    <div 
    onMouseEnter={() => setHoverDiv('opacity-90')} 
    onMouseLeave={() => setHoverDiv('opacity-40')}
    className={` relative  ${props.divClass} transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-700`}>
    <a href={props.navTo}>
    <img src={props.image} alt="" className={`z-0 ${props.imgClass
    } object-cover rounded-lg`} />

    <div className={`absolute z-10 ${hoverdiv}  flex flex-col  justify-end items-center top-0 left-0 right-0 bottom-0 bg-black bg-opacity-70 rounded-lg `}>
        <h1 className={`text-white text-sm md:text-2xl ${props.headClass} font-bold  px-2`} >{props.displayText}</h1>
    </div>
    </a>
    </div>
  )
}

export default HoverImg
