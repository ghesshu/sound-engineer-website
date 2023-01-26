import React from 'react'
import Posts from '../General/Posts'
import Img1 from '../../assets/Conferencing-scaled.jpg'
import Img2 from '../../assets/rtaroute-1.jpeg'
import Img3 from '../../assets/tomorrowland-featured1-.jpeg'
import Img4 from '../../assets/idex19-featured-1.jpeg'



const Insights = () => {
  return (
    <div className='mt-20 px-8 xl:px-36 space-y-6'>

         {/* Heading */}
         <h1 className='font-extrabold text-2xl md:text-4xl' >Insights</h1>

         <div className="flex flex-col space-y-16 slg:space-y-0 justify-between slg:flex-row  pt-8">
            <Posts
            postImg={Img1} 
            headOne='December 5, 2022  Events, Press Release' 
            mainHead='BBC GOOD FOOD SHOW WINTER 2022'
            subText='The BBC Good Food Show, Writer 2022 ...'
            />
            <Posts 
            postImg={Img2} 
            headOne='november 23, 2022  Events, Press Release' 
            mainHead='ICMIF CONFERENCE 2022'
            subText='The ICMIF (International Cooperative and Mutual Insurance Federation) recently celebrated ...' />
            <Posts 
            postImg={Img3} 
            headOne='November 17, 2022  Events, Press Release' 
            mainHead='NNOW HIRING'
            subText='Passionate about the live events industry? Detail oriented? Protec is ...'
            />
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
