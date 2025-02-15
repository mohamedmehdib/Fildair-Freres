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
      <h4 className='text-[#274e9d] text-5xl font-semibold'>
        {inView ? <CountUp end={number} duration={2.5} /> : 0}
      </h4>
      <h4 className='text-zinc-500 text-lg font-medium'>{label}</h4>
    </div>
  );
};

const AboutUs: React.FC = () => {
  return (
    <div className='flex flex-col lg:flex-row'>
      <div className='w-full lg:w-1/2 flex items-center justify-center px-10'>
        <Image
          src="/about.jpeg"
          alt='About'
          width={5000}
          height={5000}
          className='rounded-xl'
        />
      </div>

      <div className='w-full lg:w-1/2 space-y-6 p-10'>
        <div className='flex items-center space-x-3'>
          <span className='text-[#305eb8] text-xl font-semibold'>À propos de nous</span>
          <hr className='bg-[#305eb8] h-1 w-14' />
        </div>

        <div>
          <h2 className='py-5 text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight'>
            Nager en toute sérénité avec Piscines Fildair Freres tunisie
          </h2>
          <p className='text-zinc-500 text-sm sm:text-base'>
            Fildair Frères vous offre des services complets pour vos projets de piscine : conception sur mesure, rénovation, entretien annuel, vente en gros d&apos;équipements et de mosaïques, ainsi que l&apos;installation de chauffage et de climatisation. Avec plus de 20 ans d&apos;expérience, nous vous garantissons des solutions personnalisées et de qualité pour répondre à tous vos besoins. Confiez-nous votre projet et obtenez un devis gratuit !      
          </p>
        </div>

        {/* Replaced grid with flex */}
        <div className='flex flex-wrap justify-center gap-5'>
          <StatCard number={1500} label="Projets terminés" />
          <StatCard number={30} label="Membres de l'équipe d'experts" />
          <StatCard number={2000} label="Clients satisfaits" />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;