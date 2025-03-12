"use client";
import React, { useEffect, useState } from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import Image from "next/image";
import Link from "next/link";
import { loadTranslations } from "@/utils/loadTranslations";

const Page: React.FC = () => {
  const [translations, setTranslations] = useState<{
    wholesale_sales: {
      heading: string;
      description_1: string;
      description_2: string;
      description_3: string;
      discover_equipment: string;
      discover_mosaics: string;
      services: { icon: string; title: string }[];
    };
  }>({
    wholesale_sales: {
      heading: "Vente en gros materiel Piscines & Mosaique",
      description_1:
        "Nous sommes ravis de vous accueillir dans notre showroom situé à la Soukra, réservé aux professionnels et particuliers. Vous y trouverez tous les équipements nécessaires à l’élaboration de votre chantier. N’hésitez pas à nous contacter pour toute assistance technique dans vos devis ou pour trouver des équipements auxquels nous n’aurions pas pensé.",
      description_2:
        "Forts d’une expérience de plus de 20 ans, nous attachons une importance toute particulière à vous accompagner dans vos projets et les mener à terme.",
      description_3:
        "Merci de votre intérêt pour notre passion, <br /> L’équipe Fildair Fr",
      discover_equipment: "Découvrir nos équipements piscines",
      discover_mosaics: "Découvrir nos mosaïques piscines",
      services: [
        { icon: "uil-truck", title: "Frais de livraison réduit" },
        { icon: "uil-sync", title: "14 jours pour le retour" },
        { icon: "uil-comments", title: "Du lundi au vendredi - 71865319" },
        { icon: "uil-lock", title: "Paiement sécurisé" },
      ],
    },
  });

  useEffect(() => {
    // Detect the user's browser language
    const userLanguage = navigator.language || "fr"; // Default to French
    const loadedTranslations = loadTranslations(userLanguage);
    setTranslations(loadedTranslations);
  }, []);

  return (
    <div>
      <Navbar />
      <link
        rel="stylesheet"
        href="https://unicons.iconscout.com/release/v4.0.8/css/line.css"
      />

      <div className="h-[40vh] md:h-[60vh] flex pt-20 md:pt-0 justify-center items-center bg-[#274e9d]">
        <div className="text-center px-4">
          <h1 className="text-4xl md:text-6xl text-white font-medium w-full md:w-2/3 mx-auto leading-tight">
            {translations.wholesale_sales.heading}
          </h1>
          <hr className="w-1/4 mx-auto border-2 border-white mt-4" />
        </div>
      </div>

      <div className="py-8 md:py-12 px-4 md:px-8 max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row gap-6 md:gap-8">
          <div className="flex-1">
            <p className="text-base md:text-lg text-gray-700 mb-4">
              {translations.wholesale_sales.description_1}
            </p>
            <p className="text-base md:text-lg text-gray-700 mb-4">
              {translations.wholesale_sales.description_2}
            </p>
            <p
              className="text-base md:text-lg text-gray-700 font-semibold"
              dangerouslySetInnerHTML={{ __html: translations.wholesale_sales.description_3 }}
            />
          </div>

          <div className="flex-1">
            <Image
              src="/sell.jpg"
              height={500}
              width={500}
              unoptimized
              alt="Piscine sur mesure"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>

        <div className="mt-8">
          <div className="flex flex-col md:flex-row justify-center gap-6 md:gap-8">
            <div className="text-center">
              <h2 className="text-xl md:text-2xl font-semibold text-[#274e9d] mb-4">
                {translations.wholesale_sales.discover_equipment}
              </h2>
              <div className="w-[300px] h-[300px] overflow-hidden rounded-lg mx-auto shadow-md">
                <Link href="/Vente-en-gros-materiel-Piscines-&-Mosaique/Equipements-Piscines">
                  <Image
                    src="/emau.jpg"
                    alt="Emaux"
                    width={300}
                    height={300}
                    unoptimized
                    className="w-full h-full p-5 object-cover transition-transform duration-300 hover:scale-105"
                  />
                </Link>
              </div>
            </div>
            <div className="text-center">
              <h2 className="text-xl md:text-2xl font-semibold text-[#274e9d] mb-4">
                {translations.wholesale_sales.discover_mosaics}
              </h2>
              <div className="w-[300px] h-[300px] overflow-hidden rounded-lg mx-auto shadow-md">
                <Link href="/Vente-en-gros-materiel-Piscines-&-Mosaique/Mosaique-Piscines">
                  <Image
                    src="/prestigio.jpg"
                    alt="Prestigio"
                    width={300}
                    height={300}
                    unoptimized
                    className="w-full h-full p-5 object-cover transition-transform duration-300 hover:scale-105"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {translations.wholesale_sales.services.map((service, index) => (
            <div
              key={index}
              className="flex items-center gap-3 p-4 bg-gray-100 rounded-lg shadow-sm"
            >
              <span className="text-2xl text-[#274e9d]">
                <i className={`uil ${service.icon}`}></i>
              </span>
              <p className="text-sm md:text-base text-gray-700 font-medium">
                {service.title}
              </p>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Page;