"use client";

import Image from "next/image";
import React from "react";
import Marquee from "react-fast-marquee";

const App: React.FC = () => {
  const logos = [
    <Image src="/pool.svg" alt="Logo 1" className="h-16" width={500} height={500}/>,
  ];

  return (
    <div className="bg-blue-700">
      <Marquee
        speed={50}
        gradient={false}
        direction="left"
        loop={0}
        key={1}
      >
        {[...logos, ...logos, ...logos, ...logos, ...logos].map((logo, index) => (
          <div key={index} className="flex-shrink-0 px-5">
            {logo}
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default App;
