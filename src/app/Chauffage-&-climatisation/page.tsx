import React from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import Image from 'next/image';

const Page: React.FC = () => {
  return (
    <div className="bg-gray-50">
      {/* Navbar */}
      <Navbar />
      <link
        rel='stylesheet'
        href='https://unicons.iconscout.com/release/v4.0.8/css/line.css'
      />

      {/* Hero Section */}
      <div className="h-[40vh] md:h-[60vh] flex pt-20 md:pt-0 justify-center items-center bg-[#274e9d]">
        <div className="text-center px-4">
          <h1 className="text-4xl md:text-6xl text-white font-medium w-full md:w-2/3 mx-auto">
            Chauffage & Climatisation
          </h1>
          <hr className="w-1/4 mx-auto border-2 border-white mt-4" />
        </div>
      </div>

      {/* Content Section */}
      <div className="py-12 md:py-20 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {/* Left Column */}
          <div className="space-y-6 md:space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold text-[#274e9d]">
              Fildair FR
            </h2>
            <p className="text-base md:text-lg text-gray-700 leading-relaxed">
              En s’appuyant sur son bureau d’Etudes interne, Fildair Fr vous accompagne de l’étude d’avant-projet à la livraison clefs en main de vos installations chauffage & climatisation. Nous mettons en œuvre les solutions techniques adaptées pour la climatisation des grands ensembles tertiaires : villas de maître, hôtels, bureaux, etc.
            </p>

            {/* Responsive Image Section */}
            <div className="mt-8 md:mt-12">
              <Image
                height={500}
                width={500}
                src="/chauffage.jpeg" // Replace with your image URL
                alt="Chauffage & Climatisation"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-6 md:space-y-8">
            <div className="bg-white p-6 md:p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl md:text-2xl font-semibold text-[#274e9d] mb-4">
                Direction Technique, Chiffrage et Gestion de Projet
              </h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Assimilation et analyse des demandes clients</li>
                <li>Encadrement et organisation des projets</li>
                <li>Réalisation des études d‘exécution</li>
              </ul>
            </div>

            <div className="bg-white p-6 md:p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl md:text-2xl font-semibold text-[#274e9d] mb-4">
                Direction des Travaux et Suivi de Chantier
              </h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Préparation de chantier</li>
                <li>Suivi de l’avancement des travaux et vérification de la qualité jusqu’à réception</li>
                <li>Gestion financière du chantier</li>
              </ul>
            </div>

            <div className="bg-white p-6 md:p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl md:text-2xl font-semibold text-[#274e9d] mb-4">
                Marché Public & Privé
              </h3>
              <p className="text-gray-700">
                Nous intervenons aussi bien dans le secteur public que privé, avec une expertise adaptée à chaque type de projet.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Page;