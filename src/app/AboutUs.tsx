import React from 'react';
import Image from 'next/image';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

interface StatCardProps {
  number: number;
  label: string;
}

const StatCard: React.FC<StatCardProps> = ({ number, label }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  return (
    <div ref={ref} className='text-center'>
      <h3 className='text-[#274e9d] text-5xl font-semibold'>
        {inView ? <CountUp end={number} duration={2.5} /> : 0}
      </h3>
      <p className='text-zinc-500 text-lg font-medium'>{label}</p>
    </div>
  );
};

const AboutUs: React.FC = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "À propos de Fildair Frères",
    "description": "Fildair Frères vous offre des services complets pour vos projets de piscine : conception sur mesure, rénovation, entretien annuel, vente en gros d'équipements et de mosaïques, ainsi que l'installation de chauffage et de climatisation.",
    "url": "https://piscinesfildairfrerestunisie.com/a-propos",
    "image": "https://piscinesfildairfrerestunisie.com/about.jpeg",
    "mainEntity": {
      "@type": "Organization",
      "name": "Fildair Frères",
      "description": "Avec plus de 20 ans d'expérience, Fildair Frères vous garantit des solutions personnalisées et de qualité pour répondre à tous vos besoins en matière de piscines.",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "km 13 av Fatouma Bourguiba",
        "addressLocality": "La Soukra",
        "postalCode": "2036",
        "addressCountry": "Tunisia",
      },
      "telephone": "+216 71 865 319",
      "email": "fildairfreres@gmail.com",
      "founder": {
        "@type": "Person",
        "name": "Bilel Abassi",
      },
      "foundingDate": "2003",
      "numberOfEmployees": 30,
      "awards": "N°1 en Tunisie pour les piscines en béton",
    },
  };

  return (
    <section className='flex flex-col lg:flex-row'>
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
      <div className='w-full lg:w-1/2 flex items-center justify-center px-10'>
        <Image
          src="/bdl.jpeg"
          alt='À propos de Fildair Frères'
          width={5000}
          height={5000}
          className='rounded-xl'
          priority
        />
      </div>

      <div className='w-full lg:w-1/2 space-y-6 p-10'>
        <div className='flex items-center space-x-3'>
          <span className='text-[#305eb8] text-xl font-semibold'>À propos de nous</span>
          <hr className='bg-[#305eb8] h-1 w-14' />
        </div>

        <div>
          <h1 className='py-5 text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight'>
            Nager en toute sérénité avec Piscines Fildair Frères Tunisie
          </h1>
          <p className='text-zinc-500 text-sm sm:text-base'>
            Fildair Frères vous offre des services complets pour vos projets de piscine : conception sur mesure, rénovation, entretien annuel, vente en gros d&apos;équipements et de mosaïques, ainsi que l&apos;installation de chauffage et de climatisation. Avec plus de 20 ans d&apos;expérience, nous vous garantissons des solutions personnalisées et de qualité pour répondre à tous vos besoins. Confiez-nous votre projet et obtenez un devis gratuit !
          </p>
        </div>

        {/* Replaced grid with flex */}
        <div className='flex flex-wrap justify-center gap-5'>
          <StatCard number={500} label="Projets terminés" />
          <StatCard number={30} label="Membres de l'équipe d'experts" />
          <StatCard number={1000} label="Clients satisfaits" />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;