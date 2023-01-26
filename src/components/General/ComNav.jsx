import React from 'react'
import { useState } from 'react'
import Button from './Button'
import arrowUp from '../../assets/icon-arrow-up.svg'
import arrowDown from '../../assets/icon-arrow-down.svg'

const ComNav = () => {
    const [cList, setCList] = useState('hidden')

    const service = document.getElementById('service');
  return (
    <div className="space-y-4">
      <div
      onMouseEnter={() => setCList('flex')}
       className="flex space-x-3">
      <Button buttonClass="" buttonText="COMMUNICATION" />
      <img src={arrowDown} alt="" className='w-4'  />
      </div>

      <div 
      onMouseLeave={() => setCList('hidden')}
      className={` ${cList} flex text-sm flex-col  space-y-3 bg-black bg-opacity-50 p-4`}>
      <a className="border-b-2 hover:border-slate-500 p-1" href="gallery"><Button buttonClass="" buttonText="Our Work" /></a> 
      <a className="border-b-2 hover:border-slate-500 p-1" href="portfolio"> <Button buttonClass="" buttonText="Testimonials" /></a>
      <a className="border-b-2 hover:border-slate-500 p-1" href="gallery"> <Button buttonClass="" buttonText="DOWNLOADS" /></a>
      </div>
    </div>
  )
}

export default ComNav
