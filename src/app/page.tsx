"use client"
import Footer from "./Footer";
import Hero from "./Hero";
import Navbar from "./Navbar";


export default function Home() {
  return (
    <div className="min-h-screen bg-">
      <Navbar/>
      <Hero/>
      <Footer/>
    </div>
  );
}
