"use client";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import { LatLngExpression } from "leaflet";
import Link from "next/link";

const Map = () => {
  const position: LatLngExpression = [36.877076, 10.267437];

  const customIcon = new L.Icon({
    iconUrl: "https://unpkg.com/leaflet/dist/images/marker-icon.png",
    shadowUrl: "https://unpkg.com/leaflet/dist/images/marker-shadow.png",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41],
  });

  return (
    <div className={`flex flex-col items-center py-10`}>
      <div className='flex items-center justify-center py-5 space-x-4'>
        <hr className='bg-[#305eb8] h-1 w-10 sm:w-14' />
        <span className='text-[#305eb8] text-2xl sm:text-4xl font-semibold'>
          Visitez-nous !
        </span>
        <hr className='bg-[#305eb8] h-1 w-10 sm:w-14' />
      </div>

      <div className="relative w-full sm:w-3/4 lg:w-1/2 rounded-lg overflow-hidden px-4 sm:px-6 md:px-8">
        <MapContainer
          center={position}
          zoom={15}
          className="relative z-10 h-[250px] sm:h-[350px] md:h-[400px] lg:h-[500px] w-full"
        >
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          <Marker position={position} icon={customIcon}>
            <Popup>
              <Link
                href="https://maps.app.goo.gl/k4gyco8djFqH3KwYA"
                target="_blank"
                className="text-blue-600 hover:underline"
              >
                FILDAIR FRERES
              </Link>
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  );
};

export default Map;