"use client"
import Footer from "./Footer";
import Hero from "./Hero";
import Map from "./Map";
import Navbar from "./Navbar";
import Services from "./Services";


export default function Home() {
  return (
    <div className="min-h-screen bg-">
      <Navbar/>
      <Hero/>
      <Services/>
      <Map/>
      <Footer/>
    </div>
  );
}
