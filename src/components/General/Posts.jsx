import React from 'react'

const Posts = (props) => {
  return (
    <div>
      <div className="flex flex-col items-center ">
        <div className="border-2 ">
            <img src={props.postImg} alt="" className='h-56 w-80 slg:w-64 slg:h-40 xl:h-56 xl:w-80' />
        </div>
      
      <div className="flex flex-col flex-wrap space-y-4  w-80 slg:w-64 xl:w-80">
        <p className='text-sm' >{props.headOne}</p>
        <h1 className='font-bold tracking-wide' >{props.mainHead}</h1>
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
