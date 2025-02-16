import { useEffect, useState } from "react";

export default function PopUp({ onDevisClick }: { onDevisClick: () => void }) {
  // State to control the visibility of the pop-up
  const [showPopup, setShowPopup] = useState(false);

  // Use useEffect to show the pop-up after 4 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 2000); // 4000ms = 4 seconds

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
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm relative">
            {/* Close Icon */}
            <button
              onClick={() => setShowPopup(false)}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
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
            <h2 className="text-xl font-bold mb-4">Welcome!</h2>
            <p className="mb-4">
              Thanks for visiting our website. Here's a special offer for you!
            </p>
            {/* Button to scroll to contact form and close the popup */}
            <button
              onClick={handleDevisClick} // Combined handler
              className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 mr-2"
            >
              Obtain a Devis
            </button>
          </div>
        </div>
      )}
    </>
  );
}