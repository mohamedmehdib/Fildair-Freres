import React from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import Image from 'next/image';
import Link from 'next/link';

const Page: React.FC = () => {
  return (
    <div>
      {/* Navbar */}
      <Navbar />
      <link
        rel='stylesheet'
        href='https://unicons.iconscout.com/release/v4.0.8/css/line.css'
      />

      {/* Hero Section */}
      <div className="h-[40vh] md:h-[60vh] flex pt-20 md:pt-0 justify-center items-center bg-[#274e9d]">
        <div className="text-center px-4">
          <h1 className="text-4xl md:text-6xl text-white font-medium w-full md:w-2/3 mx-auto leading-tight">
            Vente en gros materiel Piscines & Mosaique
          </h1>
          <hr className="w-1/4 mx-auto border-2 border-white mt-4" />
        </div>
      </div>

      {/* Content Section */}
      <div className="py-8 md:py-12 px-4 md:px-8 max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row gap-6 md:gap-8">
          {/* Text Content */}
          <div className="flex-1">
            <p className="text-base md:text-lg text-gray-700 mb-4">
              Nous sommes ravis de vous accueillir dans notre showroom situé à la Soukra, réservé aux professionnels et particuliers. Vous y trouverez tous les équipements nécessaires à l’élaboration de votre chantier. N’hésitez pas à nous contacter pour toute assistance technique dans vos devis ou pour trouver des équipements auxquels nous n’aurions pas pensé.
            </p>
            <p className="text-base md:text-lg text-gray-700 mb-4">
              Forts d’une expérience de plus de 20 ans, nous attachons une importance toute particulière à vous accompagner dans vos projets et les mener à terme.
            </p>
            <p className="text-base md:text-lg text-gray-700 font-semibold">
              Merci de votre intérêt pour notre passion, <br />
              L’équipe Fildair Fr
            </p>
          </div>

          {/* Image Aside */}
          <div className="flex-1">
            <Image
              src="/sell.jpg"
              height={500}
              width={500}
              alt="Piscine sur mesure"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>

        {/* Image Grid Section */}
        <div className="mt-8">
          <div className="flex flex-col md:flex-row justify-center gap-6 md:gap-8">
            <div className="text-center">
              <h2 className="text-xl md:text-2xl font-semibold text-[#274e9d] mb-4">
                Découvrir nos équipements piscines
              </h2>
              <div className="w-[300px] h-[300px] overflow-hidden rounded-lg mx-auto shadow-md">
                <Link href="/Vente-en-gros-materiel-Piscines-&-Mosaique/Equipements-Piscines">
                  <Image
                    src="/emau.jpg"
                    alt="Emaux"
                    width={300}
                    height={300}
                    className="w-full h-full p-5 object-cover transition-transform duration-300 hover:scale-105"
                  />
                </Link>
              </div>
            </div>
            <div className="text-center">
              <h2 className="text-xl md:text-2xl font-semibold text-[#274e9d] mb-4">
                Découvrir nos mosaïques piscines
              </h2>
              <div className="w-[300px] h-[300px] overflow-hidden rounded-lg mx-auto shadow-md">
                <Link href="/Vente-en-gros-materiel-Piscines-&-Mosaique/Mosaique-Piscines">
                  <Image
                    src="/prestigio.jpg"
                    alt="Prestigio"
                    width={300}
                    height={300}
                    className="w-full h-full p-5 object-cover transition-transform duration-300 hover:scale-105"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Service Highlights */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {[
            { icon: <i className="uil uil-truck"></i>, title: 'Frais de livraison réduit' },
            { icon: <i className="uil uil-sync"></i>, title: '14 jours pour le retour' },
            { icon: <i className="uil uil-comments"></i>, title: 'Du lundi au vendredi - 71865319' },
            { icon: <i className="uil uil-lock"></i>, title: 'Paiement sécurisé' },
          ].map((service, index) => (
            <div
              key={index}
              className="flex items-center gap-3 p-4 bg-gray-100 rounded-lg shadow-sm"
            >
              <span className="text-2xl text-[#274e9d]">{service.icon}</span>
              <p className="text-sm md:text-base text-gray-700 font-medium">
                {service.title}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Page;