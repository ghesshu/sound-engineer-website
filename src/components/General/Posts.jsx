import React from 'react'

const Posts = (props) => {
  return (
    <div className=' '>
      <div className="flex flex-col space-y-12 items-center ">
        <a href={props.imgLink}>
        <div className="  ">
            <img src={props.postImg} alt="" className=' rounded-md h-44 w-80 -mt-3 md:h-56 md:w-80 slg:w-64 slg:h-40 xl:h-56 xl:w-80 ' />
        </div>
        </a>
      
      <div className="flex flex-col flex-wrap space-y-4  w-80 slg:w-64 xl:w-80">
        <p className='text-sm' >{props.headOne}</p>
       <a href="" className='hover:border-b-2'> <h1 className='font-bold tracking-wide' >{props.mainHead}</h1></a>
        <p className='text-sm' >{props.subText}</p>

        <div className="">
        <button className=' font-bold text-sm border-b-2 border-black' >READ MORE</button>
        </div>
      </div>

        
        </div>
    </div>
  )
}

export default Posts
