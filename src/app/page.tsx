"use client"; 
import Footer from "./Footer";
import Hero from "./Hero";
import Services from "./Services";
import Navbar from "./Navbar";
import dynamic from "next/dynamic";
import AboutUs from "./AboutUs";
import Projects from "./Projects";
import Contact from "./Contact";
import Testimonials from "./Testimonials";
import Clients from "./Clients";

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
      <Projects />
      <Testimonials />
      <Clients />
      <Contact />
      <Map />
      <Footer />
    </div>
  );
}
