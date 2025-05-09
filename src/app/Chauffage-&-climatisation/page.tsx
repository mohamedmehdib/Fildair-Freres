"use client";
import React, { useEffect, useState } from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import Slider from "../Conception-de-piscine-sur-mesure/Slider";
import { loadTranslations } from "@/utils/loadTranslations";

const Page: React.FC = () => {
  const [translations, setTranslations] = useState<{
    heating_cooling: {
      heading: string;
      title: string;
      description: string;
      technical_direction: {
        title: string;
        items: string[];
      };
      construction_management: {
        title: string;
        items: string[];
      };
      public_private_market: {
        title: string;
        description: string;
      };
    };
  }>({
    heating_cooling: {
      heading: "Chauffage & Climatisation",
      title: "Fildair FR",
      description:
        "En s’appuyant sur son bureau d’Etudes interne, Fildair Fr vous accompagne de l’étude d’avant-projet à la livraison clefs en main de vos installations chauffage & climatisation. Nous mettons en œuvre les solutions techniques adaptées pour la climatisation des grands ensembles tertiaires : villas de maître, hôtels, bureaux, etc.",
      technical_direction: {
        title: "Direction Technique, Chiffrage et Gestion de Projet",
        items: [
          "Assimilation et analyse des demandes clients",
          "Encadrement et organisation des projets",
          "Réalisation des études d‘exécution",
        ],
      },
      construction_management: {
        title: "Direction des Travaux et Suivi de Chantier",
        items: [
          "Préparation de chantier",
          "Suivi de l’avancement des travaux et vérification de la qualité jusqu’à réception",
          "Gestion financière du chantier",
        ],
      },
      public_private_market: {
        title: "Marché Public & Privé",
        description:
          "Nous intervenons aussi bien dans le secteur public que privé, avec une expertise adaptée à chaque type de projet.",
      },
    },
  });

  useEffect(() => {
    // Detect the user's browser language
    const userLanguage = navigator.language || "fr"; // Default to French
    const loadedTranslations = loadTranslations(userLanguage);
    setTranslations(loadedTranslations);
  }, []);

  const images = [
    { src: "/a1.jpeg" },
    { src: "/a2.jpeg" },
    { src: "/a3.jpeg" },
    { src: "/a4.jpeg" },
    { src: "/a5.jpeg" },
    { src: "/a6.jpeg" },
    { src: "/a7.jpeg" },
    { src: "/a8.jpeg" },
    { src: "/a9.jpeg" },
    { src: "/a10.jpeg" },
    { src: "/a11.jpeg" },
    { src: "/a12.jpeg" },
    { src: "/a13.jpeg" },
    { src: "/a14.jpeg" },
    { src: "/a15.jpeg" },
    { src: "/a16.jpeg" },
    { src: "/a17.jpeg" },
    { src: "/a18.jpeg" },
    { src: "/a19.jpeg" },
    { src: "/a20.jpeg" },
    { src: "/a21.jpeg" },
    { src: "/a22.jpeg" },
  ];

  return (
    <div className="bg-gray-50">
      <Navbar />
      <link
        rel="stylesheet"
        href="https://unicons.iconscout.com/release/v4.0.8/css/line.css"
      />

      <div className="h-[40vh] md:h-[60vh] flex pt-20 md:pt-0 justify-center items-center bg-[#274e9d]">
        <div className="text-center px-4">
          <h1 className="text-4xl md:text-6xl text-white font-medium w-full md:w-2/3 mx-auto">
            {translations.heating_cooling.heading}
          </h1>
          <hr className="w-1/4 mx-auto border-2 border-white mt-4" />
        </div>
      </div>

      <div className="py-12 md:py-20 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          <div className="space-y-6 md:space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold text-[#274e9d]">
              {translations.heating_cooling.title}
            </h2>
            <p className="text-base md:text-lg text-gray-700 leading-relaxed">
              {translations.heating_cooling.description}
            </p>

            <div className="mt-8 md:mt-12">
              <Slider images={images} />
            </div>
          </div>

          <div className="space-y-6 md:space-y-8">
            <div className="bg-white p-6 md:p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl md:text-2xl font-semibold text-[#274e9d] mb-4">
                {translations.heating_cooling.technical_direction.title}
              </h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                {translations.heating_cooling.technical_direction.items.map(
                  (item, index) => (
                    <li key={index}>{item}</li>
                  )
                )}
              </ul>
            </div>

            <div className="bg-white p-6 md:p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl md:text-2xl font-semibold text-[#274e9d] mb-4">
                {translations.heating_cooling.construction_management.title}
              </h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                {translations.heating_cooling.construction_management.items.map(
                  (item, index) => (
                    <li key={index}>{item}</li>
                  )
                )}
              </ul>
            </div>

            <div className="bg-white p-6 md:p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl md:text-2xl font-semibold text-[#274e9d] mb-4">
                {translations.heating_cooling.public_private_market.title}
              </h3>
              <p className="text-gray-700">
                {translations.heating_cooling.public_private_market.description}
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Page;