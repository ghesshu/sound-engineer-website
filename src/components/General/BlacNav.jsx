import React from 'react'
import { useState } from 'react'
import Navbar from './Navbar'
import arrowDownB from '../../assets/icon-arrow-down-black.gif'
import arrowDown from '../../assets/icon-arrow-down.svg'

const BlacNav = () => {

    const [navbar, setNavbar] = useState('text-white bg-black');
    const [arrowColor, setArrowColor] = useState(arrowDown);

    const changeBackground = () => {
      if(window.scrollY >= 300) {
        setNavbar('bg-white text-black drop-shadow-2xl')
        setArrowColor(arrowDownB)
      } else if(window.scrollY < 300){
        setArrowColor(arrowDown)
        setNavbar('bg-black text-white')
      } else  {
        setNavbar('bg-black text-white')
        
      }
    };
  
    window.addEventListener('scroll', changeBackground);

  return (
    <div>
      <Navbar navbar={navbar} arrowDownB={arrowColor} />
    </div>
  )
}

export default BlacNav
