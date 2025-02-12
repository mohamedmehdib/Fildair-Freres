import React from 'react'
import Navbar from '../Navbar'
import Footer from '../Footer'

export default function page() {
  return (
    <div>
        <Navbar/>
        <div className="h-[60vh] flex justify-center items-center bg-[#274e9d]">
          <div className="text-center">
            <h1 className={`text-6xl text-white font-medium w-2/3 mx-auto`}>
                Conception de piscine sur mesure
            </h1>
            <hr className="w-1/4 mx-auto border-2 border-white mt-4" />
          </div>
        </div>

        <Footer/>
    </div>
  )
}
