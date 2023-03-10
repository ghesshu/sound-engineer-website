import React from 'react'
import Posts from '../General/Posts'
import Img1 from '../../assets/Conferencing-scaled.jpg'
import Img2 from '../../assets/rtaroute-1.jpeg'
import Img3 from '../../assets/tomorrowland-featured1-.jpeg'
import Img4 from '../../assets/idex19-featured-1.jpeg'



const Insights = () => {
  return (
    <div className='mt-9 md:mt-16 px-8 2xl:px-24  slg:space-y-6'>

         {/* Heading */}
         <h1 className='font-extrabold text-2xl md:text-4xl xl:px-36' >Insights</h1>

         <div className="flex flex-col space-y-16 lg:space-y-0 justify-between items-center lg:flex-row  pt-8">
            <div className="bg-black text-white py-6 px-3 md:p-6 rounded-2xl lg:mx-0 h-[460px]">
            <Posts
            postImg={Img1} 
            headOne='December 5, 2022  Events, Press Release' 
            mainHead='BBC GOOD FOOD SHOW WINTER 2022'
            subText='The BBC Good Food Show, Writer 2022 ...'
            />
            </div>
            <div className="bg-white  drop-shadow-2xl p-6 rounded-2xl py-6 px-3 md:p-6  h-[460px]">
            <Posts 
            postImg={Img2} 
            headOne='november 23, 2022  Events, Press Release' 
            mainHead='ICMIF CONFERENCE 2022'
            subText='The ICMIF (International Cooperative and Mutual Insurance Federation) recently celebrated ...' />
            </div>

            {/* Transition Code */}
            {/* transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-700 */}
            <div className="bg-black drop-shadow-2xl border-2 text-white p-6 rounded-2xl py-6 px-3 md:p-6  h-[460px] ">
            <Posts 
            postImg={Img3} 
            headOne='November 17, 2022  Events, Press Release' 
            mainHead='NNOW HIRING'
            subText='Passionate about the live events industry? Detail oriented? Protec is ...'
            />
            </div>
         </div>

         <div className=" py-4 flex items-center justify-center space-x-3">
            <button className='border-b-2 border-black px-2'>1</button>
            <button className=' px-2' >2</button>
            <button className=' px-2' >3</button>
            <button className=' px-2' >4</button>
            
         </div>
      
    </div>
  )
}

export default Insights
