import Link from 'next/link';
import React from 'react';

export default function Footer() {
  return (
    <footer className="font-sans pt-16 pb-10 space-y-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-8 md:space-y-0">
          <div className="text-left">
            <h3 className="text-xl font-semibold text-blue-700 mb-4">Suivez-nous</h3>
            <ul className="space-y-2">
              <li>
                <Link target='_blank' href="https://www.facebook.com/profile.php?id=100007108443086&ref=ig_profile_ac" className="text-gray-600 hover:text-blue-500 transition">
                  Facebook
                </Link>
              </li>
              <li>
                <Link target='_blank' href="https://www.instagram.com/fildair_bilel_abassi/" className="text-gray-600 hover:text-blue-500 transition">
                  Instagram
                </Link>
              </li>
            </ul>
          </div>

          <div className="text-left">
            <h3 className="text-xl font-semibold text-blue-700 mb-4">Contactez-nous</h3>
            <ul className="space-y-2 text-gray-600">
              <li>Service client: <span className="font-medium">71 865 319</span></li>
              <li>Email: fildairfreres@gmail.com</li>
              <li>Adresse : km 13 av fatouma bourguiba la soukra 2036 en face UTC</li>
            </ul>
          </div>
        </div>

        <hr className="border-gray-300 mt-10" />

        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left space-y-4 md:space-y-0 mt-6">
          <span className="text-gray-500">
            © 2025 <span className="font-semibold text-blue-700">Fildair Freres</span>. All rights reserved.
          </span>
          <span className="text-gray-500">
            Powered by{' '}
            <span className="font-medium text-blue-700 hover:text-blue-500 transition">
              Fildair Freres
            </span>
          </span>
        </div>
      </div>
    </footer>
  );
}
