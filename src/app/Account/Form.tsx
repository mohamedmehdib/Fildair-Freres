"use client";
import React, { useEffect, useState } from "react";
import { useAuth } from "@/lib/useAuth";
import { supabase } from "@/lib/supabase";
import { loadTranslations } from "@/utils/loadTranslations";

const FormPage: React.FC = () => {
  const { user } = useAuth();
  const [email, setEmail] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [address, setAddress] = useState<string>("");
  const [fetching, setFetching] = useState<boolean>(true);
  const [translations, setTranslations] = useState<{
    form: {
      heading: string;
      loading: string;
      sign_in_prompt: string;
      labels: {
        email: string;
        name: string;
        phone: string;
        address: string;
      };
      update_button: string;
      update_success: string;
    };
  }>({
    form: {
      heading: "Personal Information",
      loading: "Loading your information...",
      sign_in_prompt: "You need to sign in to access this form.",
      labels: {
        email: "Email",
        name: "Name",
        phone: "Phone",
        address: "Address",
      },
      update_button: "Update",
      update_success: "Your information has been updated successfully!",
    },
  });

  useEffect(() => {
    // Detect the user's browser language
    const userLanguage = navigator.language || "fr"; // Default to French
    const loadedTranslations = loadTranslations(userLanguage);
    setTranslations(loadedTranslations);
  }, []);

  const handleUpdate = async () => {
    try {
      if (!user) {
        console.error("User not authenticated.");
        return;
      }

      const { error } = await supabase
        .from("users")
        .update({
          name: name.trim(),
          phone: phone.trim(),
          address: address.trim(),
        })
        .eq("email", user.email);

      if (error) throw error;

      alert(translations.form.update_success);
    } catch (err: unknown) {
      if (err instanceof Error) {
        console.error("Error updating user data:", err.message);
      } else {
        console.error("Unknown error occurred while updating user data");
      }
    }
  };

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        if (!user) {
          console.warn("User not authenticated.");
          return;
        }

        const { data, error } = await supabase
          .from("users")
          .select("email, name, phone, address")
          .eq("email", user.email)
          .single();

        if (error) throw error;

        if (data) {
          setEmail(data.email || "");
          setName(data.name || "");
          setPhone(data.phone || "");
          setAddress(data.address || "");
        }
      } catch (err: unknown) {
        if (err instanceof Error) {
          console.error("Error fetching user data:", err.message);
        } else {
          console.error("Unknown error occurred while fetching user data");
        }
      } finally {
        setFetching(false);
      }
    };

    if (user) {
      fetchUserData();
    } else {
      setFetching(false);
    }
  }, [user]);

  if (fetching) {
    return <p>{translations.form.loading}</p>;
  }

  if (!user) {
    return <p>{translations.form.sign_in_prompt}</p>;
  }

  return (
    <div className="w-full max-w-md mx-auto bg-white p-6 rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold mb-4">{translations.form.heading}</h1>
      <div className="space-y-4">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            {translations.form.labels.email}
          </label>
          <input
            type="email"
            id="email"
            value={email}
            readOnly
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm bg-gray-100 text-gray-700 focus:outline-none cursor-not-allowed"
          />
        </div>
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            {translations.form.labels.name}
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
            {translations.form.labels.phone}
          </label>
          <input
            type="text"
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
        <div>
          <label htmlFor="address" className="block text-sm font-medium text-gray-700">
            {translations.form.labels.address}
          </label>
          <input
            type="text"
            id="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
      </div>
      <button
        onClick={handleUpdate}
        className="mt-6 w-full bg-[#274e9d] border-2 border-[#274e9d] text-white py-2 px-4 rounded-md hover:bg-white hover:text-[#274e9d] duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
      >
        {translations.form.update_button}
      </button>
    </div>
  );
};

export default FormPage;