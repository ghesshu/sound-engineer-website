import React from 'react'

const Footer = () => {
  return (
    <div className='mt-20  bg-black text-white' > 

    <div className="grid grid-cols-2 slg:grid-cols-4 px-8 xl:px-36 justify-items-center py-16 border-b-2">
        

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
                    <h2>About Us</h2>
                    <h2>Our History</h2>
                    <h2>Our Team</h2>
                    <h2>Our Philosophy</h2>
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
        <div className="self-center">
        <h1 className='font-bold text-3xl lg:text-4xl'>LOGO</h1>
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
