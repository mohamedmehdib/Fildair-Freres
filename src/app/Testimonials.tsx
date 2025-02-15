'use client';
import React, { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { supabase } from '@/lib/supabase';
import { Swiper as SwiperType } from 'swiper/types';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  stars: number;
  feedback: string;
}

export default function Testimonials(): React.ReactElement {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [maxHeight, setMaxHeight] = useState<number>(0);
  const swiperRef = useRef<SwiperType | null>(null);

  // Fetch testimonials from Supabase
  useEffect(() => {
    const fetchTestimonials = async () => {
      const { data, error } = await supabase.from('testimonials').select('*');
      if (error) {
        console.error('Error fetching testimonials:', error);
      } else {
        setTestimonials(data as Testimonial[]);
      }
    };
    fetchTestimonials();
  }, []);

  // Adjust slide heights dynamically
  useEffect(() => {
    if (swiperRef.current) {
      const updateMaxHeight = () => {
        const slides = swiperRef.current?.el?.querySelectorAll('.swiper-slide');
        let tallestHeight = 0;
        slides?.forEach((slide: Element) => {
          tallestHeight = Math.max(tallestHeight, (slide as HTMLElement).offsetHeight);
        });
        setMaxHeight(tallestHeight);
      };

      updateMaxHeight();
      window.addEventListener('resize', updateMaxHeight);
      return () => window.removeEventListener('resize', updateMaxHeight);
    }
  }, [testimonials]);

  return (
    <div className='pt-10 sm:pt-20'>
      <link
        rel='stylesheet'
        href='https://unicons.iconscout.com/release/v4.0.8/css/line.css'
      />
      <div className='flex items-center justify-center py-5 space-x-4'>
        <hr className='bg-[#305eb8] h-1 w-10 sm:w-14' />
        <span className='text-[#305eb8] text-2xl sm:text-4xl font-semibold'>
          Avis Clients
        </span>
        <hr className='bg-[#305eb8] h-1 w-10 sm:w-14' />
      </div>
      <div className='px-4 sm:px-10 pb-10 mx-4 sm:mx-10'>
        <Swiper
          modules={[Autoplay, Pagination]}
          pagination={{ clickable: true, dynamicBullets: true }}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1, spaceBetween: 20 },
            768: { slidesPerView: 2, spaceBetween: 30 },
            1024: { slidesPerView: 3, spaceBetween: 40 },
          }}
          loop={true}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide
              key={testimonial.id}
              style={{ height: maxHeight > 0 ? `${maxHeight}px` : 'auto' }}
            >
              <div className='bg-white p-6 sm:p-8 rounded-lg shadow-lg text-center flex flex-col justify-between h-full mx-2 sm:mx-4'>
                <p className='text-gray-600 italic text-sm sm:text-base mb-4 sm:mb-6'>
                  &quot;{testimonial.feedback}&quot;
                </p>
                <div>
                  <h3 className='text-lg sm:text-xl font-semibold text-[#305eb8]'>
                    {testimonial.name}
                  </h3>
                  <p className='text-gray-500 text-sm sm:text-base'>
                    {testimonial.role}
                  </p>
                </div>
                <div className='flex justify-center mt-3 sm:mt-4'>
                  {Array.from({ length: testimonial.stars }).map((_, index) => (
                    <i key={index} className='uis uis-favorite text-yellow-500 mx-1'></i>
                  ))}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}