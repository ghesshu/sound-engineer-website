import React from 'react'
import { useState } from 'react'
import fb from '../../assets/black-facebook.gif'
import ig from '../../assets/black-instagram.gif'
import tw from '../../assets/black-twitter.gif'
import dnext from '../../assets/d-next.svg'


const ContentCT = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add code to handle form submission here
  };

  return (
    <div className='mt-20 mb-20 px-8 lg:px-28 xl:px-56'>
      <div className="flex flex-col  slg:flex-row md:space-x-12 space-y-20 lg:space-y-0 md:justifybetween justify-center items-center">
        <div className="lg:w-1/2 space-y-8">
          <h1 className='text-5xl font-bold'>SEND US <br /> A MESSAGE</h1>
          <p className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero deleniti et impedit! In doloribus laudantium magnam, commodi non nam laboriosam exercitationem reiciendis, id, quam earum aspernatur. Et veritatis optio natus a corrupti, vitae ipsam repellat consequatur dolorum, provident eos consequuntur laboriosam?</p>

          <div className="flex space-x-8">
        <a href="www.facebook.com"><img src={fb} alt="" className='h-6' /></a>
        <a href="www.instagram.com"><img src={ig} alt="" className='h-6' /></a>
        <a href="www.twitter.com"><img src={tw} alt="" className='h-6 ' /></a>
        </div>

        </div>

       <div className="lg:w-1/2">
       <form onSubmit={handleSubmit} >
        <div className="flex flex-col space-y-16">
      <div className="flex space-x-4 justify-between">
      <input
        className='border-b-2 border-slate-700 w-1/2'
        type="text"
        placeholder="Your Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
       className='border-b-2 border-slate-700 w-1/2'
        type="email"
        placeholder="Your Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      </div>
      <input
       className='border-b-2 border-slate-700'
        type="text"
        placeholder="Subject"
        value={subject}
        onChange={(e) => setSubject(e.target.value)}
      />
      <textarea
       className='border-b-2 border-slate-700'
        placeholder="Your Message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      {/* <button type="submit" className='bg-black text-white  w-52 p-4 flex space-'></button> */}
      <button className='flex items-center justify-center space-x-6 bg-black py-4 px-3 w-52'>
                <p className='font-bold text-white' >Submit</p>
                <img src={dnext} alt="" />
            </button>
      </div>
    </form>
       </div>
      </div>
    </div>
  )
}

export default ContentCT
