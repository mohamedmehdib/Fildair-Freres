'use client';
import React, { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabase';
import Image from 'next/image';

interface FormData {
  id?: number;
  name: string;
  role: string;
  image: File | null;
  stars: number;
  feedback: string;
}

interface Testimonial {
  id: number;
  name: string;
  role: string;
  image: string | null;
  stars: number;
  feedback: string;
}

export default function UploadTestimonial() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    role: '',
    image: null,
    stars: 5,
    feedback: '',
  });
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);

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

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      if (file.size > 2 * 1024 * 1024) {
        alert('File size must be less than 2MB.');
        return;
      }
      setFormData((prev) => ({ ...prev, image: file }));
      const previewUrl = URL.createObjectURL(file);
      setImagePreview(previewUrl);
    }
  };

  const handleEdit = (testimonial: Testimonial) => {
    setSelectedId(testimonial.id);
    setFormData({
      id: testimonial.id,
      name: testimonial.name,
      role: testimonial.role,
      image: null,
      stars: testimonial.stars,
      feedback: testimonial.feedback,
    });
    setImagePreview(testimonial.image || null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleDelete = async (id: number) => {
    try {
      const { error } = await supabase.from('testimonials').delete().eq('id', id);
      if (error) throw error;
      setTestimonials((prev) => prev.filter((t) => t.id !== id));
      alert('Testimonial deleted successfully!');
    } catch (error) {
      console.error('Error deleting testimonial:', error);
      alert('Failed to delete testimonial.');
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

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
      let imageUrl = formData.image ? null : undefined;

      if (formData.image) {
        const { data, error } = await supabase.storage
          .from('testimonials')
          .upload(`images/${formData.image.name}`, formData.image);

        if (error) {
          console.error('Storage upload error:', error);
          throw new Error(error.message || 'Failed to upload file.');
        }

        imageUrl = supabase.storage
          .from('testimonials')
          .getPublicUrl(data.path).data.publicUrl;
      }

      if (selectedId) {
        const { error } = await supabase
          .from('testimonials')
          .update({
            name: formData.name,
            role: formData.role,
            image: imageUrl || undefined,
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
      console.error('Raw error:', error);
      if (error instanceof Error) {
        alert(`Failed to process testimonial: ${error.message}`);
      } else {
        alert('Failed to process testimonial: Unknown error');
      }
    }
  };

  return (
    <div>
      <h2>Manage Testimonials</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Name"
          required
        />
        <input
          type="text"
          name="role"
          value={formData.role}
          onChange={handleChange}
          placeholder="Role"
          required
        />
        <input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          required={!selectedId}
        />
        {imagePreview && (
          <Image
            src={imagePreview}
            alt="Preview"
            width={100}
            height={100}
            className="object-cover"
          />
        )}
        <input
          type="number"
          name="stars"
          value={formData.stars}
          onChange={handleChange}
          min="1"
          max="5"
          placeholder="Stars"
          required
        />
        <textarea
          name="feedback"
          value={formData.feedback}
          onChange={handleChange}
          placeholder="Feedback"
          required
        />
        <button type="submit">{selectedId ? 'Update' : 'Submit'}</button>
      </form>

      <ul>
        {testimonials.map((testimonial) => (
          <li key={testimonial.id}>
            {testimonial.image ? (
              <Image
                src={testimonial.image}
                alt={testimonial.name}
                width={50}
                height={50}
                className="object-cover rounded-full"
              />
            ) : (
              <p>Pas d&apos;image</p>
            )}
            <p>{testimonial.name}</p>
            <p>{testimonial.role}</p>
            <p>{testimonial.feedback}</p>
            <button onClick={() => handleEdit(testimonial)}>Edit</button>
            <button onClick={() => handleDelete(testimonial.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}