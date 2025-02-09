import Link from 'next/link';
import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-blue-50 font-sans pt-16 pb-10 space-y-10 px-8">
        <hr className="border-gray-300 mt-10" />

        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left space-y-4 md:space-y-0 mt-6">
          <span className="text-gray-500">
            © 2025 <span className="font-semibold text-blue-700">Bloggi</span>. All rights reserved.
          </span>
          <span className="text-gray-500">
            Powered by{' '}
            <Link href="http://mohamedmehdi.me/" target='_blank' className="font-medium text-blue-700 hover:text-blue-500 transition">
              Mohamed Mehdi
            </Link>
          </span>
        </div>
    </footer>
  );
}
