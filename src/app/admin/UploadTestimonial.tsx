'use client';
import React, { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabase';
import Image from 'next/image';

// Define the structure of a testimonial
interface Testimonial {
  id: number;
  name: string;
  role: string;
  image: string | null; // URL of the image or null if no image exists
  stars: number;
  feedback: string;
}

interface FormData {
  id?: number; // Add ID for editing
  name: string;
  role: string;
  image: File | null;
  stars: number;
  feedback: string;
}

export default function ManageTestimonials() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    role: '',
    image: null,
    stars: 5,
    feedback: '',
  });
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]); // List of testimonials
  const [selectedId, setSelectedId] = useState<number | null>(null); // Track selected testimonial for editing
  const [imagePreview, setImagePreview] = useState<string | null>(null); // Preview uploaded image

  // Fetch testimonials from Supabase
  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const { data, error } = await supabase.from('testimonials').select('*');
        if (error) throw error;
        setTestimonials(data as Testimonial[]);
      } catch (error) {
        console.error('Error fetching testimonials:', error);
      }
    };
    fetchTestimonials();
  }, []);

  // Handle form input changes
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle file input changes
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      if (file.size > 2 * 1024 * 1024) {
        alert('File size must be less than 2MB.');
        return;
      }
      setFormData((prev) => ({ ...prev, image: file }));

      // Create a preview URL for the selected image
      const previewUrl = URL.createObjectURL(file);
      setImagePreview(previewUrl);
    }
  };

  // Populate form with selected testimonial for editing
  const handleEdit = (testimonial: Testimonial) => {
    setSelectedId(testimonial.id);
    setFormData({
      id: testimonial.id,
      name: testimonial.name,
      role: testimonial.role,
      image: null, // Reset image field
      stars: testimonial.stars,
      feedback: testimonial.feedback,
    });
    setImagePreview(testimonial.image || null); // Set image preview if available

    // Scroll to the top of the page
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Smooth scrolling animation
    });
  };

  // Delete a testimonial
  const handleDelete = async (id: number) => {
    try {
      const { error } = await supabase.from('testimonials').delete().eq('id', id);
      if (error) throw error;

      // Remove deleted testimonial from state
      setTestimonials((prev) => prev.filter((t) => t.id !== id));
      alert('Testimonial deleted successfully!');
    } catch (error) {
      console.error('Error deleting testimonial:', error);
      alert('Failed to delete testimonial.');
    }
  };

  // Handle form submission (create or update)
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validate required fields
    if (!formData.name.trim()) {
      alert('Name is required.');
      return;
    }
    if (!formData.role.trim()) {
      alert('Role is required.');
      return;
    }
    if (!formData.image && !selectedId) {
      alert('Image is required.');
      return;
    }
    if (!formData.feedback.trim()) {
      alert('Feedback is required.');
      return;
    }

    try {
      let imageUrl: string | null = formData.image ? null : undefined; // Preserve existing image URL if no new file is uploaded

      if (formData.image) {
        console.log('Selected file:', formData.image);

        const { data, error } = await supabase.storage
          .from('testimonials')
          .upload(`images/${formData.image.name}`, formData.image);

        if (error) {
          console.error('Storage upload error:', error);
          throw new Error(error.message || 'Failed to upload file.');
        }

        console.log('Uploaded file data:', data);
        imageUrl = supabase.storage
          .from('testimonials')
          .getPublicUrl(data.path).data.publicUrl;

        console.log('Public URL:', imageUrl);
      }

      if (selectedId) {
        // Update existing testimonial
        const { error } = await supabase
          .from('testimonials')
          .update({
            name: formData.name,
            role: formData.role,
            image: imageUrl || undefined, // Use existing image URL if no new file is uploaded
            stars: formData.stars,
            feedback: formData.feedback,
          })
          .eq('id', selectedId);

        if (error) {
          console.error('Database update error:', error);
          throw new Error(error.message || 'Failed to update testimonial.');
        }

        alert('Testimonial updated successfully!');
      } else {
        // Insert new testimonial
        const { error } = await supabase.from('testimonials').insert([
          {
            name: formData.name,
            role: formData.role,
            image: imageUrl || '',
            stars: formData.stars,
            feedback: formData.feedback,
          },
        ]);

        if (error) {
          console.error('Database insertion error:', error);
          throw new Error(error.message || 'Failed to insert testimonial.');
        }

        alert('Testimonial uploaded successfully!');
      }

      // Reset form and refresh testimonials list
      setFormData({
        name: '',
        role: '',
        image: null,
        stars: 5,
        feedback: '',
      });
      setImagePreview(null);
      setSelectedId(null);
      const { data } = await supabase.from('testimonials').select('*');
      setTestimonials(data as Testimonial[]);
    } catch (error) {
      console.error('Raw error:', error); // Log the raw error object
      if (error instanceof Error) {
        alert(`Failed to process testimonial: ${error.message}`);
      } else {
        alert('Failed to process testimonial: Unknown error');
      }
    }
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-center">Management avis clients</h2>

      {/* Form */}
      <form onSubmit={handleSubmit} className="mb-8">
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Nom</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2 border rounded focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Role</label>
          <input
            type="text"
            name="role"
            value={formData.role}
            onChange={handleChange}
            className="w-full p-2 border rounded focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Image</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="w-full p-2 border rounded"
            required={!selectedId} // Required only when creating a new testimonial
          />
          {imagePreview && (
            <div className="mt-2">
              <Image
                src={imagePreview}
                alt="Preview"
                width={100}
                height={100}
                className="object-cover rounded-full mx-auto"
              />
            </div>
          )}
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Etoiles</label>
          <input
            type="number"
            name="stars"
            value={formData.stars}
            onChange={handleChange}
            min="1"
            max="5"
            className="w-full p-2 border rounded focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Avis</label>
          <textarea
            name="feedback"
            value={formData.feedback}
            onChange={handleChange}
            rows={4}
            className="w-full p-2 border rounded focus:outline-none focus:border-blue-500"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-[#305eb8] text-white px-4 py-2 rounded hover:bg-blue-700 transition w-full"
        >
          {selectedId ? 'Mise à jour' : 'Soumettre'}
        </button>
      </form>

      {/* Testimonials List */}
      <div>
        <h3 className="text-xl font-bold mb-4 text-center">Les avis existants</h3>
        {testimonials.length === 0 ? (
          <p className="text-center text-gray-500">Pas des avis existants</p>
        ) : (
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial) => (
              <li key={testimonial.id} className="bg-gray-50 p-4 rounded-lg shadow-md">
                <div className="flex flex-col items-center">
                  {testimonial.image ? (
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      width={100}
                      height={100}
                      className="w-24 h-24 rounded-full object-cover mb-4"
                    />
                  ) : (
                    <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center mb-4">
                      <span className="text-gray-500">Pas d&apos;image</span>
                    </div>
                  )}
                  <p className="font-semibold text-lg">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                  <p className="italic mt-2 text-center">{testimonial.feedback}</p>
                  <div className="flex gap-2 mt-4">
                    <button
                      onClick={() => handleEdit(testimonial)}
                      className="bg-green-500 text-white px-2 py-1 rounded hover:bg-green-600 transition"
                    >
                      Editer
                    </button>
                    <button
                      onClick={() => handleDelete(testimonial.id)}
                      className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600 transition"
                    >
                      Supprimer
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}