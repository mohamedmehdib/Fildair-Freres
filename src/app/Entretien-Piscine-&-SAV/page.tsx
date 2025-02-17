import React from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import Image from 'next/image';

const Page: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />

      <div className="h-[40vh] md:h-[60vh] flex pt-20 md:pt-0 justify-center items-center bg-[#274e9d]">
        <div className="text-center px-4">
          <h1 className="text-4xl md:text-6xl text-white font-medium w-full md:w-2/3 mx-auto">
            Entretien Piscine & SAV
          </h1>
          <hr className="w-1/4 mx-auto border-2 border-white mt-4" />
        </div>
      </div>

      <div className="py-12 px-4 md:px-8 max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
            Profitez d’une eau cristalline sans effort avec notre service d’entretien de piscines !{' '}
            <strong>Fildair Frères</strong> prend en charge le nettoyage, le traitement de l’eau et
            l’entretien de vos équipements pour vous offrir une piscine impeccable toute l’année.
            Confiez-nous votre piscine et profitez pleinement de chaque baignade en toute sérénité ! 💦✨
          </p>
        </div>

        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-semibold text-[#274e9d] mb-4">
            Contactez-nous
          </h2>
          <p className="text-lg md:text-xl text-gray-700">
            Téléphone : <strong>27 870 016</strong> / <strong>26 199 199</strong>
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <div className="relative h-64 rounded-lg overflow-hidden shadow-lg">
            <Image
              src="/conception.jpg"
              alt="Conception"
              layout="fill"
              objectFit="cover"
              className="transition-transform duration-300 hover:scale-105"
            />
          </div>
          <div className="relative h-64 rounded-lg overflow-hidden shadow-lg">
            <Image
              src="/OIP.jpeg"
              alt="Conception"
              layout="fill"
              objectFit="cover"
              className="transition-transform duration-300 hover:scale-105"
            />
          </div>
          <div className="relative h-64 rounded-lg overflow-hidden shadow-lg">
            <Image
              src="/o.jpeg"
              alt="Conception"
              layout="fill"
              objectFit="cover"
              className="transition-transform duration-300 hover:scale-105"
            />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Page;