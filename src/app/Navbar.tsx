"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`bg-[#274e9d] z-20 duration-300 fixed w-screen flex justify-between items-center ${
        isScrolled ? "h-20 md:px-10 shadow-lg" : "h-24 md:px-16"
      } px-8`}
    >
        <Link className="w-16" href="/"><Image src="/logo.png" alt="Logo" width={500} height={500}/></Link>
        <ul className="flex">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/">Services</Link>
          </li>
          <li>
            <Link href="/">Contact Us</Link>
          </li>
        </ul>
        <Link className="bg-white text-[#274e9d] rounded-lg text-lg font-medium px-4 py-3 hover:bg-amber-950 transition-colors" href="/Account" >Account</Link>
    </div>
  );
}
