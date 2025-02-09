import Image from 'next/image'
import React from 'react'

export default function Services() {
  return (
    <div className='flex p-20'>
        <div className='w-1/2'>
            <div className='flex items-center space-x-3'>
                <span className='text-[#305eb8] text-xl font-semibold'>Nos meilleurs services</span>
                <hr className='bg-[#305eb8] h-1 w-14'/>
            </div>
            <div>
                <h2 className='py-5 text-5xl font-semibold'>
                    Nos meilleurs services de piscine pour vous !
                </h2>
                <p className='text-zinc-500'>
                    Nos services de sauveteurs en plongée en toute sécurité proposent des professionnels formés pour garantir un environnement de baignade sûr, et nous proposons également des recommandations pour des fonctionnalités de sécurité supplémentaires.
                </p>
                <p className='text-zinc-600 font-medium py-4'>
                    Résultats de la consolidation d&apos;équipe de marque après une valeur de préparation Web premium, un e-business activé par le Web, un engagement stratégique activé par le Web...
                </p>
            </div>
            <div className='flex items-center'>
                <Image src="/ceo.jpg" alt='ceo' width={100} height={100} className='rounded-full w-20 border-2 border-indigo-500'/>
                <div className='flex flex-col'>
                    <span>Bilel Abassi</span>
                    <span>Fondateur</span>
                </div>
            </div>
        </div>
        <div className='w-1/2'></div>
    </div>
  )
}
