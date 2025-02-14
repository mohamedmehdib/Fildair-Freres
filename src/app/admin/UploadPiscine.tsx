import React, { useState } from 'react';
import { supabase } from '@/lib/supabase';

const UploadForm: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const [category, setCategory] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess('');

    if (!file || !category) {
      setError('Please fill all fields and select an image.');
      setLoading(false);
      return;
    }

    try {
      // Step 1: Upload the image to Supabase Storage
      const fileExt = file.name.split('.').pop();
      const fileName = `${Math.random()}.${fileExt}`; // Generate a unique file name
      const filePath = `${fileName}`;

      const { error: uploadError } = await supabase.storage
        .from('equipements') // Your bucket name
        .upload(filePath, file);

      if (uploadError) {
        throw uploadError;
      }

      // Step 2: Get the public URL of the uploaded file
      const { data: publicUrlData } = supabase.storage
        .from('equipements')
        .getPublicUrl(filePath);

      const imageUrl = publicUrlData.publicUrl;

      // Step 3: Insert the image URL and other data into the database
      const { error: dbError } = await supabase
        .from('equipements')
        .insert([{ src: imageUrl, category }]);

      if (dbError) {
        throw dbError;
      }

      setSuccess('Image uploaded successfully!');
      setFile(null);
      setCategory('');
    } catch (err) {
      setError(err.message || 'An error occurred while uploading the image.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md max-w-md mx-auto">
      <h2 className="text-xl font-semibold mb-4">Upload Image to equipements</h2>
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

        {/* Category Input */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Category</label>
          <input
            type="text"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md"
            required
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-[#274e9d] text-white p-2 rounded-md hover:bg-[#1a365d] disabled:bg-gray-400"
        >
          {loading ? 'Uploading...' : 'Upload'}
        </button>

        {/* Error and Success Messages */}
        {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
        {success && <p className="text-green-500 text-sm mt-2">{success}</p>}
      </form>
    </div>
  );
};

export default UploadForm;