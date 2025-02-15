"use client";
import React, { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabase'; // Ensure this path is correct
import Navbar from '../../Navbar';
import Footer from '../../Footer';
import Image from 'next/image';

// Define the type for gallery items
interface GalleryItem {
  id: number;
  src: string;
  category: string | null; // Allow category to be null
}

const Page: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [galleryData, setGalleryData] = useState<GalleryItem[]>([]); // State for gallery items
  const [categories, setCategories] = useState<string[]>([]); // State for categories
  const [loading, setLoading] = useState(true); // Loading state

  // Fetch data from Supabase
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch gallery items
        const { data: galleryData, error: galleryError } = await supabase
          .from('equipements') // Ensure the table name is correct
          .select('*'); // Fetch all rows from the equipements table

        if (galleryError) {
          throw galleryError;
        }

        // Fetch categories
        const { data: categoryData, error: categoryError } = await supabase
          .from('piscines_categories') // Ensure the table name is correct
          .select('categories')
          .eq('piscine', 'equipements'); // Filter by piscine = 'equipements'

        if (categoryError) {
          throw categoryError;
        }

        // Extract unique categories
        const uniqueCategories = Array.from(
          new Set(categoryData.flatMap((cat) => cat.categories))
        );

        // Set states
        setGalleryData((galleryData as GalleryItem[]) || []);
        setCategories(['all', ...uniqueCategories]); // Add 'all' as the first option
      } catch (err) {
        console.error('Error fetching data:', err);
      } finally {
        setLoading(false); // Set loading to false
      }
    };

    fetchData();
  }, []);

  // Filter data based on search term and selected category
  const filteredGallery = galleryData.filter((item) => {
    const category = item.category || ''; // Fallback to empty string if category is null
    const matchesCategory =
      selectedCategory === 'all' || category === selectedCategory;
    return matchesCategory;
  });

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <div className="h-[40vh] md:h-[60vh] flex pt-20 md:pt-0 justify-center items-center bg-[#274e9d]">
        <div className="text-center px-4">
          <h1 className="text-4xl md:text-6xl text-white font-medium w-full md:w-2/3 mx-auto">
            Equipements Piscines
          </h1>
          <hr className="w-1/4 mx-auto border-2 border-white mt-4" />
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12 flex flex-col md:flex-row gap-8">
        {/* Aside (Filters) */}
        <aside className="w-full md:w-64 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Filtres</h2>

          {/* Category Filters */}
          <div className="space-y-2">
            <h3 className="text-lg font-medium mb-2">Catégories</h3>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`w-full text-left px-4 py-2 rounded-md ${
                  selectedCategory === category
                    ? 'bg-[#274e9d] text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
        </aside>

        {/* Main Gallery */}
        <main className="flex-1">
          {loading ? (
            <p className="text-center text-gray-700">Chargement en cours...</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredGallery.length > 0 ? (
                filteredGallery.map((item) => (
                  <div key={item.id} className="bg-white p-4 rounded-lg shadow-md">
                    <Image
                      height={500}
                      width={500}
                      src={item.src}
                      alt={`Pool equipment ${item.id}`}
                      className="w-full h-48 object-cover rounded-md"
                    />
                  </div>
                ))
              ) : (
                <p className="text-center text-gray-700">Aucun résultat trouvé.</p>
              )}
            </div>
          )}
        </main>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Page;