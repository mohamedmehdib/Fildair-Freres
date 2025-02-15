import React from 'react';
import Link from 'next/link';

export default function WhatsAppButton() {
  return (
    <div className="fixed bottom-[50vh] left- z-50">
      <link rel="stylesheet" href="https://unicons.iconscout.com/release/v4.0.8/css/line.css" />
      <Link
        href="https://wa.me/28700199" // Replace with your WhatsApp number
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-14 h-14 bg-green-500 rounded-e-full shadow-lg hover:bg-green-600 transition-all duration-300"
      >
        <i className="uil uil-whatsapp text-3xl text-white"></i>
      </Link>
    </div>
  );
}