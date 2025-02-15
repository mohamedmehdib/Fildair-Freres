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
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Fildair Frères",
    image: "https://piscinesfildairfrerestunisie.com/logo.jpg",
    description:
      "Découvrez Fildair Frères, votre partenaire de confiance pour les piscines et équipements en Tunisie.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "km 13 av Fatouma Bourguiba",
      addressLocality: "La Soukra",
      postalCode: "2036",
      addressCountry: "Tunisia",
    },
    telephone: "+216 71 865 319",
    email: "fildairfreres@gmail.com",
    url: "https://piscinesfildairfrerestunisie.com",
    sameAs: [
      "https://www.facebook.com/share/18cy9Avd15/?mibextid=wwXIfr",
      "https://www.instagram.com/fildair_bilel_abassi/",
      "https://www.tiktok.com/@fildairbilelabass",
    ],
  };

  return (
    <footer className="font-sans pt-16 pb-10 space-y-10 bg-gray-50">
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-8 md:space-y-0">
          {/* Follow Us Section */}
          <div className="text-left">
            <h2 className="text-xl font-semibold text-blue-700 mb-4">Suivez-nous</h2>
            <ul className="space-y-3">
              <li>
                <Link
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.facebook.com/share/18cy9Avd15/?mibextid=wwXIfr"
                  className="text-gray-600 hover:text-blue-500 transition flex items-center space-x-2"
                  aria-label="Suivez-nous sur Facebook"
                >
                  <FontAwesomeIcon icon={faFacebook} className="w-5 h-5" />
                  <span>Facebook</span>
                </Link>
              </li>
              <li>
                <Link
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.instagram.com/fildair_bilel_abassi/"
                  className="text-gray-600 hover:text-blue-500 transition flex items-center space-x-2"
                  aria-label="Suivez-nous sur Instagram"
                >
                  <FontAwesomeIcon icon={faInstagram} className="w-5 h-5" />
                  <span>Instagram</span>
                </Link>
              </li>
              <li>
                <Link
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.tiktok.com/@fildairbilelabass"
                  className="text-gray-600 hover:text-blue-500 transition flex items-center space-x-2"
                  aria-label="Suivez-nous sur TikTok"
                >
                  <FontAwesomeIcon icon={faTiktok} className="w-5 h-5" />
                  <span>TikTok</span>
                </Link>
              </li>
              <li>
                <Link
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://wa.me/28700199"
                  className="text-gray-600 hover:text-blue-500 transition flex items-center space-x-2"
                  aria-label="Contactez-nous sur WhatsApp"
                >
                  <FontAwesomeIcon icon={faWhatsapp} className="w-5 h-5" />
                  <span>WhatsApp</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Us Section */}
          <div className="text-left">
            <h2 className="text-xl font-semibold text-blue-700 mb-4">Contactez-nous</h2>
            <ul className="space-y-3 text-gray-600">
              <li>
                <span className="font-medium">Service client:</span>{" "}
                <a href="tel:+21671865319" className="hover:text-blue-500 transition">
                  71 865 319
                </a>
              </li>
              <li>
                <span className="font-medium">Email:</span>{" "}
                <a
                  href="mailto:fildairfreres@gmail.com"
                  className="hover:text-blue-500 transition"
                >
                  fildairfreres@gmail.com
                </a>
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