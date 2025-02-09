"use client"; 
import Footer from "./Footer";
import Hero from "./Hero";
import Services from "./Services";
import Navbar from "./Navbar";
import dynamic from "next/dynamic";

// Dynamically import the Map component without SSR
const Map = dynamic(() => import("./Map"), {
  ssr: false, // This disables SSR for the Map component
});

export default function Home() {
  return (
    <div className="min-h-screen bg-">
      <Navbar />
      <Hero />
      <Services />
      <Map />
      <Footer />
    </div>
  );
}
