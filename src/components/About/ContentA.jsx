import React from 'react'
import FacilitiesA from './FacilitiesA'
import VM from '../../assets/idex19-featured-1.jpeg'
import Brands from '../General/Brands'
import Footer from '../General/Footer'
import Img1 from '../../assets/Conferencing-scaled.jpg'
import Img2 from '../../assets/rtaroute-1.jpeg'
import Img3 from '../../assets/tomorrowland-featured1-.jpeg'
import Img4 from '../../assets/idex19-featured-1.jpeg'


const ContentA = () => {
  return (
    <div className="">
    <div className='mt-20 px-8 lg:px-44 xl:px-80'>


      {/* About Part One */}
      {/* Brief History */}
      <div className="flex flex-col justify-center space-y-6">
        <h1 className='text-center font-extrabold text-xl' >A ONE-STOP PRESTIGIOUS AUDIO & MUSIC <br /> PRODUCTION</h1>

        <div className="space-y-6 xl:space-y-11">
        <p>
        Mastermix Production Gear Limited is a one-stop prestigious audio & music production outfit and a supplier of professional event & entertainment technology services to the industry in Ghana and throughout West Africa. The <strong>#1</strong> reason to choose Mastermix Production Gear is “ <strong>We know how it is supposed to Sound & Look and We Deliver!</strong> ”
        </p>

        <p>
        We are one of the well-known and respected names in the industry that supplies a total and complete service for live sound, audio & music production, recording artists, touring artists, concerts, festivals, corporate events, conferences, and a wide variety of special events. These services include event production, audio technology training, consultancy, and sourcing of suitable (lighting, stage, and video systems) suppliers for indoor & outdoor production.
        </p>

        <p>
        We can work with our clients to overcome the constraints of time, budget, or venue, whilst working with industry-leading brands, allowing us to consistently deliver outstanding results

        </p>
        </div>

        
        <FacilitiesA />
      </div>

      {/* About Part Two */}

      <div className="mt-20 space-y-12 ">
        <h1 className='font-extrabold text-3xl slg:text-4xl' >Team</h1>

        <div className="flex flex-col justify-center space-y-6">
            <p>
            We understand that people are the key to a successful project, which is why our experienced, highly trained, and friendly staff ensures every project is unique and delivered to the highest standard. Our team of experienced professionals is managed by <strong>Sami Helwani.</strong>
            </p>

            <p>
            What makes us stand out are our people, production managers, engineers, designers, and technicians, all with an understanding beyond their individual "technical" knowledge and an attitude that will make you want to work with them time and time again. This team will provide excellent service to your production or project concerning Quality and Prompt Service Delivery.
            </p>

            <p>
            This is achieved with; our large stock of well-maintained state-of-the-art equipment, friendly and cooperative personnel, regular staff training and upgrading of our inventory; and of course, doing it right the first time and every time.
            </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <img src={Img1} alt="" className='border-2 w-40 h-40 smd:w-60 smd:h-60 object-cover' />
            <img src={Img2} alt="" className='border-2 w-40 h-40 smd:w-60 smd:h-60 object-cover' />
            <img src={Img3} alt="" className='border-2 w-40 h-40 smd:w-60 smd:h-60 object-cover' />
            <img src={Img4} alt="" className='border-2 w-40 h-40 smd:w-60 smd:h-60 object-cover' />
            <img src={Img2} alt="" className='hidden md:block border-2 w-60 h-60' />
        </div>

      </div>

      {/* About Part Three */}
      <div className="mt-20 space-y-6 ">
        <h1 className='font-extrabold text-3xl slg:text-4xl'>Our History</h1>
        <p>
        IN 1997 <strong>Sami Helwani</strong> founded <strong>Mastermix Studios (now; Mastermix Production Gear Ltd)</strong> which started with a reasonable amount of audio equipment and a lot of imagination. In 2006 <strong>Mastermix</strong> expanded its operations with the addition of a larger professional recording studio, rental of sound reinforcement systems, backlines, and production services. Today, with more state-of-the-art equipment and experience we haven't lost the imagination that got us there - or forgotten that the small studio business is how we started out and that is what has brought us this far.

        </p>
      </div>

      {/* About Part Four */}
      <div className="mt-20 space-y-6 ">
        <h1 className='font-extrabold text-3xl slg:text-4xl'>Our Vision</h1>
        <p>
        At <strong>Mastermix Production Gear,</strong> we consider a positive attitude to be the single most important thing we have to offer the client. Excellence is our watchword and this is evidenced in the result of every contract we execute. We look at each project individually and consider the parameters specific to the situation to offer a turnkey solution tailored to a project’s specific requirements, and also offer a personalized service that will suit the needs of the client and ensure we deliver a cost-effective and efficient service. To us, every job matters a great deal, and if it is worth doing, it has to be done well.
        </p>
      </div>

      {/* About Part Five */}
      <div className="mt-20 mb-20 space-y-8 md:space-y-0 ">

        {/* Vission */}
       <div className="flex flex-col-reverse md:flex-row justify-center md:items-center slg:space-x-12">

        {/* Text */}
        <div className="md:w-1/2  space-y-4">
            <h1 className='font-extrabold text-3xl slg:text-4xl' >Our Vision</h1>
            <p>
            To become and remain one of Africa’s leading audio & music production company and a supplier of professional event & entertainment technology services to the industry across Africa and beyond.
            </p>
        </div>

        {/* Image */}
        <div className="py-6">
            <img src={VM} alt="" className='h-52 w-96' />
        </div>
       </div>

       {/* Mission */}
       <div className="flex flex-col md:flex-row justify-center md:items-center md:space-x-8 slg:space-x-12">

        {/* Image */}
        <div className="py-6">
            <img src={VM} alt="" className='h-52 w-96' />
        </div>

        {/* Text */}
        <div className="md:w-1/2  space-y-4">
            <h1 className='font-extrabold text-3xl slg:text-4xl' >Our Mission</h1>
            <p>
            To provide quality productions through innovation and creativity, delivering excellent services with the best technology and equipment to our existing and future clientele, thus creating an influential path for industry growth.
            </p>
        </div>
       </div>




      </div>

    </div>
    <Brands />
    <Footer/>
    </div>
  )
}

export default ContentA
