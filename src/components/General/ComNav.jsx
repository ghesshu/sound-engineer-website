import React from 'react'
import { useState } from 'react'
import Button from './Button'
import arrowUp from '../../assets/icon-arrow-up.svg'
import arrowDown from '../../assets/icon-arrow-down.svg'
import './General.css'

const ComNav = () => {
    const [cList, setCList] = useState('hidden')
    const [scale, setScale] = useState('scale-0')

    

    const service = document.getElementById('service');
  return (
    <div className="space-y-4 sHead" 
    onMouseEnter={() => setCList('flex')}
    
    >
      <div
      
       className="flex space-x-3 ">
      <Button buttonClass="" buttonText="COMMUNICATION" />
      <img src={arrowDown} alt="" className='w-4'  />
      </div>

      <div 
      
      className={` ${cList} absolute sList flex text-sm flex-col  space-y-3 bg-black bg-opacity-50 p-4 transition ease-in-out hover:scale-110 delay-150 duration-500 `}>
      <a className="border-b-2 hover:border-slate-500 p-1" href="gallery"><Button buttonClass="" buttonText="Our Work" /></a> 
      <a className="border-b-2 hover:border-slate-500 p-1" href="portfolio"> <Button buttonClass="" buttonText="Testimonials" /></a>
      <a className="border-b-2 hover:border-slate-500 p-1" href="gallery"> <Button buttonClass="" buttonText="DOWNLOADS" /></a>
      </div>
    </div>
  )
}

export default ComNav
