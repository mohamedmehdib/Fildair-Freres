'use client';
import React, { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import Image from 'next/image';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  image: string;
  stars: number;
  feedback: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'John Doe',
    role: 'CEO, Company A',
    image: '/client1.jpeg',
    stars: 5,
    feedback:
      'Swim Serenity Solutions transformed our pool maintenance process. Highly professional and reliable!',
  },
  {
    id: 2,
    name: 'Jane Smith',
    role: 'Homeowner',
    image: '/client2.jpg',
    stars: 4,
    feedback:
      'The team is amazing! They made our pool crystal clear and provided excellent customer service.',
  },
  {
    id: 3,
    name: 'Michael Johnson',
    role: 'Hotel Manager',
    image: '/client3.jpeg',
    stars: 5,
    feedback:
      'We rely on Swim Serenity Solutions for all our pool needs. They are efficient and trustworthy.',
  },
  {
    id: 4,
    name: 'Emily Davis',
    role: 'Event Planner',
    image: '/client4.jpg',
    stars: 3,
    feedback:
      'Fantastic service! They ensured our event pool was spotless and safe for all guests.',
  },
];

export default function Testimonials(): React.ReactElement {
  const swiperRef = useRef<HTMLElement | null>(null);
  const [maxHeight, setMaxHeight] = useState<number>(0);

  useEffect(() => {
    if (swiperRef.current) {
      const slides = swiperRef.current.querySelectorAll('.swiper-slide');
      let tallestHeight = 0;

      slides.forEach((slide: Element) => {
        const slideElement = slide as HTMLElement;
        if (slideElement.offsetHeight > tallestHeight) {
          tallestHeight = slideElement.offsetHeight;
        }
      });

      setMaxHeight(tallestHeight);
    }
  }, []);

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
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          spaceBetween={20}
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
          onSwiper={(swiper) => {
            swiperRef.current = swiper.el;
          }}
        >
          {testimonials.map((testimonial: Testimonial) => (
            <SwiperSlide
              key={testimonial.id}
              style={{ height: maxHeight > 0 ? maxHeight : 'auto' }}
            >
              <div className='bg-white p-6 sm:p-8 rounded-lg shadow-lg text-center flex flex-col justify-between h-full pb-8 mx-2 sm:mx-4'>
                <div className='relative w-20 h-20 sm:w-24 sm:h-24 mx-auto mb-4 sm:mb-6'>
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className='rounded-full object-cover'
                  />
                </div>

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
                    <i
                      key={index}
                      className='uis uis-favorite text-yellow-500 mx-1'
                    ></i>
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