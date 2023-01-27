import React from 'react'
import logo from '../../assets/nbg-logo.png'
import fb from '../../assets/white-facebook.gif'
import ig from '../../assets/white-instagram.gif'
import tw from '../../assets/white-twitter.gif'

const Footer = () => {
  return (
    <div className='mt-20  bg-black text-white' > 

    <div className="grid grid-cols-2 slg:grid-cols-4 p-3 md:px-8 xl:px-36 justify-items-center py-16 border-b-2">
        

            {/* Footer List One */}
            <div className="space-y-4">
                <h1 className='font-bold text-2xl' >Solutions</h1>
                <div className="space-y-3">
                    <h2>Live Productions</h2>
                    <h2>Virtual Events</h2>
                    <h2>Equipment</h2>
                    <h2>Virtual Support</h2>
                </div>  
            </div>

            {/* Footer List Two */}
            <div className="space-y-4">
                <h1 className='font-bold text-2xl' >Our Campany</h1>
                <div className="space-y-3">
                    <a href="about"><h2>About Us</h2></a>
                    <a href="about"><h2>Our History</h2></a>
                    <a href="about"><h2>Our Team</h2></a>
                    <a href="about"><h2>Our Philosophy</h2></a>
                    
                    
                    
                </div>
            </div>

       

         
        

        {/* Footer List Three */}
        <div className="space-y-4 pt-12 slg:pt-0">
        <h1 className='font-bold text-2xl' >Legal</h1>
        <div className="space-y-3">
            <h2>Privacy Policy</h2>
            <h2>Terms of Service</h2>
        </div>
        </div>

        {/* Footer List Four */}
        <div className="flex flex-col space-y-6">
        <div className="self-center">
        <a href="/"><img src={logo} alt="" /></a>
        </div>

        <div className="flex space-x-3 justify-between px-6">
        <a href="www.facebook.com"><img src={fb} alt="" className='h-11' /></a>
        <a href="www.instagram.com"><img src={ig} alt="" className='h-10' /></a>
        <a href="www.twitter.com"><img src={tw} alt="" className='h-11' /></a>
        </div>
        </div>

        

    </div>

    <div className="flex text-xs slg:text-sm justify-between px-8 xl:px-36 py-6">
        <h1>Mastermix Pro Gear 2023. All rights Reserved</h1>
        <h1>Powered by <strong>Rixrod</strong></h1>
    </div>
      
    </div>
  )
}

export default Footer
