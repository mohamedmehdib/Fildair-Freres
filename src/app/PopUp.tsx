import { useEffect, useState } from "react";

export default function PopUp({ onDevisClick }: { onDevisClick: () => void }) {
  // State to control the visibility of the pop-up
  const [showPopup, setShowPopup] = useState(false);

  // Use useEffect to show the pop-up after 2 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 2000); // 2000ms = 2 seconds

    // Cleanup the timer when the component unmounts
    return () => clearTimeout(timer);
  }, []);

  // Handler for the "Obtain a Devis" button
  const handleDevisClick = () => {
    onDevisClick(); // Trigger the scroll-to-contact logic
    setShowPopup(false); // Close the pop-up
  };

  return (
    <>
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          {/* Responsive container */}
          <div
            className="bg-white p-4 sm:p-6 rounded-lg shadow-lg max-w-[90%] sm:max-w-sm relative"
            style={{ width: "100%" }}
          >
            {/* Close Icon */}
            <button
              onClick={() => setShowPopup(false)}
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
              Welcome!
            </h2>

            {/* Description */}
            <p className="text-sm sm:text-base mb-4">
              Thanks for visiting our website. Here&apos;s a special offer for
              you!
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-2">
              {/* Obtain a Devis Button */}
              <button
                onClick={handleDevisClick} // Combined handler
                className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 focus:outline-none"
              >
                Obtain a Devis
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}