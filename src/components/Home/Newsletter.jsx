import React from 'react'
import { useState } from 'react'
import Dnext from '../../assets/d-next.svg'

const Newsletter = () => {
    
    // const [index, setIndex] = useState(0);
    // const images = ['bg-img-1', 'bg-s-img-1', 'bg-s-img-2'];
    // const length = 3;

    // const handlePrevious = () => {
    //     const newIndex = index - 1; 
    //     setIndex(newIndex < 0 ? images.length-1 : newIndex);
    // };

    // const handleNext = () => {
    //     const newIndex = index + 1; 
    //     setIndex(newIndex >= images.length ? 0 : newIndex);
    // };


    
  return (
    <div className='mt-20 px-8 xl:px-36 bg-nl-img-4 text-white'>

        <div className="space-y-8 py-20">
            <h1 className='font-extrabold text-4xl lg:text-4xl'>SIGN UP FOR <br /> OUR NEWSLETTER</h1>

            <form action="" className='space-y-7'>
                <div className="">
                <label htmlFor="email"></label>
                <input type="email" id='email' name='email' placeholder='Your email' className='p-2 border-b-4 w-72 md:w-96 bg-g bg-transparent outline-0 ' />
                </div>
               

                {/* <input type="submit" value="Sign Up" /> */}
                <button className='flex items-center space-x-3 bg-black py-2e px-3'>
                <p className='font-bold' >SIGN UP</p>
                <img src={Dnext} alt="" />
            </button>
                
            </form>
        </div>
     
    </div>
  )
}

export default Newsletter
