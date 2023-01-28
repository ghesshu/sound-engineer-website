import React from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Button from './Button'
import hamopen from '../../assets/icon-hamburger.svg'
import hamclose from '../../assets/icon-close.svg'
import arrowUp from '../../assets/icon-arrow-up.svg'
import arrowDown from '../../assets/icon-arrow-down.svg'
import propsarrowDownB from '../../assets/icon-arrow-down-black.gif'
import ServiceNav from './ServiceNav'
import ComNav from './ComNav'
import logo from '../../assets/nbg-logo.png'



const Navbar = (props) => {

  const navigate = useNavigate()



  return (


    <div className={`${props.navbar} head flex items-center justify-between fixed top-0 left-0 right-0 px-12 xl:px-24 mx-auto drop-shadow-2xl`}>

      <a href="" className=''><img src={logo} alt="" className='h-12' /></a>

      <input type="checkbox" id="menu-bar" />
      <label htmlFor="menu-bar">Menu</label>

      <nav className="navbar text-sm font-bold 2xl:text-base p-8 ">
        <ul className='space-x-4 slg:space-x-9 2xl:space-x-16 '>
          <li><a href="/">HOME</a></li>
          <li><a href="about">ABOUT</a></li>

          <li><a href="#" >
            
          <div className="flex space-x-2 items-center justify-center">
          <h1>SERVICES</h1> <img src={props.arrowDownB} alt="" className=' w-5 object-cover' />
            </div></a>
          <ul className='drop-shadow-2xl text-black'>

            {/* 1st List */}
            <li className='p-8 border-b-2'><a href="#">
            <div className="flex space-x-2 items-center justify-between">
          <h1>Live Sound</h1> <img src={props.arrowDownB} alt="" className=' w-5 object-cover -rotate-90' />
            </div>
            </a>
             <ul>
              <li className='p-8 hover:bg-slate-600 border-2 border-t-0 hover:text-white'><a href="#">View Equiqments</a></li>
             </ul>

             {/* 2nd list */}
            </li>
            <li className='p-6 border-b-2'><a href="#"> <div className="flex space-x-2 items-center justify-between">
          <h1>Backlines</h1> <img src={props.arrowDownB} alt="" className=' w-5 object-cover -rotate-90' />
            </div></a>
            <ul>
              <li className='p-6 hover:bg-slate-600 border-2 hover:text-white'><a href="#">View Equiqments</a></li>
             </ul>
            </li>

            {/* 3rd */}
            <li className='p-6 border-b-2'><a href="#"><div className="flex space-x-2 items-center justify-between">
          <h1>Audio & Music <br />Production</h1> <img src={props.arrowDownB} alt="" className=' w-5 object-cover -rotate-90' />
            </div></a>
            <ul>
              <li className='p-6 hover:bg-slate-600 border-2 hover:text-white'><a href="#">View Equqment</a></li>
             </ul>
            </li>
            <li className='p-6 border-b-2'><a href="#">Video</a></li>
            <li className='p-6 border-b-2'><a href="#">Event Production</a></li>
            <li className='p-6 border-b-2'><a href="#">Streaming</a></li>
          </ul>
          </li>


          <li><a href="#">GALLERY </a></li>
          <li><a href="#">PORTFOLIO</a></li>

          <li><a href="#">
          <div className="flex space-x-2 items-center justify-between">
          <h1>COMMUNICATION</h1> <img src={props.arrowDownB} alt="" className=' w-5 object-cover' />
            </div>
          </a>
          <ul className='text-black '>
            <li className='p-8 border-b-2'><a href="#">Our Work</a></li>
            <li className='p-8 border-b-2'><a href="#">Testimonials</a></li>
            <li className='p-8 border-b-2'><a href="#">Downloads</a></li>
          </ul>
          </li>

          <li><a href="#">CONTACT</a></li>
        </ul>
      </nav>

      <div className="">

      </div>
    </div>



    // <div className={`fixed ${props.navbar}  flex w-screen items- items-center justify-between p-4 lg:p- xl:px-24 2xl:36 mx-auto `}>
    //   {/* <h1 className='font-bold text-3xl lg:text-4xl'>LOGO</h1> */}

    //   <div className="self-start px-4 py-1 rounded-md">
    //   <img src={logo} alt="" className='h-12' />
    //   </div>

    //   <div className="hidden lg:flex space-x-4 slg:space-x-9 2xl:space-x-16 font-bold text-sm lg:text-base">


      
    // <a href="/"><Button buttonClass="" buttonText="HOME" /></a>
    // <a href="about"><Button buttonClass="" buttonText="ABOUT"/></a>
    // <ServiceNav />
    // <a href="gallery"><Button buttonClass="" buttonText="GALLERY" /></a> 
    // <a href="portfolio"> <Button buttonClass="" buttonText="PORTFOLIO" /></a>

    
    // <ComNav />
   
    // <a href="contact"><Button buttonClass="" buttonText="CONTACT" /></a>
    //   </div>

    //   <div className="lg:hidden">
    //     <img src={hamopen} alt="" />
    //   </div>

    //   <div className="hidden lg:block">
        
    //   </div>
    // </div>
  )
}

export default Navbar
