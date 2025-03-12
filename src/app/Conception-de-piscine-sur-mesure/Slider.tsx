"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper as SwiperType } from "swiper";
import Image from "next/image";

const Slider = ({ images }: { images: { src: string }[] }) => {
  const swiperRef = React.useRef<SwiperType | null>(null);

  return (
    <div className="max-w-6xl mx-auto w-full">
      <Swiper
        modules={[Autoplay, Pagination]}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        spaceBetween={20}
        slidesPerView={1}
        loop={true}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <div className="relative h-64 sm:h-80 md:h-96 rounded-lg overflow-hidden">
              <Image
                width={500}
                height={500}
                src={image.src}
                alt={`Project ${index + 1}`}
                unoptimized
                className="w-full h-full object-cover"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;