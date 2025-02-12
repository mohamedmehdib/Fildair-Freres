import React from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import Image from 'next/image';

export default function Page() {
  return (
    <div>
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <div className="h-[40vh] md:h-[60vh] pt-20 md:pt-0 flex justify-center items-center bg-[#274e9d]">
        <div className="text-center px-4">
          <h1 className="text-4xl md:text-6xl text-white font-medium w-full md:w-2/3 mx-auto">
            Conception de piscine sur mesure
          </h1>
          <hr className="w-1/4 mx-auto border-2 border-white mt-4" />
        </div>
      </div>

      {/* Content Section */}
      <div className="py-8 md:py-12 px-4 md:px-8 max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row gap-6 md:gap-8">
          {/* Text Content */}
          <div className="flex-1 text-base md:text-lg text-gray-700 leading-relaxed">
            <p className="mb-4 md:mb-6">
              Nous allons explorer en profondeur les différentes options et étapes pour concrétiser le projet de piscine dont vous avez toujours rêvé. Que vous envisagiez une piscine de luxe, une mini piscine ou même une piscine naturelle, une piscine semi-enterrée, enterrée ou hors sol, nous sommes là pour vous accompagner à chaque étape de ce projet passionnant.
            </p>
            <p className="mb-4 md:mb-6">
              Découvrez nos avantages et le procédé de construction préféré de Piscines Fildair Freres, ainsi que les nombreuses possibilités de personnalisation pour rendre votre piscine unique. Nous aborderons également les autorisations nécessaires, les délais moyens de construction, les aspects budgétaires et bien plus encore.
            </p>
            <p>
              Découvrez ici la méthode de béton armé que nous employons pour votre projet personnalisé et les étapes majeures de sa construction.
            </p>
          </div>

          {/* Image Aside */}
          <div className="flex-1">
            <Image
              src="/conception.jpg"
              height={500}
              width={500}
              alt="Piscine sur mesure"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}