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


  // const handlePrevious = () => {
  //   let newImages = [...currentImages];
  //   newImages.shift();
  //   const newIndex = index - 1;
  //   newImages.push(images[newIndex < 0 ? images.length - 1 : newIndex]);
  //   setcurrrentImages(newImages);
  //   setIndex(newIndex < 0 ? images.length - 1 : newIndex);
  //   setAnimation("slide-in-right")
  // };

  const handlePrevious = () => {
    let newImages = [...currentImages];
    newImages.shift();
    const newIndex = index - 1;
    newImages.push(images[newIndex < 0 ? images.length - 1 : newIndex]);
    setAnimation("slide-out-left")
    setTimeout(() => {
      setcurrrentImages(newImages);
      setIndex(newIndex < 0 ? images.length - 1 : newIndex);
      setAnimation("slide-in-right");
    }, 500);
  };


  // const handleNext = () => {
  //   let newImages = [...currentImages];
  //   newImages.pop();
  //   const newIndex = index + 1;
  //   newImages.unshift(images[newIndex >= images.length ? 0 : newIndex]);
  //   setcurrrentImages(newImages);
  //   setIndex(newIndex >= images.length ? 0 : newIndex);
  // };

  const handleNext = () => {
    let newImages = [...currentImages];
    newImages.pop();
    const newIndex = index + 1;
    newImages.unshift(images[newIndex >= images.length ? 0 : newIndex]);
    setAnimation("slide-out-right")
    setTimeout(() => {
      setcurrrentImages(newImages);
      setIndex(newIndex >= images.length ? 0 : newIndex);
      setAnimation("slide-in-left");
    }, 500);
  };

  return (
    <div className=' hidden lg:block mt-20 px-8  space-y-16'>

    {/* Heading */}
    <h1 className='font-extrabold text-2xl md:text-4xl px-8 xl:px-36' >Gallery</h1>

    <div className="flex justify-between  items-center">

      {/* Previous Image Button */}

      
      <button onClick={handlePrevious} className='md:block'>
      <div className=" border-2 p-4 bg-black bg-opacity-60 px-5 rounded- rounded-full ">
      <img src={Prev} alt="" className='h-6' />
      </div>
      </button>
      
      

      <div className="  flex  text-center items-center space-x-16">
        {/* <img src="" alt="" className='w-60 h-60' />
        <img src="" alt="" className='w-60 h-60' />
        <img src="" alt="" className='w-60 h-60' />
        <img src="" alt="" className='w-60 h-60' /> */}
        {currentImages.map((image, i) => (
          <img key={i} src={image} alt={`Image ${i +1}`} className={` w-44 h-44 xl:w-60 xl:h-60 border-2 
          carousel-image ${animation} 
          `}  />
        ) )}
      </div>

{/* Next Image Button */}
    
    <button onClick={handleNext} className='hidden md:block z-10' >
      <div className="border-2 p-4 bg-black  bg-opacity-40 px-5 rounded- rounded-full"><img src={Next} alt="" className='h-6' /></div>
      </button>
      


    </div>

    <div className="flex justify-center space-x-1"> 
    <span className='border-2 h-2 w-2 rounded-full bg-black border-black' ></span>
    <span className='border-2 h-2 w-2 rounded-full border-black' ></span>
    <span className='border-2 h-2 w-2 rounded-full border-black' ></span>
    </div>
    
    
      
    </div>
  )
}

export default Gallery
