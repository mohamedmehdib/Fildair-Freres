"use client";

import Image from "next/image";
import React from "react";
import Marquee from "react-fast-marquee";

const Clients: React.FC = () => {
  const logos = [
    {
      id: 1,
      src: "/pool.svg",
      alt: "Logo 1",
    },
  ];

  return (
    <div>
      <div className="flex items-center justify-center py-5 space-x-4">
        <hr className="bg-[#305eb8] h-1 w-10 sm:w-14" />
        <span className="text-[#305eb8] text-2xl sm:text-4xl font-semibold">
          Nos Clients
        </span>
        <hr className="bg-[#305eb8] h-1 w-10 sm:w-14" />
      </div>
      <div className="">
        <Marquee speed={50} gradient={false} direction="left" loop={0}>
          {[...logos, ...logos, ...logos, ...logos, ...logos].map((logo, index) => (
            <div key={index} className="flex-shrink-0 px-5">
              <Image
                src={logo.src}
                alt={logo.alt}
                className="h-16"
                width={500}
                height={500}
              />
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default Clients;
