import { useEffect, useState } from "react";

export default function PopUp({ onDevisClick }: { onDevisClick: () => void }) {
  // State to control whether the popup is open
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  // Automatically open the popup after 10 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsPopupOpen(true); // Open the popup after 10 seconds
    }, 10000); // 10 seconds

    return () => clearTimeout(timer);
  }, []);

  // Handler for the "Obtenir un devis" button
  const handleDevisClick = () => {
    onDevisClick(); // Trigger the scroll-to-contact logic
    setIsPopupOpen(false); // Close the popup
  };

  return (
    <>
      {/* Fixed Button */}
      <button
        onClick={() => setIsPopupOpen(true)} // Open the popup when clicked
        className="fixed bottom-4 right-4 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 focus:outline-none shadow-lg z-50"
      >
        Obtenir un devis
      </button>

      {/* Full Popup */}
      {isPopupOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div
            className="bg-white p-4 sm:p-6 rounded-lg shadow-lg max-w-[90%] sm:max-w-sm relative"
            style={{ width: "100%" }}
          >
            {/* Close Icon */}
            <button
              onClick={() => setIsPopupOpen(false)}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 focus:outline-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 sm:h-6 sm:w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {/* Title */}
            <h2 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">
              Bienvenue!
            </h2>

            {/* Description */}
            <p className="text-sm sm:text-base mb-4">
              Merci de visiter notre site Web. Voici une offre spéciale pour
              vous !
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-2">
              {/* Obtain a Devis Button */}
              <button
                onClick={handleDevisClick} // Combined handler
                className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 focus:outline-none"
              >
                Obtenir un devis
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}