import React from 'react'
import { useState } from 'react'
import Button from './Button'
import arrowUp from '../../assets/icon-arrow-up.svg'
import arrowDown from '../../assets/icon-arrow-down.svg'

const ServiceNav = () => {

    const [sList, setSList] = useState('hidden')

    const service = document.getElementById('service');


  return (
    
    <div className="space-y-4">
    <div 
    onMouseEnter={() => setSList('flex')}
    
    id='service' className="flex space-x-2 items-center">
      <Button buttonClass="" buttonText="SERVICES" />
      <img src={arrowDown} alt="" className='w-4' />
      </div>


        {/* DROPDOWN */}
      <div
      onMouseLeave={() => setSList('hidden')}
       className={` ${sList} text-sm flex-col -ml-8 space-y-3 bg-black bg-opacity-50 p-4`}>
        <div className="border-b-2 p-1">
        <h1>Live Sound</h1>
        </div>

        <div className="border-b-2 p-1">
        <h1>Backlines</h1>
        </div>

        <div className="border-b-2 p-1">
        <h1>Audioo & music <br /> Production</h1>
        </div>

        <a className="border-b-2 p-1" href="gallery"><Button buttonClass="" buttonText="Video" /></a> 
        <a className="border-b-2 p-1" href="portfolio"> <Button buttonClass="" buttonText="Event Production" /></a>
        <a className="border-b-2 p-1" href="gallery"> <Button buttonClass="" buttonText="Streaming" /></a>

      </div>
    </div>
  )
}

export default ServiceNav
