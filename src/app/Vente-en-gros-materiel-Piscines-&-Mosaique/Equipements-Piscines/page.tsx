"use client";
import React, { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";
import Navbar from "../../Navbar";
import Footer from "../../Footer";
import Image from "next/image";
import { loadTranslations } from "@/utils/loadTranslations";

interface GalleryItem {
  id: number;
  src: string;
  category: string | null;
}

const Page: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [galleryData, setGalleryData] = useState<GalleryItem[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [translations, setTranslations] = useState<{
    equipments: {
      heading: string;
      filters: string;
      categories: string;
      loading: string;
      no_results: string;
    };
  }>({
    equipments: {
      heading: "Equipements Piscines",
      filters: "Filtres",
      categories: "Catégories",
      loading: "Chargement en cours...",
      no_results: "Aucun résultat trouvé.",
    },
  });

  useEffect(() => {
    // Detect the user's browser language
    const userLanguage = navigator.language || "fr"; // Default to French
    const loadedTranslations = loadTranslations(userLanguage);
    setTranslations(loadedTranslations);

    const fetchData = async () => {
      try {
        const { data: galleryData, error: galleryError } = await supabase
          .from("equipements")
          .select("*");

        if (galleryError) {
          throw galleryError;
        }

        const { data: categoryData, error: categoryError } = await supabase
          .from("piscines_categories")
          .select("categories")
          .eq("piscine", "equipements");

        if (categoryError) {
          throw categoryError;
        }

        const uniqueCategories = Array.from(
          new Set(categoryData.flatMap((cat) => cat.categories))
        );

        setGalleryData((galleryData as GalleryItem[]) || []);
        setCategories(["all", ...uniqueCategories]);
      } catch (err) {
        console.error("Error fetching data:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const filteredGallery = galleryData.filter((item) => {
    const category = item.category || "";
    const matchesCategory =
      selectedCategory === "all" || category === selectedCategory;
    return matchesCategory;
  });

  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />

      <div className="h-[40vh] md:h-[60vh] flex pt-20 md:pt-0 justify-center items-center bg-[#274e9d]">
        <div className="text-center px-4">
          <h1 className="text-4xl md:text-6xl text-white font-medium w-full md:w-2/3 mx-auto">
            {translations.equipments.heading}
          </h1>
          <hr className="w-1/4 mx-auto border-2 border-white mt-4" />
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 flex flex-col md:flex-row gap-8">
        <aside className="w-full md:w-64 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">
            {translations.equipments.filters}
          </h2>

          <div className="space-y-2">
            <h3 className="text-lg font-medium mb-2">
              {translations.equipments.categories}
            </h3>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`w-full text-left px-4 py-2 rounded-md ${
                  selectedCategory === category
                    ? "bg-[#274e9d] text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
        </aside>

        <main className="flex-1">
          {loading ? (
            <p className="text-center text-gray-700">
              {translations.equipments.loading}
            </p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredGallery.length > 0 ? (
                filteredGallery.map((item) => (
                  <div
                    key={item.id}
                    className="bg-white p-4 rounded-lg shadow-md"
                  >
                    <div className="relative aspect-square w-full">
                      <Image
                        src={item.src}
                        alt={`Pool equipment ${item.id}`}
                        width={500}
                        height={500}
                        unoptimized
                        className="object-cover rounded-md"
                      />
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-center text-gray-700">
                  {translations.equipments.no_results}
                </p>
              )}
            </div>
          )}
        </main>
      </div>

      <Footer />
    </div>
  );
};

export default Page;