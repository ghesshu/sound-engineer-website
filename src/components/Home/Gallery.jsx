import React from 'react'
import { useState, useEffect } from 'react'
import Brands from '../General/Brands'
import Prev from '../../assets/Prev.svg'
import Next from '../../assets/Next.svg'
import Img1 from '../../assets/Conferencing-scaled.jpg'
import Img2 from '../../assets/rtaroute-1.jpeg'
import Img3 from '../../assets/tomorrowland-featured1-.jpeg'
import Img4 from '../../assets/idex19-featured-1.jpeg'
import Img5 from '../../assets/jeddah-featured1-1.jpeg'
import Img6 from '../../assets/sadara-featured1-1.jpeg'

import './home.css'



const Gallery = (props) => {

  const [index, setIndex] = useState(0);
  const images = [Img1, Img2, Img3, Img4, Img5, Img6];
  const [currentImages, setcurrrentImages] = useState([images[0],images[1],images[2],images[3]]);

  const [animation, setAnimation] = useState("");

  useEffect(() => {
    // Add the animation class to all images when the component first renders
    const images = document.querySelectorAll(".carousel-image");
    images.forEach(image => image.classList.add("animated-image"));

     // Remove the animation class when the component re-renders
     return () => {
      images.forEach(image => image.classList.remove("animated-image"));
     };
  }, []);




    const productContainers = [...document.querySelectorAll('.product-container')];
    const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
    const preBtn = [...document.querySelectorAll('.pre-btn')];

    productContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nxtBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    })

    preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
        
    })
    })




  return (
    <div className='mt-20  px-8  space-y-16'>

    {/* Heading */}
    <h1 className='font-extrabold text-2xl md:text-4xl px-8 xl:px-36' >Gallery</h1>

    <div className="flex justify-between  items-center">

      {/* Previous Image Button */}

      
      <button onClick={props.handlePrevious} className='pre-btn'>
      <div className="p-2 md:p-4 bg-black bg-opacity-60 px-3 md:px-5  rounded- rounded-full ">
      <img src={Prev} alt="" className='h-2 md:h-4 lg:h-6' />
      </div>
      </button>

      
      
      <div className="z-0 product">
    <div className="product-container mx-4 md:mx-20">
            
            <div className="product-card px-4">
                <img src={Img3} alt="" className=' w-32 smd:w-44 md:w-64 slg:w-80 h-32 smd:h-44 md:h-64 slg:h-80 object-cover rounded-xl' />
            </div>
            <div className="product-card px-4">
                <img src={Img1} alt="" className=' w-32 smd:w-44 md:w-64 slg:w-80 h-32 smd:h-44 md:h-64 slg:h-80 object-cover rounded-xl' />
            </div>
            <div className="product-card px-4">
                <img src={Img2} alt="" className=' w-32 smd:w-44 md:w-64 slg:w-80 h-32 smd:h-44 md:h-64 slg:h-80 object-cover rounded-xl' />
            </div>
            <div className="product-car px-4d">
                <img src={Img1}alt="" className=' w-32 smd:w-44 md:w-64 slg:w-80 h-32 smd:h-44 md:h-64 slg:h-80 object-cover rounded-xl' />
            </div>
            <div className="product-card px-4">
                <img src={Img2} alt="" className=' w-32 smd:w-44 md:w-64 slg:w-80 h-32 smd:wh44 md:wh64 slg:h-80 object-cover rounded-xl' />
            </div>
            <div className="product-card px-4">
                <img src={Img1} alt="" className=' w-32 smd:w-44 md:w-64 slg:w-80 h-32 smd:h-44 md:h-64 slg:h-80 object-cover rounded-xl' />
            </div>
            <div className="product-card px-4">
                <img src={Img2} alt="" className=' w-32 smd:w-44 md:w-64 slg:w-80 h-32 smd:h-44 md:h-64 slg:h-80 object-cover rounded-xl' />
            </div>
            <div className="product-card px-4">
                <img src={Img1} alt="" className=' w-32 smd:w-44 md:w-64 slg:w-80 h-32 smd:h-44 md:h-64 slg:h-80 object-cover rounded-xl' />
            </div>
            <div className="product-card px-4">
                <img src={Img3} alt="" className=' w-32 smd:w-44 md:w-64 slg:w-80 h-32 smd:h-44 md:h-64 slg:h-80 object-cover rounded-xl' />
            </div>
            <div className="product-card px-4">
                <img src={Img2} alt="" className=' w-32 smd:w-44 md:w-64 slg:w-80 h-32 smd:h-44 md:h-64 slg:h-80 object-cover rounded-xl' />
            </div>
            <div className="product-card px-4">
                <img src={Img1} alt="" className=' w-32 smd:w-44 md:w-64 slg:w-80 h-32 smd:h-44 md:h-64 slg:h-80 object-cover rounded-xl' />
            </div>
            

        </div>
    </div>

{/* Next Image Button */}
<button onClick={props.handleNext} className='nxt-btn z-10' >
      <div className="p-2 md:p-4 bg-black  bg-opacity-60 px-3 md:px-5 rounded- rounded-full"><img src={Next} alt="" className='h-2 md:h-4 lg:h-6' /></div>
      </button>
    
      


    </div>
    </div>
  )
}

export default Gallery
