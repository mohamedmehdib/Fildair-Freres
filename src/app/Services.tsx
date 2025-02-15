import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function Services() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Piscine Construction and Maintenance",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Fildair Frères",
      "image": "https://piscinesfildairfrerestunisie.com/logo.jpg",
      "description": "Découvrez Fildair Frères, votre partenaire de confiance pour les piscines et équipements en Tunisie.",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "km 13 av Fatouma Bourguiba",
        "addressLocality": "La Soukra",
        "postalCode": "2036",
        "addressCountry": "Tunisia",
      },
      "telephone": "+216 71 865 319",
      "email": "fildairfreres@gmail.com",
      "url": "https://piscinesfildairfrerestunisie.com",
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Services de Piscine",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Conception de piscine sur mesure",
            "description": "Contacter nous pour un devis gratuit de construction ou de renovation piscine.",
          },
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Entretien Piscine & SAV",
            "description": "Confiez l’entretien annuel de votre piscine à un professionnel pour garantir son bon fonctionnement.",
          },
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Vente en gros materiel Piscines & Mosaique",
            "description": "Confiez vos projets à un fournisseur spécialisé pour du matériel de piscine et mosaïque de qualité.",
          },
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Chauffage & Climatisation",
            "description": "Confiez l’installation et l’entretien à un professionnel pour un confort optimal.",
          },
        },
      ],
    },
  };

  return (
    <section id='services' className='flex flex-col lg:flex-row p-6 sm:p-10 lg:p-20 gap-8 lg:gap-12'>
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
      <div className='w-full lg:w-1/2 space-y-6'>
        <div className='flex items-center space-x-3'>
          <span className='text-[#305eb8] text-xl font-semibold'>Nos meilleurs services</span>
          <hr className='bg-[#305eb8] h-1 w-14' />
        </div>
        <div>
          <h1 className='py-5 text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight'>
            Nos meilleurs services de piscine pour vous !
          </h1>
          <p className='text-zinc-500 text-sm sm:text-base'>
            N°1 en Tunisie pour les piscines en béton 20 ans d&apos;expérience à votre service Découvrez toutes les possibilités qui s&apos;offrent à vous pour que votre projet de construction, de rénovation ou d&apos;aménagement (équipement, décoration, piscine connectée) réponde parfaitement à vos exigences.
          </p>
        </div>
        <div className='flex items-center space-x-5'>
          <Image
            src="/ceo.jpeg"
            alt='Bilel Abassi, Fondateur de Fildair Frères'
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
            alt='Signature de Bilel Abassi'
            width={100}
            height={100}
            className='pl-4 w-16 sm:w-24 transition-transform duration-300'
          />
        </div>
        <div className='text-zinc-600 font-medium py-4 text-sm sm:text-base'>
          <p>Pisciniste De Père en Fils Expert de la Construction et de l&apos;équipement des Piscines Public & Privé.</p>
          <p className='mt-2'>Depuis plus de 20 ans, Bilel Abassi accompagne l&apos;entreprise familiale pour la réalisation, rénovation, équipement et autres des Piscines.</p>
        </div>
      </div>

      <div className='w-full lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6'>
        {[
          { icon: "/one.svg", title: "Conception de piscine sur mesure", description: "Contacter nous pour un devis gratuit de construction ou de renovation piscine.", url: "Conception-de-piscine-sur-mesure" },
          { icon: "/cleaning.svg", title: "Entretien Piscine & SAV", description: "Confiez l’entretien annuel de votre piscine à un professionnel pour garantir son bon fonctionnement.", url: "Entretien-Piscine-&-SAV" },
          { icon: "/cart.svg", title: "Vente en gros materiel Piscines & Mosaique", description: "Confiez vos projets à un fournisseur spécialisé pour du matériel de piscine et mosaïque de qualité.", url: "Vente-en-gros-materiel-Piscines-&-Mosaique" },
          { icon: "/heating.svg", title: "Chauffage & Climatisation", description: "Confiez l’installation et l’entretien à un professionnel pour un confort optimal.", url: "Chauffage-&-climatisation" },
        ].map((service, index) => (
          <article
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
            <h2 className='text-xl sm:text-2xl font-semibold'>{service.title}</h2>
            <p className='text-zinc-500 text-sm sm:text-base'>{service.description}</p>
            <Link
              href={`/${service.url}`}
              className='inline-block px-4 py-2 sm:px-5 sm:py-3 rounded-md bg-[#274e9d] text-white text-sm sm:text-base border-2 border-[#274e9d] hover:bg-white hover:text-[#274e9d] transition-colors duration-300'
              aria-label={`En savoir plus sur ${service.title}`}
            >
              En savoir plus
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}