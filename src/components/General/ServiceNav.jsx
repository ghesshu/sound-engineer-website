import React from 'react'
import { useState, useEffect } from 'react'
import Aos from 'aos'
import Button from './Button'
import arrowUp from '../../assets/icon-arrow-up.svg'
import arrowDown from '../../assets/icon-arrow-down.svg'

const ServiceNav = () => {

  useEffect(() => {
    Aos.init({duration: 1000});
  }, []);

    const [sList, setSList] = useState('hidden')
    const [miniLclass, setMiniclass] = useState('hidden')
    const [miniLclass2, setMiniclass2] = useState('hidden')
    const [miniLclass3, setMiniclass3] = useState('hidden')

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
       className={` ${sList} text-sm flex-col -ml-8 space-y-3 bg-black bg-opacity-70 p-4 dropdown_menu dropdown_menu--animated dropdown_menu-8 `}>


        {/* Mini List 1 */}
        <div className="flex flex-col space-y-3">
        <div 
         onMouseEnter={() => setMiniclass('flex')}
        className="flex space-x-4 border-b-2 hover:border-slate-500 p-1">
        <h1 className='w-5/6' >Live Sound</h1>
        <img src={arrowDown} alt="" className='w-4' />
        </div>

        <div 
        onMouseLeave={() => setMiniclass('hidden')}
        className={` ${miniLclass} text-xs text-center`}>
          <button>View Equiqment</button>
        </div>
        </div>

        {/* Mini List 2 */}
        <div className="flex flex-col space-y-3">
        <div 
        onMouseEnter={() => setMiniclass2('flex')}
        className="flex space-x-4 border-b-2 hover:border-slate-500 p-1">
        <h1 className='w-5/6' >Backlines</h1>
        <img src={arrowDown} alt="" className='w-4' />
        </div>

        <div
        onMouseLeave={() => setMiniclass2('hidden')}
         className={` ${miniLclass2} text-xs text-center`}>
          <button>View Equiqment</button>
        </div>
        </div>


        {/* Mini List 3 */}
        <div className="flex flex-col space-y-3">
        <button 
        onMouseEnter={() => setMiniclass3('flex')}
        
         className="">
        <div className="flex space-x-4 border-b-2 hover:border-slate-500 p-1 ">
        <h1 className='w-5/6' >Audio & music <br /> Production</h1>
        <img src={arrowDown} alt="" className='w-4' />
        </div>
        </button>

        <div
        onMouseLeave={() =>setMiniclass3('hidden')}
         className={` ${miniLclass3} text-xs text-center border-b-2 p-1 hover:border-slate-500`}>
          <button>View Equiqment</button>
        </div>
        </div>
        

       

       

        <a className="border-b-2 p-1" href="gallery"><Button buttonClass="" buttonText="Video" /></a> 
        <a className="border-b-2 p-1" href="portfolio"> <Button buttonClass="" buttonText="Event Production" /></a>
        <a className="border-b-2 p-1" href="gallery"> <Button buttonClass="" buttonText="Streaming" /></a>

      </div>
    </div>
  )
}

export default ServiceNav
