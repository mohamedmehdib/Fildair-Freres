import React, { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabase';
import Image from 'next/image';

interface GalleryItem {
  id: number;
  src: string;
  category?: string; // Optional category
}

interface PiscineCategoryItem {
  id: number;
  piscine: string; // Fixed value: "mosaique"
  categories: string[]; // Array of categories
}

const UploadMosaique: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const [category, setCategory] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [items, setItems] = useState<GalleryItem[]>([]); // State to store fetched items
  const [editingItem, setEditingItem] = useState<GalleryItem | null>(null); // State for editing items

  const [categories, setCategories] = useState<PiscineCategoryItem[]>([]); // State to store fetched categories
  const [newCategory, setNewCategory] = useState(''); // State for adding new categories

  // Fetch items from Supabase
  useEffect(() => {
    const fetchItems = async () => {
      try {
        const { data, error } = await supabase
          .from('mosaique') // Fetch from mosaique table
          .select('*');

        if (error) {
          throw error;
        }

        setItems(data || []);
      } catch (err) {
        console.error('Error fetching items:', err);
      }
    };

    fetchItems();
  }, []);

  // Fetch categories from Supabase
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const { data, error } = await supabase
          .from('piscines_categories')
          .select('*')
          .eq('piscine', 'mosaique'); // Fetch categories for piscine = mosaique

        if (error) {
          throw error;
        }

        setCategories(data || []);
      } catch (err) {
        console.error('Error fetching categories:', err);
      }
    };

    fetchCategories();
  }, []);

  // Handle item upload/edit
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess('');

    if (!file) {
      setError('Please select an image.');
      setLoading(false);
      return;
    }

    try {
      // Step 1: Upload the image to Supabase Storage
      const fileExt = file.name.split('.').pop();
      const fileName = `${Math.random()}.${fileExt}`; // Generate a unique file name
      const filePath = `${fileName}`;

      const { error: uploadError } = await supabase.storage
        .from('mosaique') // Upload to mosaique bucket
        .upload(filePath, file);

      if (uploadError) {
        throw uploadError;
      }

      // Step 2: Get the public URL of the uploaded file
      const { data: publicUrlData } = supabase.storage
        .from('mosaique')
        .getPublicUrl(filePath);

      const imageUrl = publicUrlData.publicUrl;

      // Step 3: Insert or update the image URL and other data into the database
      if (editingItem) {
        // Update existing item
        const { error: dbError } = await supabase
          .from('mosaique')
          .update({ src: imageUrl, category: category || null })
          .eq('id', editingItem.id);

        if (dbError) {
          throw dbError;
        }

        setSuccess('Item updated successfully!');
      } else {
        // Insert new item
        const { error: dbError } = await supabase
          .from('mosaique')
          .insert([{ src: imageUrl, category: category || null }]);

        if (dbError) {
          throw dbError;
        }

        setSuccess('Item uploaded successfully!');
      }

      // Refresh the list of items
      const { data: updatedData, error: fetchError } = await supabase
        .from('mosaique')
        .select('*');

      if (fetchError) {
        throw fetchError;
      }

      setItems(updatedData || []);
      setFile(null);
      setCategory('');
      setEditingItem(null); // Reset editing state
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message || 'An error occurred while uploading the image.');
      } else {
        setError('An unknown error occurred.');
      }
    } finally {
      setLoading(false);
    }
  };

  // Handle item deletion
  const handleDeleteItem = async (id: number) => {
    try {
      const { error: dbError } = await supabase
        .from('mosaique')
        .delete()
        .eq('id', id);

      if (dbError) {
        throw dbError;
      }

      // Refresh the list of items
      const { data: updatedData, error: fetchError } = await supabase
        .from('mosaique')
        .select('*');

      if (fetchError) {
        throw fetchError;
      }

      setItems(updatedData || []);
      setSuccess('Item deleted successfully!');
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message || 'An error occurred while deleting the item.');
      } else {
        setError('An unknown error occurred.');
      }
    }
  };

  // Handle item edit
  const handleEditItem = (item: GalleryItem) => {
    setEditingItem(item);
    setCategory(item.category || '');
  };

  // Handle category addition
  const handleAddCategory = async () => {
    if (!newCategory) {
      setError('Please enter a category.');
      return;
    }

    try {
      // Check if the category already exists
      const existingCategory = categories.find((cat) =>
        cat.categories.includes(newCategory)
      );

      if (existingCategory) {
        setError('Category already exists.');
        return;
      }

      // Insert new category
      const { error: dbError } = await supabase
        .from('piscines_categories')
        .insert([{ piscine: 'mosaique', categories: [newCategory] }]); // Insert for piscine = mosaique

      if (dbError) {
        throw dbError;
      }

      // Refresh the list of categories
      const { data: updatedData, error: fetchError } = await supabase
        .from('piscines_categories')
        .select('*')
        .eq('piscine', 'mosaique');

      if (fetchError) {
        throw fetchError;
      }

      setCategories(updatedData || []);
      setNewCategory('');
      setSuccess('Category added successfully!');
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message || 'An error occurred while adding the category.');
      } else {
        setError('An unknown error occurred.');
      }
    }
  };

  // Handle category deletion
  const handleDeleteCategory = async (id: number) => {
    try {
      const { error: dbError } = await supabase
        .from('piscines_categories')
        .delete()
        .eq('id', id);

      if (dbError) {
        throw dbError;
      }

      // Refresh the list of categories
      const { data: updatedData, error: fetchError } = await supabase
        .from('piscines_categories')
        .select('*')
        .eq('piscine', 'mosaique');

      if (fetchError) {
        throw fetchError;
      }

      setCategories(updatedData || []);
      setSuccess('Category deleted successfully!');
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message || 'An error occurred while deleting the category.');
      } else {
        setError('An unknown error occurred.');
      }
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md max-w-4xl mx-auto">
      <h2 className="text-xl font-semibold mb-4">Upload Image to mosaique</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* File Input */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Image File</label>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setFile(e.target.files?.[0] || null)}
            className="w-full p-2 border border-gray-300 rounded-md"
            required
          />
        </div>

        {/* Category Input (Optional) */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Category (Optional)</label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md"
          >
            <option value="">Select a category</option>
            {categories.map((cat) =>
              cat.categories.map((c, index) => (
                <option key={`${cat.id}-${index}`} value={c}>
                  {c}
                </option>
              ))
            )}
          </select>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-[#274e9d] text-white p-2 rounded-md hover:bg-[#1a365d] disabled:bg-gray-400"
        >
          {loading
            ? editingItem
              ? 'Updating...'
              : 'Uploading...'
            : editingItem
            ? 'Update'
            : 'Upload'}
        </button>

        {/* Error and Success Messages */}
        {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
        {success && <p className="text-green-500 text-sm mt-2">{success}</p>}
      </form>

      {/* Display Items */}
      <div className="mt-8">
        <h3 className="text-lg font-semibold mb-4">Uploaded Items</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item) => (
            <div key={item.id} className="bg-white p-4 rounded-lg shadow-md">
              <Image
                height={500}
                width={500}
                src={item.src}
                alt={`Pool equipment ${item.id}`}
                className="w-full h-48 object-cover rounded-md"
              />
              <div className="mt-4 text-center">
                <p className="text-gray-700">{item.category || 'No category'}</p>
                <div className="flex justify-center space-x-2 mt-2">
                  <button
                    onClick={() => handleEditItem(item)}
                    className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDeleteItem(item.id)}
                    className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Manage Categories */}
      <div className="mt-8">
        <h3 className="text-lg font-semibold mb-4">Manage Categories</h3>
        <div className="space-y-4">
          {/* Add Category */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Add New Category</label>
            <div className="flex space-x-2">
              <input
                type="text"
                value={newCategory}
                onChange={(e) => setNewCategory(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md"
                placeholder="Enter a new category"
              />
              <button
                onClick={handleAddCategory}
                className="bg-[#274e9d] text-white px-4 py-2 rounded-md hover:bg-[#1a365d]"
              >
                Add
              </button>
            </div>
          </div>

          {/* Display Categories */}
          <div>
            <h4 className="text-md font-medium mb-2">Existing Categories</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {categories.map((cat) => (
                <div key={cat.id} className="bg-gray-100 p-4 rounded-lg">
                  <p className="text-gray-700">{cat.categories.join(', ')}</p>
                  <button
                    onClick={() => handleDeleteCategory(cat.id)}
                    className="mt-2 bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
                  >
                    Delete
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UploadMosaique;