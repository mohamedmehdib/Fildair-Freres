import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function Services() {
  return (
    <div id='services' className='flex flex-col lg:flex-row p-6 sm:p-10 lg:p-20 gap-8 lg:gap-12'>
      <div className='w-full lg:w-1/2 space-y-6'>
        <div className='flex items-center space-x-3'>
          <span className='text-[#305eb8] text-xl font-semibold'>Nos meilleurs services</span>
          <hr className='bg-[#305eb8] h-1 w-14' />
        </div>
        <div>
          <h2 className='py-5 text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight'>
            Nos meilleurs services de piscine pour vous !
          </h2>
          <p className='text-zinc-500 text-sm sm:text-base'>
          Leader en tunis des piscines en béton 33  ANS D’EXPERTISES À VOTRE SERVICE Découvrez toutes les possibilités qui s’offrent à vous pour que votre projet de construction, de rénovation ou d’aménagements (équipements, décoration, piscine connectée) correspondent parfaitement à vos exigences
          </p>
          <p className='text-zinc-600 font-medium py-4 text-sm sm:text-base'>
            Résultats de la consolidation d&apos;équipe de marque après une valeur de préparation Web premium, un e-business activé par le Web, un engagement stratégique activé par le Web...
          </p>
        </div>
        <div className='flex items-center space-x-5'>
          <Image
            src="/ceo.jpg"
            alt='ceo'
            width={100}
            height={100}
            className='rounded-full w-14 sm:w-16 border-2 border-indigo-500'
          />
          <div className='flex flex-col'>
            <span className='font-medium text-lg'>Bilel Abassi</span>
            <span className='text-zinc-600 text-sm sm:text-base'>Fondateur</span>
          </div>
          <Image
            src="/signature.jpeg"
            alt='ceo'
            width={100}
            height={100}
            className='pl-4 w-16 sm:w-24 transition-transform duration-300'
          />
        </div>
      </div>

      <div className='w-full lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6'>
        {[
          { icon: "/one.svg", title: "Conception de piscine sur mesure", description: "Il est recommandé de faire nettoyer votre piscine par un professionnel au moins." ,url:"Conception-de-piscine-sur-mesure"},
          { icon: "/cleaning.svg", title: "Entretion Piscine & SAV", description: "Confiez l’entretien annuel de votre piscine à un professionnel pour garantir son bon fonctionnement." ,url:"Entretion-Piscine-&-SAV" },
          { icon: "/cart.svg", title: "Vente en gros materiel Piscines & Mosaic", description: "Confiez vos projets à un fournisseur spécialisé pour du matériel de piscine et mosaïque de qualité." ,url:"Vente-en-gros-materiel-Piscines-&-Mosaic"},
          { icon: "/heating.svg", title: "Chauffage & climatisation", description: "Confiez l’installation et l’entretien à un professionnel pour un confort optimal." ,url:"Chauffage-&-climatisation"},
        ].map((service, index) => (
          <div
            key={index}
            className='flex flex-col justify-between shadow-xl text-center rounded-md px-4 py-6 sm:py-8 space-y-3 sm:space-y-4 transition-all duration-300 hover:scale-105 hover:shadow-2xl'
          >
            <div className='rounded-full bg-[#274e9d] w-fit mx-auto p-3 sm:p-4 transition-transform duration-300 hover:rotate-12'>
              <Image
                src={service.icon}
                alt={service.title}
                width={60}
                height={60}
                className='w-10 h-10 sm:w-12 sm:h-12'
              />
            </div>
            <h3 className='text-xl sm:text-2xl font-semibold'>{service.title}</h3>
            <p className='text-zinc-500 text-sm sm:text-base'>{service.description}</p>
            <Link
              href={`/${service.url}`}
              className='inline-block px-4 py-2 sm:px-5 sm:py-3 rounded-md bg-[#274e9d] text-white text-sm sm:text-base border-2 border-[#274e9d] hover:bg-white hover:text-[#274e9d] transition-colors duration-300'
            >
              En savoir plus
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}