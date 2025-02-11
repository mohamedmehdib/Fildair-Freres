"use client";

import React, { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase"; // Adjust the import path as needed

interface Logo {
  id: number;
  src: string; // URL of the logo
  alt: string; // Alt text for the logo
  type: "client" | "partenaire"; // Type of logo (client or partenaire)
}

const UploadClient: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const [altText, setAltText] = useState<string>("");
  const [type, setType] = useState<"client" | "partenaire">("client"); // Default to "client"
  const [isUploading, setIsUploading] = useState<boolean>(false);
  const [logos, setLogos] = useState<Logo[]>([]); // List of all logos (clients and partenaires)
  const [editingLogo, setEditingLogo] = useState<Logo | null>(null); // Track the logo being edited

  // Fetch existing logos from Supabase
  useEffect(() => {
    const fetchLogos = async () => {
      try {
        const { data, error } = await supabase.from("logos").select("*");
        if (error) throw error;
        setLogos(data || []); // Fallback to an empty array if data is null
      } catch (error) {
        console.error("Error fetching logos:", error);
      }
    };

    fetchLogos();
  }, []);

  // Handle file input change
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  // Handle form submission (create or update)
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!altText) {
      alert("Please provide alt text.");
      return;
    }

    setIsUploading(true);

    try {
      let imageUrl: string | null = null;

      // If a new file is uploaded, upload it to Supabase Storage
      if (file) {
        const fileExt = file.name.split(".").pop();
        const fileName = `${Math.random()}.${fileExt}`;
        const { data: uploadData, error: uploadError } = await supabase.storage
          .from("logos") // Replace with your bucket name
          .upload(`logos/${fileName}`, file);

        if (uploadError) {
          throw uploadError;
        }

        // Get the public URL of the uploaded file
        const { data: publicUrlData } = supabase.storage
          .from("logos")
          .getPublicUrl(uploadData.path);
        imageUrl = publicUrlData.publicUrl;
      }

      if (editingLogo) {
        // Update existing logo
        const { error: updateError } = await supabase
          .from("logos")
          .update({
            src: imageUrl || editingLogo.src, // Use new URL if uploaded, otherwise keep the old one
            alt: altText,
            type: type,
          })
          .eq("id", editingLogo.id);

        if (updateError) {
          throw updateError;
        }

        alert("Logo updated successfully!");
      } else {
        // Insert new logo
        if (!file) {
          alert("Please select a file for a new logo.");
          return;
        }

        const { error: insertError } = await supabase.from("logos").insert([
          {
            src: imageUrl!, // Use the new URL
            alt: altText,
            type: type,
          },
        ]);

        if (insertError) {
          throw insertError;
        }

        alert("Logo uploaded successfully!");
      }

      // Refresh the list of logos
      const { data: newLogos, error: fetchError } = await supabase
        .from("logos")
        .select("*");
      if (fetchError) throw fetchError;
      setLogos(newLogos || []);

      // Reset form
      setFile(null);
      setAltText("");
      setType("client");
      setEditingLogo(null);
    } catch (error) {
      console.error("Error processing logo:", error);
      alert("Failed to process logo.");
    } finally {
      setIsUploading(false);
    }
  };

  // Handle logo deletion
  const handleDelete = async (id: number) => {
    try {
      const { error: deleteError } = await supabase
        .from("logos")
        .delete()
        .eq("id", id);

      if (deleteError) {
        throw deleteError;
      }

      // Refresh the list of logos
      const { data: newLogos, error: fetchError } = await supabase
        .from("logos")
        .select("*");
      if (fetchError) throw fetchError;
      setLogos(newLogos || []);

      alert("Logo deleted successfully!");
    } catch (error) {
      console.error("Error deleting logo:", error);
      alert("Failed to delete logo.");
    }
  };

  // Handle logo edit
  const handleEdit = (logo: Logo) => {
    setEditingLogo(logo);
    setAltText(logo.alt);
    setType(logo.type);

    // Smooth scroll to the top of the page
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Smooth scrolling animation
    });
  };

  // Filter logos by type (client or partenaire)
  const clientLogos = logos.filter((logo) => logo.type === "client");
  const partenaireLogos = logos.filter((logo) => logo.type === "partenaire");

  return (
    <div className="p-4 sm:p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-xl sm:text-2xl font-bold mb-4 text-center">
        {editingLogo ? "Edit Logo" : "Upload New Logo"}
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Logo File</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="w-full p-2 border rounded"
            required={!editingLogo} // Only required for new logos
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Alt Text</label>
          <input
            type="text"
            value={altText}
            onChange={(e) => setAltText(e.target.value)}
            className="w-full p-2 border rounded focus:outline-none focus:border-blue-500"
            placeholder="Enter alt text"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Type</label>
          <select
            value={type}
            onChange={(e) => setType(e.target.value as "client" | "partenaire")}
            className="w-full p-2 border rounded focus:outline-none focus:border-blue-500"
            required
          >
            <option value="client">Client</option>
            <option value="partenaire">Partenaire</option>
          </select>
        </div>
        <button
          type="submit"
          disabled={isUploading}
          className="bg-[#305eb8] text-white px-4 py-2 rounded hover:bg-blue-700 transition w-full"
        >
          {isUploading
            ? "Processing..."
            : editingLogo
            ? "Update"
            : "Upload"}
        </button>
      </form>

      {/* List of existing clients */}
      <div className="mt-8">
        <h3 className="text-lg sm:text-xl font-bold mb-4 text-center">Clients</h3>
        {clientLogos.length === 0 ? (
          <p className="text-center text-gray-500">No clients found.</p>
        ) : (
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {clientLogos.map((logo) => (
              <li
                key={logo.id}
                className="bg-gray-50 p-4 rounded-lg shadow-md flex flex-col items-center"
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="h-16 w-auto mb-4"
                />
                <p className="text-sm text-gray-500">{logo.alt}</p>
                <div className="flex gap-2 mt-2">
                  <button
                    onClick={() => handleEdit(logo)}
                    className="bg-green-500 text-white px-2 py-1 rounded hover:bg-green-600 transition"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(logo.id)}
                    className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600 transition"
                  >
                    Delete
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* List of existing partenaires */}
      <div className="mt-8">
        <h3 className="text-lg sm:text-xl font-bold mb-4 text-center">Partenaires</h3>
        {partenaireLogos.length === 0 ? (
          <p className="text-center text-gray-500">No partenaires found.</p>
        ) : (
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {partenaireLogos.map((logo) => (
              <li
                key={logo.id}
                className="bg-gray-50 p-4 rounded-lg shadow-md flex flex-col items-center"
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="h-16 w-auto mb-4"
                />
                <p className="text-sm text-gray-500">{logo.alt}</p>
                <div className="flex gap-2 mt-2">
                  <button
                    onClick={() => handleEdit(logo)}
                    className="bg-green-500 text-white px-2 py-1 rounded hover:bg-green-600 transition"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(logo.id)}
                    className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600 transition"
                  >
                    Delete
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default UploadClient;