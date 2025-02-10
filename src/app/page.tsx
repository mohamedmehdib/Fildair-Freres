"use client"; 
import Footer from "./Footer";
import Hero from "./Hero";
import Services from "./Services";
import Navbar from "./Navbar";
import dynamic from "next/dynamic";
import AboutUs from "./AboutUs";
import AboutAndGallery from "./Projects";

const Map = dynamic(() => import("./Map"), {
  ssr: false,
});

export default function Home() {
  return (
    <div className="min-h-screen bg-">
      <Navbar />
      <Hero />
      <Services />
      <AboutUs />
      <AboutAndGallery />
      <Map />
      <Footer />
    </div>
  );
}
