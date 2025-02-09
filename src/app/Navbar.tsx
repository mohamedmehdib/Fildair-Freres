"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav
      className={`bg-[#274e9d] z-20 duration-500 fixed w-full flex justify-between items-center ${
        isScrolled ? "h-20 shadow-lg px-4 md:px-10 lg:px-12" : "h-24 px-3 md:px-6 lg:px-16"
      } px-4 md:px-10 lg:px-16 transition-all`}
    >
      {/* Logo */}
      <Link href="/" className="w-16">
        <Image src="/logo.png" alt="Logo" width={500} height={500} />
      </Link>

      {/* Mobile Menu Button */}
      <button
        onClick={toggleMenu}
        className="md:hidden text-white focus:outline-none"
      >
        {isMenuOpen ? (
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
        ) : (
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        )}
      </button>
      {/* Desktop Menu */}
      <ul className="hidden md:flex space-x-8 text-lg text-white">
        <li>
          <Link href="/" className="hover:text-indigo-300 transition-colors">
            Accueil
          </Link>
        </li>
        <li>
          <Link href="/" className="hover:text-indigo-300 transition-colors">
            Services
          </Link>
        </li>
        <li>
          <Link href="/" className="hover:text-indigo-300 transition-colors">
            Contact
          </Link>
        </li>
      </ul>

      {/* Account Button */}
      <Link
        href="/Account"
        className="hidden md:block bg-white text-[#274e9d] rounded-lg text-lg font-medium px-4 py-2 border border-white hover:bg-[#274e9d] hover:text-white transition-colors"
      >
        Account
      </Link>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-full left-0 w-full bg-[#274e9d] shadow-lg overflow-hidden transition-all duration-500 ${
          isMenuOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col items-center space-y-4 py-4 text-white">
          <li>
            <Link href="/" className="hover:text-indigo-300 transition-colors">
              Accueil
            </Link>
          </li>
          <li>
            <Link href="/" className="hover:text-indigo-300 transition-colors">
              Services
            </Link>
          </li>
          <li>
            <Link href="/" className="hover:text-indigo-300 transition-colors">
              Contact
            </Link>
          </li>
          <li>
            <Link
              href="/Account"
              className="bg-white text-[#274e9d] rounded-lg text-lg font-medium px-4 py-2"
            >
              Account
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}