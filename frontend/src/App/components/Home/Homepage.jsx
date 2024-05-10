import React, { useState, useEffect } from "react";
import image1 from "./assets/image1.jpg";
import image2 from "./assets/image2.jpg";
import image3 from "./assets/image3.jpg";

function Homepage() {
  // Define an array with your imported images
  const images = [image1, image2, image3];

  // Initialize state to keep track of the current image index
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Function to toggle between images
  const toggleImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Use useEffect to automatically toggle images every 3 seconds
  useEffect(() => {
    const interval = setInterval(toggleImage, 3000); // Change image every 3 seconds

    // Clean up the interval when the component unmounts
    return () => clearInterval(interval);
  }, []); // Empty dependency array to run the effect only once on component mount

  return (
    <div
      className="min-h-screen bg-cover bg-center"
      style={{
        backgroundImage: `url(${images[currentImageIndex]})`,
      }}
    >
      <div className="px-6 mx-auto">
        <div className="flex flex-wrap -m-4">
          <div className="p-4 md:w-1/3">
            <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
              <div className="flex items-center mb-3">
                <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-[#070be6] text-white flex-shrink-0">
                  {/* Your SVG code for icon */}
                </div>
                <h2 className="text-[#070be6] text-lg title-font font-medium">
                  Our Vision
                </h2>
              </div>
              <div className="flex-grow">
                <p className="leading-relaxed text-base">
                  Positive, caring relationships based on trust and respect, are
                  at the heart of our philosophy.
                </p>
              </div>
            </div>
          </div>
          <div className="p-4 md:w-1/3">
            <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
              <div className="flex items-center mb-3">
                <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-[#070be6] text-white flex-shrink-0">
                  {/* Your SVG code for icon */}
                </div>
                <h2 className="text-[#070be6] text-lg title-font font-medium">
                  Mission
                </h2>
              </div>
              <div className="flex-grow">
                <p className="leading-relaxed text-base">
                  At InvolvEd, we believe that every day is a learning day and
                  that learning is all around us. As well as being a place of
                  learning, we pride ourselves on ensuring that all children are
                  coming in to a loving, caring environment where they are
                  valued and listened to.
                </p>
              </div>
            </div>
          </div>
          <div className="p-4 md:w-1/3">
            <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
              <div className="flex items-center mb-3">
                <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-[#070be6] text-white flex-shrink-0">
                  {/* Your SVG code for icon */}
                </div>
                <h2 className="text-#070be6] text-lg title-font font-medium">
                  Motto
                </h2>
              </div>
              <div className="flex-grow">
                <p className="leading-relaxed text-base">
                  To transform the lives of the children and families we work
                  with, through creating a nursery which feels like home with an
                  extended and supportive family environment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
