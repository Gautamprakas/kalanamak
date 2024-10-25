import React,{useState} from 'react'
import { NavLink } from 'react-router-dom'
import Card from '../components/Card'
import CarouselPage from '../components/Carousel'
import banner from '../images/kalanamak_main.jpg'
import img10 from '../images/CDO_siddharthnagar.jpg'
import img11 from '../images/DM_Siddharthnagar2.jpg'



const Home = () => {
  // State to handle modal visibility
  const [showModal, setShowModal] = useState(true);

  // Function to close the modal
  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div>

      {/* Popup Modal */}
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={handleCloseModal}>&times;</span>
            <img src={banner} alt="Banner" className="modal-banner" />
          </div>
        </div>
      )}
      <CarouselPage />
      <div>
        <div className='my-3 md:my-8 lg:my-9  lg:px-16 md:px-12 px-3'>
          <div className='text-center lg:py-2'>
            <h1
              className='font-semibold lg:text-3xl text-2xl px-2 text-[#0f5f17] inline-block border-b-[#af7501] border-b-2 py-1 '>
              Proof of Origin
            </h1>
          </div>
          <p className='py-3 md:text-lg md:text-center text-left'>
            Buddha Rice (Kalanamak Rice) is in cultivation since the Buddhist period (600 BC). The grains were
            found from excavation of Aligarhwa (district Siddharthnagar, Uttar Pradesh, India),
            located at Nepal border. Aligarhwa has been identified as the real Kapilvastu, the
            kingdom of King Suddhodana, father of Lord Buddha. Suddhodana, as the name
            suggests, means pure rice. Aligarhwa in the foothills of the Himalayas is considered the
            rice bowl. During excavation carbonized rice grains resembling Buddha Rice (Kalanamak Rice) were
            recovered from one of the rooms, which was supposed to be the kitchen store.
          </p>
        </div>
        {/*<div className='mop  py-4' id='production'>
          <h1 className='font-bold text-center md:text-3xl  text-2xl py-2 text-white'>
            Method Of Production
          </h1>
          <div className='flex lg:flex-row flex-col justify-center items-center lg:space-x-8 max-lg:space-y-5 lg:py-10 py-6'>
            */}{/*<NavLink to='methods'>
              <Card data='Seed Germination Test' val='1' />
            </NavLink>*/}
            {/*<NavLink to='methods'>
              <Card data='Method Of Production' val='2' />
            </NavLink>*/}
            {/*<NavLink to='methods'>
              <Card data='Pest And Disease' val='3' />
            </NavLink>*/}
         {/* </div>
        </div>*/}
      <div className='flex lg:flex-row flex-col-reverse items-center my-2 md:my-4 justify-center'> 
    <div className='flex lg:flex-row flex-col items-center my-2 md:my-4 justify-center'>
        <div className='flex flex-col items-center w-full md:w-[30%] text-center md:text-xl font-semibold'>
            <img src={img11} className='lg:w-[70%] w-[80%] pt-2 lg:pt-0 ' alt="DM Siddharthnagar" />
            <label className='mt-0'>Dr. Rajaganapathy R, IAS</label>
            <label className='mt-0'>DM Siddharthnagar</label>
        </div>
        <div className='flex flex-col items-center w-full md:w-[30%] text-center md:text-xl font-semibold'>
            <img src={img10} className='lg:w-[70%] w-[80%] pt-2 lg:pt-0 ' alt="CDO Siddharthnagar" />
            <label className='mt-0'>Shri Jayendra Kumar</label>
            <label className='mt-0'>CDO Siddharthnagar</label>
        </div>
    </div>
</div>

      </div>
      
    </div>
  )
}

export default Home
