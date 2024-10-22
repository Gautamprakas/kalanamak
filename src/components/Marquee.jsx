import React from 'react';
import img7 from '../images/merged_db_cdo2.jpg'
import img6 from '../images/cm_agri.jpg'
import img8 from '../images/surya_pratap_sahi.jpg'
import img9 from '../images/yogi_ji.jpg'
import img10 from '../images/CDO_siddharthnagar.jpg'
import img11 from '../images/DM_Siddharthnagar2.jpg'
import Membershipform from '../dacuments/Membershipform.pdf'

const Marquee = () => {
  return (
    <div className="">
      {/*<div className='flex flex-row items-center py-1 md:px-5 px-2 bg-slate-100 shadow-sm'>
         <div className='flex flex-col items-center w-[25%] text-center md:text-xl font-semibold'>
            <img src={img9} className='lg:w-[50%] w-[80%] pt-2 lg:pt-0 img_left' alt="Yogi Adityanath" />
            <label className='mt-0'>Yogi Adityanath</label>
            <label className='mt-0'>Hon'ble Chief Minister </label>
           
          </div>

          
          <div className='flex flex-col items-center w-[25%] text-center md:text-xl font-semibold'>
            <img src={img8} className='lg:w-[50%] w-[80%] pt-2 lg:pt-0 img_left' alt="Surya Pratap Sahi" />
            <label className='mt-0'>Surya Pratap Sahi</label>
            <label className='mt-0'>Hon'ble Cabinet Minister</label>

          </div>

            <div className='flex flex-col items-center w-[25%] text-center md:text-xl font-semibold'>
          <img src={img10} className='lg:w-[50%] w-[80%] pt-2 lg:pt-0 img_right' alt="CDO Siddharthnagar" />
          <label className='mt-0.0'>Shri Jayendra Kumar</label>
            <label className='mt-0.0'>CDO Siddharthnagar</label>
        </div>

       
        <div className='flex flex-col items-center w-[25%] text-center md:text-xl font-semibold'>
          <img src={img11} className='lg:w-[50%] w-[80%] pt-2 lg:pt-0 img_right' alt="DM Siddharthnagar" />
          
            <label className='mt-0.0'>Dr. Rajaganapathy R, IAS</label>
          <label className='mt-0.0'>DM Siddharthnagar</label>
        </div>
        

      </div>*/}
      <div className='flex flex-row items-center py-1 md:px-5 px-2 bg-slate-100 shadow-sm'>
        
        <p className='inline-block sm:w-[20%] w-[135px] lg:w-[12%] text-center md:text-xl font-semibold  '>What's new :</p>
        <marquee
          className='md:text-lg text-[#168816] md:mx-5 ms-2'
          scrollamount='5'  >
          Buddha Rice (Kalanamak Rice) is grown in the Terai region of Siddharth Nagar and ten neighboring districts of eastern Uttar Pradesh. <a href={Membershipform} target="__blank">Click </a>,  to view KALANAMAK RICE EXPORT DEVELOPMENT FOUNDATION membership form
        </marquee>
        
    </div>
    </div>

  );
};

export default Marquee;
