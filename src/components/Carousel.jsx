import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import merge from '../images/merge.jpg'
import a1 from '../images/image_a1.jpeg'
import a2 from '../images/image_a10.jpeg'
import img7 from '../images/merged_db_cdo2.jpg'
import img6 from '../images/cm_agri.jpg'
import img8 from '../images/surya_pratap_sahi.jpg'
import img9 from '../images/yogi_ji.jpg'
import img10 from '../images/CDO_siddharthnagar.jpg'
import img11 from '../images/DM_Siddharthnagar2.jpg'


const CarouselPage = () => {
      return (
      <div className="">      
            <div className='flex flex-col md:flex-row items-center py-1 md:px-5 px-2 bg-slate-100 shadow-sm'>
              {/* Image 1 with Labels */}
              <div className='flex flex-col items-center w-full md:w-[50%] text-center md:text-xl font-semibold'>
                <img src={img9} className='lg:w-[25%] w-[80%] pt-2 lg:pt-0 img_left' alt="Yogi Adityanath" />
                <label className='mt-0'>Yogi Adityanath</label>
                <label className='mt-0'>Hon'ble Chief Minister</label>
              </div>

              {/* Image 2 with Labels */}
              <div className='flex flex-col items-center w-full md:w-[50%] text-center md:text-xl font-semibold'>
                <img src={img8} className='lg:w-[25%] w-[80%] pt-2 lg:pt-0 img_left' alt="Surya Pratap Sahi" />
                <label className='mt-0'>Surya Pratap Sahi</label>
                <label className='mt-0'>Hon'ble Cabinet Minister</label>
              </div>

              
              
            </div>

            <Carousel showArrows={true} infiniteLoop={true} autoPlay={true} transitionTime={1000} useKeyboardArrows={true}>
                  
                  <div>
                        <img
                              className='w-[100vw]'
                              src={merge}
                        />
                  </div>
                  {/*<div>
                        <img
                              className='w-[100vw]'
                              src='https://media.istockphoto.com/id/1434453585/photo/close-up-of-black-rice-in-the-field.jpg?b=1&s=170667a&w=0&k=20&c=hC-qxYIJg1nmJsYCjnXjJW2Ssk7OPjz4sCJsL-mN3LE='
                        />
                  </div>*/}
                  <div>
                        <img
                              className='w-[100vw]'
                              src={a1}
                        />
                  </div>
                  <div>
                        <img
                              className='w-[100vw]'
                              src={a2}
                        />
                  </div>
                  {/*<div>
                        <img
                              className='w-[100vw]'
                              src='https://media.istockphoto.com/id/1026396226/photo/black-indian-salt-crystals-and-powder.jpg?b=1&s=170667a&w=0&k=20&c=l-4PFVlmgoeHnIkjuqZZHeGoKmqei7uCgmd14X1wfxg='
                        />
                  </div>*/}
            </Carousel>
      </div>
      );
};

export default CarouselPage;