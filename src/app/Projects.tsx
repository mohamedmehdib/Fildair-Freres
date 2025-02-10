'use client'; // Add this line for Next.js 13+ with the app directory
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules'; // Remove Navigation module
import 'swiper/css';
import 'swiper/css/pagination'; // Only import pagination CSS
import Image from 'next/image';
import { Swiper as SwiperType } from 'swiper'; // Import the Swiper type

// Sample project images
const projectImages = [
  '/project1.jpg',
  '/project2.jpg',
  '/project3.jpg',
  '/project4.jpg',
  '/project5.jpg',
];

export default function Projects() {
  // Ref for Swiper instance with explicit type
  const swiperRef = React.useRef<SwiperType | null>(null);

  return (
    <div id='projects' className='py-10'>
      <link
        rel='stylesheet'
        href='https://unicons.iconscout.com/release/v4.0.8/css/solid.css'
      />
      {/* Title Section */}
      <div className='flex items-center justify-center space-x-4 py-10 sm:py-14 px-3'>
        <hr className='bg-[#305eb8] h-1 w-10 md:w-14' />
        <span className='text-[#305eb8] text-2xl sm:text-4xl font-semibold text-center'>
          Nos derniers projets
        </span>
        <hr className='bg-[#305eb8] h-1 w-10 md:w-14' />
      </div>
      {/* Image Slider */}
      <div className='relative px-4 sm:px-10'>
        <Swiper
          modules={[Autoplay, Pagination]} // Remove Navigation module
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          spaceBetween={20} // Reduced space between slides for smaller screens
          slidesPerView={1}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
          }}
          loop={true}
          onSwiper={(swiper) => (swiperRef.current = swiper)} // Store Swiper instance
        >
          {projectImages.map((image, index) => (
            <SwiperSlide key={index}>
              <div className='relative h-64 sm:h-80 md:h-96 rounded-lg overflow-hidden'>
                <Image
                  src={image}
                  alt={`Project ${index + 1}`}
                  fill
                  className='object-cover'
                  priority={index === 0} // Prioritize loading the first image
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        {/* Custom Navigation Buttons */}
        <div
          className='swiper-button-prev absolute flex items-center justify-center top-1/2 left-2 transform -translate-y-1/2 z-10 bg-white h-10 w-10 sm:h-12 sm:w-12 rounded-full shadow-lg cursor-pointer hover:bg-[#305eb8] text-[#305eb8] hover:text-white transition-all duration-300'
          aria-label='Previous Slide'
          onClick={() => swiperRef.current?.slidePrev()} // Go to previous slide
        >
          <i className='uil uil-arrow-left text-xl sm:text-2xl'></i>
        </div>
        <div
          className='swiper-button-next absolute flex items-center justify-center top-1/2 right-2 transform -translate-y-1/2 z-10 bg-white h-10 w-10 sm:h-12 sm:w-12 rounded-full shadow-lg cursor-pointer hover:bg-[#305eb8] text-[#305eb8] hover:text-white transition-all duration-300'
          aria-label='Next Slide'
          onClick={() => swiperRef.current?.slideNext()} // Go to next slide
        >
          <i className='uil uil-arrow-right text-xl sm:text-2xl'></i>
        </div>
      </div>
    </div>
  );
}