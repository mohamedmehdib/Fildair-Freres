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
          src="/about.jpg"
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
            Nagez en toute sérénité avec Swim Serenity Solutions
          </h2>
          <p className='text-zinc-500 text-sm sm:text-base'>
            Il est recommandé de nettoyer régulièrement la piscine au moins une fois par semaine pour maintenir la qualité de l&apos;eau et éviter la croissance des algues. Roboto est une autre police sans empattement polyvalente, très lisible et disponible en plusieurs poids, ce qui la rend adaptée.
          </p>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 gap-5'>
          <StatCard number={2000} label="Projets terminés" />
          <StatCard number={164} label="Membres de l'équipe d'experts" />
          <StatCard number={3000} label="Clients satisfaits" />
          <StatCard number={60} label="Meilleurs prix gagnants" />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;