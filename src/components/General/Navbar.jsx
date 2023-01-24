import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Button from './Button'
import hamopen from '../../assets/icon-hamburger.svg'
import hamclose from '../../assets/icon-close.svg'

const Navbar = (props) => {

  const navigate = useNavigate()

  return (
    <div className='flex items-center justify-between p-4 lg:p-8 xl:px-36 mx-auto text-white'>
      <h1 className='font-bold text-3xl lg:text-4xl'>LOGO</h1>

      <div className="hidden lg:flex space-x-4 slg:space-x-9 xl:space-x-16 font-bold text-sm lg:text-base">


      {/* <Link to="/" ><Button buttonClass="" buttonText="HOME"/></Link>
      <Link to="about"> <Button buttonClass="" buttonText="ABOUT"/></Link>
      <Link to="services"><Button buttonClass="" buttonText="SERVICES"/></Link> */}

        <a href="/"><Button buttonClass="" buttonText="HOME" /></a>
        <a href="about"><Button buttonClass="" buttonText="ABOUT"/></a>
        <a href="services"><Button buttonClass="" buttonText="SERVICES" /></a>
        <a href="gallery"><Button buttonClass="" buttonText="GALLERY" /></a> 
        <a href="portfolio"> <Button buttonClass="" buttonText="PORTFOLIO" /></a>
        <a href="communication"> <Button buttonClass="" buttonText="COMMUNICATION" /></a>
        <a href="contact"><Button buttonClass="" buttonText="CONTACT" /></a>

        {/* <Button buttonClass="" buttonText="HOME" buttonOnClick={() => {navigate('/')}} />
        <Button buttonClass="" buttonText="ABOUT" buttonOnClick={() => {navigate('about')}} />
        <Button buttonClass="" buttonText="SERVICES" buttonOnClick={() => {navigate('services')}} />
        <Button buttonClass="" buttonText="GALLERY" buttonOnClick={() => {navigate('gallery')}} />
        <Button buttonClass="" buttonText="PORTFOLIO" buttonOnClick={() => {navigate('portfolio')}} />
        <Button buttonClass="" buttonText="COMMUNICATION" buttonOnClick={() => {navigate('communication')}} />
        <Button buttonClass="" buttonText="CONTACT" buttonOnClick={() => {navigate('contact')}} /> */}
      </div>

      <div className="">
        <img src={hamopen} alt="" />
      </div>

      <div className="hidden lg:block">
        
      </div>
    </div>
  )
}

export default Navbar
