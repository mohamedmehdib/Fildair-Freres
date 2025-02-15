import Link from 'next/link';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faInstagram,
  faTiktok,
  faWhatsapp,
} from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
  return (
    <footer className="font-sans pt-16 pb-10 space-y-10 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-8 md:space-y-0">
          {/* Follow Us Section */}
          <div className="text-left">
            <h3 className="text-xl font-semibold text-blue-700 mb-4">Suivez-nous</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  target="_blank"
                  href="https://www.facebook.com/profile.php?id=100007108443086&ref=ig_profile_ac"
                  className="text-gray-600 hover:text-blue-500 transition flex items-center space-x-2"
                >
                  <FontAwesomeIcon icon={faFacebook} className="w-5 h-5" />
                  <span>Facebook</span>
                </Link>
              </li>
              <li>
                <Link
                  target="_blank"
                  href="https://www.instagram.com/fildair_bilel_abassi/"
                  className="text-gray-600 hover:text-blue-500 transition flex items-center space-x-2"
                >
                  <FontAwesomeIcon icon={faInstagram} className="w-5 h-5" />
                  <span>Instagram</span>
                </Link>
              </li>
              <li>
                <Link
                  target="_blank"
                  href="https://www.tiktok.com/@fildairbilelabass"
                  className="text-gray-600 hover:text-blue-500 transition flex items-center space-x-2"
                >
                  <FontAwesomeIcon icon={faTiktok} className="w-5 h-5" />
                  <span>TikTok</span>
                </Link>
              </li>
              <li>
                <Link
                  target="_blank"
                  href="https://wa.me/28700199"
                  className="text-gray-600 hover:text-blue-500 transition flex items-center space-x-2"
                >
                  <FontAwesomeIcon icon={faWhatsapp} className="w-5 h-5" />
                  <span>WhatsApp</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Us Section */}
          <div className="text-left">
            <h3 className="text-xl font-semibold text-blue-700 mb-4">Contactez-nous</h3>
            <ul className="space-y-3 text-gray-600">
              <li>
                <span className="font-medium">Service client:</span> 71 865 319
              </li>
              <li>
                <span className="font-medium">Email:</span> fildairfreres@gmail.com
              </li>
              <li>
                <span className="font-medium">Adresse:</span> km 13 av Fatouma Bourguiba, La Soukra 2036, en face UTC
              </li>
            </ul>
          </div>
        </div>

        <hr className="border-gray-300 mt-10" />

        {/* Copyright Section */}
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left space-y-4 md:space-y-0 mt-6">
          <span className="text-gray-500">
            © 2025 <span className="font-semibold text-blue-700">Fildair Freres</span>. Tous droits réservés.
          </span>
          <span className="text-gray-500">
            Développé par{' '}
            <span className="font-medium text-blue-700 hover:text-blue-500 transition">
              Fildair Freres
            </span>
          </span>
        </div>
      </div>
    </footer>
  );
}