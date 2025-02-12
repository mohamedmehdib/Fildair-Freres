"use client";

import { useAuth } from "@/lib/useAuth";
import SignOut from "./signout";
import Navbar from "../Navbar";
import Link from "next/link";
import Footer from "../Footer";
import FormPage from "./Form";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";


const Dashboard = () => {
  const { user } = useAuth();
  const [firstName, setFirstName] = useState<string | null>(null);

  useEffect(() => {
    const fetchUserName = async () => {
      if (user) {
        try {
          const { data, error } = await supabase
            .from("users")
            .select("name")
            .eq("email", user.email)
            .single();

          if (error) {
            console.error("Error fetching user data:", error.message);
            return;
          }

          if (data?.name) {
            const nameParts = data.name.split(" ");
            setFirstName(nameParts[0]);
          }
        } catch (err) {
          console.error("Error fetching user name:", err);
        }
      }
    };

    fetchUserName();
  }, [user]);

  return (
    <div className="bg-blue-50 min-h-screen">
      <Navbar/>
      <div className="h-[60vh] flex justify-center items-center bg-[#274e9d]">
          <div className="text-center">
            <h1 className={`text-6xl text-white font-medium`}>
              My Account
            </h1>
            <hr className="w-1/4 mx-auto border-2 border-white mt-4" />
          </div>
      </div>

      

      <main className="container mx-auto p-2 md:p-6">
        {user ? (
          <div className="bg-white p-3 md:p-8 rounded-lg md:shadow-xl">
            <div className="md:flex justify-between items-center mb-6">
              <h2 className="text-2xl font-semibold text-gray-800">
                Welcome, {firstName || "User"} !
              </h2>
              <SignOut />
            </div>
            <div>
              <FormPage />
            </div>
          </div>
        ) : (
          <div className="bg-white p-8 rounded-lg text-center">
            <p className="text-lg text-gray-600 mb-4">
              Please log in to access your account.
            </p>
            <div className="space-x-4">
              <Link
                href="/SignIn"
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
              >
                Sign In
              </Link>
              <Link
                href="/SignUp"
                className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 transition"
              >
                Sign Up
              </Link>
            </div>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default Dashboard;
